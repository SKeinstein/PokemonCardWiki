/**
 * tag_cards.mjs
 * Scans data/card_details.json (deduplicated by cardId) and assigns group tags
 * based on docs/group_categories_proposal.md.
 *
 * Outputs:
 *   - data/card_tags.json  : [{ cardId, name, tags }]
 *   - docs/tagging_stats.md: per-group counts and example cards
 *
 * Run from project root: node scripts/tag_cards.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { deriveAttackFacets } from './derive_attack_facets.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Phase 33-M: 攻撃セクション ファセット ──────────────────────────────────
// 設計: gardener vault Phase33M_attack_facet_search.md
// 攻撃セクションのタグは deriveAttackFacets() のファセットタグ
// （フラット・サブなし）のみ。旧攻撃タグの生成コードは 33-M4 で削除済み。

// C7 は既存の付与系親タグ「特殊状態」と衝突するため「特殊状態参照」とする。
const FACET_LABELS = {
  M1: 'ワザダメージ', M2: 'ダメカンを置く', M3: 'ダメカン移動',
  T1: '即時', T2: '次の番も', T3: '特性・場', T4: '反射',
  C1: '無条件', C2: '自分の場', C3: '相手の場', C4: 'コイン',
  C5: '枚数参照', C6: '種別', C7: '特殊状態参照', C8: 'HP/ダメカン',
  S1: 'ベンチに届く', S2: '自分側', S3: 'お互い',
  // 別棚は通常の 親>サブ 木（2026-06-10 ユーザー判断）
  G1: 'ダメージ修飾>味方の火力アップ', G2: 'ダメージ修飾>相手への被ダメ増', G3: 'ダメージ修飾>弱点・抵抗ルール改変',
};

function applyAttackFacets(tags, { facets, shelf }) {
  for (const f of facets) tags.add(FACET_LABELS[f]);
  for (const g of shelf) {
    tags.add('ダメージ修飾');
    tags.add(FACET_LABELS[g]);
  }
}

// ─── Load & deduplicate ──────────────────────────────────────────────────────
const raw = JSON.parse(readFileSync(join(ROOT, 'data', 'card_details.json'), 'utf-8'));
const seen = new Set();
const cards = [];
for (const c of raw) {
  if (!seen.has(c.cardID)) {
    seen.add(c.cardID);
    cards.push(c);
  }
}
console.log(`Loaded ${raw.length} entries → ${cards.length} unique cards`);

// ─── Text helpers ────────────────────────────────────────────────────────────
function allText(c)     { return textOf(c.attacks).concat(textOf(c.abilities)).concat(c.rules || []).join('\n'); }
function attackText(c)  { return textOf(c.attacks).join('\n'); }
function abilityText(c) { return textOf(c.abilities).join('\n'); }
function rulesText(c)   { return (c.rules || []).join('\n'); }
function textOf(arr)    { return (arr || []).map(a => a.text || '').filter(Boolean); }

// ─── Declarative tag rules ────────────────────────────────────────────────────
// Bench damage bracket (full-width square brackets in actual data)
// ダメカン反射型: ダメージを受けたとき攻撃側ポケモンにダメカンをのせる
const HANSHA_PAT = /ワザのダメージを受けたとき.{1,80}ダメカンを.{1,30}のせる|ワザを使ったポケモンにダメカンを.{1,20}のせ/;

// Clause-level filters (議題3 誤分類修正の基盤、Phase 33-C)
// 節境界は 。 と 改行。「相手」を含まない節 = 自分/場参照側、含む節 = 相手参照側として判定する。
const splitClauses = (text) => text.split(/[。\n]/);
const matchSelfClause = (text, re) => splitClauses(text).some(s => !/相手/.test(s) && re.test(s));
const matchOppClause  = (text, re) => splitClauses(text).some(s =>  /相手/.test(s) && re.test(s));

// Each rule: { tags: string | string[], condition: (all, atk, abl, name, rul, c) => boolean }
// The main loop calls add(...[rule.tags].flat()) when condition returns true.
const TAG_RULES = [
  // ── §1  ポケモンいれかえ ─────────────────────────────────────────────────
  // §1-A  自分: このポケモン（攻撃者）がワザ効果でベンチと入れ替わる
  {
    tags: ['ポケモンいれかえ', 'ポケモンいれかえ>自分'],
    condition: (all, atk) =>
      /このポケモンをベンチポケモンと入れ替える/.test(atk),
  },
  // §1-B  味方: グッズ/サポート/スタジアム/特性で自分のバトルポケモンをベンチと交代させる
  {
    tags: ['ポケモンいれかえ', 'ポケモンいれかえ>味方'],
    condition: (all, atk, abl, name) =>
      /ベンチ.{1,15}ポケモン.{1,5}バトルポケモンと入れ替える/.test(abl) ||
      /(?<!相手の)バトルポケモンをベンチポケモンと入れ替える/.test(abl) ||
      ['ポケモンいれかえ', 'スクランブルスイッチ', 'なみのりビーチ', 'サーファー'].includes(name),
  },
  // §1-C  相手:C-04型（相手バトル→ベンチ、次を相手が選ぶ）
  {
    tags: ['ポケモンいれかえ', 'ポケモンいれかえ>相手:C-04型'],
    condition: (all) =>
      /相手のバトルポケモンをベンチポケモンと入れ替える/.test(all) ||
      /相手は.{1,10}バトルポケモンをベンチポケモンと入れ替える/.test(all),
  },
  // §1-D  相手:C-05型（相手ベンチ→バトル、自分が指定）
  {
    tags: ['ポケモンいれかえ', 'ポケモンいれかえ>相手:C-05型'],
    condition: (all, atk, abl, name) =>
      /相手のベンチポケモンを.{1,10}選び.{1,20}バトルポケモンと入れ替える/.test(all) ||
      /相手のベンチポケモンを選ぶ/.test(all) ||
      ['ボスの指令', 'ポケモンキャッチャー', 'プライムキャッチャー'].includes(name) ||
      name.startsWith('ボスの指令'),
  },
  // §1-E  バウンス: 相手ポケモンをカードごと山札に戻す
  {
    tags: ['ポケモンいれかえ', 'ポケモンいれかえ>バウンス'],
    condition: (all) => /ベンチポケモン.{1,20}すべてのカードごと山札にもどして切る|すべてのカードごと山札にもどして切る/.test(all),
  },

  // ── §3  手札干渉 ──────────────────────────────────────────────────────────
  // §3-1  相手の手札を見る
  {
    tags: ['手札干渉', '手札干渉>手札を見る'],
    condition: (all) =>
      /相手の手札を見る/.test(all) ||
      /相手の手札を見て/.test(all),
  },
  // §3-2  トラッシュさせる
  {
    tags: ['手札干渉', '手札干渉>トラッシュ'],
    condition: (all) =>
      /相手の手札から.{1,30}トラッシュ/.test(all) ||
      /相手.{1,5}手札.{1,10}オモテを見ないで.{1,10}選び.{1,20}トラッシュ/.test(all) ||
      /相手は自身の手札を.{1,20}トラッシュ/.test(all) ||
      /相手の手札を見て.{0,50}トラッシュ/.test(all) ||
      // 「相手は相手自身の手札を〜トラッシュ」型 (e.g. エンニュート, クセロシキのたくらみ, メグロコ, ワルビル, ワルビアル)
      /相手は相手自身の手札を.{1,30}トラッシュ/.test(all),
  },
  // §3-3  山札に戻させる
  {
    tags: ['手札干渉', '手札干渉>山札戻し'],
    condition: (all, atk, abl, name) =>
      /相手の手札.{1,15}山札にもどして切る/.test(all) ||
      /相手の手札を.{1,15}山札に戻す/.test(all) ||
      // Pattern for "相手自身の手札" phrasing (e.g. ゴチルゼル「ねじれたみらい」, ジュペッタ「のろいのことば」)
      /相手は相手自身の手札.{1,30}山札にもどして切る/.test(all) ||
      // Pattern for "相手の手札から blind-select and return to deck" (e.g. ユキワラシ, エテボース, ロトム, ハカドッグ)
      // Text: "相手の手札からオモテを見ないで選び、そのカードのオモテを見て、相手の山札にもどして切る"
      /相手の手札からオモテを見ないで.{1,30}山札にもどして切る/.test(all) ||
      // 「おたがい」型: おたがいのプレイヤーが各自手札を山札に戻す (e.g. ゴヨウ, アンフェアスタンプ, ロケット団のアポロ, クラウン)
      /おたがいのプレイヤーは、それぞれ.{0,20}手札.{0,50}山札/.test(all) ||
      // 「山札の下にもどす」型 (e.g. Nのチョロネコ, ビビヨン, ぼうがいレター, エネはたき, スペシャルレッドカード)
      /相手.{0,30}手札.{0,50}山札の下にもどす/.test(all) ||
      name === 'ジャッジマン',
  },
  // §3-4  手札枚数参照（手札枚数を何らかの効果量に使うカード）
  // Matches: 相手の手札の枚数×Nダメージ (e.g. シャンデラ, メガユキメノコex)
  //          自分の手札と相手の手札が同じ枚数なら、X ダメージ追加 (e.g. ゴチルゼル シンクロショット)
  //          手札の枚数×N個ぶんのダメカン (e.g. フーディン ハンドパワー)
  //          手札の枚数ぶん、山札を引く (e.g. バリヤード ものまね)
  //          相手の手札にあるカード種別枚数×Nダメージ (e.g. エルフーンex トレーナーズ×50, アゲハント エネルギー×80)
  // Does NOT match: hand-count as attack-validity condition (テツノイワオ アジャストホーン)
  //                 hand-count as energy-cost condition (オンバーン チューニングエコー)
  {
    tags: ['手札干渉'],
    condition: (all) =>
      /手札の枚数[×x]\d+ダメージ/.test(all) ||
      /手札.{1,10}同じ枚数.{1,100}ダメージ追加/.test(all) ||
      /手札の枚数[×x]\d+個ぶんのダメカン/.test(all) ||
      /手札の枚数ぶん.{1,20}山札を引く/.test(all) ||
      /相手の手札を見て.{0,30}の枚数[×x]\d+ダメージ/.test(all),
  },

  // ── §5  エネルギー加速 ────────────────────────────────────────────────────
  // §5-A  山札→手札（エネルギーサーチ）→ サーチ>エネルギー へ移管
  // 「山札から、それぞれちがうタイプの基本エネルギーを…手札に加える」のような修飾子挟み形に対応
  // 「を」 を必須化することで「エネルギーと同じタイプのポケモン…手札に加える」(マホイップ等) を除外
  // — エネルギー転送 / イーブイ(ティアスロー系) / エレザード 等
  // 「山札を上からN枚見て、その中からポケモンとエネルギーを…手札に加える」形式 (むしとりセット等) も捕捉
  {
    tags: ['サーチ', 'サーチ>エネルギー'],
    condition: (all) =>
      /山札から.{0,20}エネルギー」?を.{1,30}手札に加える/.test(all) ||
      /山札の.{0,10}エネルギー.{1,40}手札に加える/.test(all) ||
      /その中から.{0,30}エネルギー.{0,50}手札に加え/.test(all),
  },
  // §5-B  山札→ポケモン直接
  // 「ポケモンにつける」「好きなようにつける」が直接隣接するケースに対応 ({1,20} → {0,20})
  // 「ポケモン1匹につける」「ベンチポケモン全員に…ずつつける」形式も捕捉 (ムチュール/ブースターex/メガサーナイトex等)
  // — ザシアンex / フリーザー / オーガポン各種 / デオキシス(ゲノムチャージ) / アンズの秘技 等
  {
    tags: ['エネ加速', 'エネ加速>山札'],
    condition: (all) =>
      /山札から.{1,30}エネルギー.{1,50}ポケモン.{0,4}に.{0,20}つける/.test(all) ||
      /山札から.{1,30}エネルギー.{1,50}好きなように.{0,20}つける/.test(all) ||
      /山札を上から.{1,20}エネルギー.{1,50}ポケモン.{1,30}つける/.test(all) ||
      /山札から.{1,30}エネルギー.{0,15}ずつつける/.test(all),
  },
  // §5-C  手札→ポケモン（手張りと別枠）
  // Branch 1: `を` なし自己付与 (このポケモン); Branch 2: ゼロギャップ直付け; Branch 3: 「~ポケモン」グループ名+」?を形式; Branch 4: 好きなように形式
  // — リーフィア / ラッキー / カミツオロチex / エンブオー / オドリドリex / ヒビキのホウオウex /
  //   ナンジャモのハラバリーex / アオキのネッコアラ / ガメノデス / ゴウカザル / エムリット 等
  // Exclusions:
  //   - 「相手は手札からエネルギーを…つけるたび」 (ゲンガーex 系)
  //   - 「相手が手札からエネルギーを…つけるたび」 (パチリス 系)
  //   - マギアナ「オートヒール」: つけるたびに回復するトリガー型、加速ではない
  {
    tags: ['エネ加速', 'エネ加速>手札'],
    condition: (all, atk, abl, name) =>
      (
        /手札から.{0,15}エネルギー.{1,30}このポケモンにつける/.test(all) ||
        /手札からエネルギーを.{0,10}ポケモンにつける/.test(all) ||
        /手札から.{0,20}エネルギー」?を.{1,30}ポケモン.{0,5}に.{0,20}つける/.test(all) ||
        /手札から.{0,20}エネルギー」?を.{1,30}好きなように.{0,20}つける/.test(all)
      ) &&
      !/相手は手札からエネルギーを/.test(all) &&
      !/相手が手札からエネルギーを.{0,15}つける/.test(all) &&
      name !== 'マギアナ',
  },
  // §5-D  トラッシュ→ポケモン
  // エネルギーリサイクル除外: トラッシュから山札へ戻す効果（装着なし）はトラッシュ回収に分類
  {
    tags: ['エネ加速', 'エネ加速>トラッシュ'],
    condition: (all, atk, abl, name) =>
      (
        /トラッシュから.{0,20}エネルギー.{1,30}(つける|ポケモン)/.test(all) ||
        /自分のトラッシュから基本エネルギー/.test(all)
      ) &&
      !/トラッシュから.{0,20}エネルギー.{1,50}手札に加える/.test(all) &&
      name !== 'エネルギーリサイクル',
  },
  // §5-E  場内つけかえ（自分の場のポケモン間でエネルギーを移動する効果）
  // 相手のポケモンについているエネルギーを移動する効果（ゲンガーex系）は除外
  {
    tags: ['エネ加速', 'エネ加速>つけかえ'],
    condition: (all) =>
      /エネルギー」?を.{1,30}つけ替える/.test(all) &&
      !/相手の.{0,15}ポケモンについているエネルギー.{1,30}つけ替える/.test(all),
  },

  // ── §B-1  ドロー（山札を引く効果）────────────────────────────────────────
  // §B-1-2  ドロー>手札トラッシュ後: 手札をすべてトラッシュ → 山札を引く
  //   — タケルライコex「きょくらいごう」, ゼイユ, ミガルーサex, アオキの手際, ピュール 等
  {
    tags: ['ドロー', 'ドロー>手札トラッシュ後'],
    condition: (all) =>
      /手札をすべてトラッシュ.{0,20}山札を\d+枚引く/.test(all) ||
      /手札をすべてトラッシュ.{0,20}山札を.{0,5}枚引く/.test(all) ||
      /手札をすべてトラッシュし.{0,40}山札.{0,30}引く/.test(all) ||
      /手札を好きなだけトラッシュ/.test(all),
  },
  // §B-1-3  ドロー>シャッフル後: 手札を山札にもどして切る → 山札を引く
  //   — ジャッジマン / ビクティニ / アンフェアスタンプ / タロ / ドラセナ / クラウン /
  //     リーリエの決心 / カポエラー / ゴチルゼル / ロケット団のアポロ 等
  //   ジャッジマン系の旧表記「手札をすべて山札にもどし、山札を切る」も捕捉
  {
    tags: ['ドロー', 'ドロー>シャッフル後'],
    condition: (all, atk, abl, name) =>
      /手札を.{0,10}山札にもどして切る.{0,40}(?:山札|引く)/.test(all) && /\d+枚.{0,5}引く|山札を引く/.test(all)
        ? true
        : /手札を.{0,10}山札にもどし.{0,5}山札を切る.{0,40}引く/.test(all) ||
          name === 'ジャッジマン',
  },
  // §B-1-4  ドロー>固定枚数まで: 手札が N 枚になるように、山札を引く
  //   — ハピナスex / シロナのガブリアスex / ネオラント / タブンネ / ジュナイパー /
  //     ウェーニバル / サーファー / ナンジャモのタイカイデン / アイリスの闘志 等
  {
    tags: ['ドロー', 'ドロー>固定枚数まで'],
    condition: (all) => /手札が\d+枚になるように.{0,15}山札を引く/.test(all),
  },
  // §B-1-1  ドロー>そのまま: 山札を N 枚引く（前置動作なし）
  //   上記の 手札トラッシュ後 / シャッフル後 / 固定枚数まで と排他
  //   — チェレン / レントラー / ハチクマンの研究 / リーリエ 等
  {
    tags: ['ドロー', 'ドロー>そのまま'],
    condition: (all) => {
      if (!/山札を\d+枚引く|山札から\d+枚引く|山札を.{1,5}枚引く/.test(all)) return false;
      // Exclude: 手札トラッシュ後（手札をすべてトラッシュし、山札を…引く）
      if (/手札をすべてトラッシュ.{0,30}山札.{0,30}引く/.test(all)) return false;
      // Exclude: シャッフル後（手札を山札にもどして切る → 引く / 手札をすべて山札にもどし → 引く）
      if (/手札を.{0,10}山札にもどして切る.{0,40}引く/.test(all)) return false;
      if (/手札を.{0,10}山札にもどし.{0,5}山札を切る.{0,40}引く/.test(all)) return false;
      return true;
    },
  },

  // ── §B-1-S  サーチ（山札から特定カードを手札に加える）───────────────────
  // §B-1-S1  サーチ>ポケモン: 山札からポケモン（および進化形/たね/タイプ別）を手札へ
  //   NOTE: 「ポケモンのどうぐ」のみを対象とする文は除外（→ サーチ>ポケモンのどうぐ へ）
  {
    tags: ['サーチ', 'サーチ>ポケモン'],
    condition: (all, atk, abl, name) => {
      // 「ポケモンのどうぐ」のみを対象とする検索は除外
      const hasPokemonDoguOnly = /山札から.{0,5}「?ポケモンのどうぐ」?を.{1,30}手札に加える/.test(all) &&
        !/山札から.{0,30}ポケモンを/.test(all) && !/山札からたねポケモン/.test(all) &&
        !/山札から.{0,30}進化ポケモン/.test(all);
      if (hasPokemonDoguOnly) return false;
      return (
        /山札から.{0,30}ポケモン.{0,5}を.{1,30}選び.{1,30}手札に加える/.test(all) ||
        /山札から.{0,5}ポケモンと.{0,30}を.{1,30}選び.{1,30}手札に加える/.test(all) ||
        /山札からたねポケモン.{0,30}選び.{0,15}手札に加える/.test(all) ||
        /山札から.{0,15}進化ポケモン.{0,30}選び.{0,15}手札に加える/.test(all) ||
        /山札を上から\d+枚見て.{0,80}ポケモン.{0,30}手札に加える/.test(all) ||
        /山札のポケモンを.{0,10}選び.{0,15}手札に加える/.test(all) ||
        ['ハイパーボール', 'モンスターボール', 'スパイクタウンジム'].includes(name)
      );
    },
  },
  // §B-1-S2  サーチ>サポート: 山札からサポートを手札へ
  //   ポケギア3.0 / シャリタツ「うらない」 のような「上から N 枚見て」型も含む
  //   トレーナーズ検索（任意の種類）は全トレーナーサブタグ同時付与
  //   シークレットボックス型「「サポート」…」も捕捉
  {
    tags: ['サーチ', 'サーチ>サポート'],
    condition: (all) =>
      /山札から.{0,15}サポート.{0,5}を.{1,30}選び.{1,30}手札に加える/.test(all) ||
      /山札から.{0,60}「サポート」.{0,80}選び.{0,50}手札に加える/.test(all) ||
      /山札からトレーナーズを.{1,30}手札に加える/.test(all) ||
      /山札を上から\d+枚見て.{0,80}サポ.{0,5}を.{0,40}手札に加える/.test(all) ||
      /山札を上から\d+枚見て.{0,80}「サポーター」.{0,40}手札/.test(all) ||
      /山札を上から\d+枚見て.{0,80}トレーナーズ.{0,40}手札に加える/.test(all),
  },
  // §B-1-S3  サーチ>グッズ: 山札からグッズを手札へ（スタジアム/ポケモンのどうぐは個別タグへ）
  //   トレーナーズ検索もここに含める（全トレーナーサブタグ同時付与）
  //   シークレットボックス型「山札から「グッズ」…」も捕捉
  {
    tags: ['サーチ', 'サーチ>グッズ'],
    condition: (all) =>
      /山札から.{0,5}グッズ.{0,5}を.{1,30}選び.{1,30}手札に加える/.test(all) ||
      /山札から「グッズ」.{0,80}選び.{0,50}手札に加える/.test(all) ||
      /山札からトレーナーズを.{1,30}手札に加える/.test(all) ||
      /山札を上から\d+枚見て.{0,80}トレーナーズ.{0,40}手札に加える/.test(all),
  },
  // §B-1-S3b  サーチ>スタジアム: 山札からスタジアムを手札へ（グッズから分離）
  //   アクロマの執念型「スタジアムとエネルギーを」(.{0,10}) も捕捉
  //   シークレットボックス型「「スタジアム」を」も捕捉
  {
    tags: ['サーチ', 'サーチ>スタジアム'],
    condition: (all) =>
      /山札から.{0,5}スタジアム.{0,10}を.{1,30}選び.{1,30}手札に加える/.test(all) ||
      /山札から.{0,60}「スタジアム」.{0,10}を.{1,30}選び.{1,50}手札に加える/.test(all) ||
      /山札からトレーナーズを.{1,30}手札に加える/.test(all) ||
      /山札を上から\d+枚見て.{0,80}トレーナーズ.{0,40}手札に加える/.test(all),
  },
  // §B-1-S3c  サーチ>ポケモンのどうぐ: 山札からポケモンのどうぐを手札へ（ポケモンから分離）
  //   シークレットボックス型「「ポケモンのどうぐ」…」も捕捉
  {
    tags: ['サーチ', 'サーチ>ポケモンのどうぐ'],
    condition: (all) =>
      /山札から.{0,15}「?ポケモンのどうぐ」?を.{1,30}選び.{1,30}手札に加える/.test(all) ||
      /山札から.{0,60}「ポケモンのどうぐ」.{0,80}選び.{0,50}手札に加える/.test(all) ||
      /山札からトレーナーズを.{1,30}手札に加える/.test(all) ||
      /山札を上から\d+枚見て.{0,80}トレーナーズ.{0,40}手札に加える/.test(all),
  },
  // §B-1-S4  サーチ>好きなカード: 山札から好きなカードを手札へ
  {
    tags: ['サーチ', 'サーチ>好きなカード'],
    condition: (all) =>
      /山札から好きなカード.{1,30}手札に加える/.test(all) ||
      /山札から.{0,5}カードを.{0,5}枚.{0,15}選び.{0,15}手札に加える/.test(all),
  },

  // ── §B-1-T  トラッシュ回収（トラッシュからカードを手札/場/山札へ戻す）──────
  // §B-1-T1  トラッシュ回収>手札: トラッシュから手札へ（ポケモン・エネルギー・任意）
  //   旧テキスト「トラッシュにある基本エネルギー」形式も捕捉
  //   「手札に加えてよい」形式 (ハッコウシティ) も `手札に加え` でマッチ
  {
    tags: ['トラッシュ回収', 'トラッシュ回収>手札'],
    condition: (all, atk, abl, name) =>
      /トラッシュから.{0,15}ポケモン.{0,15}を.{0,15}選び.{0,30}手札に加える/.test(all) ||
      /トラッシュから.{0,15}たねポケモン.{0,30}手札に加える/.test(all) ||
      /トラッシュから.{0,5}「?(?:基本)?エネルギー」?を.{0,30}選び.{0,30}手札に加え/.test(all) ||
      /トラッシュにある.{0,10}エネルギー.{0,30}手札に加え/.test(all) ||
      /トラッシュから.{1,60}基本エネルギー.{0,50}手札に加え/.test(all) ||
      /トラッシュから.{0,15}エネルギーカード.{0,30}手札に加える/.test(all) ||
      /「?基本エネルギー」?はトラッシュせず.{0,20}手札にもどす/.test(all) ||
      /トラッシュから好きなカード.{0,30}手札に加える/.test(all) ||
      /トラッシュからサポート.{0,5}を.{0,30}手札に加える/.test(all) ||
      /トラッシュからトレーナーズ.{0,5}を.{0,30}手札に加える/.test(all) ||
      name === 'ブーメランエネルギー',
  },
  // §B-1-T3  トラッシュ回収>山札: トラッシュから山札へ（エネルギーリサイクル系・せいなるはい系）
  //   エネルギーリサイクル: rules テキスト「山札にもどす」2文形式は regex 未マッチのため name 補完
  //   せいなるはい: rules テキスト「ポケモンを5枚…山札にもどす」— エネルギー限定パターン外
  {
    tags: ['トラッシュ回収', 'トラッシュ回収>山札'],
    condition: (all, atk, abl, name) =>
      /トラッシュから.{0,5}「?(?:基本)?エネルギー」?を.{0,30}選び.{0,30}山札にもどして切る/.test(all) ||
      /トラッシュにある.{0,10}エネルギー.{0,30}山札にもどして切る/.test(all) ||
      /トラッシュから.{1,60}基本エネルギー.{0,50}山札にもどして切る/.test(all) ||
      /トラッシュから.{0,10}ポケモン.{0,60}(?:山札にもどす|山札にもどして切る)/.test(all) ||
      name === 'エネルギーリサイクル',
  },

  // ── §B-2  特殊状態付与 (付与系) ─────────────────────────────────────────────
  // compound form 「AとBにする」「A・B・Cの中から」も捕捉
  { tags: ['特殊状態', '特殊状態>どく'],     condition: (all) => /どくにする|どくと(?:やけど|こんらん|ねむり|マヒ)|どく・(?:やけど|こんらん|ねむり|マヒ)/.test(all) },
  { tags: ['特殊状態', '特殊状態>やけど'],   condition: (all) => /やけどにする|やけどと(?:どく|こんらん|ねむり|マヒ)|やけど・(?:どく|こんらん|ねむり|マヒ)/.test(all) },
  { tags: ['特殊状態', '特殊状態>こんらん'], condition: (all) => /こんらんにする|(?:どく|やけど|ねむり|マヒ)[・]こんらん/.test(all) },
  { tags: ['特殊状態', '特殊状態>ねむり'],   condition: (all) => /ねむりにする/.test(all) },
  { tags: ['特殊状態', '特殊状態>マヒ'],     condition: (all) => /マヒにする/.test(all) },
  // §B-2 特殊状態>耐性 は Phase 33-E で 耐性親タグ配下 (耐性>特殊状態) に移行・廃止
  // §B-2 特殊状態>参照 (参照系): effects conditioned on a Pokémon's specific condition
  // 「特殊状態なら」の汎用参照に加え、個別条件参照（どくなら / どくのポケモン等）も捕捉
  // めまいの谷（こんらんのポケモン）・危険な密林（どくのポケモン）・くさりもちはここで捕捉
  { tags: ['特殊状態', '特殊状態>参照'],     condition: (all) => /特殊状態なら|受けている特殊状態の数|(?:どく|やけど|こんらん|ねむり|マヒ)(?:なら|のポケモン)/.test(all) },

  // ── §B-3  回復 ────────────────────────────────────────────────────────────
  // 「HPを、それぞれ「30」回復する」のように副詞挟みケースに対応 (HPを と 数値 が非隣接)
  {
    tags: ['回復', '回復>固定HP回復'],
    condition: (all) => /HPを.{0,15}「\d+」回復|HPを.{0,15}\d+回復/.test(all),
  },
  {
    tags: ['回復', '回復>全回復'],
    condition: (all) => /HPを[、]?すべて回復|すべてのダメカンを取り除く/.test(all),
  },
  {
    tags: ['回復', '回復>特殊状態'],
    condition: (all) => /特殊状態.{0,15}回復/.test(all),
  },

  // ── §B-29  最大HP強化 ────────────────────────────────────────────────────
  // ヒーローマント「＋100」/ グロウ草エネルギー「＋20」/ エキサイトスタジアム「＋30」等
  // 全角・半角プラス両対応; グラビティーマウンテン「-30」は除外（プラス記号がマッチしない）
  {
    tags: ['最大HP強化'],
    condition: (all) => /最大HP.{0,20}「[＋+]\d+」/.test(all),
  },

  // ── §B-6  フィールド干渉>エネルギーつけかえ ───────────────────────────────
  // 相手の場のポケモン間でエネルギーを移動させる効果（ゲンガーex系）
  // 自分の場内つけかえはエネ加速>つけかえ（§5-E）側で捕捉するため除外
  {
    tags: ['フィールド干渉', 'フィールド干渉>エネルギーつけかえ'],
    condition: (all) =>
      /エネルギー」?を.{1,30}つけ替える/.test(all) &&
      /相手の.{0,15}ポケモンについているエネルギー.{1,30}つけ替える/.test(all),
  },

  // §B-6  フィールド干渉>エネルギートラッシュ（相手エネ除去）
  {
    tags: ['フィールド干渉', 'フィールド干渉>エネルギートラッシュ'],
    condition: (all, atk, abl, name) =>
      /相手の.{1,20}エネルギーを.{1,30}トラッシュ/.test(all) ||
      ['クラッシュハンマー', '改造ハンマー'].includes(name),
  },
  // §B-6-3  フィールド干渉>スタジアムトラッシュ（旧 §B-15-1）
  {
    tags: ['フィールド干渉', 'フィールド干渉>スタジアムトラッシュ'],
    condition: (all) => /スタジアムをトラッシュ|場のスタジアムをトラッシュ/.test(all),
  },

  // ── §B-8追加  ロック>ワザ / ロック>どうぐ（旧 §B-7 ワザロック(相手)・Phase 35-3統合）──
  // >ワザ: ポケモンのワザによる相手ワザ封じ
  {
    tags: ['ロック', 'ロック>ワザ'],
    condition: (all) => /次の相手の番.{1,20}ワザが使えない/.test(all),
  },
  // >どうぐ: 相手のポケモンのどうぐ効果を無効化（ジャミングタワー）
  {
    tags: ['ロック', 'ロック>どうぐ'],
    condition: (all) => /「?ポケモンのどうぐ」?.{0,30}効果は.{0,20}なくなる/.test(all),
  },
  // ── §B-8-9  ロック>にげられない（旧: §B-27・Phase 35-4）──────────────────────
  {
    tags: ['ロック', 'ロック>にげられない'],
    condition: (all) => /次の相手の番、このワザを受けたポケモンは、にげられない/.test(all),
  },
  // サポートによる条件付き（ホミカの演奏）
  {
    tags: ['ロック', 'ロック>にげられない'],
    condition: (all) => /次の相手の番、相手の.{0,30}ポケモンは、にげられない/.test(all),
  },
  // ── §B-8  ロック>エネルギー（手札からエネルギーをつけられない・Phase 37-6新設）
  {
    tags: ['ロック', 'ロック>エネルギー'],
    condition: (all) => /手札から出すエネルギーをつけられない/.test(all),
  },
  // §B-3-5  回復>にげられない（自分）（旧: §B-27・Phase 35-4）
  {
    tags: ['回復', '回復>にげられない（自分）'],
    condition: (all) => /次の自分の番、このポケモンはにげられない/.test(all),
  },

  // ── §B-8  ロック（グッズ・サポート・トレーナー行動制限）────────────────────
  // Pattern covers both unquoted (グッズを出して使えない) and
  // quoted (「グッズ」を出して使えず) forms like ブルンゲルex.
  {
    tags: ['ロック', 'ロック>グッズ'],
    condition: (all) => /[「]?グッズ[」]?を出して使えな[いず]|グッズは使えない|グッズを.{1,10}使えない|[「]?グッズ[」]?を.{1,10}使えず/.test(all),
  },
  {
    tags: ['ロック', 'ロック>サポート'],
    condition: (all) => /サポートを出して使えない|サポートは使えない/.test(all),
  },
  {
    tags: ['ロック', 'ロック>ACE SPEC'],
    condition: (all) => /ACE SPEC.{1,20}使えない/.test(all),
  },
  // §B-8-6  ロック>スタジアム（スタジアム設置封印・旧 スタジアム>封印）
  {
    tags: ['ロック', 'ロック>スタジアム'],
    condition: (all) => /手札からスタジアムを出せない/.test(all),
  },

  // ── §Phase33-D  軸②値#4/#5 受けるダメージ軽減・受けるダメージ無効 ──────────
  // 旧 §B-9 軽減・無効 + §B-26 ベンチ保護 を解体し、軸②値#4/#5 + 耐性親タグ (§Phase33-E)
  // に再構成。設計: vault/10_Projects/Active/Phase33_damage_system_redesign.md
  //   §11-2 (耐性親タグ新設) / §11-5 (軸②値最終6値) / §11-6 (耐性>特殊状態)

  // §Phase33-D-1  受けるダメージ軽減 (軸②値#4): 「-N される」型の被ダメージ低減
  //   ‐ rul 系: フルメタルラボ / アイアンディフェンダー / せいなるおまもり / ぶあついうろこ /
  //             ミカンのまなざし / いしのどうくつ
  //   ‐ abl 系: アマルルガ / カエンジシ / ギギギアル / ダイゴのメレシー / ダストダス /
  //             ドータクン / バッフロン / 古びたアゴの化石（旧 §B-9 で abl 未対応だった分）
  //   ‐ atk 系: ナエトル / ハッサムex / コータス / エンペルトex 等の「次の相手の番、
  //             受けるワザのダメージは『-N』される」持続効果型
  //   ‐ atk 系 (mirror): ヘルガー / ガラガラ / ニンフィアex / ホップのココガラ /
  //             メガカエンジシex 等「次の相手の番、このワザを受けたポケモンが使う
  //             ワザのダメージは『-N』される」相手の次番攻撃を弱体化する型も、
  //             結果として MY 側の被ダメージが減るので 受けるダメージ軽減 に統合する。
  //   グラビティーマウンテン「最大HPは『-30』される」は HP 低減なので除外（"ワザのダメージは"
  //   prefix を必須にすれば自然に弾ける）
  {
    tags: ['受けるダメージ軽減'],
    condition: (all, atk, abl, name, rul) =>
      /(?:受ける|使う)ワザのダメージは「-\d+」される/.test(all) ||
      /受けるダメージは.{1,10}少なくな/.test(all),
  },

  // §Phase33-D-2  受けるダメージ無効 (軸②値#5): 「ワザの(ダメージ|ダメージや効果)を受けない」型
  //   ‐ 無効>コイントス (旧 §B-9-6): ゴビット系の "コイン.オモテ.次の番.受けない"
  //   ‐ 無効>条件付き (旧 §B-9-7): 「ポケモンex」「特性を持つ」「N以上」等の制限付き無効
  //   ‐ 無効>ベンチへのワザダメージ (旧 §B-26): ベンチ全体保護 (damage only)
  //   ‐ 無効>ベンチへの効果とダメージ (旧 §B-26): ベンチ damage+effect。耐性>ベンチ効果 と
  //                                              並列付与 (§Phase33-E-4)
  //   ‐ 無効>ダメカン配置 (旧 §B-9-8): バトルコロシアム等の「ダメカンがのらない」型
  //   NOTE: 旧 無効>ワザの効果のみ (ラウドボーン等) は「ダメージは受ける、効果のみ無効」
  //          なので 受けるダメージ無効 では拾わない。耐性>ワザの効果 (§Phase33-E-1) で扱う。
  {
    tags: ['受けるダメージ無効'],
    condition: (all, atk, abl, name, rul) => {
      // (a) コイントス無効化
      if (/コイン.{1,20}オモテ.{1,30}ワザのダメージ(?:や効果)?を受けない/.test(atk)) return true;
      // (b) 条件付き無効 (abl/atk 両対応)
      const src = abl + '\n' + atk;
      if (
        /「ポケモンex」から.{0,10}ワザのダメージ.{0,10}受けない/.test(src) ||
        /「ポケモンV」から.{0,10}ワザのダメージ.{0,10}受けない/.test(src) ||
        /特性を持つポケモンからワザのダメージ.{0,10}受けない/.test(src) ||
        /「\d+」以上のワザのダメージを受けない/.test(src) ||
        /特殊エネルギーがついている.{1,20}ワザのダメージ.{0,10}受けない/.test(src) ||
        /「テラスタル」のポケモンから.{0,10}ワザのダメージ.{0,10}受けない/.test(src)
      ) return true;
      // (c) ベンチ全体保護 (damage only / damage+effect 両方)
      if (/ベンチポケモン.{1,60}ワザのダメージ(?:や効果)?を受けない/.test(all)) return true;
      if (/ベンチにいるかぎり.{1,60}ワザのダメージ(?:や効果)?を受けない/.test(all)) return true;
      // (d) ベンチ ダメカン配置防止
      if (/ベンチポケモン.{1,60}ダメカンがのらない/.test(all)) return true;
      // (e) 非ベンチ ダメカン配置防止 (バトルコロシアム rul)
      if (/ダメカンがのらない/.test(abl)) return true;
      if (/ダメカンがのらない/.test(rul) && !/ベンチポケモン.{1,60}ダメカンがのらない/.test(rul)) return true;
      return false;
    },
  },

  // ── §Phase33-E  耐性親タグ (軸②値外、独立) ────────────────────────────────
  //   ダメージ計算とは別軸の「効果を受けない」バイナリ免疫を集約。
  //   旧 §B-9 無効>ワザの効果のみ / 無効>グッズ / 無効>サポート,
  //   旧 §B-26 無効>ベンチへの効果とダメージ の効果部分,
  //   旧 §B-2 特殊状態>耐性 をすべてここに統合する。

  // §Phase33-E-1  耐性>ワザの効果: ダメージは受けるが効果のみ無効化（ラウドボーン型）
  //   ‐ ミストエネルギー / 古びたふたの化石 / ラウドボーン / ロケット団のフリーザー /
  //     エンペルトex / ロック闘エネルギー
  //   NOTE: "ワザの効果を受けない" は "ワザのダメージや効果を受けない" には含まれない
  //         （別文字列）ので、ベンチ damage+effect 系と重複しない。
  {
    tags: ['耐性', '耐性>ワザの効果'],
    condition: (all, atk, abl, name, rul) =>
      /ワザの効果を受けない/.test(abl) || /ワザの効果を受けない/.test(rul),
  },

  // §Phase33-E-2  耐性>グッズの効果: 相手のグッズ効果を受けない（オノンド / ハルクジラex）
  {
    tags: ['耐性', '耐性>グッズの効果'],
    condition: (all) => /グッズまたはサポートを出して使ったとき.{1,30}効果を受けない/.test(all),
  },

  // §Phase33-E-3  耐性>サポートの効果: 相手のサポート効果を受けない
  //   ‐ "グッズまたはサポート" / "手札からサポート" 両表記を統合
  //     (オノンド / ハルクジラex / ドサイドン / 古びたヒレの化石)
  {
    tags: ['耐性', '耐性>サポートの効果'],
    condition: (all) =>
      /手札からサポートを出して使ったとき.{1,30}効果を受けない/.test(all) ||
      /グッズまたはサポートを出して使ったとき.{1,30}効果を受けない/.test(all),
  },

  // §Phase33-E-4  耐性>ベンチ効果: ベンチが「ダメージや効果」を受けない型の効果部分
  //   ‐ ベラカス / チャデス / カスミのコイキング — 受けるダメージ無効 と並列付与
  {
    tags: ['耐性', '耐性>ベンチ効果'],
    condition: (all) =>
      /ベンチポケモン.{1,60}ワザのダメージや効果を受けない/.test(all) ||
      /ベンチにいるかぎり.{1,60}ワザのダメージや効果を受けない/.test(all),
  },

  // §Phase33-E-5  耐性>特殊状態: 旧 特殊状態>耐性 (お祭り会場・化石・特殊エネ系 7枚) +
  //   個別状態「にならない」型 (ホーホー=ねむり / ヤドン=こんらん) 2枚 = 9 ユニーク。
  //   設計: §11-6 で正規表現を拡張し個別状態 もカバー。
  {
    tags: ['耐性', '耐性>特殊状態'],
    condition: (all, atk, abl, name, rul) =>
      /特殊状態にならず|特殊状態にならない/.test(all) ||
      /(?:このポケモン|自分のポケモン全員).{0,10}(?:どく|やけど|ねむり|マヒ|こんらん).{0,5}にならな[いず]/.test(all),
  },

  // ── §B-10  被ダメージ時発動（カウンター）────────────────────────────────
  // ワザを受けたとき（HANSHA_PAT 反射型）と重複するカードは除外
  { tags: ['カウンター効果（ダメカン以外）'], condition: (all) => /ワザのダメージを受けたとき/.test(all) && !HANSHA_PAT.test(all) },
  // きぜつ時カウンター: 「ワザのダメージを受けてきぜつしたとき」＋「ワザを使ったポケモン」に効果 (e.g. マラカッチ「さくれつばり」)
  { tags: ['カウンター効果（ダメカン以外）'], condition: (all) => /ワザのダメージを受けてきぜつしたとき[\s\S]*?ワザを使ったポケモン/.test(all) && !HANSHA_PAT.test(all) },

  // ── §B-12  ベンチ展開 ─────────────────────────────────────────────────────
  // §B-12-1  山札→ベンチ
  {
    tags: ['ベンチ展開', 'ベンチ展開>山札'],
    condition: (all, atk, abl, name) =>
      /山札から.{1,20}ポケモン.{1,30}ベンチに出す/.test(all) ||
      /山札からたねポケモン.{1,20}ベンチ/.test(all) ||
      ['なかよしポフィン', 'ネストボール'].includes(name),
  },
  // §B-12 name-based: stadiums/energies that put Pokémon from deck onto bench (D-2)
  // ミアレシティ: 毎ターン山札からたねポケモンをベンチに出してよい（ターン終了）
  // テレパス超エネルギー: 手張り時、超タイプたねポケモンを2枚ベンチに出せる
  {
    tags: ['ベンチ展開', 'ベンチ展開>山札'],
    condition: (all, atk, abl, name) => ['ミアレシティ', 'テレパス超エネルギー'].includes(name),
  },
  // §B-12-2  トラッシュ→ベンチ
  {
    tags: ['ベンチ展開', 'ベンチ展開>トラッシュ'],
    condition: (all) => /トラッシュから.{1,30}ベンチに出す/.test(all),
  },
  // ── §B-13  進化加速 ───────────────────────────────────────────────────────
  // §B-13-1  先攻1番目/出したばかりの番でも進化
  {
    tags: ['進化加速'],
    condition: (all) =>
      /最初の自分の番.{1,50}でも.{0,20}進化でき/.test(all) ||
      (/先攻プレイヤーの最初の番/.test(all) && /進化させ/.test(all)),
  },
  // §B-13-2  山札/手札からの即時進化（>山札からサブタグ廃止）
  {
    tags: ['進化加速'],
    condition: (all, atk, abl, name) =>
      /山札から.{1,30}進化.{1,30}のせて進化させ(?:る|てよい)/.test(all) ||
      /山札から.{1,20}進化させ(?:る|てよい)/.test(all) ||
      /手札か山札から.{1,30}進化/.test(all) ||
      name === 'ふしぎなアメ',
  },
  // §B-13-3  残りHP条件で進化
  {
    tags: ['進化加速'],
    condition: (all) => /残りHPが.{1,20}以下なら/.test(all) && /進化させ/.test(all),
  },

  // ── §B-14  山札破壊 ───────────────────────────────────────────────────────
  {
    tags: ['山札破壊'],
    condition: (all) =>
      /相手の山札を上から.{1,10}トラッシュ/.test(all) ||
      /相手の山札を.{1,20}トラッシュ/.test(all),
  },

  // ── §B-16  サイド関連 ────────────────────────────────────────────────────
  // §B-16-1  追加サイド取得（きぜつ時）
  { tags: ['サイド関連'], condition: (all) => /サイドを.{1,10}多くとる/.test(all) },
  // §B-16-2  きぜつなしでサイドを取る（ブラッキーex等）
  { tags: ['サイド関連'], condition: (all) => /自分のサイドを\d枚とる/.test(all) },
  // §B-16-3  とられるサイドを軽減・無効化（マシマシラex/メガゲンガーex/ヌケニン）
  {
    tags: ['サイド関連'],
    condition: (all) =>
      /とられるサイドは.{1,10}少なく/.test(all) ||
      /相手はサイドをとれない/.test(all),
  },
  // §B-16-4  サイドをオモテにする・見る（クレセリア/ロケット団のサッチムシ）
  {
    tags: ['サイド関連'],
    condition: (all) =>
      /自分のサイドを.{1,10}オモテにする/.test(all) ||
      /相手のサイドを.{1,20}オモテを見/.test(all),
  },

  // ── §B-19  ACE SPEC 特殊エネルギー派生 ──────────────────────────────────
  // リッチエネルギー: このカードをつけたとき、山札から2枚引く → ドロー>そのまま
  {
    tags: ['ドロー', 'ドロー>そのまま'],
    condition: (all, atk, abl, name) => name === 'リッチエネルギー',
  },
  // ── §B-21  手札トラッシュ ────────────────────────────────────────────────
  // 手札をすべてトラッシュ系 → 手札干渉として付与（サブタグ廃止 phase28-2）
  {
    tags: ['手札干渉'],
    condition: (all) => /手札をすべてトラッシュし/.test(all),
  },

  // ── §B-22→§B-8  ロック>特性（特性無効化 → ロック統合 phase28-5）────────────────
  // 「強制的・恒常的に相手（または「おたがい」）の特性を無効化する」カードに限定。
  //   含む: ロケット団の監視塔（おたがい全員）/ ハバタクカミ（相手バトル）/
  //         テツノイバラex（おたがい・ルール持ち）/ トリトドン（おたがいのベンチ2進化）/
  //         コダック・ゴルダック（おたがい・自傷きぜつ系特性）など
  //   除外: 自己制限「この特性は使えない」系（主体が「相手|おたがい」でないため自然に外れる）
  //   除外: 「特性を持つポケモンからワザのダメージを受けない」(オーガポンex/デオキシス)
  //         — ダメージ無効であって特性を打ち消してはいない。`無効` 系で別途タグ済み。
  //
  // 主体が「相手」または「おたがい」であることを必須条件とし、
  // 述語が「(すべて)?なくなる / なくす / 使えない / 無効」 であるパターンに絞る。
  {
    tags: ['ロック', 'ロック>特性'],
    condition: (all) =>
      /(相手|おたがい)の[^。\n]{0,60}特性[^。\n]{0,40}(なくなる|なくす)/.test(all) ||
      /(相手|おたがい)の[^。\n]{0,60}ポケモン[^。\n]{0,40}特性[^。\n]{0,20}(使えない|無効)/.test(all),
  },

  // ── D-4  将来候補グループ ─────────────────────────────────────────────────
  // タイプ変更
  {
    tags: ['タイプ変更'],
    condition: (all) => /弱点.{1,15}タイプが.{1,10}になる|弱点が.{1,10}になる/.test(all),
  },
  // 逃げる操作（§1-3: にげるコスト完全0化）
  {
    tags: ['逃げる操作'],
    condition: (all) =>
      /にげるためのエネルギー.{1,20}すべてなくなる|にげるためのエネルギー.{1,20}なくなる/.test(all) ||
      /にげるためのエネルギーは0になる/.test(all) ||
      /にげるためのエネルギーが.{1,10}なくなる/.test(all),
  },
  // ワザコピー（C-18）
  { tags: ['ワザコピー'], condition: (all) => /このワザの効果として使う|このワザとして使う/.test(all) },
  // 退化（C-13）
  { tags: ['退化'], condition: (all) => /退化させる|進化前のカードにもどす|はがして退化/.test(all) },

  // ── §B-26 ベンチ保護 は Phase 33-D/E に統合済み (§Phase33-D-2 + §Phase33-E-4) ──

  // ── §B-25  特殊エネルギー効果（ルールテキスト検出）─────────────────────
  // Special energies store their effect in rules text (not abilities/attacks).
  // Most are handled by name-based matching above, but these patterns catch
  // future additions automatically.
  // 軽減 / 特殊状態>耐性 は Phase 33-D/E (§Phase33-D-1 / §Phase33-E-5) で
  // 受けるダメージ軽減 / 耐性>特殊状態 に統合済み。特殊エネ専用ルールは不要。
  // エネ加速 via rules text (e.g. "エネルギーを…つける")
  {
    tags: ['エネ加速'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' &&
      /エネルギー.{1,30}つける/.test(rul) && /山札|トラッシュ|手札/.test(rul),
  },
  // ドロー via rules text (e.g. "山札を引く")
  {
    tags: ['ドロー', 'ドロー>そのまま'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /山札.{1,10}引く/.test(rul),
  },
  // カウンター効果（ダメカン以外）via rules text: ダメカン反射型（HANSHA_PAT）を除外
  {
    tags: ['カウンター効果（ダメカン以外）'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /ダメージを受けたとき/.test(rul) && !HANSHA_PAT.test(all),
  },
  // トラッシュ回収 via rules text (e.g. "トラッシュ…手札に加える")
  {
    tags: ['トラッシュ回収', 'トラッシュ回収>手札'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /トラッシュ.{1,30}手札に加える/.test(rul),
  },
  // ベンチ展開 via rules text
  {
    tags: ['ベンチ展開'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /ベンチに出す/.test(rul),
  },

  // ── §B-28  カード種別参照タグ（Phase 32-4一新）──────────────────────────
  {
    tags: ['カード種別参照', 'カード種別参照>ポケモンex'],
    condition: (all) => {
      const stripped = all.replace(/ポケモンexがきぜつしたとき、相手はサイドを\d+枚とる。/g, '');
      return /「ポケモンex」/.test(stripped);
    },
  },
  {
    tags: ['カード種別参照', 'カード種別参照>テラスタル'],
    condition: (all) => /「テラスタル」/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>ルール持ち'],
    condition: (all) => /ルールを持つポケモン/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>メガシンカex'],
    condition: (all) => {
      const stripped = all.replace(/メガシンカexがきぜつしたとき、相手はサイドを\d+枚とる。/g, '');
      return /メガシンカex/.test(stripped);
    },
  },
  {
    tags: ['カード種別参照', 'カード種別参照>特殊エネルギー'],
    condition: (all) => /特殊エネルギー/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>古代'],
    condition: (all) => /「古代」/.test(all) || /古代のサポート/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>未来'],
    condition: (all) => /「未来」/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>たねポケモン'],
    condition: (all) => /たねポケモン/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>1進化ポケモン'],
    condition: (all) => /1進化ポケモン/.test(all),
  },
  {
    tags: ['カード種別参照', 'カード種別参照>2進化ポケモン'],
    condition: (all) => /2進化ポケモン/.test(all),
  },
  // §B-28-X  カード種別参照>ポケモンのどうぐ（旧 §B-30 ポケモンのどうぐ>参照）
  //   装着有無・数を条件とする効果: ダイノーズ「がついているなら」/ ロトム系「の数×」
  {
    tags: ['カード種別参照', 'カード種別参照>ポケモンのどうぐ'],
    condition: (all) =>
      /「ポケモンのどうぐ」がついているなら/.test(all) ||
      /「ポケモンのどうぐ」の数/.test(all),
  },
  // §B-28-X  カード種別参照>スタジアム（旧 スタジアム>参照）
  {
    tags: ['カード種別参照', 'カード種別参照>スタジアム'],
    condition: (all) =>
      /スタジアムが出ていない(なら)?|スタジアムが出ているなら/.test(all) ||
      /のぞむなら.{0,15}スタジアムをトラッシュ.{0,20}その場合/.test(all) ||
      /スタジアムをトラッシュ.{0,50}トラッシュできないなら.{0,5}このワザは失敗/.test(all),
  },
  {
    tags: ['フィールド干渉', 'フィールド干渉>どうぐトラッシュ'],
    condition: (all) => /相手.{0,20}「?ポケモンのどうぐ」?.{0,30}トラッシュ/.test(all),
  },

];

// ─── Named card overrides ───────────────────────────────────────────────────
// パターンマッチで拾い切れない特殊効果カードのタグを上書き・除外する。
// 全 regex ルール適用後に最後に上書きされる。
// 主にトレーナーズの独特な効果に使用（Phase 33 完了後に本格洗い出し予定）。
const NAMED_OVERRIDES = {
  // ハンディサーキュレーター: 「ワザを使った相手ポケモン」のエネを
  //   相手ベンチへつけ替える効果 = フィールド干渉。自分のエネ加速ではない。
  'ハンディサーキュレーター': {
    add: ['フィールド干渉', 'フィールド干渉>エネルギーつけかえ'],
    remove: ['エネ加速', 'エネ加速>つけかえ'],
  },
  // ヒートバーナー: 相手のどうぐ・特殊エネ・スタジアムをトラッシュ
  //   = フィールド干渉。カード種別参照ではない。
  'ヒートバーナー': {
    add: ['フィールド干渉', 'フィールド干渉>どうぐトラッシュ', 'フィールド干渉>エネルギートラッシュ', 'フィールド干渉>スタジアムトラッシュ'],
    remove: ['カード種別参照', 'カード種別参照>特殊エネルギー'],
  },
};


// ─── Phase 33-J/K  メタカテゴリ (防御のみ) + 軸④ サブタグ derivation ──────
// Phase 33-J: 軸④ (常時/番の終わり/トリガー型/ワザ使用時>持続効果) を source block
//   (atk / abl / rul) と passive 内容のキーワード辞書で 攻撃 / 防御 を attribute する。
// Phase 33-M4: 攻撃側タグの放出を全廃 (攻撃セクションはファセットが受け持つ)。
//   攻撃帰属の判定 (hasAttack) はレガシー軸②タグではなくファセットのセクション所属を使う。
//   防御側は温存（防御セクション再編は将来タスク）。
//
// 出力タグ: `防御` / `防御>常時>{無条件|条件付き}` / `防御>番の終わり` /
//   `防御>トリガー型>{起動型|きぜつ|その他}` / `防御>ワザ使用時>持続効果`

const DEFENSE_PARENTS = new Set([
  '受けるダメージ軽減', '受けるダメージ無効', '耐性',
]);
// 持続効果 (atk-based): 「次の○の番」直後が「、」等で続き、「番の終わり」型は除外
const PERSIST_PAT = /次の(?:相手|自分)の番(?!の終わり)/;
// 番の終わり (atk/abl/rul any): 自分/相手/お互いの区別なし — 統合タグ
const END_OF_TURN_PAT = /(?:自分|相手|お互い)の番の終わり/;
// 真のトリガー (自動発火型イベント)
const TRIGGER_KOED_PAT = /きぜつしたとき/;
const TRIGGER_ACTIVATE_PAT = /自分の番に\d*回/;
const TRIGGER_OTHER_PAT =
  /(?:出すたび|手札からベンチに出したとき|ベンチに出したとき|手札から進化させたとき|進化させたとき|進化させて場に出したとき|手札からポケモンにつけたとき|トラッシュされたとき|場に出したとき|場に出たとき)/;
// passive content 判定: TRIGGER_KW / ワザを受けたとき / 番の終わり が含まれているならその文脈はトリガー扱い
const PASSIVE_DISQUALIFIER_PAT =
  /ワザのダメージを受けたとき|ワザを受けたとき|きぜつしたとき|自分の番に\d*回|出すたび|手札からベンチに出したとき|ベンチに出したとき|手札から進化させたとき|進化させたとき|進化させて場に出したとき|手札からポケモンにつけたとき|トラッシュされたとき|場に出したとき|場に出たとき|番の終わり/;
// 条件付きキーワード (常時>条件付きを判定)
const CONDITIONAL_PAT =
  /(?:「[^」]+のポケモン」|特性を持つ|「ポケモンex」|「ポケモンV」|特殊エネルギーがついている|「テラスタル」|「\d+」以上のワザ|出して使ったとき)/;

// ブロック内容から攻撃寄り/防御寄りを判定する keyword 辞書 (Phase 33-J)
//   両方ヒット → 'both' (両方付与), 片方のみ → 'attack' or 'defense', どちらも無し → null
const ATTACK_CONTENT_PAT =
  /(?:与えるダメージ|与ダメ|ダメカン.{0,15}のせる|ダメカン.{0,15}のせ替|ベンチポケモン.{0,30}ダメージ|ダメージ追加|ダメージ「?[+＋]\d+|×\d+ダメージ|の数[×x]\d+|抵抗力を計算しない|弱点を計算しない|弱点・抵抗力を計算しない|ダメージは.{0,5}「\d+」になる)/;
const DEFENSE_CONTENT_PAT =
  /(?:受ける.{0,5}ワザのダメージ|(?:受ける|使う)ワザのダメージは「-\d+」|受けるダメージ.{0,10}少なく|受けるダメージ.{0,10}「-\d+」|ダメージ(?:や効果)?を受けない|ワザの効果を受けない|特殊状態にならな[いず]|.{0,5}にならな[いず]|効果を受けない|ダメカン.{0,5}(?:取り除く|を取り除く|を取り除いて|を取りのぞく|を取りのぞいて)|HPを回復)/;

function classifyBlockSide(text) {
  if (!text) return null;
  const hasAtk = ATTACK_CONTENT_PAT.test(text);
  const hasDef = DEFENSE_CONTENT_PAT.test(text);
  if (hasAtk && hasDef) return 'both';
  if (hasAtk) return 'attack';
  if (hasDef) return 'defense';
  return null;
}

// Phase 33-M4: 攻撃側は放出しない (ファセットが受け持つ)。防御側のみ `防御>` で出力。
function deriveAxis4Tags(c, tags, hasAttack) {
  const hasDefense = [...tags].some(t => DEFENSE_PARENTS.has(t));
  if (!hasDefense) return;

  tags.add('防御');

  const atkRaw = attackText(c);
  const ablRaw = abilityText(c);
  const rulRaw = rulesText(c);

  // attribute(blockHits) → Set of {'攻撃' | '防御'} 帰属サイド
  //   blockHits = { atk: bool, abl: bool, rul: bool } 各 source block で trigger 検出されたか
  function attribute(blockHits) {
    const sides = new Set();
    // atk hit: ブロック内容で判定。攻撃キーワードのみ→攻撃、防御キーワードのみ→防御、両方→両方
    if (blockHits.atk) {
      const side = classifyBlockSide(atkRaw);
      if (side === 'attack' || side === 'both') sides.add('攻撃');
      if (side === 'defense' || side === 'both') sides.add('防御');
      // fallback: ブロックキーワードでは判定できなくてもカードに parent があるなら付与
      if (!side) {
        if (hasAttack) sides.add('攻撃');
        if (hasDefense) sides.add('防御');
      }
    }
    if (blockHits.abl) {
      const side = classifyBlockSide(ablRaw);
      if (hasAttack && hasDefense) {
        if (side === 'attack' || side === 'both') sides.add('攻撃');
        if (side === 'defense' || side === 'both') sides.add('防御');
        if (!side) {
          sides.add('攻撃');
          sides.add('防御');
        }
      } else if (hasAttack) sides.add('攻撃');
      else if (hasDefense) sides.add('防御');
    }
    if (blockHits.rul) {
      const side = classifyBlockSide(rulRaw);
      if (hasAttack && hasDefense) {
        if (side === 'attack' || side === 'both') sides.add('攻撃');
        if (side === 'defense' || side === 'both') sides.add('防御');
        if (!side) {
          sides.add('攻撃');
          sides.add('防御');
        }
      } else if (hasAttack) sides.add('攻撃');
      else if (hasDefense) sides.add('防御');
    }
    return sides;
  }

  // (1) 番の終わり (自分/相手 統合)
  const endHits = {
    atk: END_OF_TURN_PAT.test(atkRaw),
    abl: END_OF_TURN_PAT.test(ablRaw),
    rul: END_OF_TURN_PAT.test(rulRaw),
  };
  if (endHits.atk || endHits.abl || endHits.rul) {
    if (attribute(endHits).has('防御')) tags.add('防御>番の終わり');
  }

  // (2) ワザ使用時>持続効果 (atk-only; 番の終わり 型は除外)
  if (PERSIST_PAT.test(atkRaw)) {
    if (attribute({ atk: true, abl: false, rul: false }).has('防御')) {
      tags.add('防御>ワザ使用時>持続効果');
    }
  }

  // (3) トリガー型 (優先順位: 起動型 > きぜつ > その他)
  let trigger = null;
  const trigHits = { atk: false, abl: false, rul: false };
  if (TRIGGER_ACTIVATE_PAT.test(ablRaw)) {
    trigger = '起動型';
    trigHits.abl = true;
  } else if (TRIGGER_KOED_PAT.test(atkRaw + '\n' + ablRaw)) {
    trigger = 'きぜつ';
    if (TRIGGER_KOED_PAT.test(atkRaw)) trigHits.atk = true;
    if (TRIGGER_KOED_PAT.test(ablRaw)) trigHits.abl = true;
  } else if (TRIGGER_OTHER_PAT.test(ablRaw + '\n' + rulRaw)) {
    trigger = 'その他';
    if (TRIGGER_OTHER_PAT.test(ablRaw)) trigHits.abl = true;
    if (TRIGGER_OTHER_PAT.test(rulRaw)) trigHits.rul = true;
  }
  if (trigger) {
    if (attribute(trigHits).has('防御')) {
      tags.add('防御>トリガー型');
      tags.add(`防御>トリガー型>${trigger}`);
    }
  }

  // (4) 常時 (abl/rul ベースの passive — トリガー/番の終わり/受けたとき が含まれない)
  const ablIsPassive = ablRaw && !PASSIVE_DISQUALIFIER_PAT.test(ablRaw);
  const rulIsPassive = rulRaw && !PASSIVE_DISQUALIFIER_PAT.test(rulRaw);
  if (ablIsPassive || rulIsPassive) {
    const passiveHits = { atk: false, abl: !!ablIsPassive, rul: !!rulIsPassive };
    const checkSrc = (ablIsPassive ? ablRaw : '') + '\n' + (rulIsPassive ? rulRaw : '');
    const subkey = CONDITIONAL_PAT.test(checkSrc) ? '条件付き' : '無条件';
    if (attribute(passiveHits).has('防御')) {
      tags.add('防御>常時');
      tags.add(`防御>常時>${subkey}`);
    }
  }
}

// ─── Tag assignment ───────────────────────────────────────────────────────────
function assignTags(c) {
  const tags = new Set();
  const add  = (...ts) => ts.forEach(t => tags.add(t));

  const all  = allText(c);
  const rul  = rulesText(c);
  const atk  = attackText(c) + (rul ? '\n' + rul : '');
  const abl  = abilityText(c) + (rul ? '\n' + rul : '');
  const name = c.name;

  for (const rule of TAG_RULES) {
    if (rule.condition(all, atk, abl, name, rul, c)) {
      add(...[rule.tags].flat());
    }
  }

  // Apply named overrides last (operates AFTER all regex matches)
  // when: 同一名で別印刷を持つカード（例: ミルホッグ）を区別するための任意述語。
  const ov = NAMED_OVERRIDES[c.name];
  if (ov && (!ov.when || ov.when(c))) {
    ov.remove?.forEach(t => tags.delete(t));
    ov.add?.forEach(t => tags.add(t));
  }

  // Phase 33-M4: ファセットを一度だけ算出し、防御側軸④の攻撃帰属判定にも流用
  const facetRes = deriveAttackFacets(c);
  deriveAxis4Tags(c, tags, facetRes.facets.length > 0);
  applyAttackFacets(tags, facetRes);

  return [...tags].sort();
}

// ─── Process cards ────────────────────────────────────────────────────────────
const result = cards.map(c => ({
  cardId: c.cardID,
  name:   c.name,
  tags:   assignTags(c),
}));

writeFileSync(
  join(ROOT, 'data', 'card_tags.json'),
  JSON.stringify(result, null, 2),
  'utf-8'
);
console.log(`Wrote data/card_tags.json (${result.length} cards)`);

// ─── Stats ────────────────────────────────────────────────────────────────────
const tagCounts  = {};   // tag → count of unique cards
const tagExamples = {};  // tag → [cardName, …]

for (const { name, tags } of result) {
  for (const tag of tags) {
    tagCounts[tag]  = (tagCounts[tag] || 0) + 1;
    if (!tagExamples[tag]) tagExamples[tag] = [];
    if (tagExamples[tag].length < 5) tagExamples[tag].push(name);
  }
}

// Group ordering for the report (parent first, then sub-tags)
const GROUP_ORDER = [
  'ポケモンいれかえ', 'ポケモンいれかえ>自分', 'ポケモンいれかえ>味方', 'ポケモンいれかえ>相手:C-04型', 'ポケモンいれかえ>相手:C-05型', 'ポケモンいれかえ>バウンス',
  '手札干渉', '手札干渉>手札を見る', '手札干渉>トラッシュ', '手札干渉>山札戻し',
  // ── Phase 33-M: 攻撃ファセット (フラット) + 別棚 ──
  'ワザダメージ', 'ダメカンを置く', 'ダメカン移動',
  '即時', '次の番も', '特性・場', '反射',
  '無条件', '自分の場', '相手の場', 'コイン', '枚数参照', '種別', '特殊状態参照', 'HP/ダメカン',
  'ベンチに届く', '自分側', 'お互い',
  'ダメージ修飾', 'ダメージ修飾>味方の火力アップ', 'ダメージ修飾>相手への被ダメ増', 'ダメージ修飾>弱点・抵抗ルール改変',
  // ── Phase 33-J メタカテゴリ親タグ「防御」(軸②防御側 + 耐性 + 軸④防御帰属サブ) ──
  '防御',
  '受けるダメージ軽減', '受けるダメージ無効',
  '耐性', '耐性>ワザの効果', '耐性>グッズの効果', '耐性>サポートの効果', '耐性>ベンチ効果', '耐性>特殊状態',
  '防御>ワザ使用時>持続効果',
  '防御>番の終わり',
  '防御>トリガー型', '防御>トリガー型>起動型', '防御>トリガー型>きぜつ', '防御>トリガー型>その他',
  '防御>常時', '防御>常時>無条件', '防御>常時>条件付き',
  'エネ加速', 'エネ加速>山札', 'エネ加速>手札', 'エネ加速>トラッシュ', 'エネ加速>つけかえ',
  'ドロー', 'ドロー>そのまま', 'ドロー>手札トラッシュ後', 'ドロー>シャッフル後', 'ドロー>固定枚数まで',
  'サーチ', 'サーチ>ポケモン', 'サーチ>サポート', 'サーチ>グッズ', 'サーチ>スタジアム', 'サーチ>ポケモンのどうぐ', 'サーチ>エネルギー', 'サーチ>好きなカード',
  'トラッシュ回収', 'トラッシュ回収>手札', 'トラッシュ回収>山札',
  '特殊状態', '特殊状態>どく', '特殊状態>やけど', '特殊状態>こんらん', '特殊状態>ねむり', '特殊状態>マヒ', '特殊状態>参照',
  '回復', '回復>固定HP回復', '回復>全回復', '回復>特殊状態', '回復>にげられない（自分）',
  '最大HP強化',
  'フィールド干渉', 'フィールド干渉>エネルギーつけかえ', 'フィールド干渉>エネルギートラッシュ', 'フィールド干渉>スタジアムトラッシュ', 'フィールド干渉>どうぐトラッシュ',
  '逃げる操作',
  'ロック', 'ロック>ワザ', 'ロック>どうぐ', 'ロック>グッズ', 'ロック>サポート', 'ロック>ACE SPEC', 'ロック>特性', 'ロック>スタジアム', 'ロック>にげられない', 'ロック>エネルギー',
  // 旧 §B-9 軽減 / §B-26 無効 は Phase 33-D/E で 受けるダメージ軽減・受けるダメージ無効・耐性親タグ に解体済み
  'カウンター効果（ダメカン以外）',
  'ベンチ展開', 'ベンチ展開>山札', 'ベンチ展開>トラッシュ',
  '進化加速',
  '山札破壊',
  'サイド関連',
  // Phase 33-K: 条件ダメージ は ダメージ系（攻撃）セクションに移管済み（上のブロック参照）
  // §B-28 カード種別参照（Phase 32-4一新）
  'カード種別参照',
  'カード種別参照>ポケモンex', 'カード種別参照>テラスタル', 'カード種別参照>ルール持ち',
  'カード種別参照>メガシンカex', 'カード種別参照>古代', 'カード種別参照>未来',
  'カード種別参照>たねポケモン', 'カード種別参照>1進化ポケモン', 'カード種別参照>2進化ポケモン',
  'カード種別参照>ポケモンのどうぐ', 'カード種別参照>特殊エネルギー', 'カード種別参照>スタジアム',
  // 旧 §B-26 ベンチ保護 + §B-9 無効サブ群 は Phase 33-D/E で
  //   受けるダメージ無効 / 耐性>(ワザの効果|グッズの効果|サポートの効果|ベンチ効果|特殊状態) に解体済み
  // §B-24 ダメージ操作は Phase 33-C で 与ダメージ修飾 へ統合済み (上のブロックへ移動)
  // D-4 future candidates
  'タイプ変更',
  'ワザコピー',
  '退化',
];

// Add any tags not in GROUP_ORDER (shouldn't happen but safety net)
const allTags = new Set([...GROUP_ORDER, ...Object.keys(tagCounts)]);
const orderedTags = [...GROUP_ORDER, ...[...allTags].filter(t => !GROUP_ORDER.includes(t))];

// Group mappings for the report headers
const SECTION_MAP = {
  'ポケモンいれかえ': '§1', 'ポケモンいれかえ>自分': '§1', 'ポケモンいれかえ>味方': '§1', 'ポケモンいれかえ>相手:C-04型': '§1', 'ポケモンいれかえ>相手:C-05型': '§1', 'ポケモンいれかえ>バウンス': '§1', '手札干渉': '§3',
  'エネ加速':           '§5',  'エネ加速>つけかえ': '§5',
  'ドロー':             '§B-1','サーチ':       '§B-1','サーチ>スタジアム': '§B-1','サーチ>ポケモンのどうぐ': '§B-1','トラッシュ回収': '§B-1','特殊状態':     '§B-2','回復': '§B-3','回復>にげられない（自分）': '§B-3',
  '最大HP強化':         '§B-29',
  'フィールド干渉': '§B-6', 'フィールド干渉>エネルギーつけかえ': '§B-6', 'フィールド干渉>エネルギートラッシュ': '§B-6', 'フィールド干渉>スタジアムトラッシュ': '§B-6', 'フィールド干渉>どうぐトラッシュ': '§B-6',
  '逃げる操作': '§B-27',
  'ロック': '§B-8','ロック>特性': '§B-8','ロック>スタジアム': '§B-8','ロック>にげられない': '§B-8','ロック>エネルギー': '§B-8',
  'カウンター効果（ダメカン以外）': '§B-10','ベンチ展開': '§B-12','ベンチ展開>山札': '§B-12','ベンチ展開>トラッシュ': '§B-12',
  '進化加速':           '§B-13','山札破壊':    '§B-14',
  'サイド関連':         '§B-16',
  'カード種別参照': '§B-28',
  'カード種別参照>ポケモンex': '§B-28', 'カード種別参照>テラスタル': '§B-28', 'カード種別参照>ルール持ち': '§B-28',
  'カード種別参照>メガシンカex': '§B-28', 'カード種別参照>古代': '§B-28', 'カード種別参照>未来': '§B-28',
  'カード種別参照>たねポケモン': '§B-28', 'カード種別参照>1進化ポケモン': '§B-28', 'カード種別参照>2進化ポケモン': '§B-28',
  'カード種別参照>ポケモンのどうぐ': '§B-28', 'カード種別参照>特殊エネルギー': '§B-28', 'カード種別参照>スタジアム': '§B-28',
  'タイプ変更':         'D-4', 'ワザコピー': 'D-4',
  '退化':               'D-4',
  '防御': '§Phase33-J',
  '受けるダメージ軽減': '§Phase33', '受けるダメージ無効': '§Phase33',
  '耐性': '§Phase33', '耐性>ワザの効果': '§Phase33', '耐性>グッズの効果': '§Phase33',
  '耐性>サポートの効果': '§Phase33', '耐性>ベンチ効果': '§Phase33', '耐性>特殊状態': '§Phase33',
  '防御>ワザ使用時>持続効果': '§Phase33-J',
  '防御>番の終わり': '§Phase33-J',
  '防御>トリガー型': '§Phase33-J', '防御>トリガー型>起動型': '§Phase33-J',
  '防御>トリガー型>きぜつ': '§Phase33-J', '防御>トリガー型>その他': '§Phase33-J',
  '防御>常時': '§Phase33-J', '防御>常時>無条件': '§Phase33-J', '防御>常時>条件付き': '§Phase33-J',
  // Phase 33-M: 攻撃ファセット
  'ワザダメージ': '§P33-M', 'ダメカンを置く': '§P33-M', 'ダメカン移動': '§P33-M',
  '即時': '§P33-M', '次の番も': '§P33-M', '特性・場': '§P33-M', '反射': '§P33-M',
  '無条件': '§P33-M', '自分の場': '§P33-M', '相手の場': '§P33-M', 'コイン': '§P33-M',
  '枚数参照': '§P33-M', '種別': '§P33-M', '特殊状態参照': '§P33-M', 'HP/ダメカン': '§P33-M',
  'ベンチに届く': '§P33-M', '自分側': '§P33-M', 'お互い': '§P33-M',
  'ダメージ修飾': '§P33-M', 'ダメージ修飾>味方の火力アップ': '§P33-M',
  'ダメージ修飾>相手への被ダメ増': '§P33-M', 'ダメージ修飾>弱点・抵抗ルール改変': '§P33-M',
};

const taggedCount = result.filter(c => c.tags.length > 0).length;
const today = new Date().toISOString().split('T')[0];

let md = `# タグ付け統計\n\n`;
md += `**生成日:** ${today}\n`;
md += `**ユニークカード数:** ${cards.length}\n`;
md += `**タグ付きカード数:** ${taggedCount} (${((taggedCount / cards.length) * 100).toFixed(1)}%)\n`;
md += `**総タグ種別数:** ${Object.keys(tagCounts).length}\n\n`;
md += `---\n\n`;
md += `## 各グループ検出数\n\n`;
md += `| グループID | タグ名 | 検出件数（ユニークcardID） | 代表例（最大5件） |\n`;
md += `|---|---|---|---|\n`;

for (const tag of orderedTags) {
  if (!(tag in tagCounts)) continue;
  const indent = tag.includes('>') ? '　' : '';
  const secId  = SECTION_MAP[tag.split('>')[0]] || '';
  const count  = tagCounts[tag] || 0;
  const examples = (tagExamples[tag] || []).join(' / ');
  md += `| ${secId} | ${indent}${tag} | ${count} | ${examples} |\n`;
}

md += `\n---\n\n`;
md += `## ノーヒットカード（参考）\n\n`;
const noTagCards = result.filter(c => c.tags.length === 0);
md += `**件数:** ${noTagCards.length}\n\n`;
md += `主な理由: 基本エネルギー（テキストなし）、グッズ/サポート（効果テキスト未収録）、純粋攻撃型ポケモンなど。\n\n`;

// Breakdown by cardKind for no-tag cards
const kindCounts = {};
for (const c of noTagCards) {
  const card = cards.find(x => x.cardID === c.cardId);
  if (card) kindCounts[card.cardKind] = (kindCounts[card.cardKind] || 0) + 1;
}
for (const [kind, cnt] of Object.entries(kindCounts).sort((a, b) => b[1] - a[1])) {
  md += `- ${kind}: ${cnt}件\n`;
}

writeFileSync(join(ROOT, 'docs', 'tagging_stats.md'), md, 'utf-8');
console.log('Wrote docs/tagging_stats.md');

// ─── Summary to stdout ────────────────────────────────────────────────────────
console.log(`\n=== Summary ===`);
console.log(`Tagged: ${taggedCount} / ${cards.length} cards`);
console.log(`\nTop tags by count:`);
const sorted = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
for (const [tag, cnt] of sorted) {
  console.log(`  ${cnt.toString().padStart(4)}  ${tag}`);
}
