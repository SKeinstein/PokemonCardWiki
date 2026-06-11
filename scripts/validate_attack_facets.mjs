/**
 * validate_attack_facets.mjs — Phase 33-M1 validation report generator
 *
 * Checks design invariants (§3.4), runs the regression checklist (§3.5),
 * diffs section membership against the legacy tagger (git HEAD card_tags.json
 * passed as argv[2]), and aggregates facet combinations.
 *
 * Usage:
 *   git show HEAD:data/card_tags.json > /tmp/legacy_card_tags.json
 *   node scripts/validate_attack_facets.mjs /tmp/legacy_card_tags.json [report.md]
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { deriveAttackFacets } from './derive_attack_facets.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const LABELS = {
  M1: 'ワザダメージ', M2: 'ダメカンを置く', M3: 'ダメカン移動',
  T1: '即時', T2: '次の番も', T3: '特性・場', T4: '反射',
  C1: '無条件', C2: '自分の場', C3: '相手の場', C4: 'コイン',
  C5: '枚数参照', C6: '種別', C7: '特殊状態参照', C8: 'HP/ダメカン',
  S1: 'ベンチに届く', S2: '自分側', S3: 'お互い',
  G1: 'ダメージ修飾>味方の火力アップ', G2: 'ダメージ修飾>相手への被ダメ増', G3: 'ダメージ修飾>弱点・抵抗ルール改変',
};

const REGRESSION = [
  ['ヤバソチャex', 'せんじがえし', ['M2', 'T1', 'C5', 'S1']],
  ['シェイミ', 'ピンポイントダイブ', ['M1', 'T1', 'C1', 'C6', 'S1']],
  // 2026-06-11 成分分割: バニラ素点の M1/T1 はダメカン成分の notability に
  // 便乗しない (ファントムダイブ型)。M1 はダメージ成分自身が notable のときのみ
  ['ドラパルトex', 'ファントムダイブ', ['M2', 'T1', 'C1', 'S1']],
  ['テツノイワオex', 'リパルサーアックス', ['M2', 'T4', 'C1']],
  ['危ない廃墟', null, ['M2', 'T3', 'C1', 'C6', 'S1']],
  ['マシマシラ', 'アドレナブレイン', ['M3', 'T3', 'C2', 'C8', 'S1']],
  ['ウネルミナモex', 'カタルシスロアー', ['M1', 'T1', 'C7']],
  ['ヤクデ', 'ヒートダイブ', ['M1', 'T1', 'C1', 'S2']],
  ['トドロクツキ', 'あだうちやばね', ['M1', 'T1', 'C5', 'C6']],
  ['テツノカイナ', 'ちょうごうきんハンド', ['M1', 'T1', 'C6']],
];
// legacy DB errors: must stay OUT of the section
const NEGATIVE = ['イグニッションエネルギー', 'ロゼリア'];

const LEGACY_ATTACK_PARENTS = new Set([
  'ワザダメージ', 'ダメカン直置き', 'ダメカン移動', '条件ダメージ',
  '与ダメージ修飾', 'ワザを受けたとき',
]);

// ─── Run tagger ──────────────────────────────────────────────────────────────

const raw = JSON.parse(readFileSync(join(ROOT, 'data', 'card_details.json'), 'utf-8'));
const seen = new Set();
const cards = raw.filter(c => !seen.has(c.cardID) && seen.add(c.cardID));

const results = [];
for (const c of cards) {
  const r = deriveAttackFacets(c);
  results.push({ cardId: c.cardID, name: c.name, kind: c.cardKind, ...r });
}
const inSection = results.filter(r => r.facets.length);
const shelfOnly = results.filter(r => !r.facets.length && r.shelf.length);

const uniq = arr => new Set(arr.map(r => r.name)).size;

// ─── Invariants (§3.4) ───────────────────────────────────────────────────────

const violations = { I1: [], I2: [], I3: [] };
for (const r of inSection) {
  if (!r.facets.some(f => f.startsWith('M'))) violations.I1.push(r);
  if (!r.facets.some(f => f.startsWith('T'))) violations.I2.push(r);
  if (!r.facets.some(f => f.startsWith('C'))) violations.I3.push(r);
}
const shelfAndMain = results.filter(r => r.facets.length && r.shelf.length);

// ─── Regression ──────────────────────────────────────────────────────────────

const regLines = [];
let regPass = 0;
for (const [name, eff, want] of REGRESSION) {
  const entries = inSection.filter(d => d.name === name);
  const hit = eff ? entries.find(d => d.effects.some(e => e.name === eff)) : entries[0];
  if (!hit) { regLines.push(`| ✗ | ${name} ${eff || ''} | — | セクション外 |`); continue; }
  // 成分分割で同名 effect が複数になりうる → notable 成分の union で判定
  const efs = eff ? hit.effects.filter(e => e.name === eff && e.notable) : [];
  const got = efs.length ? [...new Set(efs.flatMap(e => e.facets))].sort() : hit.facets;
  const missing = want.filter(w => !got.includes(w));
  const extra = got.filter(g => !want.includes(g));
  const ok = !missing.length && !extra.length;
  if (ok) regPass++;
  regLines.push(`| ${ok ? '✓' : '✗'} | ${name} ${eff || ''} | ${got.join(' ')} | ${ok ? '' : `missing: ${missing.join(',') || '—'} / extra: ${extra.join(',') || '—'}`} |`);
}
let negPass = 0;
for (const name of NEGATIVE) {
  const leaked = inSection.find(d => d.name === name);
  if (!leaked) negPass++;
  regLines.push(`| ${leaked ? '✗' : '✓'} | ${name} (セクション外であること) | ${leaked ? leaked.facets.join(' ') : 'out'} | ${leaked ? '漏れ' : ''} |`);
}

// ─── Legacy diff ─────────────────────────────────────────────────────────────

let legacyDiff = '';
const legacyPath = process.argv[2];
if (legacyPath) {
  const legacy = Object.values(JSON.parse(readFileSync(legacyPath, 'utf-8')));
  const legacyIn = new Map();
  for (const l of legacy) {
    if ((l.tags || []).some(t => LEGACY_ATTACK_PARENTS.has(t.split('>')[0]))) legacyIn.set(l.cardId, l);
  }
  const newIds = new Set(inSection.map(r => r.cardId));
  const shelfIds = new Set(results.filter(r => r.shelf.length).map(r => r.cardId));
  const newlyIn = inSection.filter(r => !legacyIn.has(r.cardId));
  // shelf cards moved by design, they didn't disappear
  const newlyOut = [...legacyIn.values()].filter(l => !newIds.has(l.cardId) && !shelfIds.has(l.cardId));
  const movedToShelf = [...legacyIn.values()].filter(l => !newIds.has(l.cardId) && shelfIds.has(l.cardId));
  const sample = (arr, n, fmt) => [...new Map(arr.map(x => [x.name, x])).values()].slice(0, n).map(fmt).join('\n');

  legacyDiff = `## レガシー差分（手動レビュー用キュー）

旧攻撃セクション（${LEGACY_ATTACK_PARENTS.size}親タグ + 与ダメージ修飾/反射）: **${legacyIn.size}** cards → 新: **${inSection.length}** cards

### 新規に入った (${newlyIn.length} cards / ${uniq(newlyIn)} 名) — 上位30名
${sample(newlyIn, 30, r => `- ${r.name} [${r.kind}] → ${r.facets.map(f => LABELS[f]).join(' / ')}`)}

### 別棚 (G) へ移動 (${movedToShelf.length} cards / ${new Set(movedToShelf.map(l => l.name)).size} 名) — 設計どおり
${sample(movedToShelf, 15, l => `- ${l.name}`)}

### 外れた (${newlyOut.length} cards / ${new Set(newlyOut.map(l => l.name)).size} 名) — 上位40名
${sample(newlyOut, 40, l => `- ${l.name} ← 旧: ${(l.tags || []).filter(t => LEGACY_ATTACK_PARENTS.has(t.split('>')[0])).join(', ')}`)}
`;
}

// ─── Open-question buckets (excluded by current design, for vocabulary review) ─

const inIds = new Set(inSection.map(r => r.cardId));
const nozomu = [];
const kizetsu = [];
for (const c of cards) {
  if (inIds.has(c.cardID)) continue;
  const t = (c.attacks || []).map(a => a.text || '').join('\n');
  if (/のぞむなら、?\d*\s*ダメージ追加/.test(t)) nozomu.push(c.name);
  if (/きぜつさせる/.test(t)) kizetsu.push(c.name);
}

// ─── Combination stats ───────────────────────────────────────────────────────

const combos = new Map();
for (const r of inSection) {
  const key = ['M', 'T', 'C', 'S'].map(ax => r.facets.filter(f => f.startsWith(ax)).join('+') || '—').join(' | ');
  if (!combos.has(key)) combos.set(key, []);
  combos.get(key).push(r);
}
const comboRows = [...combos.entries()].sort((a, b) => b[1].length - a[1].length);

// ─── Report ──────────────────────────────────────────────────────────────────

const countRows = Object.keys(LABELS).map(id => {
  const pool = id.startsWith('G') ? results.filter(r => r.shelf.includes(id)) : inSection.filter(r => r.facets.includes(id));
  return `| ${id} | ${LABELS[id]} | ${pool.length} | ${uniq(pool)} |`;
}).join('\n');

const report = `# Phase 33-M1 検証レポート — deriveAttackFacets()

関連: [[Phase33M_attack_facet_search]], [[Phase33L_combination_stats]]

**生成**: ${new Date().toISOString().slice(0, 16).replace('T', ' ')} / \`scripts/validate_attack_facets.mjs\`

## サマリ

- スキャン: ${cards.length} cards (cardId unique)
- 攻撃セクション所属: **${inSection.length}** cards / **${uniq(inSection)}** 名 (33-L 旧集計: 1193 / 543)
- 別棚のみ (G): ${shelfOnly.length} cards / ${uniq(shelfOnly)} 名
- 回帰チェック: **${regPass}/${REGRESSION.length}** + ネガティブ ${negPass}/${NEGATIVE.length}

## 不変条件 (§3.4)

| 条件 | 結果 |
|---|---|
| I1: 群1(機構) ≥1 | ${violations.I1.length ? `✗ ${violations.I1.length}件: ${violations.I1.slice(0, 5).map(r => r.name).join(', ')}` : '✓ 違反 0'} |
| I2: 群2(タイミング) ≥1 | ${violations.I2.length ? `✗ ${violations.I2.length}件: ${violations.I2.slice(0, 5).map(r => r.name).join(', ')}` : '✓ 違反 0'} |
| I3: 群3(条件) ≥1 | ${violations.I3.length ? `✗ ${violations.I3.length}件: ${violations.I3.slice(0, 5).map(r => r.name).join(', ')}` : '✓ 違反 0'} |
| I5: 別棚と主ファセット併持 | ${shelfAndMain.length} 件（自身もダメージを与える修飾カード — 設計上許容）: ${shelfAndMain.slice(0, 8).map(r => r.name).join(', ')} |

## ファセット別件数

| ID | 仮ラベル | cards | 名 |
|---|---|---|---|
${countRows}

## 回帰チェックリスト (§3.5)

| | カード | 取得ファセット | 差分 |
|---|---|---|---|
${regLines.join('\n')}

${legacyDiff}
## 未決バケット（現設計でセクション外 — 語彙確定時に裁定）

- **のぞむなら型**（プレイヤー任意の追加ダメージ、外部条件なし → notable 不成立で除外中）: ${[...new Set(nozomu)].join(', ') || 'なし'}
- **きぜつさせる型**（即きぜつ効果 = ダメージではない。Q&A上も弱点/バリア無視の別機構。M値を追加するか除外のままか要判断）: ${[...new Set(kizetsu)].join(', ') || 'なし'}

## 組合せ分布 (M | T | C | S) — 頻度順 上位40

| 組合せ | cards | 名 | 代表 |
|---|---|---|---|
${comboRows.slice(0, 40).map(([k, v]) => `| ${k} | ${v.length} | ${uniq(v)} | ${[...new Set(v.map(r => r.name))].slice(0, 4).join(', ')} |`).join('\n')}

組合せ総数: ${comboRows.length}（頻度1-2: ${comboRows.filter(([, v]) => v.length <= 2).length}）
`;

const outPath = process.argv[3] || '/tmp/phase33M1_report.md';
writeFileSync(outPath, report);
console.log(`regression ${regPass}/${REGRESSION.length}, negative ${negPass}/${NEGATIVE.length}, section ${inSection.length} (${uniq(inSection)} names), combos ${comboRows.length}`);
console.log(`report → ${outPath}`);
