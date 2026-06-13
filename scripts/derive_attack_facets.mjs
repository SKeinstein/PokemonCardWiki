/**
 * derive_attack_facets.mjs — Phase 33-M attack facet tagger (from scratch)
 *
 * Design: gardener vault/10_Projects/Active/Phase33M_attack_facet_search.md
 * Evaluates per "notable damage effect" (attack / ability / rules text),
 * card facets = union over notable effects. Vanilla attacks emit nothing.
 *
 * Facet IDs (labels TBD in 33-M1 vocabulary pass):
 *   M1 ワザダメージ / M2 ダメカン直置き / M3 ダメカン移動
 *   T1 ワザで即時 / T2 持続 / T3 特性・場で削る / T4 反射
 *   C1 無条件 / C2 自分の場 / C3 相手の場 / C4 コイン / C5 手札・トラッシュ
 *   C6 カード種別 / C7 特殊状態 / C8 HP・ダメカン
 *   S1 ベンチに届く / S2 自分側にも / S3 お互いに / S4 バトル場のみ
 *   Shelf: G1 味方の火力アップ / G2 相手への被ダメ増 / G3 弱点・抵抗ルール改変
 *
 * CLI: node scripts/derive_attack_facets.mjs  → stats to stdout,
 *      full per-card JSON to /tmp/attack_facets.json
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// ─── Text normalization ──────────────────────────────────────────────────────

// ［…］ is reminder text (e.g. ベンチは弱点・抵抗力を計算しない) — never a card power
function stripReminders(t) {
  return (t || '').replace(/［[^］]*］/g, '').replace(/\[[^\]]*\]/g, '');
}

function toHalfWidth(t) {
  return t.replace(/[０-９]/g, d => String.fromCharCode(d.charCodeAt(0) - 0xfee0));
}

function norm(t) {
  return toHalfWidth(stripReminders(t));
}

// ─── Effect extraction ───────────────────────────────────────────────────────

export function extractEffects(card) {
  const effects = [];
  for (const a of card.attacks || []) {
    effects.push({ src: 'attack', name: a.name || '', damage: String(a.damage || ''), text: norm(a.text) });
  }
  for (const a of card.abilities || []) {
    effects.push({ src: 'ability', name: a.name || '', damage: '', text: norm(a.text) });
  }
  // Trainer/energy cards carry their power in rules[]; pokemon rules[] are
  // boilerplate (ex rule, tera rule) and never grant offensive damage
  if (!(card.attacks || []).length && !(card.abilities || []).length) {
    const t = (card.rules || []).map(norm).join('\n');
    if (t) effects.push({ src: 'rules', name: card.name || '', damage: '', text: t });
  } else if ((card.rules || []).length && /エネルギー/.test(card.cardKind || card.card_kind || '')) {
    const t = (card.rules || []).map(norm).join('\n');
    effects.push({ src: 'rules', name: card.name || '', damage: '', text: t });
  }
  return effects;
}

// ─── Per-effect facet detection ──────────────────────────────────────────────

const RE = {
  // offensive damage in text (deal, not receive/reduce)
  dealDamage: /(?:に、?[^。]{0,14}?\d+ダメージ|\d+ダメージ追加|ダメージを与える|\d+ダメージを[^。]{0,25}与える|\d+ダメージ受ける。?その後)/,
  receiveOnly: /ダメージを受けない|ダメージは、?なくなる|ダメージを「?[-−]/,

  counterPlace: /ダメカンを.{0,30}のせる|ダメカン\s*を?\s*\d+個/,
  // のせ替えられない = 移動禁止の妨害特性 (ミネズミ) — 移動ではない
  counterMove: /のせ替え(?!られない)|ダメカンを.{0,25}(?:移|うつ)す/,

  reflect: /(?:ワザの)?ダメージを受けたとき[^。]{0,80}(?:ダメージ|ダメカン)/,
  // 持続は攻撃文のみ: 遅延ダメージ (ダメカンのせる/Nダメージ) と次の番の自己火力バフ。
  // 「受けるダメージ-N」「ダメージを受けない」等の防御持続は defensiveClause で除去済みだが、
  // マッギョ型「受けたポケモンが受けるダメージ+N」(G2脆弱化) を拾わないよう
  // バフ側は「使うワザの/の「ワザ名」の」を必須にする
  lingering: /次の(?:自分|相手)の番[^。]{0,60}(?:ダメカンを[^。]{0,15}のせる|に、?\d+ダメージ|\d+ダメージ追加)|次の自分の番、?[^。]{0,40}(?:使うワザの|の「[^」]{1,25}」の)[^。]{0,30}ダメージは「?(?:[+＋]|\d+」?になる)/,
  turnEnd: /番の終わり/,

  // 防御・耐性の文 (受ける側) — 攻撃ファセットの解析対象から文単位で除去する
  defensiveClause: /(?:ダメージ|ダメージや効果)を受けない|受けるワザのダメージは「?[-−]|使うワザのダメージは「?[-−]/,

  coin: /コインを[^。]{0,15}投げ[\s\S]{0,60}?(?:ダメージ|ダメカン|失敗|きぜつ)/,
  // 「手札がN枚でないなら失敗」(アローラダグトリオ/チャーレム) と
  // 「トラッシュした場合、Nダメージ追加」(ミガルーサex) も枚数条件 (2026-06-12 タグゼロ監査)
  // 「手札が1枚もないなら」(ヤドラン M5) — 2026-06-13 新弾監査
  handTrash: /(?:手札|トラッシュ|サイド)[^。]{0,50}(?:枚数|の数)|枚数×|その枚数ぶん|トラッシュできないなら、?このワザは失敗|(?:手札|トラッシュ|サイド|山札)(?:の残り)?(?:枚数)?が?\d+枚(?:以下|以上|でないなら|もないなら)|トラッシュした場合、?\d+ダメージ追加/,
  // 「ポケモンがポケモンなら」「（ポケモンをのぞく）」= scraper drops styled
  // ex/V markup (data bug, see 33-M1 report) — the redundant phrasing implies
  // a lost type suffix, so treat as card-type reference
  cardType: /ポケモン(?:ex|EX|V(?![ァ-ヶA-Za-z])|ＶMAX)|「?(?:ex|Ｖ)(?:・|か)V?」|テラスタル|「古代」|「未来」|ルールを持つ|たねポケモン|進化ポケモン|\d進化|ポケモンがポケモン(?:なら|のとき)|（ポケモンをのぞく）/,
  // 否定形「やけどでないなら、このワザは失敗」(バクーダ) も状態参照 — 2026-06-13 全精査
  special: /(?:どく|やけど|ねむり|マヒ|こんらん|特殊状態)(?:状態)?(?:である|で)?(?:ない)?(?:なら|のとき|になっているなら)/,
  hpRef: /残りHP|HPが[^。]{0,15}(?:以下|以上)|ダメカンがのってい(?:る|ない)|のっているダメカンの数|にのっているダメカンを/,

  // 「ついているエネルギー」(裸) は不採用 — エネ操作の副作用文 (ゲンガーex「ついている
  // エネルギーを1個選び、つけ替える」/ドサイドン「…トラッシュする」) を条件と誤認する。
  // 枚数参照は「エネルギーの数/個数/枚数」ブランチが受け持つ。
  // oppBoard の窓は「このポケモン」をまたがない (タケルライコ「相手のポケモン1匹に、
  // このポケモンについているエネルギーの数×30」= 自エネ参照、C3 ではない)
  myBoard: /自分の(?:場|ベンチ|バトルポケモン|ポケモン|トラッシュ)[^。]{0,40}(?:の数|全員の|いる(?:なら|とき)|ある(?:なら|とき)|ついているなら|\d+匹以(?:下|上))|自分の[^。]{0,25}エネルギーの(?:数|個数|枚数)|このポケモンについている[^。]{0,12}エネルギーの数|このポケモンに[^。]{0,20}ついているなら|ベンチから(?:バトル場に)?出(?:た番|ていた)なら|から進化した番なら|進化していたなら|使ってい(?:たなら|なければ)|HPを回復していたなら|場に[^。]{0,6}スタジアムが出ているなら|自分の[^。]{0,25}きぜつしていたなら|多くエネルギーがついているなら/,
  oppBoard: /相手の(?:場|ベンチ|バトルポケモン|ポケモン|トラッシュ)(?:(?!このポケモン)[^。]){0,40}(?:の数|全員の|いる(?:なら|とき)|ある(?:なら|とき)|が?\d個以上|ついているなら)|相手の(?:(?!このポケモン)[^。]){0,25}エネルギーの(?:数|個数|枚数)|相手の[^。]{0,20}(?:弱点|抵抗力)が|相手の[^。]{0,25}にげるためのエネルギーが(?:ない|\d個)/,

  // 着弾先は与格「に」必須 (ダダリン「ベンチにポケモンがいるなら+80」/ディアンシー
  // 「相手のポケモン全員についている…枚数×40」のような条件参照文を弾く)。
  // 「に、」(読点付き) は着弾確定 — 挿入句 (シロデスナ「それぞれ残りHPが…になるように、」/
  // タケルライコ「に、このポケモンについている…の数×30ダメージ」) を制限なしで許す。
  // 読点なしの「に」直結は参照マーカー (ついている/のっている/なら/の数/枚数) を禁止。
  // 逆順形「ダメカン/ダメージを、相手のポケモン1匹にのせる/与える」(ヤバソチャ/ウミトリオex)
  // は別パターン。
  // 着弾語は動作形のみ: 「Nダメージ」「ダメージを与え」「ダメカンを」。
  // 「ダメカンがのっている」(状態参照、イダイナキバ/シザリガー) は着弾でない。
  benchHit: /ベンチ(?:の)?[^。]{0,12}?ポケモン(?:\d匹|全員)?[^。]{0,8}?に(?:も)?(?:、[^。]{0,30}?|(?:(?!ついている|のっている|なら|の数|枚数)[^。]){0,25})(?:\d+ダメージ|ダメージを与え|ダメカンを)|(?:ダメカン|ダメージ)[^。]{0,30}?(?:ベンチ(?:の)?[^。]{0,10}?ポケモン|相手の(?:場の)?ポケモン(?:\d匹|全員)?)[^。]{0,4}?に、?[^。]{0,10}?(?:のせ|与え)|相手の(?:場の)?ポケモン(?:\d匹|全員)[^。]{0,8}?に(?:も)?(?:、[^。]{0,30}?|(?:(?!ついている|のっている|なら|の数|枚数)[^。]){0,25})(?:\d+ダメージ|ダメージを与え|ダメカンを|のせ替え)/,
  selfHit: /このポケモンにも|このポケモン(?:本体)?に、?\d*(?:ダメカンを|ダメージ)|自分の(?:ベンチの?)?(?:バトル)?ポケモン(?:\d匹|全員)?[^。]{0,8}?に(?:も)?(?:、[^。]{0,30}?|(?:(?!ついている|のっている|なら|の数|枚数)[^。]){0,25})(?:\d+ダメージ|ダメージを与え|ダメカンを)|(?:ダメカン|ダメージ)[^。]{0,30}?(?:自分の(?:ベンチの?)?[^。]{0,8}?ポケモン(?:\d匹|全員)?|このポケモン)[^。]{0,4}?に、?[^。]{0,10}?(?:のせ|与え)/,
  // おたがい参照 (オーガポン「おたがいの…エネルギーの数×」) は C2+C3 であって S3 でない —
  // S3 も着弾の対象文法必須 (エモンガ「おたがいのベンチポケモン全員にも、それぞれ10ダメージ」)
  mutualHit: /おたがいの[^。]{0,12}?ポケモン[^。]{0,20}?に(?:も)?(?:、[^。]{0,30}?|(?:(?!ついている|のっている|なら|の数|枚数)[^。]){0,25})(?:\d+ダメージ|ダメージを与え|ダメカンを)/,

  buffAlly: /ワザの[^。]{0,40}ダメージ[^。]{0,15}[+＋]\d+|与えるダメージ[^。]{0,10}[+＋]\d+/,
  debuffOpp: /受けるワザのダメージ(?:は|を)[^。]{0,10}[+＋]\d+/,
  ruleChange: /(?:弱点|抵抗力)[^。]{0,20}(?:計算しない|なくな)/,

  // amount varies: "80＋"/"30×" damage field, or 追加/×N/受けたダメージぶん in text
  variableDmg: /\d+ダメージ追加|ダメージ追加|×\s*\d|\d\s*×|個ぶんのダメカン|枚ぶんのダメカン|数ぶん|ダメージぶん/,
};

function detectMechanisms(e) {
  const m = new Set();
  const baseDmg = /^\d+/.test(e.damage) && parseInt(e.damage, 10) > 0;
  if (e.src === 'attack' && (baseDmg || RE.dealDamage.test(e.text))) m.add('M1');
  if (e.src !== 'attack' && RE.dealDamage.test(e.text) && !RE.receiveOnly.test(e.text)) m.add('M1');
  if (RE.counterMove.test(e.text)) m.add('M3');
  else if (RE.counterPlace.test(e.text)) m.add('M2');
  return m;
}

function detectTiming(e, mech) {
  const t = new Set();
  if (RE.reflect.test(e.text)) t.add('T4');
  if (e.src === 'attack') {
    if (RE.lingering.test(e.text) && !t.has('T4')) t.add('T2');
    if (RE.turnEnd.test(e.text)) t.add('T3');
    const baseDmg = /^\d+/.test(e.damage) && parseInt(e.damage, 10) > 0;
    const immediate = baseDmg || ((mech.size > 0) && !t.size);
    if (immediate) t.add('T1');
  } else if (!t.has('T4')) {
    t.add('T3');
  }
  return t;
}

function detectConditions(e) {
  const c = new Set();
  if (RE.coin.test(e.text)) c.add('C4');
  if (RE.handTrash.test(e.text)) c.add('C5');
  if (RE.cardType.test(e.text)) c.add('C6');
  if (RE.special.test(e.text)) c.add('C7');
  if (RE.hpRef.test(e.text)) c.add('C8');
  if (RE.myBoard.test(e.text)) c.add('C2');
  if (RE.oppBoard.test(e.text)) c.add('C3');
  // 「おたがいの…全員に」は着弾の全称量化 (S3側) — 参照は「の数」のみ
  if (/おたがいの[^。]{0,30}の数/.test(e.text)) { c.add('C2'); c.add('C3'); }
  return c;
}

function detectScope(e) {
  const s = new Set();
  if (RE.mutualHit.test(e.text)) s.add('S3');
  if (RE.benchHit.test(e.text)) s.add('S1');
  if (RE.selfHit.test(e.text)) s.add('S2');
  return s;
}

// C1: has a damage output whose AMOUNT does not depend on references.
// Targeting restrictions (C6 ③) do not break C1 — C1 asks "is the number
// stable", C6 asks "does it interact with card types" (design §3.3).
// Any non-C6 condition (coin failure, board count, …) makes the amount
// unstable even when the printed number is fixed (ウラなら失敗型).
// Counter movement (M3) is never C1: it depends on counters already in play.
// 可変マーカー (×N / 受けたダメージぶん 等) も量が不定なので C1 不成立 —
// ザマゼンタ型の可変反射 / ウネルミナモ型の自己ダメカン連動 (2026-06-12)。
// fixed amount + C6 targeting keeps C1 (シェイミ型)。
function isAmountStable(e, conds, mech) {
  if (mech.has('M3')) return false;
  if ([...conds].some(c => c !== 'C6')) return false;
  const variable = /[+×]/.test(e.damage) || RE.variableDmg.test(e.text);
  return !variable;
}

// ─── Shelf (G) detection — card level, modifiers not dealers ────────────────

// 「ベンチは弱点・抵抗力を計算しない」は標準ルールの注記 (通常は［］で除去されるが
// キチキギスex等は括弧がスクレイプ時に欠落) — G3 のルール改変ではないので落とす
function stripBenchNote(t) {
  return t.replace(/ベンチは弱点・抵抗力を計算しない。?/g, '');
}

function detectShelf(card) {
  const g = new Set();
  const kind = card.cardKind || card.card_kind || '';
  const texts = [];
  for (const a of card.abilities || []) texts.push(norm(a.text));
  if (/グッズ|サポート|スタジアム|どうぐ|エネルギー/.test(kind)) {
    for (const r of card.rules || []) texts.push(norm(r));
  }
  const t = stripBenchNote(texts.join('\n'));
  if (RE.debuffOpp.test(t)) g.add('G2');
  else if (RE.buffAlly.test(t)) g.add('G1');
  if (RE.ruleChange.test(t)) g.add('G3');
  // attacks can also debuff (ビブラーバ型) or change weakness/resistance
  // rules (ウソッキー型); ally-buff from own attack text is T2 main, not G1
  for (const a of card.attacks || []) {
    const at = stripBenchNote(norm(a.text));
    if (RE.debuffOpp.test(at)) g.add('G2');
    if (RE.ruleChange.test(at)) g.add('G3');
  }
  return g;
}

// ─── Per-card derivation ─────────────────────────────────────────────────────

// ファントムダイブ型対策 (2026-06-11): 素点ダメージ(バニラ成分)とダメカン・反射文
// (notable成分)が1ワザに同居すると、effect 単位の union で M1/T1 が漏れて
// 「あらゆる攻撃カードがワザダメージを持つべき」事態になる。ワザの文をダメカン側と
// ダメージ側に分け、機構/タイミング/範囲は成分ごとに評価する。条件はワザ全体に
// かかりうる(ウラなら失敗 等)ため、ダメカン成分の条件検出はワザ全文 (condText) で行う。
function splitComponents(e) {
  if (e.src !== 'attack') return [e];
  const counter = [];
  const rest = [];
  for (const s of e.text.split('。')) {
    if (!s) continue;
    const isCounter = RE.reflect.test(s) || RE.counterMove.test(s) || RE.counterPlace.test(s);
    // 融合文 (ウネルミナモ型「ダメカンをのせ、のせた数×20ダメージ」) は
    // ダメージ自体も notable なので両成分に属させる
    if (isCounter && /×\s*\d+ダメージ|\d+ダメージ追加/.test(s)) { counter.push(s); rest.push(s); continue; }
    (isCounter ? counter : rest).push(s);
  }
  if (!counter.length) return [e];
  const dmgComp = { ...e, text: rest.join('。') };
  const baseDmg = /^\d+/.test(e.damage) && parseInt(e.damage, 10) > 0;
  if (!baseDmg && !RE.dealDamage.test(dmgComp.text)) return [e]; // ダメージ成分なし → 分割不要
  return [dmgComp, { ...e, damage: '', text: counter.join('。'), condText: e.text }];
}

export function deriveAttackFacets(card) {
  const effects = [];
  for (const raw of extractEffects(card)) {
    // 防御文を文単位で落としてから解析 (攻撃ファセットは攻撃文だけを見る)
    const base = {
      ...raw,
      text: raw.text.split('。').filter(s => !RE.defensiveClause.test(s)).join('。'),
    };
    for (const e of splitComponents(base)) {
      const mech = detectMechanisms(e);
      if (!mech.size) continue;
      const timing = detectTiming(e, mech);
      const conds = detectConditions(e.condText ? { ...e, text: e.condText } : e);
      const scope = detectScope(e);
      if (isAmountStable(e, conds, mech)) conds.add('C1');

      // §3.2 notable: vanilla (M1 + T1-only + amount-stable-no-real-cond + no scope) is invisible
      const realConds = [...conds].filter(c => c !== 'C1');
      const notable =
        mech.has('M2') || mech.has('M3') ||
        timing.has('T2') || timing.has('T3') || timing.has('T4') ||
        realConds.length > 0 ||
        scope.size > 0;

      // Phase 33-X (1-B): S1(ベンチに届く)/S3(お互い) の対義タグ S4(バトル場のみ) を
      // 対称導入。notable な effect で着弾が相手バトル場止まりのときに発行 — フーディン
      // 「ハンドパワー」とユクシー「いたみのきおく」を区別し、バトルコロシアム/ばけがくれ
      // 系 QA の primary `バトル場のみ` に届くようにする。
      if (notable && !scope.has('S1') && !scope.has('S3')) scope.add('S4');

      effects.push({ src: e.src, name: e.name, notable, facets: [...mech, ...timing, ...conds, ...scope].sort() });
    }
  }

  const facets = new Set();
  for (const ef of effects) {
    if (ef.notable) for (const f of ef.facets) facets.add(f);
  }
  const shelf = detectShelf(card);
  return { facets: [...facets].sort(), shelf: [...shelf].sort(), effects };
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

if (process.argv[1] && process.argv[1].endsWith('derive_attack_facets.mjs')) {
  const raw = JSON.parse(readFileSync(join(ROOT, 'data', 'card_details.json'), 'utf-8'));
  const seen = new Set();
  const cards = raw.filter(c => !seen.has(c.cardID) && seen.add(c.cardID));

  const out = [];
  const counts = {};
  let inSection = 0;
  for (const c of cards) {
    const r = deriveAttackFacets(c);
    if (!r.facets.length && !r.shelf.length) continue;
    if (r.facets.length) inSection++;
    for (const f of [...r.facets, ...r.shelf]) counts[f] = (counts[f] || 0) + 1;
    out.push({ cardId: c.cardID, name: c.name, kind: c.cardKind, facets: r.facets, shelf: r.shelf, effects: r.effects });
  }

  writeFileSync('/tmp/attack_facets.json', JSON.stringify(out, null, 1));
  console.log(`cards scanned: ${cards.length}, in attack section: ${inSection}`);
  for (const k of Object.keys(counts).sort()) console.log(`  ${k}: ${counts[k]}`);
  console.log('full data → /tmp/attack_facets.json');
}
