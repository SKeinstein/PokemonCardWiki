/**
 * build_deck_index.mjs
 *
 * Inputs:
 *   data/deck_lists_raw.json  (preferred; falls back to data/_ck_deck_done.json)
 *   data/en_jp_card_map.json  EN setCode/number → { jpSet, jpNumber }
 *   data/card_variants.json   JP set_code + set_number → master_id
 *   data/master_cards.json    master_id validation set
 *
 * Output: data/deck_index.json
 * Format: { "<master_id>": [{ archetype, count, total, share, url }] }
 *   count = number of decks in that archetype containing the card (any copy)
 *   total = total number of decks in that archetype
 *   share = count / total * 100  (1 decimal)
 *   url   = https://limitlesstcg.com/decks/list/<most-recent-deck-id>
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '../data');

// ── Load inputs ──────────────────────────────────────────────────────────────

const rawPath = join(DATA, 'deck_lists_raw.json');
const ckPath  = join(DATA, '_ck_deck_done.json');
const deckSrc = existsSync(rawPath) ? rawPath : ckPath;
console.log(`Loading decks from: ${deckSrc}`);
const rawDecks = JSON.parse(readFileSync(deckSrc, 'utf8'));
// Deduplicate by id (keep last occurrence = most recently fetched)
const deckMap = new Map();
for (const d of rawDecks) deckMap.set(d.id, d);
const decks = [...deckMap.values()];
console.log(`  ${rawDecks.length} raw → ${decks.length} after dedup (${rawDecks.length - decks.length} dupes removed)`);

const enJpMap  = JSON.parse(readFileSync(join(DATA, 'en_jp_card_map.json'), 'utf8'));
const variants = JSON.parse(readFileSync(join(DATA, 'card_variants.json'), 'utf8'));
const masters  = JSON.parse(readFileSync(join(DATA, 'master_cards.json'),  'utf8'));

// ── Build JP lookup: "SV6/079" → master_id ───────────────────────────────────

const jpLookup = new Map(); // key: "<set_code>/<padded-num>"  value: master_id

for (const v of variants) {
  const sc = v.set_code;
  const sn = v.set_number;          // e.g. "079/101"
  const mid = v.master_id;
  if (!sc || !sn || !mid) continue;

  const numPart = sn.includes('/') ? sn.split('/')[0] : sn; // "079"
  jpLookup.set(`${sc}/${numPart}`, mid);

  // Also store with leading zeros stripped for robustness
  const numStripped = String(parseInt(numPart, 10));
  jpLookup.set(`${sc}/${numStripped}`, mid);
}

console.log(`  JP lookup entries: ${jpLookup.size}`);

// ── Build master_id validation set ───────────────────────────────────────────

const masterSet = new Set(masters.map(m => m.master_id));
console.log(`  Master cards: ${masterSet.size}`);

// ── Resolve EN card → master_id ──────────────────────────────────────────────

function resolveCard(setCode, number) {
  const enKey = `${setCode}/${number}`;
  const jp = enJpMap[enKey];
  if (!jp) return null;

  const jpNum = jp.jpNumber;                       // "079"
  const jpKey = `${jp.jpSet}/${jpNum}`;
  return jpLookup.get(jpKey)
      ?? jpLookup.get(`${jp.jpSet}/${String(parseInt(jpNum, 10))}`)
      ?? null;
}

// ── Aggregate ────────────────────────────────────────────────────────────────
//
// archetypeDecks[archetype]  = Set of deck IDs
// cardArchetype[master_id][archetype] = { count, latestDeckId, latestDate }

const archetypeDecks  = {};  // archetype → Set<id>
const cardArchetype   = {};  // master_id → { [archetype]: { count, latestDeckId, latestDate } }

let totalLookups  = 0;
let unresolvedEN  = 0;  // not in en_jp_card_map
let unresolvedJP  = 0;  // in en_jp_map but not in card_variants
let unresolvedSet = new Set();

for (const deck of decks) {
  const archetype = deck.archetype || '(unknown)';
  const deckId    = deck.id;
  const deckDate  = deck.date || '';

  if (!archetypeDecks[archetype]) archetypeDecks[archetype] = new Set();
  archetypeDecks[archetype].add(deckId);

  // Track which master_ids appear in this deck (count once per deck)
  const seenInDeck = new Set();

  for (const card of (deck.cards || [])) {
    totalLookups++;
    const mid = resolveCard(card.setCode, card.number);

    if (!mid) {
      const enKey = `${card.setCode}/${card.number}`;
      const jp = enJpMap[enKey];
      if (!jp) {
        unresolvedEN++;
        unresolvedSet.add(enKey);
      } else {
        unresolvedJP++;
        unresolvedSet.add(`${jp.jpSet}/${jp.jpNumber}`);
      }
      continue;
    }

    if (!cardArchetype[mid]) cardArchetype[mid] = {};
    if (!cardArchetype[mid][archetype]) {
      cardArchetype[mid][archetype] = { count: 0, latestDeckId: deckId, latestDate: deckDate };
    }

    if (!seenInDeck.has(mid)) {
      seenInDeck.add(mid);
      cardArchetype[mid][archetype].count++;
    }

    // Track latest deck for URL
    if (deckDate > cardArchetype[mid][archetype].latestDate) {
      cardArchetype[mid][archetype].latestDeckId = deckId;
      cardArchetype[mid][archetype].latestDate   = deckDate;
    }
  }
}

// Precompute archetype totals
const archetypeTotals = {};
for (const [arch, ids] of Object.entries(archetypeDecks)) {
  archetypeTotals[arch] = ids.size;
}

// ── Build output ──────────────────────────────────────────────────────────────

const deckIndex = {};

for (const [masterId, archetypeData] of Object.entries(cardArchetype)) {
  deckIndex[masterId] = Object.entries(archetypeData)
    .map(([archetype, data]) => {
      const total = archetypeTotals[archetype] || 1;
      const share = Math.round((data.count / total) * 1000) / 10;
      return {
        archetype,
        count: data.count,
        total,
        share,
        url: `https://limitlesstcg.com/decks/list/${data.latestDeckId}`,
      };
    })
    .sort((a, b) => b.share - a.share || b.count - a.count);
}

// ── Write output ──────────────────────────────────────────────────────────────

const outPath = join(DATA, 'deck_index.json');
writeFileSync(outPath, JSON.stringify(deckIndex, null, 2), 'utf8');

// ── Summary ───────────────────────────────────────────────────────────────────

const resolvedMasterIds = Object.keys(deckIndex).length;
const totalMasterIds    = masterSet.size;
const uniqueArchetypes  = Object.keys(archetypeTotals).length;

console.log('\n=== Summary ===');
console.log(`Total deck entries      : ${decks.length}`);
console.log(`Unique archetypes       : ${uniqueArchetypes}`);
console.log(`Total card lookups      : ${totalLookups}`);
console.log(`Unresolved (no EN map)  : ${unresolvedEN}`);
console.log(`Unresolved (no JP var.) : ${unresolvedJP}`);
console.log(`Resolved master_ids     : ${resolvedMasterIds} / ${totalMasterIds}`);
console.log(`Output                  : ${outPath}`);

// Top archetypes by deck count
const topArchetypes = Object.entries(archetypeTotals)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

console.log('\nTop archetypes by deck count:');
for (const [name, count] of topArchetypes) {
  console.log(`  ${String(count).padStart(5)}  ${name}`);
}

// Top cards by total appearances across all archetypes
const cardTotals = Object.entries(deckIndex).map(([mid, entries]) => ({
  mid,
  totalCount: entries.reduce((s, e) => s + e.count, 0),
})).sort((a, b) => b.totalCount - a.totalCount).slice(0, 15);

console.log('\nTop cards by deck appearances:');
for (const { mid, totalCount } of cardTotals) {
  console.log(`  ${String(totalCount).padStart(5)}  ${mid}`);
}

// Sample unresolved keys
if (unresolvedSet.size > 0) {
  const samples = [...unresolvedSet].slice(0, 20);
  console.log(`\nSample unresolved keys (${unresolvedSet.size} total):`);
  for (const k of samples) console.log(`  ${k}`);
}
