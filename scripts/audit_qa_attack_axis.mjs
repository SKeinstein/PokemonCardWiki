/**
 * audit_qa_attack_axis.mjs — Phase 33-Y attack facet axis audit (permanent)
 *
 * Design: gardener vault/10_Projects/Active/Phase33Y_attack_axis_full_audit.md §4-A
 *
 * Slices cards[]-bearing QA entries by which of the 3 attack facet axes
 * (mechanism / source / range) appear in their `primary`. Writes a Markdown
 * report to docs/qa_attack_axis_audit.md. Re-run after any tag rule change
 * to track whether 3-axis coverage is improving.
 *
 * Reads:  data/qa_entries.json, data/qa_entry_tags.json
 * Writes: docs/qa_attack_axis_audit.md
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const MECHANIC = new Set(['ダメカンを置く', 'ダメカン移動', '反射', 'ワザダメージ']);
const SOURCE   = new Set(['即時', '特性・場', '次の番も']);
const RANGE    = new Set(['ベンチに届く', 'お互い', '自分側', 'バトル場のみ']);

const entries = JSON.parse(readFileSync(join(ROOT, 'data', 'qa_entries.json'), 'utf-8'));
const tags    = JSON.parse(readFileSync(join(ROOT, 'data', 'qa_entry_tags.json'), 'utf-8'));

function classify(primary) {
  const m = primary.some(t => MECHANIC.has(t));
  const s = primary.some(t => SOURCE.has(t));
  const r = primary.some(t => RANGE.has(t));
  if (!m && !s && !r) return null;
  if (m && s && r) return 'all3';
  if (m && s)      return 'ms';
  if (m && r)      return 'mr';
  if (s && r)      return 'sr';
  if (m)           return 'm';
  if (s)           return 's';
  return 'r';
}

const BUCKETS = {
  all3: '3軸揃い (正常)',
  ms:   'メカニクス + 起動源 (範囲抜け)',
  mr:   'メカニクス + 範囲 (起動源抜け)',
  sr:   '起動源 + 範囲 (メカニクス抜け)',
  m:    'メカニクスのみ',
  s:    '起動源のみ',
  r:    '範囲のみ',
};

const rows = { all3: [], ms: [], mr: [], sr: [], m: [], s: [], r: [] };
let totalAttackQa = 0;

for (let i = 0; i < entries.length; i++) {
  const e = entries[i];
  if (!(e.cards || []).length) continue;
  const primary = tags[i]?.primary || [];
  const bucket = classify(primary);
  if (!bucket) continue;
  totalAttackQa++;
  rows[bucket].push({
    idx: i,
    cards: (e.cards || []).map(c => c.name).join('、'),
    primary,
    question: e.question.replace(/\|/g, '｜').replace(/\n/g, ' ').slice(0, 80),
  });
}

const fmt = r => `| ${r.idx} | ${r.cards} | ${r.primary.join(' / ')} | ${r.question} |`;

const sectionMd = (key) => `### ${BUCKETS[key]} (${rows[key].length})

| idx | カード | 現状 primary | 質問 |
|---|---|---|---|
${rows[key].map(fmt).join('\n')}
`;

const md = `# QA Attack Facet Axis Audit

Generated: ${new Date().toISOString()}

cards[] ありの攻撃 Q&A を、Phase 33-W/X で導入した 3 軸 (メカニクス / 起動源 / 範囲)
で分類した監査レポート。Phase 33-Y 攻撃軸全件再精査 ([[Phase33Y_attack_axis_full_audit]])
の baseline と継続計測用。

- **MECHANIC**: ${[...MECHANIC].join(' / ')}
- **SOURCE**:   ${[...SOURCE].join(' / ')}
- **RANGE**:    ${[...RANGE].join(' / ')}

## Summary

| Class | Count |
|-------|-------|
| Total Q&A entries | ${entries.length} |
| cards[] あり攻撃 QA (3軸のいずれかが primary) | ${totalAttackQa} |
${Object.keys(BUCKETS).map(k => `| ${BUCKETS[k]} | ${rows[k].length} |`).join('\n')}

## 分布

${Object.keys(BUCKETS).map(sectionMd).join('\n')}
`;

const outPath = join(ROOT, 'docs', 'qa_attack_axis_audit.md');
writeFileSync(outPath, md, 'utf-8');

console.log(`Wrote ${outPath}`);
console.log(`  total attack QA: ${totalAttackQa}`);
for (const k of Object.keys(BUCKETS)) {
  console.log(`  ${BUCKETS[k]}: ${rows[k].length}`);
}
