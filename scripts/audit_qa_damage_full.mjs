/**
 * audit_qa_damage_full.mjs — Phase 33-AA damage-system QA full audit (baseline)
 *
 * Design: gardener vault/10_Projects/Active/Phase33AA_llm_individual_judgment.md (drafting)
 * Source feedback: [[feedback_qa_damage_full_audit]] — ダメージ系タグ持ちポケモンに
 * 紐づくQAは「全件点検する勢いで」精査する。
 *
 * Unifies the attack (33-Y) and defense (33-Z) audits: slices QA entries whose
 * cards[] contains at least one card carrying a damage-system facet tag
 * (attack ファセット OR 防御 ファセット) and classifies by which axes appear in
 * primary/context. The "noAxis" bucket is the LLM-judgment target — QAs that
 * are topically about damage but have zero axis tag landed.
 *
 * Reads:  data/qa_entries.json, data/qa_entry_tags.json, data/card_tags.json
 * Writes: docs/qa_damage_full_audit.md
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Attack facet (33-Y baseline)
const A_MECHANIC = new Set(['ダメカンを置く', 'ダメカン移動', '反射', 'ワザダメージ']);
const A_SOURCE   = new Set(['即時', '特性・場', '次の番も']);
const A_RANGE    = new Set(['ベンチに届く', 'お互い', '自分側', 'バトル場のみ']);
const ATTACK_ALL = new Set([...A_MECHANIC, ...A_SOURCE, ...A_RANGE]);

// Defense facet (33-Z baseline)
const D_MECHANISM = new Set(['受けるダメージ軽減', '受けるダメージ無効', '効果を受けない', '特殊状態にならない']);
const D_WHEN      = new Set(['常時', '次の相手の番', 'コインしだい', '特定の相手のみ']);
const D_TARGET    = new Set(['このポケモン', '場の全員', 'ベンチ', '相手を弱める']);
const DEFENSE_ALL = new Set([...D_MECHANISM, ...D_WHEN, ...D_TARGET]);

const DAMAGE_FACET_ALL = new Set([...ATTACK_ALL, ...DEFENSE_ALL]);

const entries  = JSON.parse(readFileSync(join(ROOT, 'data', 'qa_entries.json'), 'utf-8'));
const tags     = JSON.parse(readFileSync(join(ROOT, 'data', 'qa_entry_tags.json'), 'utf-8'));
const cardTags = JSON.parse(readFileSync(join(ROOT, 'data', 'card_tags.json'), 'utf-8'));
const cardTagMap = new Map(cardTags.map(c => [c.cardId, c.tags || []]));

function hasAxis(arr, set) { return arr.some(t => set.has(t)); }

function classifyAttack(p, c) {
  const all = [...p, ...c];
  const m = hasAxis(all, A_MECHANIC);
  const s = hasAxis(all, A_SOURCE);
  const r = hasAxis(all, A_RANGE);
  if (!m && !s && !r) return null;
  if (m && s && r) return 'a_all3';
  if (m && s) return 'a_ms';
  if (m && r) return 'a_mr';
  if (s && r) return 'a_sr';
  if (m) return 'a_m';
  if (s) return 'a_s';
  return 'a_r';
}

function classifyDefense(p, c) {
  const all = [...p, ...c];
  const m = hasAxis(all, D_MECHANISM);
  const w = hasAxis(all, D_WHEN);
  const f = hasAxis(all, D_TARGET);
  if (!m && !w && !f) return null;
  if (m && w && f) return 'd_all3';
  if (m && w) return 'd_mw';
  if (m && f) return 'd_mf';
  if (w && f) return 'd_wf';
  if (m) return 'd_m';
  if (w) return 'd_w';
  return 'd_f';
}

const BUCKETS = {
  noAxis:  'noAxis: cards[] にダメージ系持ちあるが軸タグ全く立たず (★LLM個別判断 最優先)',
  a_all3:  '攻撃 3軸揃い (正常)',
  a_ms:    '攻撃 メカニクス+起動源 (範囲抜け)',
  a_mr:    '攻撃 メカニクス+範囲 (起動源抜け)',
  a_sr:    '攻撃 起動源+範囲 (メカニクス抜け)',
  a_m:     '攻撃 メカニクスのみ',
  a_s:     '攻撃 起動源のみ',
  a_r:     '攻撃 範囲のみ',
  d_all3:  '防御 3軸揃い (正常)',
  d_mw:    '防御 なに+いつ (誰抜け)',
  d_mf:    '防御 なに+誰 (いつ抜け)',
  d_wf:    '防御 いつ+誰 (なに抜け)',
  d_m:     '防御 なにのみ',
  d_w:     '防御 いつのみ',
  d_f:     '防御 誰のみ',
  mixed:   '攻撃軸+防御軸 両方ヒット (要個別判断)',
};

const rows = Object.fromEntries(Object.keys(BUCKETS).map(k => [k, []]));
let totalCandidate = 0;

for (let i = 0; i < entries.length; i++) {
  const e = entries[i];
  const refs = e.cards || [];
  if (!refs.length) continue;
  // ダメージ系候補 = cards[] にダメージ facet tag を1つでも持つカードが含まれる
  let hit = false;
  for (const ref of refs) {
    const cTags = cardTagMap.get(ref.cardId) || [];
    if (cTags.some(t => DAMAGE_FACET_ALL.has(t))) { hit = true; break; }
  }
  if (!hit) continue;
  totalCandidate++;
  const primary = tags[i]?.primary || [];
  const context = tags[i]?.context || [];
  const ac = classifyAttack(primary, context);
  const dc = classifyDefense(primary, context);
  let bucket;
  if (!ac && !dc) bucket = 'noAxis';
  else if (ac && dc) bucket = 'mixed';
  else bucket = ac || dc;
  rows[bucket].push({
    idx: i,
    cards: refs.map(c => c.name).join('、'),
    primary,
    context,
    question: (e.question || '').replace(/\|/g, '｜').replace(/\n/g, ' ').slice(0, 90),
  });
}

const fmt = r =>
  `| ${r.idx} | ${r.cards} | ${r.primary.join(' / ') || '—'} | ${r.context.join(' / ') || '—'} | ${r.question} |`;

const sectionMd = (key) => `### ${BUCKETS[key]} (${rows[key].length})

| idx | カード | primary | context | 質問 |
|---|---|---|---|---|
${rows[key].slice(0, 200).map(fmt).join('\n')}
${rows[key].length > 200 ? `\n*…他 ${rows[key].length - 200} 件省略*` : ''}
`;

const md = `# QA Damage-System Full Audit (Phase 33-AA baseline)

Generated: ${new Date().toISOString()}

cards[] に **ダメージ系ファセットタグ** (攻撃 ファセット OR 防御 ファセット) を 1 つ以上
持つカードが含まれる QA を、攻撃 3 軸 (メカニクス / 起動源 / 範囲) と防御 3 軸 (なに / いつ / 誰)
の primary・context 出現で分類した監査レポート。

Phase 33-AA (LLM 個別判断レイヤー) の baseline と継続計測用。
[[feedback_qa_damage_full_audit]] の方針 = 「全件点検する勢いで」のスキャン対象を可視化。

- **攻撃 MECHANIC**: ${[...A_MECHANIC].join(' / ')}
- **攻撃 SOURCE**:   ${[...A_SOURCE].join(' / ')}
- **攻撃 RANGE**:    ${[...A_RANGE].join(' / ')}
- **防御 MECHANISM**: ${[...D_MECHANISM].join(' / ')}
- **防御 WHEN**:      ${[...D_WHEN].join(' / ')}
- **防御 TARGET**:    ${[...D_TARGET].join(' / ')}

## Summary

| Class | Count |
|-------|-------|
| Total Q&A entries | ${entries.length} |
| ダメージ系候補 (cards[] に damage facet 持ちカードあり) | ${totalCandidate} |
${Object.keys(BUCKETS).map(k => `| ${BUCKETS[k]} | ${rows[k].length} |`).join('\n')}

## 分布

${Object.keys(BUCKETS).map(sectionMd).join('\n')}
`;

const outPath = join(ROOT, 'docs', 'qa_damage_full_audit.md');
writeFileSync(outPath, md, 'utf-8');

console.log(`Wrote ${outPath}`);
console.log(`  total candidate: ${totalCandidate}`);
for (const k of Object.keys(BUCKETS)) {
  console.log(`  ${BUCKETS[k]}: ${rows[k].length}`);
}
