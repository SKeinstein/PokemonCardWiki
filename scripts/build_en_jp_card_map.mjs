/**
 * build_en_jp_card_map.mjs
 *
 * Reads deck_lists_raw.json (or _ck_deck_done.json) for unique EN card IDs,
 * then fetches limitlesstcg card pages to extract JP print info.
 *
 * Fallback: if neither file exists, fetches deck detail pages from
 * _ck_deck_ids.json (bootstrapping) with --max-decks limit.
 *
 * Output: data/en_jp_card_map.json
 * Format: { "TWM/130": { "jpSet": "SV6", "jpNumber": "081" }, ... }
 *
 * Usage:
 *   node build_en_jp_card_map.mjs [--max-decks 200] [--force-refetch]
 */

import { fetch } from 'undici';
import * as cheerio from 'cheerio';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '../data');

const DECK_LISTS_PATH   = join(DATA_DIR, 'deck_lists_raw.json');
const DECK_DONE_PATH    = join(DATA_DIR, '_ck_deck_done.json');
const DECK_IDS_PATH     = join(DATA_DIR, '_ck_deck_ids.json');
const SET_NAME_MAP_PATH = join(DATA_DIR, 'set_name_map.json');
const OUTPUT_PATH       = join(DATA_DIR, 'en_jp_card_map.json');
const CHECKPOINT_PATH   = join(DATA_DIR, '_ck_en_jp_map.json');

const BASE_URL = 'https://limitlesstcg.com';
const DELAY_MS = 1200; // 1.2s between requests

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8',
};

// limitlesstcg JP set codes that differ from our DB set_codes
const CODE_REMAP = {
  'SVP': 'SV-P',
};

// Parse CLI args
const args = process.argv.slice(2);
const maxDecks = parseInt(args[args.indexOf('--max-decks') + 1] || '200', 10);
const forceRefetch = args.includes('--force-refetch');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchHtml(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      console.error(`  [retry ${i+1}/${retries}] ${url} → ${err.message}`);
      if (i < retries - 1) await sleep(DELAY_MS * (i + 2));
    }
  }
  return null;
}

/** Parse deck detail page (same structure as fetch_deck_lists.mjs) */
function parseDeckDetail(html) {
  const $ = cheerio.load(html);
  const cards = [];
  $('.decklist-card[data-set]').each((_, el) => {
    const $el = $(el);
    const setCode = $el.attr('data-set') || '';
    const number  = $el.attr('data-number') || '';
    if (setCode && number) cards.push({ setCode, number });
  });
  return cards;
}

/** Parse card page to extract JP prints (SV era only) */
function parseJpPrints(html) {
  const $ = cheerio.load(html);
  const prints = [];
  let inJpSection = false;

  $('table.card-prints-versions tr').each((_, row) => {
    const $row = $(row);
    const $th = $row.find('th');
    if ($th.length && $th.text().includes('JP. Prints')) {
      inJpSection = true;
      return;
    }
    if (!inJpSection) return;

    const $link = $row.find('a[href*="/cards/jp/"]');
    if (!$link.length) return;

    const href = $link.attr('href') || '';
    const m = href.match(/\/cards\/jp\/([^/]+)\/(\d+)/);
    if (!m) return;

    const rawCode = m[1];
    const jpSet = CODE_REMAP[rawCode] || rawCode;
    const jpNumber = String(parseInt(m[2], 10)).padStart(3, '0');

    // Clean set name text (remove trailing #NN)
    const rawText = $link.clone().find('.prints-table-card-number').remove().end().text();
    const setName = rawText.replace(/\s+/g, ' ').trim();

    prints.push({ jpSet, jpNumber, setName });
  });

  return prints;
}

/** Check if a JP set code is SV era (H/I/J generation) */
function isSvEra(setCode) {
  return setCode.startsWith('SV');
}

/** Phase 1: collect unique EN card IDs from available deck data */
async function collectEnCardIds() {
  // Try deck_lists_raw.json first
  if (existsSync(DECK_LISTS_PATH)) {
    console.log(`[source] Reading ${DECK_LISTS_PATH}`);
    const decks = JSON.parse(readFileSync(DECK_LISTS_PATH, 'utf8'));
    const ids = new Set();
    for (const deck of decks) {
      for (const card of (deck.cards || [])) {
        ids.add(`${card.setCode}/${card.number}`);
      }
    }
    console.log(`  ${ids.size} unique EN card IDs from ${decks.length} decks`);
    return [...ids];
  }

  // Try _ck_deck_done.json
  if (existsSync(DECK_DONE_PATH)) {
    console.log(`[source] Reading ${DECK_DONE_PATH}`);
    const decks = JSON.parse(readFileSync(DECK_DONE_PATH, 'utf8'));
    const ids = new Set();
    for (const deck of decks) {
      for (const card of (deck.cards || [])) {
        ids.add(`${card.setCode}/${card.number}`);
      }
    }
    console.log(`  ${ids.size} unique EN card IDs from ${decks.length} decks`);
    return [...ids];
  }

  // Bootstrap: fetch deck detail pages from _ck_deck_ids.json
  if (!existsSync(DECK_IDS_PATH)) {
    throw new Error(`No data source found. Run fetch_deck_lists.mjs first.`);
  }

  const ckData = JSON.parse(readFileSync(DECK_IDS_PATH, 'utf8'));
  const stubs = (ckData.entries || ckData).slice(0, maxDecks);
  console.log(`[bootstrap] Fetching ${stubs.length} deck detail pages from _ck_deck_ids.json`);
  console.log(`  (use --max-decks N to change; generate deck_lists_raw.json for full run)\n`);

  const ids = new Set();
  const deckDetailsCkPath = join(DATA_DIR, '_ck_en_jp_deck_details.json');
  let doneDetails = [];
  if (existsSync(deckDetailsCkPath)) {
    doneDetails = JSON.parse(readFileSync(deckDetailsCkPath, 'utf8'));
    console.log(`  [resume] ${doneDetails.length} deck details already fetched`);
    for (const d of doneDetails) d.cards.forEach(c => ids.add(`${c.setCode}/${c.number}`));
  }
  const doneDeckIds = new Set(doneDetails.map(d => d.id));

  for (let i = 0; i < stubs.length; i++) {
    const stub = stubs[i];
    if (doneDeckIds.has(stub.id)) continue;

    const url = `${BASE_URL}/decks/list/${stub.id}`;
    process.stdout.write(`  [${i+1}/${stubs.length}] ${stub.archetype} ...`);
    await sleep(DELAY_MS);

    const html = await fetchHtml(url);
    if (!html) { process.stdout.write(' SKIP\n'); continue; }

    const cards = parseDeckDetail(html);
    cards.forEach(c => ids.add(`${c.setCode}/${c.number}`));
    process.stdout.write(` ${cards.length} cards (${ids.size} unique total)\n`);

    doneDetails.push({ id: stub.id, cards });
    if ((i + 1) % 25 === 0) {
      writeFileSync(deckDetailsCkPath, JSON.stringify(doneDetails, null, 2), 'utf8');
      console.log(`    [checkpoint] ${doneDetails.length} decks saved`);
    }
  }
  writeFileSync(deckDetailsCkPath, JSON.stringify(doneDetails, null, 2), 'utf8');
  console.log(`\n  ${ids.size} unique EN card IDs from ${doneDetails.length} decks\n`);
  return [...ids];
}

/** Phase 2: fetch card pages and build JP map */
async function buildMap(enCardIds) {
  const setNameMap = existsSync(SET_NAME_MAP_PATH)
    ? JSON.parse(readFileSync(SET_NAME_MAP_PATH, 'utf8'))
    : {};

  // Load checkpoint
  let ckMap = {};
  let ckErrors = [];
  if (!forceRefetch && existsSync(CHECKPOINT_PATH)) {
    const ck = JSON.parse(readFileSync(CHECKPOINT_PATH, 'utf8'));
    ckMap = ck.map || {};
    ckErrors = ck.errors || [];
    console.log(`[resume] ${Object.keys(ckMap).length} already mapped, ${ckErrors.length} errors`);
  }

  const pending = enCardIds.filter(id => !ckMap[id] && !ckErrors.includes(id));
  console.log(`Fetching ${pending.length} / ${enCardIds.length} card pages ...\n`);

  // Track discovered set name → code mappings
  const discoveredNames = {};
  let mapped = 0;
  let noJpPrints = 0;
  let httpErrors = 0;

  for (let i = 0; i < pending.length; i++) {
    const enId = pending[i];
    const [setCode, number] = enId.split('/');
    const url = `${BASE_URL}/cards/${setCode}/${number}`;

    process.stdout.write(`  [${i+1}/${pending.length}] ${enId} ...`);
    await sleep(DELAY_MS);

    const html = await fetchHtml(url);
    if (!html) {
      process.stdout.write(' HTTP ERROR\n');
      ckErrors.push(enId);
      httpErrors++;
    } else {
      const prints = parseJpPrints(html);
      const svPrints = prints.filter(p => isSvEra(p.jpSet));

      // Collect discovered set names
      for (const p of prints) {
        if (isSvEra(p.jpSet) && p.setName && !discoveredNames[p.setName]) {
          discoveredNames[p.setName] = p.jpSet;
        }
      }

      if (svPrints.length > 0) {
        const canonical = svPrints[0]; // first SV-era print = primary
        ckMap[enId] = { jpSet: canonical.jpSet, jpNumber: canonical.jpNumber };
        mapped++;
        process.stdout.write(` → ${canonical.jpSet}/${canonical.jpNumber}`);
        if (svPrints.length > 1) process.stdout.write(` (+${svPrints.length - 1})`);
        process.stdout.write('\n');
      } else {
        ckErrors.push(enId);
        noJpPrints++;
        const nonSv = prints.map(p => `${p.jpSet}/${p.jpNumber}`).join(', ');
        process.stdout.write(` no SV print${nonSv ? ' (non-SV: ' + nonSv + ')' : ''}\n`);
      }
    }

    // Checkpoint every 50 cards
    if ((i + 1) % 50 === 0) {
      writeFileSync(CHECKPOINT_PATH, JSON.stringify({ map: ckMap, errors: ckErrors }, null, 2), 'utf8');
      console.log(`  [checkpoint] ${Object.keys(ckMap).length} mapped`);
    }
  }

  // Final checkpoint save
  writeFileSync(CHECKPOINT_PATH, JSON.stringify({ map: ckMap, errors: ckErrors }, null, 2), 'utf8');

  return { map: ckMap, errors: ckErrors, discoveredNames, mapped, noJpPrints, httpErrors };
}

async function main() {
  console.log('=== build_en_jp_card_map.mjs ===');
  console.log(`Max decks (bootstrap): ${maxDecks}`);
  console.log(`Force refetch:         ${forceRefetch}`);
  console.log(`Output:                ${OUTPUT_PATH}\n`);

  // Phase 1: get unique EN card IDs
  console.log('=== Phase 1: Collecting unique EN card IDs ===');
  const enCardIds = await collectEnCardIds();

  // Phase 2: fetch card pages
  console.log('=== Phase 2: Fetching card pages for JP prints ===');
  const { map, errors, discoveredNames, mapped, noJpPrints, httpErrors } = await buildMap(enCardIds);

  // Write output
  writeFileSync(OUTPUT_PATH, JSON.stringify(map, null, 2), 'utf8');

  // Compare set_name_map.json with discovered names
  const setNameMap = existsSync(SET_NAME_MAP_PATH)
    ? JSON.parse(readFileSync(SET_NAME_MAP_PATH, 'utf8'))
    : {};
  const unknownNames = Object.entries(discoveredNames)
    .filter(([name]) => !setNameMap[name] && !name.startsWith('_'));

  // Summary
  const total = enCardIds.length;
  const successRate = ((mapped / (mapped + noJpPrints + httpErrors)) * 100).toFixed(1);

  console.log('\n=== Summary ===');
  console.log(`Total unique EN card IDs : ${total}`);
  console.log(`Mapped to JP             : ${mapped} (${successRate}%)`);
  console.log(`No SV-era JP prints      : ${noJpPrints}`);
  console.log(`HTTP errors              : ${httpErrors}`);
  console.log(`Output                   : ${OUTPUT_PATH}`);

  if (unknownNames.length > 0) {
    console.log('\n--- Newly discovered set names (add to set_name_map.json) ---');
    for (const [name, code] of unknownNames.sort()) {
      console.log(`  "${name}": "${code}"`);
    }
  }

  if (errors.length > 0) {
    console.log('\n--- Unmapped EN cards ---');
    errors.slice(0, 30).forEach(id => console.log(`  ${id}`));
    if (errors.length > 30) console.log(`  ... and ${errors.length - 30} more`);
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
