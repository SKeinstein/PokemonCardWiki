/**
 * derive_defense_facets.mjs — Phase 33-N defense facet tagger
 *
 * Design: gardener vault/10_Projects/Active/Phase33N_defense_facet_search.md
 * Mirrors derive_attack_facets.mjs: evaluates per defensive clause
 * (sentence-level), card facets = union over clauses.
 *
 * Facet IDs → labels (tag_cards.mjs DEFENSE_FACET_LABELS):
 *   D1 受けるダメージ軽減 / D2 受けるダメージ無効 / D3 効果を受けない / D4 特殊状態にならない
 *   E1 常時 / E2 次の相手の番 / E3 コインしだい / E4 特定の相手のみ
 *   F1 このポケモン / F2 場の全員 / F3 ベンチ / F4 相手を弱める
 *
 * CLI: node scripts/derive_defense_facets.mjs  → stats to stdout,
 *      full per-card JSON to /tmp/defense_facets.json
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// ─── Text normalization ──────────────────────────────────────────────────────

// ［…］ is reminder text (e.g. ワザのダメージは受ける) — never a card power
function stripReminders(t) {
  return (t || '').replace(/［[^］]*］/g, '').replace(/\[[^\]]*\]/g, '').replace(/（[^）]*）/g, '');
}

function toHalfWidth(t) {
  return t.replace(/[０-９]/g, d => String.fromCharCode(d.charCodeAt(0) - 0xfee0));
}

function norm(t) {
  return toHalfWidth(stripReminders(t));
}

// ─── Clause-level patterns ───────────────────────────────────────────────────

const RE = {
  // D1: printed "-N" reduction — covers self (受ける) and mirror (使う) directions.
  // きのみ型「ダメージを受けるとき、そのダメージは「-60」され」も含む (2026-06-12 タグゼロ監査)
  reduce: /(?:受ける|使う)ワザのダメージは「-\d+」される|受けるダメージは[^。]{0,10}少なくな|ダメージを受けるとき、?そのダメージは「-\d+」され/,
  // D2: damage fully prevented (ワザのダメージ(や効果)を受けない / ダメカンがのらない)
  negate: /ワザのダメージ(?:や効果)?を受けない|ダメカンがのらない/,
  // D3: effect immunity — ワザの効果 / グッズ・サポートの効果 / 「ダメージや効果」の効果部分
  // 「ワザや特性の効果を受けない」(カゲボウズ M5)・「特性の効果を受けない」(メガピクシーex ひかりのつばさ) — 2026-06-13
  effectImmune: /(?:ワザの|ワザや特性の|特性の)(?:ダメージや)?効果を受けない|(?:グッズまたはサポート|手札からサポート|グッズ)を出して使ったとき[^。]{0,30}効果を受けない/,
  // D4: special-condition immunity (全状態 or 個別状態)
  statusImmune: /特殊状態に(?:は)?なら(?:ない|ず)|(?:どく|やけど|ねむり|マヒ|こんらん)(?:や(?:どく|やけど|ねむり|マヒ|こんらん))?に(?:は)?なら(?:ない|ず)/,

  // E2: granted by own attack, lasts through opponent's next turn
  nextTurn: /次の(?:相手|自分)の番/,
  // E3: coin gate on the protection clause
  coin: /コインを[^。]{0,10}投げ/,
  // E4: only blocks attackers of a stated class (ex / V / 特性持ち / テラスタル /
  //     たね・進化 / 古代・未来 / 特殊エネ付き) or attacks by damage threshold
  attackerLimited: /「ポケモンex(?:・V)?」(?:から|の)|「ポケモンV」(?:から|の)|特性を持つポケモンから|「テラスタル」のポケモンから|(?:たね|進化)ポケモンから|「(?:古代|未来)」のポケモンから|特殊エネルギーがついている[^。]{0,12}ポケモンから|「\d+」以(?:上|下)のワザのダメージ/,

  // F4: mirror — weakens the attacker instead of armoring the defender
  mirror: /このワザを受けたポケモンが[^。]{0,10}使うワザのダメージ/,
  // F3a: bench-wide protection (ベラカス / シェイミ / バトルコロシアム)
  benchAll: /ベンチポケモン[^。]{0,25}?(?:全員|は|に)/,
  // F3b: safe while sitting on the bench (チャデス / 化石); only when the clause
  //      protects the sitter itself — 「このポケモンがベンチにいるかぎり、全員…」
  //      (ダイゴのメレシー) is a protector-position condition, not a bench shield
  benchSelf: /ベンチにいるかぎり/,
  // F2: whole-field protection (自分の/おたがいの …全員, フルメタルラボの無印「ポケモンが」)
  //     ベンチポケモン全員 は F3 側 — 自分の〜全員 の間に「ベンチ」を挟まない
  fieldAll: /(?:自分の|おたがいの)(?:(?!ベンチ)[^。]){0,25}ポケモン」?全員|おたがいのポケモンが/,
  // F1: the card itself / the holder of a tool・energy / fossil rules text
  self: /このポケモン(?:は|が|に|も)|このカードをつけているポケモン|つけているポケモン(?:は|が)|このカードは/,
};

// ─── Effect extraction ───────────────────────────────────────────────────────

// Unlike the attack extractor, rules[] are always scanned: fossils keep their
// 特殊状態にならず clause in rules even though they also have abilities, and
// pokemon boilerplate (ex rule) never matches a defensive pattern anyway.
function extractEffects(card) {
  const effects = [];
  for (const a of card.attacks || []) {
    effects.push({ src: 'attack', name: a.name || '', text: norm(a.text) });
  }
  for (const a of card.abilities || []) {
    effects.push({ src: 'passive', name: a.name || '', text: norm(a.text) });
  }
  const rul = (card.rules || []).map(norm).join('\n');
  if (rul) effects.push({ src: 'passive', name: card.name || '', text: rul });
  return effects;
}

// ─── Per-clause detection ────────────────────────────────────────────────────

function detectMechanisms(clause) {
  const m = new Set();
  if (RE.reduce.test(clause)) m.add('D1');
  if (RE.negate.test(clause)) m.add('D2');
  if (RE.effectImmune.test(clause)) m.add('D3');
  if (RE.statusImmune.test(clause)) m.add('D4');
  return m;
}

function detectTiming(clause, src) {
  const t = new Set();
  if (RE.nextTurn.test(clause)) t.add('E2');
  else if (src === 'passive') t.add('E1');
  if (RE.coin.test(clause)) t.add('E3');
  if (RE.attackerLimited.test(clause)) t.add('E4');
  return t;
}

function detectTarget(clause) {
  const f = new Set();
  if (RE.mirror.test(clause)) f.add('F4');
  const benchGroup = RE.benchAll.test(clause);
  const fieldGroup = RE.fieldAll.test(clause);
  if (benchGroup) f.add('F3');
  if (fieldGroup) f.add('F2');
  // ベンチにいるかぎり is a bench shield only for the sitter itself —
  // when the clause protects 全員, it is the protector's position condition
  if (RE.benchSelf.test(clause) && !fieldGroup) f.add('F3');
  // 全員型の保護対象がいるクラスでは「このポケモンが(いるかぎり)」は発動条件
  // (ベラカス/ドサイドン/ダイゴのメレシー) であって保護対象ではない
  if (RE.self.test(clause) && !benchGroup && !fieldGroup && !f.has('F4')) f.add('F1');
  if (!f.size) f.add('F1');
  return f;
}

// ─── Per-card derivation ─────────────────────────────────────────────────────

export function deriveDefenseFacets(card) {
  const facets = new Set();
  const clausesHit = [];
  for (const e of extractEffects(card)) {
    for (const clause of e.text.split(/[。\n]/)) {
      if (!clause) continue;
      const mech = detectMechanisms(clause);
      if (!mech.size) continue;
      const timing = detectTiming(clause, e.src);
      const target = detectTarget(clause);
      for (const id of [...mech, ...timing, ...target]) facets.add(id);
      clausesHit.push({ src: e.src, name: e.name, clause, facets: [...mech, ...timing, ...target].sort() });
    }
  }
  return { facets: [...facets].sort(), clauses: clausesHit };
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

if (process.argv[1] && process.argv[1].endsWith('derive_defense_facets.mjs')) {
  const raw = JSON.parse(readFileSync(join(ROOT, 'data', 'card_details.json'), 'utf-8'));
  const seen = new Set();
  const cards = raw.filter(c => !seen.has(c.cardID) && seen.add(c.cardID));

  const out = [];
  const counts = {};
  for (const c of cards) {
    const r = deriveDefenseFacets(c);
    if (!r.facets.length) continue;
    for (const f of r.facets) counts[f] = (counts[f] || 0) + 1;
    out.push({ cardId: c.cardID, name: c.name, kind: c.cardKind, facets: r.facets, clauses: r.clauses });
  }

  writeFileSync('/tmp/defense_facets.json', JSON.stringify(out, null, 1));
  console.log(`cards scanned: ${cards.length}, in defense section: ${out.length}`);
  for (const k of Object.keys(counts).sort()) console.log(`  ${k}: ${counts[k]}`);
  console.log('full data → /tmp/defense_facets.json');
}
