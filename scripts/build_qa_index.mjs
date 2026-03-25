/**
 * build_qa_index.mjs
 *
 * Generates data/qa_index.json — a compact replacement for qa_card_map.json.
 *
 * Instead of copying Q&A entry objects into every card's record (which caused
 * qa_card_map.json to balloon to 92 MB), this script stores only integer
 * indices into qa_entries.json.
 *
 * Output schema: Record<cardId, { directQA: number[], relatedQA: { idx: number, reason: string }[] }>
 *
 * Frontend usage:
 *   import qaIndex   from '@/data/qa_index.json';
 *   import qaEntries from '@/data/qa_entries.json';
 *   const { directQA, relatedQA } = qaIndex[card.cardId] ?? { directQA: [], relatedQA: [] };
 *   const directEntries  = directQA.map(i => qaEntries[i]);
 *   const relatedEntries = relatedQA.map(({ idx, reason }) => ({ entry: qaEntries[idx], reason }));
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

// Build index: question text → position in qaEntries array (for O(1) lookup)
const questionToIdx = new Map();
for (let i = 0; i < qaEntries.length; i++) {
  questionToIdx.set(qaEntries[i].question, i);
}

// ── Build lookup maps ──────────────────────────────────────────────────────

/** cardId → Set<tag> */
const cardTagMap = new Map();
for (const c of cardTags) {
  cardTagMap.set(c.cardId, new Set(c.tags));
}

/** tag → Set<cardId> */
const tagToCards = new Map();
for (const c of cardTags) {
  for (const tag of c.tags) {
    if (!tagToCards.has(tag)) tagToCards.set(tag, new Set());
    tagToCards.get(tag).add(c.cardId);
  }
}

// ── Accumulate mappings ────────────────────────────────────────────────────

/**
 * Per-card accumulator:
 *   directQA   : Set<qaIdx>
 *   relatedMap : qaIdx → Set<reason string>
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
  if (!entry.cards || entry.cards.length === 0) continue;

  const refIds = new Set(entry.cards.map(c => c.cardId));

  // Layer 1: direct — card is explicitly referenced in QA
  for (const ref of entry.cards) {
    getAccum(ref.cardId).directQA.add(i);
  }

  // Layer 2: group-related — propagate to cards sharing a tag with a referenced card
  for (const ref of entry.cards) {
    const tags = cardTagMap.get(ref.cardId);
    if (!tags || tags.size === 0) continue;

    for (const tag of tags) {
      const siblings = tagToCards.get(tag);
      if (!siblings) continue;

      for (const sibId of siblings) {
        if (refIds.has(sibId)) continue; // already in directQA

        const accum = getAccum(sibId);
        if (!accum.relatedMap.has(i)) {
          accum.relatedMap.set(i, new Set());
        }
        accum.relatedMap.get(i).add(
          `共通タグ: ${tag} (参照カード: ${ref.name} [${ref.cardId}])`
        );
      }
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
  for (const [idx, reasons] of accum.relatedMap) {
    if (accum.directQA.has(idx)) continue; // skip: already direct
    relatedQA.push({ idx, reason: [...reasons].join('; ') });
  }
  relatedQA.sort((a, b) => a.idx - b.idx);

  if (directQA.length === 0 && relatedQA.length === 0) continue;

  output[cardId] = { directQA, relatedQA };
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
  const relatedEntries = relatedQA.map(({ idx, reason }) => ({ entry: qaEntries[idx], reason }));
`);
