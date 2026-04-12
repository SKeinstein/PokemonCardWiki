#!/usr/bin/env node
/**
 * build_qa_card_map.mjs
 * Builds data/qa_card_map.json with two mapping layers:
 *   1. directQA   — Q&A entries that explicitly reference a card by cardId
 *   2. relatedQA  — Q&A entries that reference another card sharing the same sub-group tag
 *
 * Output schema:
 *   Array<{
 *     cardId: string,
 *     directQA: QAEntry[],
 *     relatedQA: { entry: QAEntry, reason: string }[]
 *   }>
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'data');
const docsDir = join(__dirname, '..', 'docs');

// ── Load data ──────────────────────────────────────────────────────────────
const qaEntries = JSON.parse(readFileSync(join(dataDir, 'qa_entries.json'), 'utf8'));
const cardTags = JSON.parse(readFileSync(join(dataDir, 'card_tags.json'), 'utf8'));

// ── Build lookup maps ──────────────────────────────────────────────────────

// cardId → { name, tags[] }
const cardMap = new Map();
for (const c of cardTags) {
  cardMap.set(c.cardId, { name: c.name, tags: c.tags ?? [] });
}

// tag → Set<cardId>
const tagToCards = new Map();
for (const c of cardTags) {
  for (const tag of c.tags ?? []) {
    if (!tagToCards.has(tag)) tagToCards.set(tag, new Set());
    tagToCards.get(tag).add(c.cardId);
  }
}

// ── Build the mapping ──────────────────────────────────────────────────────

// Per-card accumulators
// cardId → Set<qaIdx>
const accDirect = new Map();
// cardId → Map<qaIdx, Set<reason>>
const accRelated = new Map();

function ensureDirect(cardId) {
  if (!accDirect.has(cardId)) accDirect.set(cardId, new Set());
}
function ensureRelated(cardId) {
  if (!accRelated.has(cardId)) accRelated.set(cardId, new Map());
}

for (let i = 0; i < qaEntries.length; i++) {
  const entry = qaEntries[i];
  const refCards = entry.cards ?? [];
  if (refCards.length === 0) continue;

  // Collect all tags mentioned by ANY directly referenced card in this entry
  const entryTagSources = new Map(); // tag → [referenced cardIds that carry it]
  const directIds = new Set(refCards.map(c => c.cardId));

  for (const ref of refCards) {
    const cid = ref.cardId;
    ensureDirect(cid);
    accDirect.get(cid).add(i);

    const info = cardMap.get(cid);
    if (!info) continue;
    for (const tag of info.tags) {
      if (!entryTagSources.has(tag)) entryTagSources.set(tag, []);
      entryTagSources.get(tag).push(cid);
    }
  }

  // For each tag, propagate to all OTHER cards sharing that tag
  for (const [tag, sourceCids] of entryTagSources) {
    const siblingIds = tagToCards.get(tag) ?? new Set();
    const srcNames = sourceCids.map(cid => cardMap.get(cid)?.name ?? cid).join('・');
    const reason = `タグ「${tag}」を持つカード（${srcNames}）がQ&Aで参照されているため`;

    for (const sibling of siblingIds) {
      if (directIds.has(sibling)) continue; // already direct — skip
      ensureRelated(sibling);
      const rMap = accRelated.get(sibling);
      if (!rMap.has(i)) rMap.set(i, new Set());
      rMap.get(i).add(reason);
    }
  }
}

// ── Assemble output ────────────────────────────────────────────────────────

const allCardIds = new Set([...accDirect.keys(), ...accRelated.keys()]);

const output = [];
for (const cardId of [...allCardIds].sort((a, b) => Number(a) - Number(b))) {
  const directIdxs = accDirect.get(cardId) ?? new Set();
  const relatedMap = accRelated.get(cardId) ?? new Map();

  const directQA = [...directIdxs].map(i => qaEntries[i]);

  const relatedQA = [...relatedMap.entries()].map(([i, reasons]) => ({
    entry: qaEntries[i],
    reason: [...reasons].join(' / '),
  }));

  output.push({ cardId, directQA, relatedQA });
}

writeFileSync(join(dataDir, 'qa_card_map.json'), JSON.stringify(output, null, 2), 'utf8');
console.log(`Wrote qa_card_map.json — ${output.length} cards`);

// ── Stats ──────────────────────────────────────────────────────────────────

const totalQA = qaEntries.length;
const qaWithCards = qaEntries.filter(e => e.cards?.length > 0).length;
const cardsWithDirect = [...allCardIds].filter(id => (accDirect.get(id)?.size ?? 0) > 0).length;
const cardsWithRelatedOnly = [...allCardIds].filter(
  id => (accDirect.get(id)?.size ?? 0) === 0 && (accRelated.get(id)?.size ?? 0) > 0
).length;
const cardsWithBoth = [...allCardIds].filter(
  id => (accDirect.get(id)?.size ?? 0) > 0 && (accRelated.get(id)?.size ?? 0) > 0
).length;

const totalDirectLinks = [...accDirect.values()].reduce((s, v) => s + v.size, 0);
const totalRelatedLinks = [...accRelated.values()].reduce((s, v) => s + v.size, 0);

// Top-10 cards by direct QA count
const topDirect = output
  .filter(r => r.directQA.length > 0)
  .sort((a, b) => b.directQA.length - a.directQA.length)
  .slice(0, 10)
  .map(r => {
    const name = cardMap.get(r.cardId)?.name ?? r.cardId;
    return `| ${r.cardId} | ${name} | ${r.directQA.length} | ${r.relatedQA.length} |`;
  });

// Top-10 cards by related QA count
const topRelated = output
  .filter(r => r.relatedQA.length > 0)
  .sort((a, b) => b.relatedQA.length - a.relatedQA.length)
  .slice(0, 10)
  .map(r => {
    const name = cardMap.get(r.cardId)?.name ?? r.cardId;
    return `| ${r.cardId} | ${name} | ${r.directQA.length} | ${r.relatedQA.length} |`;
  });

// Coverage by tag
const tagCoverage = [];
for (const [tag, cardIds] of [...tagToCards.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const covered = [...cardIds].filter(cid =>
    (accDirect.get(cid)?.size ?? 0) > 0 || (accRelated.get(cid)?.size ?? 0) > 0
  ).length;
  tagCoverage.push(`| ${tag} | ${cardIds.size} | ${covered} | ${Math.round(covered / cardIds.size * 100)}% |`);
}

const md = `# Q&A Card Mapping Stats

Generated: ${new Date().toISOString()}

## Overview

| Metric | Count |
|--------|-------|
| Total Q&A entries | ${totalQA} |
| Entries referencing at least one card | ${qaWithCards} (${Math.round(qaWithCards/totalQA*100)}%) |
| Entries with no card reference | ${totalQA - qaWithCards} (${Math.round((totalQA-qaWithCards)/totalQA*100)}%) |
| Total cards in card_tags.json | ${cardTags.length} |
| Cards with ≥1 tag | ${cardTags.filter(c => c.tags?.length > 0).length} |

## Mapping Output

| Metric | Count |
|--------|-------|
| Cards appearing in qa_card_map.json | ${output.length} |
| Cards with directQA ≥ 1 | ${cardsWithDirect} |
| Cards with relatedQA only (no directQA) | ${cardsWithRelatedOnly} |
| Cards with both direct AND related QA | ${cardsWithBoth} |
| Total direct card→QA links | ${totalDirectLinks} |
| Total related card→QA links | ${totalRelatedLinks} |

## Top 10 — Most Direct Q&A References

| cardId | Name | directQA | relatedQA |
|--------|------|----------|-----------|
${topDirect.join('\n')}

## Top 10 — Most Related Q&A Links

| cardId | Name | directQA | relatedQA |
|--------|------|----------|-----------|
${topRelated.join('\n')}

## Coverage by Tag (cards with ≥1 QA / total cards in group)

| Tag | Total Cards | Covered | % |
|-----|-------------|---------|---|
${tagCoverage.join('\n')}
`;

writeFileSync(join(docsDir, 'qa_mapping_stats.md'), md, 'utf8');
console.log('Wrote docs/qa_mapping_stats.md');
