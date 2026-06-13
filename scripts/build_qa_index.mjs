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
 * one matchable tag, matched exactly between qa_entry_tags.json and
 * card_tags.json. Matchable = subtag (contains '>') or attack facet tag
 * (Phase 33-M flat vocabulary, whitelisted below).
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
console.log('Loading official_class_index.json...');
const officialClassIndex = JSON.parse(fs.readFileSync(path.join(root, 'data/official_class_index.json'), 'utf8'));

// Build index: question text → position in qaEntries array (for O(1) lookup)
const questionToIdx = new Map();
for (let i = 0; i < qaEntries.length; i++) {
  questionToIdx.set(qaEntries[i].question, i);
}

// ── Build lookup maps ──────────────────────────────────────────────────────

// Phase 33-M attack facets are flat (no '>') but specific enough to drive
// relatedQA matching. The generic facet 無条件 is deliberately absent (388 cards,
// would flood links). 即時 (Phase 33-X 1-A) is whitelisted because the QA tagger
// only emits it together with other primary tags (e.g. ダメカンを置く + 即時 +
// バトル場のみ) — never as the sole primary. ワザダメージ (Phase 33-W) is
// included so primary-tag AND matching can use it as a filter:
// `ベンチに届く + ワザダメージ` excludes ベンチダメカン置き cards from QA about
// ベンチ damage rulings (e.g. ユクシー stops matching idx 77/184).
const ATTACK_FACETS = new Set([
  'ダメカンを置く', 'ダメカン移動', '反射',
  '即時', '次の番も', '特性・場',
  '自分の場', '相手の場', 'コイン', '枚数参照', '種別', '特殊状態参照', 'HP/ダメカン',
  'ベンチに届く', '自分側', 'お互い', 'バトル場のみ',
  'ワザダメージ',
]);

// Phase 33-P: defense facets (33-N, flat) join the whitelist. このポケモン (206
// cards) is the generic target facet and would flood links — deliberately absent.
const DEFENSE_FACETS = new Set([
  '受けるダメージ軽減', '受けるダメージ無効', '効果を受けない', '特殊状態にならない',
  '常時', '次の相手の番', 'コインしだい', '特定の相手のみ',
  '場の全員', 'ベンチ', '相手を弱める',
]);

// Phase 33-P: discriminative flat tags outside the facet systems (33-O vocab).
// Phase 33-X (4): ワザコピー (親タグ) を追加。309 (スキルシーフ×まっちゃスピン)
// のような ワザコピー機構の汎用裁定は ワザコピー>{ものまね,きおくにもぐる,ワザ付与}
// の各サブ全体に届けたい。サブタグ単独だと該当系統内でしか繋がらず、汎用裁定が
// 他系統 (ジーランス↔ヤドキング 等) に渡らない。
const MISC_TAGS = new Set(['きぜつさせる', 'ワザコピー']);

// Phase 33-P: キャラ家系は独自タグでなく公式クラス (official_class_index) で結合する。
// QA 側ルールは公式タグ名をそのまま発行する（tag_qa_entries.mjs CHARACTER_PREFIXES）。
const OFFICIAL_FAMILY_TAGS = new Set([
  'ロケット団',
  'Nのポケモン', 'アオキのポケモン', 'エリカのポケモン', 'カスミのポケモン',
  'シロナのポケモン', 'ダイゴのポケモン', 'ナンジャモのポケモン', 'ヒビキのポケモン',
  'ペパーのポケモン', 'ホップのポケモン', 'マリィのポケモン', 'リーリエのポケモン',
]);

const isMatchableTag = t =>
  t.includes('>') || ATTACK_FACETS.has(t) || DEFENSE_FACETS.has(t) || MISC_TAGS.has(t) ||
  OFFICIAL_FAMILY_TAGS.has(t);

/** cardId → Set<tag> (all tags, used for directQA path) */
const cardTagMap = new Map();
for (const c of cardTags) {
  cardTagMap.set(c.cardId, new Set(c.tags));
}

/** matchable tag → Set<cardId> */
const subtagToCards = new Map();
for (const c of cardTags) {
  for (const tag of c.tags) {
    if (!isMatchableTag(tag)) continue;
    if (!subtagToCards.has(tag)) subtagToCards.set(tag, new Set());
    subtagToCards.get(tag).add(c.cardId);
  }
}
// official family classes → member cards (cardId 空間は card_tags と共通)
for (const [cardId, classes] of Object.entries(officialClassIndex)) {
  for (const tag of classes) {
    if (!OFFICIAL_FAMILY_TAGS.has(tag)) continue;
    if (!subtagToCards.has(tag)) subtagToCards.set(tag, new Set());
    subtagToCards.get(tag).add(cardId);
  }
}

// Phase 33-W: each QA's primary tag set is the ruling's subject.
// A card joins relatedQA only when it carries ALL primary tags (AND match).
// Context tags are kept for display only — not required of the card.
// Back-compat: entries without explicit primary fall back to legacy `tags`.
const entryPrimaryMap = new Map();
const entryContextMap = new Map();
for (const e of qaEntryTags) {
  const primary = (e.primary ?? e.tags ?? []).filter(isMatchableTag);
  if (primary.length > 0) entryPrimaryMap.set(e.qaIndex, primary);
  const context = (e.context ?? []).filter(isMatchableTag);
  if (context.length > 0) entryContextMap.set(e.qaIndex, context);
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

  // Layer 2: primary-tag AND matching (Phase 33-W).
  //
  // The card joins relatedQA when it carries every primary tag of the QA.
  // - 1 primary tag → same as before (e.g. `ダメカンを置く` reaches all 128 cards)
  // - 2+ primary tags → intersection (`ベンチに届く + ワザダメージ` reaches ワザでベンチ
  //   ダメージを与えるカード only, not ベンチダメカン置きカード)
  //
  // Spread itself stays permissive (Phase 33-V): the official FAQ publishes a
  // representative pair and players generalize. The AND match narrows scope by
  // QA-side specificity, not by suppressing combination rulings wholesale.
  const primaryTags = entryPrimaryMap.get(i);
  if (!primaryTags || primaryTags.length === 0) continue;

  const refIds = new Set((entry.cards ?? []).map(c => c.cardId));

  // Iterate candidates from the smallest primary tag pool, intersect the rest.
  let candidates = null;
  for (const tag of primaryTags) {
    const pool = subtagToCards.get(tag);
    if (!pool) { candidates = new Set(); break; }
    if (candidates === null || pool.size < candidates.size) candidates = pool;
  }
  if (!candidates || candidates.size === 0) continue;

  for (const cardId of candidates) {
    if (refIds.has(cardId)) continue;
    const cardTagSet = cardTagMap.get(cardId);
    if (!cardTagSet) continue;
    let matchesAll = true;
    for (const tag of primaryTags) {
      if (!cardTagSet.has(tag)) { matchesAll = false; break; }
    }
    if (!matchesAll) continue;

    const accum = getAccum(cardId);
    if (!accum.relatedMap.has(i)) accum.relatedMap.set(i, new Set());
    for (const tag of primaryTags) accum.relatedMap.get(i).add(tag);
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

// ── Unbound QA audit (Phase 33-T) ──────────────────────────────────────────
// Q&A entries with no in-pool card reference AND no matchable tag never appear
// on any card page. Baseline (2026-06-13): 244 general-rules/glossary FAQ +
// 4 out-of-pool (old regulation) rulings. New unbound entries after a set
// intake signal a scraper card-link extraction failure or a vocab gap — diff
// docs/qa_unbound_audit.md to spot them.

const poolCardIds = new Set(cardTags.map(c => c.cardId));
const noRef = [];
const outOfPoolRef = [];
for (let i = 0; i < qaEntries.length; i++) {
  const entry = qaEntries[i];
  const refs = entry.cards ?? [];
  if (refs.some(c => poolCardIds.has(c.cardId))) continue;          // direct-bound
  // Phase 33-W: tag-bound = has any primary or context tag (entrySubTagMap was
  // renamed when primary/context split landed; the audit reference here was
  // missed — Phase 33-X 1-B fix)
  const primCount = entryPrimaryMap.get(i)?.length ?? 0;
  const ctxCount = entryContextMap.get(i)?.length ?? 0;
  if (primCount + ctxCount > 0) continue;                            // tag-bound
  if (refs.length === 0) noRef.push(i);
  else outOfPoolRef.push(i);
}

const fmtEntry = i => {
  const e = qaEntries[i];
  const refs = (e.cards ?? []).map(c => `${c.name}#${c.cardId}`).join('、');
  return `| ${i} | ${refs || '—'} | ${e.question.replace(/\|/g, '｜').replace(/\n/g, ' ').slice(0, 80)} |`;
};

const auditMd = `# Unbound Q&A Audit

Generated: ${new Date().toISOString()}

Q&A entries not bound to any card (no in-pool direct reference, no matchable tag).
These never appear in the frontend. Baseline 2026-06-13: 248 entries
(244 rules/glossary FAQ + 4 out-of-pool rulings). **If this list grows after a
set intake, check the FAQ scraper's card-link extraction and QA tagger vocab.**

## Summary

| Class | Count |
|-------|-------|
| Total Q&A entries | ${qaEntries.length} |
| Bound (direct or tag) | ${qaEntries.length - noRef.length - outOfPoolRef.length} |
| Unbound — no card reference (rules/glossary FAQ) | ${noRef.length} |
| Unbound — out-of-pool references only (old regulation) | ${outOfPoolRef.length} |

## Out-of-pool references only

| idx | referenced cards | question |
|-----|------------------|----------|
${outOfPoolRef.map(fmtEntry).join('\n')}

## No card reference

| idx | referenced cards | question |
|-----|------------------|----------|
${noRef.map(fmtEntry).join('\n')}
`;

const auditPath = path.join(root, 'docs/qa_unbound_audit.md');
fs.writeFileSync(auditPath, auditMd, 'utf8');
console.log(`\nWrote ${auditPath}`);
console.log(`  Unbound QA: ${noRef.length + outOfPoolRef.length} (no-ref ${noRef.length} / out-of-pool ${outOfPoolRef.length})`);

// ── Print usage note ───────────────────────────────────────────────────────
console.log(`
Usage in CardModal.tsx:
  import qaIndex   from '@/data/qa_index.json';
  import qaEntries from '@/data/qa_entries.json';

  const { directQA = [], relatedQA = [] } = qaIndex[card.cardId] ?? {};
  const directEntries  = directQA.map(i => qaEntries[i]);
  const relatedEntries = relatedQA.map(({ idx, reason, sharedTags }) => ({ entry: qaEntries[idx], reason, sharedTags }));
`);
