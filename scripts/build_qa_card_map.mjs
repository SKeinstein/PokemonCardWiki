/**
 * build_qa_card_map.mjs
 *
 * Generates data/qa_card_map.json with two mapping layers:
 *   1. directQA   — Q&A entries that explicitly reference the card by cardId
 *   2. relatedQA  — Q&A entries that reference another card sharing a sub-group tag
 *
 * Also generates docs/qa_mapping_stats.md summarising coverage.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// ── Load data ──────────────────────────────────────────────────────────────
const qaEntries = JSON.parse(fs.readFileSync(path.join(root, 'data/qa_entries.json'), 'utf8'));
const cardTags  = JSON.parse(fs.readFileSync(path.join(root, 'data/card_tags.json'),  'utf8'));

// ── Build lookup maps ──────────────────────────────────────────────────────

/** cardId → { name, tags } */
const cardInfoMap = new Map();
for (const c of cardTags) {
  cardInfoMap.set(c.cardId, { name: c.name, tags: c.tags });
}

/** tag → Set<cardId>  (only leaf/specific tags, e.g. "ベンチ狙撃>ダメージ型") */
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
 *   directQA    : QAEntry[]
 *   relatedMap  : question → { entry: QAEntry, reasons: Set<string> }
 */
const cardAccum = new Map();

function getAccum(cardId) {
  if (!cardAccum.has(cardId)) {
    cardAccum.set(cardId, { directQA: [], relatedMap: new Map() });
  }
  return cardAccum.get(cardId);
}

for (const entry of qaEntries) {
  if (!entry.cards || entry.cards.length === 0) continue;

  const refIds = new Set(entry.cards.map(c => c.cardId));

  // ── Layer 1: direct ───────────────────────────────────────────────────
  for (const ref of entry.cards) {
    getAccum(ref.cardId).directQA.push(entry);
  }

  // ── Layer 2: group-related ─────────────────────────────────────────────
  // For every card explicitly referenced, propagate the QA to all other cards
  // that share at least one tag with it.
  for (const ref of entry.cards) {
    const info = cardInfoMap.get(ref.cardId);
    if (!info || info.tags.length === 0) continue;

    for (const tag of info.tags) {
      const siblings = tagToCards.get(tag);
      if (!siblings) continue;

      for (const sibId of siblings) {
        if (refIds.has(sibId)) continue; // skip cards already in directQA

        const accum = getAccum(sibId);
        if (!accum.relatedMap.has(entry.question)) {
          accum.relatedMap.set(entry.question, { entry, reasons: new Set() });
        }
        accum.relatedMap.get(entry.question).reasons.add(
          `共通タグ: ${tag} (参照カード: ${ref.name} [${ref.cardId}])`
        );
      }
    }
  }
}

// ── Build output array ─────────────────────────────────────────────────────

const output = [];

for (const [cardId, accum] of cardAccum) {
  const info = cardInfoMap.get(cardId) || { name: '(unknown)', tags: [] };

  // De-duplicate directQA by question (guard against double-push if same card
  // appears twice in a single entry's cards array — edge case)
  const seenDirect = new Set();
  const directQA = [];
  for (const e of accum.directQA) {
    if (!seenDirect.has(e.question)) {
      seenDirect.add(e.question);
      directQA.push(e);
    }
  }

  // Build relatedQA, excluding any entry already in directQA
  const relatedQA = [];
  for (const [, rel] of accum.relatedMap) {
    if (seenDirect.has(rel.entry.question)) continue; // already in direct
    relatedQA.push({
      entry: rel.entry,
      reason: [...rel.reasons].join('; '),
    });
  }

  output.push({ cardId, name: info.name, directQA, relatedQA });
}

// Sort by numeric cardId
output.sort((a, b) => parseInt(a.cardId, 10) - parseInt(b.cardId, 10));

// ── Write qa_card_map.json ─────────────────────────────────────────────────
const outPath = path.join(root, 'data/qa_card_map.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');
console.log(`Wrote ${outPath}  (${output.length} card entries)`);

// ── Compute stats ──────────────────────────────────────────────────────────

const totalCards       = cardTags.length;           // 5112 in card_tags
const mappedCards      = output.length;
const withDirect       = output.filter(c => c.directQA.length > 0).length;
const withRelated      = output.filter(c => c.relatedQA.length > 0).length;
const withBoth         = output.filter(c => c.directQA.length > 0 && c.relatedQA.length > 0).length;
const withDirectOnly   = output.filter(c => c.directQA.length > 0 && c.relatedQA.length === 0).length;
const withRelatedOnly  = output.filter(c => c.directQA.length === 0 && c.relatedQA.length > 0).length;

// QA coverage
const qaWithCards    = qaEntries.filter(e => e.cards && e.cards.length > 0).length;
const qaWithoutCards = qaEntries.length - qaWithCards;

// Unique cardIds referenced in QA
const referencedCardIds = new Set(
  qaEntries.flatMap(e => (e.cards || []).map(c => c.cardId))
);

// directQA count distribution
const directDist = new Map(); // count → number of cards
for (const c of output) {
  const n = c.directQA.length;
  directDist.set(n, (directDist.get(n) || 0) + 1);
}

// relatedQA count buckets
const relatedBuckets = { '0': 0, '1-5': 0, '6-20': 0, '21-50': 0, '51+': 0 };
for (const c of output) {
  const n = c.relatedQA.length;
  if      (n === 0)  relatedBuckets['0']++;
  else if (n <= 5)   relatedBuckets['1-5']++;
  else if (n <= 20)  relatedBuckets['6-20']++;
  else if (n <= 50)  relatedBuckets['21-50']++;
  else               relatedBuckets['51+']++;
}

// Top tags by frequency in relatedQA reasons
const tagFreq = new Map();
for (const c of output) {
  for (const rel of c.relatedQA) {
    // extract tag name(s) from reason string
    const matches = rel.reason.matchAll(/共通タグ: ([^(]+?) \(/g);
    for (const m of matches) {
      const tag = m[1].trim();
      tagFreq.set(tag, (tagFreq.get(tag) || 0) + 1);
    }
  }
}
const topTags = [...tagFreq.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

// Top cards by directQA count
const topDirectCards = [...output]
  .filter(c => c.directQA.length > 0)
  .sort((a, b) => b.directQA.length - a.directQA.length)
  .slice(0, 20);

// ── Write stats markdown ───────────────────────────────────────────────────

const docsDir = path.join(root, 'docs');
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir);

const statsPath = path.join(docsDir, 'qa_mapping_stats.md');

const pct = (n, d) => d === 0 ? '0%' : `${((n / d) * 100).toFixed(1)}%`;

const directDistTable = [...directDist.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([n, cnt]) => `| ${n} | ${cnt} |`)
  .join('\n');

const topTagsTable = topTags
  .map(([tag, cnt]) => `| \`${tag}\` | ${cnt} |`)
  .join('\n');

const topDirectTable = topDirectCards
  .map(c => `| ${c.cardId} | ${c.name} | ${c.directQA.length} |`)
  .join('\n');

const md = `# Q&A カードマッピング統計

生成日: ${new Date().toISOString().slice(0, 10)}

---

## 1. Q&A エントリ全体

| 項目 | 件数 |
|------|------|
| Q&A 総数 | ${qaEntries.length} |
| カード参照あり | ${qaWithCards} (${pct(qaWithCards, qaEntries.length)}) |
| カード参照なし | ${qaWithoutCards} (${pct(qaWithoutCards, qaEntries.length)}) |
| Q&A から参照されたユニークcardId数 | ${referencedCardIds.size} |

---

## 2. カードマッピング概要

全カード数 (card_tags.json): **${totalCards}**

| 区分 | 件数 | 全カードに対する割合 |
|------|------|----------------------|
| マッピングあり (directQA または relatedQA) | ${mappedCards} | ${pct(mappedCards, totalCards)} |
| directQA のみ | ${withDirectOnly} | ${pct(withDirectOnly, totalCards)} |
| relatedQA のみ | ${withRelatedOnly} | ${pct(withRelatedOnly, totalCards)} |
| 両方あり | ${withBoth} | ${pct(withBoth, totalCards)} |
| マッピングなし (タグなし・Q&A未参照) | ${totalCards - mappedCards} | ${pct(totalCards - mappedCards, totalCards)} |

---

## 3. directQA 件数分布

| directQA 件数 | カード数 |
|--------------|---------|
${directDistTable}

---

## 4. relatedQA 件数バケット (マッピングあり ${mappedCards} 件中)

| バケット | カード数 |
|---------|---------|
| 0件 | ${relatedBuckets['0']} |
| 1〜5件 | ${relatedBuckets['1-5']} |
| 6〜20件 | ${relatedBuckets['6-20']} |
| 21〜50件 | ${relatedBuckets['21-50']} |
| 51件以上 | ${relatedBuckets['51+']} |

---

## 5. relatedQA で多用されたタグ TOP 20

| タグ | relatedQA への貢献件数 |
|------|----------------------|
${topTagsTable}

---

## 6. directQA 件数 TOP 20 カード

| cardId | カード名 | directQA 件数 |
|--------|---------|--------------|
${topDirectTable}

---

## 7. 備考

- **直接マッピング (directQA)**: Q&A エントリの \`cards\` 配列に cardId として明示的にリンクされているもの。
- **グループ関連マッピング (relatedQA)**: Q&A が参照するカードと同じサブグループタグを持つ別カードへの伝播。タグが階層的な場合 (\`親>子\` 形式) はリーフタグ単位で照合する。
- directQA に既に含まれるエントリは relatedQA から除外している。
- \`name\` フィールドはユーティリティ用に付加したもので、スキーマ上は省略可能。
`;

fs.writeFileSync(statsPath, md, 'utf8');
console.log(`Wrote ${statsPath}`);
