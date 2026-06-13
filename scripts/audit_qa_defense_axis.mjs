/**
 * audit_qa_defense_axis.mjs — Phase 33-Z defense facet axis audit (baseline)
 *
 * Design: gardener vault/10_Projects/Active/Phase33Z_defense_facet_redesign.md (drafting)
 *
 * Mirrors audit_qa_attack_axis.mjs for the defense side. Slices QA entries
 * whose cards[] include a card carrying a defense facet (D/E/F tag) and
 * classifies their `primary`/`context` by which of the 3 defense axes
 * (mechanism / when-condition / target) are present.
 *
 * Reads:  data/qa_entries.json, data/qa_entry_tags.json, data/card_tags.json
 * Writes: docs/qa_defense_axis_audit.md
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const MECHANISM = new Set(['受けるダメージ軽減', '受けるダメージ無効', '効果を受けない', '特殊状態にならない']);
const WHEN      = new Set(['常時', '次の相手の番', 'コインしだい', '特定の相手のみ']);
const TARGET    = new Set(['このポケモン', '場の全員', 'ベンチ', '相手を弱める']);
const DEFENSE_ALL = new Set([...MECHANISM, ...WHEN, ...TARGET]);

const entries  = JSON.parse(readFileSync(join(ROOT, 'data', 'qa_entries.json'), 'utf-8'));
const tags     = JSON.parse(readFileSync(join(ROOT, 'data', 'qa_entry_tags.json'), 'utf-8'));
const cardTags = JSON.parse(readFileSync(join(ROOT, 'data', 'card_tags.json'), 'utf-8'));
const cardTagMap = new Map(cardTags.map(c => [c.cardId, c.tags || []]));

function hasAxis(arr, set) { return arr.some(t => set.has(t)); }

function classify(p, c) {
  const all = [...p, ...c];
  const m = hasAxis(all, MECHANISM);
  const w = hasAxis(all, WHEN);
  const f = hasAxis(all, TARGET);
  if (!m && !w && !f) return null;
  if (m && w && f) return 'all3';
  if (m && w)      return 'mw';
  if (m && f)      return 'mf';
  if (w && f)      return 'wf';
  if (m)           return 'm';
  if (w)           return 'w';
  return 'f';
}

const BUCKETS = {
  all3: '3軸揃い (正常)',
  mw:   'なに+いつ (誰抜け)',
  mf:   'なに+誰 (いつ抜け)',
  wf:   'いつ+誰 (なに抜け)',
  m:    'なにのみ',
  w:    'いつのみ',
  f:    '誰のみ',
  noQa: 'cards[]にdefense持ちカードあるがQAタグ全く立たず',
};

const rows = Object.fromEntries(Object.keys(BUCKETS).map(k => [k, []]));
let totalCandidate = 0;

for (let i = 0; i < entries.length; i++) {
  const e = entries[i];
  const refs = e.cards || [];
  if (!refs.length) continue;
  // 防御主題候補 = cards[] に defense facet tag を1つでも持つカードが含まれる
  let defenseCardName = null;
  for (const ref of refs) {
    const cTags = cardTagMap.get(ref.cardId) || [];
    if (cTags.some(t => DEFENSE_ALL.has(t))) {
      defenseCardName = ref.name + (defenseCardName ? ',' + defenseCardName : '');
    }
  }
  if (!defenseCardName) continue;
  totalCandidate++;
  const primary = tags[i]?.primary || [];
  const context = tags[i]?.context || [];
  const bucket = classify(primary, context) || 'noQa';
  rows[bucket].push({
    idx: i,
    cards: refs.map(c => c.name).join('、'),
    primary,
    context,
    question: (e.question || '').replace(/\|/g, '｜').replace(/\n/g, ' ').slice(0, 80),
  });
}

const fmt = r =>
  `| ${r.idx} | ${r.cards} | ${r.primary.join(' / ') || '—'} | ${r.context.join(' / ') || '—'} | ${r.question} |`;

const sectionMd = (key) => `### ${BUCKETS[key]} (${rows[key].length})

| idx | カード | primary | context | 質問 |
|---|---|---|---|---|
${rows[key].slice(0, 60).map(fmt).join('\n')}
${rows[key].length > 60 ? `\n*…他 ${rows[key].length - 60} 件省略*` : ''}
`;

const md = `# QA Defense Facet Axis Audit

Generated: ${new Date().toISOString()}

cards[] に **防御ファセット軸タグ** (D=何を防ぐ / E=いつ条件 / F=誰を守る) を 1 つ以上持つ
カードが含まれる QA を、3 軸の primary/context 出現で分類した監査レポート。
Phase 33-Z 防御ファセット②再設計 ([[Phase33Z_defense_facet_redesign]]) の baseline と継続計測用。

- **MECHANISM (D)**: ${[...MECHANISM].join(' / ')}
- **WHEN (E)**:      ${[...WHEN].join(' / ')}
- **TARGET (F)**:    ${[...TARGET].join(' / ')}

## Summary

| Class | Count |
|-------|-------|
| Total Q&A entries | ${entries.length} |
| 防御主題候補 (cards[] に defense facet 持ちカードあり) | ${totalCandidate} |
${Object.keys(BUCKETS).map(k => `| ${BUCKETS[k]} | ${rows[k].length} |`).join('\n')}

## 分布

${Object.keys(BUCKETS).map(sectionMd).join('\n')}
`;

const outPath = join(ROOT, 'docs', 'qa_defense_axis_audit.md');
writeFileSync(outPath, md, 'utf-8');

console.log(`Wrote ${outPath}`);
console.log(`  total candidate: ${totalCandidate}`);
for (const k of Object.keys(BUCKETS)) {
  console.log(`  ${BUCKETS[k]}: ${rows[k].length}`);
}
