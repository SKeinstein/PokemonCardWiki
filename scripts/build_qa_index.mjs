/**
 * build_qa_index.mjs
 *
 * Generates data/qa_index.json — a compact replacement for qa_card_map.json.
 *
 * Instead of copying Q&A entry objects into every card's record (which caused
 * qa_card_map.json to balloon to 92 MB), this script stores only integer
 * indices into qa_entries.json.
 *
 * Output schema:
 *   Record<cardId, {
 *     directQA : number[],
 *     relatedQA: { idx: number, reason: string, sharedTags: string[] }[],
 *     tags     : string[]   // subtags (containing '>') for this card
 *   }>
 *
 * relatedQA matching: a card is related to a QA entry when they share at least
 * one subtag (a tag containing '>'), matched exactly between qa_entry_tags.json
 * and card_tags.json.
 *
 * Frontend usage:
 *   import qaIndex   from '@/data/qa_index.json';
 *   import qaEntries from '@/data/qa_entries.json';
 *   const { directQA, relatedQA } = qaIndex[card.cardId] ?? { directQA: [], relatedQA: [] };
 *   const directEntries  = directQA.map(i => qaEntries[i]);
 *   const relatedEntries = relatedQA.map(({ idx, reason, sharedTags }) => ({ entry: qaEntries[idx], reason, sharedTags }));
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// ── Load data ──────────────────────────────────────────────────────────────
console.log('Loading qa_entries.json...');
const qaEntries = JSON.parse(fs.readFileSync(path.join(root, 'data/qa_entries.json'), 'utf8'));
console.log('Loading card_tags.json...');
const cardTags  = JSON.parse(fs.readFileSync(path.join(root, 'data/card_tags.json'),  'utf8'));
console.log('Loading qa_entry_tags.json...');
const qaEntryTags = JSON.parse(fs.readFileSync(path.join(root, 'data/qa_entry_tags.json'), 'utf8'));

// Build index: question text → position in qaEntries array (for O(1) lookup)
const questionToIdx = new Map();
for (let i = 0; i < qaEntries.length; i++) {
  questionToIdx.set(qaEntries[i].question, i);
}

// ── Build lookup maps ──────────────────────────────────────────────────────

/** cardId → Set<tag> (all tags, used for directQA path) */
const cardTagMap = new Map();
for (const c of cardTags) {
  cardTagMap.set(c.cardId, new Set(c.tags));
}

/** subtag → Set<cardId>  (subtags only: tags containing '>') */
const subtagToCards = new Map();
for (const c of cardTags) {
  for (const tag of c.tags) {
    if (!tag.includes('>')) continue;
    if (!subtagToCards.has(tag)) subtagToCards.set(tag, new Set());
    subtagToCards.get(tag).add(c.cardId);
  }
}

/** qaIndex → Set<subtag>  (subtags only for each QA entry) */
const entrySubTagMap = new Map();
for (const e of qaEntryTags) {
  const subtags = e.tags.filter(t => t.includes('>'));
  if (subtags.length > 0) {
    entrySubTagMap.set(e.qaIndex, new Set(subtags));
  }
}

// ── Accumulate mappings ────────────────────────────────────────────────────

/**
 * Per-card accumulator:
 *   directQA   : Set<qaIdx>
 *   relatedMap : qaIdx → Set<subtag string>  (shared subtags driving this match)
 */
const cardAccum = new Map();

function getAccum(cardId) {
  if (!cardAccum.has(cardId)) {
    cardAccum.set(cardId, { directQA: new Set(), relatedMap: new Map() });
  }
  return cardAccum.get(cardId);
}

for (let i = 0; i < qaEntries.length; i++) {
  const entry = qaEntries[i];

  // Layer 1: direct — card is explicitly referenced in QA
  if (entry.cards && entry.cards.length > 0) {
    for (const ref of entry.cards) {
      getAccum(ref.cardId).directQA.add(i);
    }
  }

  // Layer 2: subtag-based relatedQA matching
  //   QA entry subtag X ∩ card subtag X → related match, recording shared subtags
  const entrySubtags = entrySubTagMap.get(i);
  if (!entrySubtags || entrySubtags.size === 0) continue;

  const refIds = new Set((entry.cards ?? []).map(c => c.cardId));

  for (const subtag of entrySubtags) {
    const matchedCards = subtagToCards.get(subtag);
    if (!matchedCards) continue;

    for (const cardId of matchedCards) {
      if (refIds.has(cardId)) continue; // already in directQA

      const accum = getAccum(cardId);
      if (!accum.relatedMap.has(i)) {
        accum.relatedMap.set(i, new Set());
      }
      accum.relatedMap.get(i).add(subtag);
    }
  }
}

// ── Build compact output object (Record<cardId, {...}>) ────────────────────

const output = {};
let totalDirect = 0;
let totalRelated = 0;

// Sort by numeric cardId for deterministic output
const sortedCardIds = [...cardAccum.keys()].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

for (const cardId of sortedCardIds) {
  const accum = cardAccum.get(cardId);

  const directQA = [...accum.directQA].sort((a, b) => a - b);

  // Build relatedQA excluding entries already in directQA
  const relatedQA = [];
  for (const [idx, sharedTagSet] of accum.relatedMap) {
    if (accum.directQA.has(idx)) continue; // skip: already direct
    const sharedTags = [...sharedTagSet].sort();
    const reason = sharedTags.map(t => `同じ『${t}』タグ`).join('; ');
    relatedQA.push({ idx, reason, sharedTags });
  }
  relatedQA.sort((a, b) => a.idx - b.idx);

  const tags = [...(cardTagMap.get(cardId) ?? [])].filter(t => t.includes('>')).sort();

  if (directQA.length === 0 && relatedQA.length === 0 && tags.length === 0) continue;

  output[cardId] = { directQA, relatedQA, tags };
  totalDirect  += directQA.length;
  totalRelated += relatedQA.length;
}

// ── Write qa_index.json ────────────────────────────────────────────────────
const outPath = path.join(root, 'data/qa_index.json');
fs.writeFileSync(outPath, JSON.stringify(output), 'utf8');  // no pretty-print for size

const sizeBytes = fs.statSync(outPath).size;
console.log(`\nWrote ${outPath}`);
console.log(`  Cards with mappings : ${Object.keys(output).length}`);
console.log(`  Total directQA refs : ${totalDirect}`);
console.log(`  Total relatedQA refs: ${totalRelated}`);
console.log(`  File size           : ${(sizeBytes / 1024 / 1024).toFixed(2)} MB`);

// ── Print usage note ───────────────────────────────────────────────────────
console.log(`
Usage in CardModal.tsx:
  import qaIndex   from '@/data/qa_index.json';
  import qaEntries from '@/data/qa_entries.json';

  const { directQA = [], relatedQA = [] } = qaIndex[card.cardId] ?? {};
  const directEntries  = directQA.map(i => qaEntries[i]);
  const relatedEntries = relatedQA.map(({ idx, reason, sharedTags }) => ({ entry: qaEntries[idx], reason, sharedTags }));
`);
