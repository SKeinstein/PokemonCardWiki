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

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

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
const BENCH_BRACKET = /[〔［]ベンチは弱点・抵抗力を計算しない。[〕］]/;

// Each rule: { tags: string | string[], condition: (all, atk, abl, name, rul, c) => boolean }
// The main loop calls add(...[rule.tags].flat()) when condition returns true.
const TAG_RULES = [
  // ── §1  ポケモン入れ替え（自分） ─────────────────────────────────────────
  // §1-1  attack: このポケモンをベンチポケモンと入れ替える
  {
    tags: ['ポケモン入れ替え', 'ポケモン入れ替え>ワザ'],
    condition: (all, atk) => /このポケモンをベンチポケモンと入れ替える/.test(atk),
  },
  // §1-2  ability: 自分のバトルポケモンをベンチと入れ替える / ベンチから選びバトルポケモンと入れ替える
  {
    tags: ['ポケモン入れ替え', 'ポケモン入れ替え>特性'],
    condition: (all, atk, abl) =>
      /バトルポケモンをベンチポケモンと入れ替える/.test(abl) ||
      /ベンチ.{1,15}ポケモン.{1,5}バトルポケモンと入れ替える/.test(abl),
  },
  // §1-3  にげるコスト操作（テキスト）
  {
    tags: ['ポケモン入れ替え', 'ポケモン入れ替え>にげるコスト操作'],
    condition: (all) => /にげるためのエネルギー.{1,30}(少なくなる|なくなる|少ない|減る|ぶん少なく)/.test(all),
  },
  // §1-3  name-based: ふうせん is retreat cost reduction
  {
    tags: ['ポケモン入れ替え', 'ポケモン入れ替え>にげるコスト操作'],
    condition: (all, atk, abl, name) => name === 'ふうせん',
  },
  // ポケモンいれかえ / スクランブルスイッチ = switching cards (§1 parent only, D-2 table)
  {
    tags: ['ポケモン入れ替え'],
    condition: (all, atk, abl, name) => ['ポケモンいれかえ', 'スクランブルスイッチ'].includes(name),
  },
  // §1 name-based: なみのりビーチ = both players may switch their active once per turn (D-2)
  {
    tags: ['ポケモン入れ替え'],
    condition: (all, atk, abl, name) => name === 'なみのりビーチ',
  },

  // ── §2  相手ポケモン入れ替え ──────────────────────────────────────────────
  // §2-1  C-04: 相手のバトルポケモンを強制退場（次を相手が選ぶ）
  {
    tags: ['相手入れ替え', '相手入れ替え>C-04型'],
    condition: (all) =>
      /相手のバトルポケモンをベンチポケモンと入れ替える/.test(all) ||
      /相手は.{1,10}バトルポケモンをベンチポケモンと入れ替える/.test(all),
  },
  // §2-2  C-05: 相手ベンチから指定して引き出す
  {
    tags: ['相手入れ替え', '相手入れ替え>C-05型'],
    condition: (all, atk, abl, name) =>
      /相手のベンチポケモンを.{1,10}選び.{1,20}バトルポケモンと入れ替える/.test(all) ||
      /相手のベンチポケモンを選ぶ/.test(all) ||
      ['ボスの指令', 'ポケモンキャッチャー', 'プライムキャッチャー'].includes(name) ||
      name.startsWith('ボスの指令'),
  },
  // §2-3  バウンス: すべてのカードごと山札に戻す
  {
    tags: ['相手入れ替え', '相手入れ替え>バウンス'],
    condition: (all) => /ベンチポケモン.{1,20}すべてのカードごと山札にもどして切る|すべてのカードごと山札にもどして切る/.test(all),
  },

  // ── §3  手札干渉 ──────────────────────────────────────────────────────────
  // §3-1  相手の手札を見る
  {
    tags: ['手札干渉', '手札干渉>手札を見る'],
    condition: (all) => /相手の手札を見る/.test(all),
  },
  // §3-2  トラッシュさせる
  {
    tags: ['手札干渉', '手札干渉>トラッシュ'],
    condition: (all) =>
      /相手の手札から.{1,30}トラッシュ/.test(all) ||
      /相手.{1,5}手札.{1,10}オモテを見ないで.{1,10}選び.{1,20}トラッシュ/.test(all) ||
      /相手は自身の手札を.{1,20}トラッシュ/.test(all),
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
      ['ジャッジマン', 'ビワ'].includes(name),
  },
  // §3-4  手札枚数参照（手札枚数を何らかの効果量に使うカード）
  // Matches: 相手の手札の枚数×Nダメージ (e.g. シャンデラ, メガユキメノコex)
  //          自分の手札と相手の手札が同じ枚数なら、X ダメージ追加 (e.g. ゴチルゼル シンクロショット)
  //          手札の枚数×N個ぶんのダメカン (e.g. フーディン ハンドパワー)
  //          手札の枚数ぶん、山札を引く (e.g. バリヤード ものまね)
  // Does NOT match: hand-count as attack-validity condition (テツノイワオ アジャストホーン)
  //                 hand-count as energy-cost condition (オンバーン チューニングエコー)
  {
    tags: ['手札干渉', '手札干渉>手札参照'],
    condition: (all) =>
      /手札の枚数[×x]\d+ダメージ/.test(all) ||
      /手札.{1,10}同じ枚数.{1,100}ダメージ追加/.test(all) ||
      /手札の枚数[×x]\d+個ぶんのダメカン/.test(all) ||
      /手札の枚数ぶん.{1,20}山札を引く/.test(all),
  },

  // ── §4  ベンチ狙撃 ────────────────────────────────────────────────────────
  // §4-1 + §4-4  ワザのダメージ型
  {
    tags: ['ベンチ狙撃', 'ベンチ狙撃>ダメージ型'],
    condition: (all, atk) => BENCH_BRACKET.test(atk),
  },
  // §4-4  全体スプレッド (全員)
  {
    tags: ['ベンチ狙撃>全体スプレッド'],
    condition: (all, atk) =>
      BENCH_BRACKET.test(atk) &&
      (/ベンチポケモン全員/.test(atk) || /おたがいのベンチポケモン全員/.test(atk)),
  },
  // §4-2  ダメカン直置き型（ベンチ対象）
  {
    tags: ['ベンチ狙撃', 'ベンチ狙撃>ダメカン型'],
    condition: (all) =>
      (
        /ベンチポケモン.{1,30}ダメカン.{1,20}のせる/.test(all) ||
        /ダメカン.{1,20}ベンチポケモン.{1,30}のせる/.test(all) ||
        (/相手のポケモン.{1,10}ダメカンを.{1,30}のせる/.test(all) && /好きなように/.test(all)) ||
        /ポケモン全員.{1,20}ダメカンを.{1,10}のせる/.test(all) ||
        /たねポケモン全員.{1,20}ダメカンを.{1,10}のせる/.test(all)
      ) &&
      // Exclude self-harm (§B-11) and pure counter effects
      !/このポケモンにダメカンを.{1,20}のせ[るて]/.test(all),
  },
  // §4-3  ダメカン移動型
  {
    tags: ['ベンチ狙撃', 'ベンチ狙撃>移動型'],
    condition: (all) => /ダメカンを.{1,30}のせ替える/.test(all),
  },

  // ── §5  エネルギー加速 ────────────────────────────────────────────────────
  // §5-A  山札→手札
  {
    tags: ['エネ加速', 'エネ加速>山札→手札'],
    condition: (all) => /山札から.{1,10}エネルギー.{1,30}手札に加える/.test(all),
  },
  // §5-B  山札→ポケモン直接
  {
    tags: ['エネ加速', 'エネ加速>山札→ポケモン'],
    condition: (all) =>
      /山札から.{1,30}エネルギー.{1,50}ポケモンに.{1,20}つける/.test(all) ||
      /山札から.{1,30}エネルギー.{1,50}好きなように.{1,20}つける/.test(all) ||
      /山札を上から.{1,20}エネルギー.{1,50}ポケモン.{1,30}つける/.test(all),
  },
  // §5-C  手札→ポケモン（手張りと別枠）
  // Note: exclude "相手は手札からエネルギーを...つけるたび" (opponent's energy punishment, e.g. ゲンガーex)
  {
    tags: ['エネ加速', 'エネ加速>手札→ポケモン'],
    condition: (all) =>
      (
        /手札から.{0,15}エネルギー.{1,30}このポケモンにつける/.test(all) ||
        /手札からエネルギーを.{0,10}ポケモンにつける/.test(all) ||
        /手札から.{0,20}エネルギーを.{1,30}ポケモンに.{1,20}つける/.test(all) ||
        /手札から.{0,20}エネルギーを.{1,30}好きなように.{1,20}つける/.test(all)
      ) &&
      !/相手は手札からエネルギーを/.test(all),
  },
  // §5-D  トラッシュ→ポケモン
  {
    tags: ['エネ加速', 'エネ加速>トラッシュ→ポケモン'],
    condition: (all) =>
      (
        /トラッシュから.{0,20}エネルギー.{1,30}(つける|ポケモン)/.test(all) ||
        /自分のトラッシュから基本エネルギー/.test(all)
      ) &&
      // Distinguish from §B-1-4 (trash→hand): check for つける not 手札
      !/トラッシュから.{0,20}エネルギー.{1,50}手札に加える/.test(all),
  },

  // ── §B-1  ドロー・サーチ ──────────────────────────────────────────────────
  // §B-1-1  固定枚数ドロー
  {
    tags: ['ドロー', 'ドロー>固定枚数ドロー'],
    condition: (all) =>
      /山札を\d+枚引く/.test(all) ||
      /山札から\d+枚引く/.test(all) ||
      /山札を.{1,5}枚引く/.test(all),
  },
  // §B-1-2  ポケモンサーチ（山札→手札）
  // NOTE: exclude 「ポケモンのどうぐ」 (Pokémon Tool = Trainer) from ポケモンサーチ
  {
    tags: ['ドロー', 'ドロー>ポケモンサーチ'],
    condition: (all, atk, abl, name) =>
      (/山札から.{1,10}ポケモン.{1,20}手札に加える/.test(all) && !/ポケモンのどうぐ/.test(all)) ||
      /山札からたねポケモンを.{1,10}選び.{1,10}手札/.test(all) ||
      ['ハイパーボール', 'ネストボール'].includes(name),
  },
  // §B-1 name-based: stadiums/energies that search deck for cards (D-2)
  // スパイクタウンジム: 毎ターン山札から「マリィのポケモン」1枚を手札に加えてよい（ポケモンサーチ）
  {
    tags: ['ドロー', 'ドロー>ポケモンサーチ'],
    condition: (all, atk, abl, name) => name === 'スパイクタウンジム',
  },
  // §B-1-3  トレーナーズサーチ
  {
    tags: ['ドロー', 'ドロー>トレーナーズサーチ'],
    condition: (all) =>
      /山札から.{1,5}グッズを.{1,20}手札/.test(all) ||
      /山札から.{1,20}「ポケモンのどうぐ」.{1,20}手札/.test(all) ||
      /山札から.{1,5}スタジアムを.{1,20}手札/.test(all) ||
      /山札から.{1,5}サポートを.{1,20}手札/.test(all) ||
      /山札からトレーナーズを.{1,20}手札/.test(all) ||
      /山札から好きなカードを.{1,20}手札/.test(all) ||
      /山札から.{1,10}カードを.{1,5}枚.{1,10}手札に加える/.test(all),
  },
  // §B-1-4  トラッシュ回収（手札へ）
  {
    tags: ['ドロー', 'ドロー>トラッシュ回収'],
    condition: (all) =>
      /トラッシュから.{1,15}ポケモン.{1,20}手札に加える/.test(all) ||
      /トラッシュからサポートを.{1,20}手札/.test(all) ||
      /トラッシュからトレーナーズを.{1,20}手札/.test(all),
  },
  // §B-1-4 name-based: energies that return themselves from discard (D-2)
  // ブーメランエネルギー: トラッシュに送られたとき、手札に加える → トラッシュ回収（自己回収）
  {
    tags: ['ドロー', 'ドロー>トラッシュ回収'],
    condition: (all, atk, abl, name) => name === 'ブーメランエネルギー',
  },

  // ── §B-2  特殊状態付与 ────────────────────────────────────────────────────
  { tags: ['特殊状態', '特殊状態>どく'],     condition: (all) => /どくにする/.test(all) },
  { tags: ['特殊状態', '特殊状態>やけど'],   condition: (all) => /やけどにする/.test(all) },
  { tags: ['特殊状態', '特殊状態>こんらん'], condition: (all) => /こんらんにする/.test(all) },
  { tags: ['特殊状態', '特殊状態>ねむり'],   condition: (all) => /ねむりにする/.test(all) },
  { tags: ['特殊状態', '特殊状態>マヒ'],     condition: (all) => /マヒにする/.test(all) },
  // §B-2 name-based: stadiums that modify special-condition mechanics (D-2)
  // めまいの谷: こんらんのポケモンは進化・退化してもこんらんが回復しない
  { tags: ['特殊状態', '特殊状態>こんらん'], condition: (all, atk, abl, name) => name === 'めまいの谷' },
  // 危険な密林: どくのポケモンのどくダメカンが2個多くなる
  { tags: ['特殊状態', '特殊状態>どく'],     condition: (all, atk, abl, name) => name === '危険な密林' },

  // ── §B-3  回復 ────────────────────────────────────────────────────────────
  {
    tags: ['回復', '回復>固定HP回復'],
    condition: (all) => /HPを「\d+」回復|HPを\d+回復/.test(all),
  },
  {
    tags: ['回復', '回復>全回復'],
    condition: (all) => /HPをすべて回復|すべてのダメカンを取り除く/.test(all),
  },
  {
    tags: ['回復', '回復>複数回復'],
    condition: (all) => /ベンチ.{1,30}HPを.{1,20}回復|すべての.{1,20}HPを.{1,20}回復/.test(all),
  },
  // §B-3 name-based: stadiums that provide HP recovery (D-2)
  // 公民館: サポートを使ったプレイヤーは自分のポケモン全員を10回復してよい（複数回復）
  { tags: ['回復', '回復>複数回復'], condition: (all, atk, abl, name) => name === '公民館' },

  // ── §B-4  ダメカン操作（広義）────────────────────────────────────────────
  { tags: ['ダメカン操作'], condition: (all) => /ダメカンを.{1,30}のせる/.test(all) },
  { tags: ['ダメカン操作'], condition: (all) => /ダメカンを.{1,30}のせ替える/.test(all) }, // §4-3 overlap is expected
  // §B-4 name-based: stadiums that place damage counters on entry (D-2)
  // 危ない廃墟: たねポケモン（悪除く）をベンチに出すたびにダメカン2個のせる
  { tags: ['ダメカン操作'], condition: (all, atk, abl, name) => name === '危ない廃墟' },

  // ── §B-5  エネルギー移動（つけ替え）─────────────────────────────────────
  {
    tags: ['エネ移動'],
    condition: (all, atk, abl, name) =>
      /エネルギーを.{1,30}つけ替える/.test(all) || name === 'エネルギーつけかえ',
  },

  // ── §B-6  エネルギー除去 ──────────────────────────────────────────────────
  // §B-6-1  相手のエネ除去
  {
    tags: ['エネ除去', 'エネ除去>相手エネ除去'],
    condition: (all, atk, abl, name) =>
      /相手の.{1,20}エネルギーを.{1,30}トラッシュ/.test(all) ||
      ['クラッシュハンマー', '改造ハンマー'].includes(name),
  },
  // §B-6-2  自己コスト（高火力のデメリット）
  {
    tags: ['エネ除去', 'エネ除去>自己コスト'],
    condition: (all, atk) => /エネルギーをすべてトラッシュし|エネルギーを\d+個トラッシュし/.test(atk),
  },

  // ── §B-7  ワザロック・行動制限 ───────────────────────────────────────────
  // §B-7-1  自己ロック
  {
    tags: ['ワザロック', 'ワザロック>自己ロック'],
    condition: (all) => /次の自分の番.{1,10}このポケモンはワザが使えない/.test(all),
  },
  // §B-7-2  相手ロック
  {
    tags: ['ワザロック', 'ワザロック>相手ロック'],
    condition: (all) => /次の相手の番.{1,20}ワザが使えない/.test(all),
  },
  // §B-7-3  にげられない
  {
    tags: ['ワザロック', 'ワザロック>にげられない'],
    condition: (all) => /にげられない/.test(all),
  },

  // ── §B-8  グッズ・サポートロック ─────────────────────────────────────────
  // Pattern covers both unquoted (グッズを出して使えない) and
  // quoted (「グッズ」を出して使えず) forms like ブルンゲルex.
  {
    tags: ['グッズサポートロック', 'グッズサポートロック>グッズロック'],
    condition: (all) => /[「]?グッズ[」]?を出して使えな[いず]|グッズは使えない|グッズを.{1,10}使えない|[「]?グッズ[」]?を.{1,10}使えず/.test(all),
  },
  {
    tags: ['グッズサポートロック', 'グッズサポートロック>サポートロック'],
    condition: (all) => /サポートを出して使えない|サポートは使えない/.test(all),
  },
  // ACE SPEC lock is distinct from Supporter lock (ACE SPEC includes グッズ and special energy)
  {
    tags: ['グッズサポートロック', 'グッズサポートロック>ACE SPECロック'],
    condition: (all) => /ACE SPEC.{1,20}使えない/.test(all),
  },

  // ── §B-9  ダメージ軽減・無効 ─────────────────────────────────────────────
  // §B-9a: 軽減 — reduces damage by X (「-X」される / 少なくなる系)
  {
    tags: ['ダメージ軽減', 'ダメージ軽減>軽減'],
    condition: (all) => /ダメージは「-\d+」される|ダメージを「-\d+」|受けるダメージは.{1,10}少なくな/.test(all),
  },
  // §B-9b: 無効 — negates damage entirely (受けない / 効果を受けない系)
  {
    tags: ['ダメージ軽減', 'ダメージ軽減>無効'],
    condition: (all) =>
      /ワザのダメージを受けない/.test(all) ||
      /ワザの効果を受けない/.test(all) ||
      /ワザのダメージや効果を受けない/.test(all),
  },
  // §B-9 name-based: stadiums/energies (D-2)
  // フルメタルラボ: 鋼ポケモンが受けるワザのダメージ-30  → 軽減
  // いしのどうくつ: 「ダイゴのポケモン」全員が受けるワザのダメージ-30  → 軽減
  // グロウ草エネルギー: つけているポケモンの最大HPが+20（実質ダメージバッファー）  → 軽減
  // ミストエネルギー: つけているポケモンが受けるワザのダメージ-20  → 軽減
  // ロック闘エネルギー: つけているポケモンは相手のワザの効果を受けない  → 無効
  {
    tags: ['ダメージ軽減', 'ダメージ軽減>軽減'],
    condition: (all, atk, abl, name) => ['フルメタルラボ', 'いしのどうくつ', 'グロウ草エネルギー', 'ミストエネルギー'].includes(name),
  },
  {
    tags: ['ダメージ軽減', 'ダメージ軽減>無効'],
    condition: (all, atk, abl, name) => ['ロック闘エネルギー'].includes(name),
  },
  // ミストエネルギー: つけているポケモンは特殊状態にならない → 特殊状態（免疫）
  {
    tags: ['特殊状態'],
    condition: (all, atk, abl, name) => name === 'ミストエネルギー',
  },

  // ── §B-10  被ダメージ時発動（カウンター）────────────────────────────────
  { tags: ['カウンター効果'], condition: (all) => /ワザのダメージを受けたとき/.test(all) },
  // §B-10 name-based: energies that deal damage to attacker (D-2)
  // スパイクエネルギー: つけているポケモンがワザのダメージを受けたとき、相手のバトルポケモンにダメカンを3個のせる → カウンター効果
  { tags: ['カウンター効果'], condition: (all, atk, abl, name) => name === 'スパイクエネルギー' },

  // ── §B-11  自傷・リコイル ─────────────────────────────────────────────────
  {
    tags: ['自傷'],
    condition: (all) =>
      /このポケモンにも.{1,20}ダメージ/.test(all) ||
      /このポケモンにダメカンを.{1,20}のせ/.test(all) ||
      /自分のポケモンにダメカンを.{1,30}のせる/.test(all) ||
      // "自分のベンチにもダメカン" style
      /自分の.{1,20}にも.{1,20}ダメカンを/.test(all),
  },

  // ── §B-12  ベンチ展開 ─────────────────────────────────────────────────────
  // §B-12-1  山札→ベンチ
  {
    tags: ['ベンチ展開', 'ベンチ展開>山札展開'],
    condition: (all, atk, abl, name) =>
      /山札から.{1,20}ポケモン.{1,30}ベンチに出す/.test(all) ||
      /山札からたねポケモン.{1,20}ベンチ/.test(all) ||
      ['なかよしポフィン', 'ネストボール'].includes(name),
  },
  // §B-12 name-based: stadiums/energies that put Pokémon from deck onto bench (D-2)
  // ミアレシティ: 毎ターン山札からたねポケモンをベンチに出してよい（ターン終了）
  // テレパス超エネルギー: 手張り時、超タイプたねポケモンを2枚ベンチに出せる
  {
    tags: ['ベンチ展開', 'ベンチ展開>山札展開'],
    condition: (all, atk, abl, name) => ['ミアレシティ', 'テレパス超エネルギー'].includes(name),
  },
  // §B-12-2  トラッシュ→ベンチ
  {
    tags: ['ベンチ展開', 'ベンチ展開>リバイバル'],
    condition: (all, atk, abl, name) =>
      /トラッシュから.{1,20}ポケモン.{1,30}ベンチに出す/.test(all) || name === '夜のタンカ',
  },

  // ── §B-13  進化加速 ───────────────────────────────────────────────────────
  {
    tags: ['進化加速'],
    condition: (all, atk, abl, name) =>
      /先攻最初の番.{1,30}進化させる/.test(all) ||
      /山札から.{1,30}進化.{1,30}のせて進化させる/.test(all) ||
      /山札から.{1,20}進化させる/.test(all) ||
      /残りHPが.{1,10}なら.{1,30}進化/.test(all) ||
      /手札か山札から.{1,30}進化/.test(all) ||
      name === 'ふしぎなアメ',
  },

  // ── §B-14  山札破壊 ───────────────────────────────────────────────────────
  {
    tags: ['山札破壊'],
    condition: (all) =>
      /相手の山札を上から.{1,10}トラッシュ/.test(all) ||
      /相手の山札を.{1,20}トラッシュ/.test(all),
  },

  // ── §B-15  スタジアム破壊・参照 ──────────────────────────────────────────
  {
    tags: ['スタジアム', 'スタジアム>破壊'],
    condition: (all) => /スタジアムをトラッシュ|場のスタジアムをトラッシュ/.test(all),
  },
  {
    tags: ['スタジアム', 'スタジアム>参照'],
    condition: (all) => /スタジアムが出ていない(なら)?|スタジアムが出ているなら/.test(all),
  },

  // ── §B-16  サイドカード操作 ───────────────────────────────────────────────
  { tags: ['サイド操作'], condition: (all) => /サイドを.{1,10}多くとる/.test(all) },

  // ── §B-17  条件付きダメージ強化 ──────────────────────────────────────────
  // §B-17-1  場・ポケモン数参照（オモテの数× などコイン系は除外）
  {
    tags: ['条件ダメージ', '条件ダメージ>場参照'],
    condition: (all) =>
      // Pokemon / field count (ポケモンの数×, ベンチポケモンの数×, 自分の場の...の数×)
      /ポケモン.{0,20}の数[×x]/.test(all) ||
      // Energy count attached to pokemon
      /エネルギー.{0,15}の数[×x]/.test(all) ||
      // Damage counter count (ダメカンの数×)
      /ダメカン.{0,10}の数[×x]/.test(all) ||
      // Energy cards attached count (枚数× referencing energy cards on a pokemon, not hand)
      /エネルギーカードの枚数[×x]/.test(all) ||
      /ついているエネルギーの数/.test(all) ||
      // "If bench has damage counters" conditional
      /ダメカンがのっているなら.{1,20}ダメージ追加/.test(all) ||
      // "If HP is X or more/less" conditional
      /残りHP.{1,20}ダメージ/.test(all) ||
      // §B-17-1 bench card-type presence conditionals:
      // "自分のベンチに「〇〇」がいるなら" (e.g. バルビート, グラエナ, アイアント)
      // "自分のベンチに「〇〇」のポケモンがいるなら" (e.g. ホウオウ with テラスタル)
      // "自分のベンチに「〇〇」「〇〇」がいるなら" (e.g. メタグロス)
      // "自分のベンチに、名前に「〇〇」とつくポケモンがいるなら" (e.g. ロケット団のニドクイン)
      // "自分のベンチにポケモンがいるなら、〇〇ダメージ追加" (e.g. ダダリン, ドリュウズ)
      // "自分のベンチにタイプの2進化ポケモンがいるなら" (e.g. ヤミラミ)
      /自分のベンチに.{1,40}がいるなら.{0,30}ダメージ追加/.test(all) ||
      /自分のベンチに、名前に「.+?」とつくポケモンがいるなら/.test(all),
  },
  // §B-17-2  相手の状態・エネ参照
  {
    tags: ['条件ダメージ', '条件ダメージ>相手参照'],
    condition: (all) =>
      /特殊状態なら.{1,20}ダメージ/.test(all) ||
      // Opponent energy total
      /相手.{0,20}エネルギー.{0,15}の数[×x]/.test(all) ||
      /相手のポケモン全員.{0,20}エネルギー.{0,20}ダメージ/.test(all) ||
      /エネルギー.{1,10}合計.{1,10}ダメージ/.test(all) ||
      // Opponent card type conditional (e.g. ポケモンex/V/テラスタル targeting)
      // Require ダメージ context to avoid false positives from ability text (e.g. evolution conditions)
      /相手のバトルポケモンが「ポケモンex」なら.{1,80}ダメージ/.test(all) ||
      /相手のバトルポケモンが「ポケモンV」なら.{1,80}ダメージ/.test(all) ||
      /相手のバトルポケモンが「テラスタル」のポケモンなら.{1,30}ダメージ追加/.test(all) ||
      /相手の場の「ポケモンex」の数[×x]/.test(all) ||
      /相手の「ポケモンex」全員に.{1,20}ダメージ/.test(all),
  },
  // §B-17-3  コイン可変ダメージ
  {
    tags: ['条件ダメージ', '条件ダメージ>コイン可変'],
    condition: (all) =>
      /コイン.{1,10}投げ.{1,20}オモテ.{1,20}[×x]\d+ダメージ/.test(all) ||
      /ウラが出るまでコイン.{1,30}[×x]\d+ダメージ/.test(all) ||
      /コイン.{1,10}投げ.{1,10}オモテの数.{1,20}ダメージ/.test(all) ||
      /コインを1回投げオモテなら、\d+ダメージ追加/.test(all),
  },
  // §B-17 name-based: energies that boost damage conditionally (D-2)
  // イグニッションエネルギー: 炎タイプポケモン専用; つけているポケモンのワザのダメージ+20 → 条件ダメージ（場参照）
  {
    tags: ['条件ダメージ', '条件ダメージ>場参照'],
    condition: (all, atk, abl, name) => name === 'イグニッションエネルギー',
  },

  // ── §B-18  特殊連動 ───────────────────────────────────────────────────────
  { tags: ['特殊連動', '特殊連動>古代'], condition: (all) => /「古代」|古代のサポート/.test(all) },
  { tags: ['特殊連動', '特殊連動>未来'], condition: (all) => /「未来」/.test(all) },
  // Tag テラスタル synergy: own-テラスタル or defensive/offensive use.
  // Exclude pure opponent-targeting bonus: 「相手のバトルポケモンが「テラスタル」...ダメージ追加」
  // (e.g. レジギガス ジュエルブレイク — deals bonus damage when opponent is テラスタル, not a テラスタル synergy card)
  {
    tags: ['特殊連動', '特殊連動>テラスタル'],
    condition: (all) =>
      /「テラスタル」/.test(all) &&
      !/相手のバトルポケモンが「テラスタル」.{1,30}ダメージ追加/.test(all),
  },
  // §B-18 name-based: stadiums that specifically target テラスタル Pokémon (D-2)
  // 夜の鉱山: おたがいの「テラスタル」のポケモン全員のワザコストが無エネ1個ぶん多くなる
  {
    tags: ['特殊連動', '特殊連動>テラスタル'],
    condition: (all, atk, abl, name) => name === '夜の鉱山',
  },
  // ロケット団連動: cards whose name starts with ロケット団の
  {
    tags: ['特殊連動', '特殊連動>ロケット団'],
    condition: (all, atk, abl, name) => name.startsWith('ロケット団の'),
  },
  // §B-18 name-based: ロケット団エネルギー is exclusively for ロケット団 Pokémon (D-2)
  // ロケット団エネルギー: 「ロケット団」ポケモン専用の特殊エネルギー → ロケット団連動
  {
    tags: ['特殊連動', '特殊連動>ロケット団'],
    condition: (all, atk, abl, name) => name === 'ロケット団エネルギー',
  },
  // §B-18 name-based: プリズムエネルギー — たねポケモン限定で全タイプ供給 → 特殊連動（たね限定）
  // Also text-based: rules text mentions 'すべてのタイプのエネルギー' for たね
  {
    tags: ['特殊連動'],
    condition: (all, atk, abl, name, rul) =>
      name === 'プリズムエネルギー' ||
      /たねポケモン.{1,30}すべてのタイプのエネルギー/.test(rul),
  },

  // ── §B-19  ACE SPEC ───────────────────────────────────────────────────────
  { tags: ['ACE SPEC'], condition: (all, atk, abl, name, rul) => /ACE SPECのカードは/.test(rul) },
  // §B-19 name-based: ACE SPEC special energies with mechanical effects (D-2)
  // ネオアッパーエネルギー: 手張りした次の番、つけているポケモンのワザのダメージ+50 → 条件ダメージ>場参照
  {
    tags: ['条件ダメージ', '条件ダメージ>場参照'],
    condition: (all, atk, abl, name) => name === 'ネオアッパーエネルギー',
  },
  // リッチエネルギー: このカードをつけたとき、山札から2枚引く → ドロー>固定枚数ドロー
  {
    tags: ['ドロー', 'ドロー>固定枚数ドロー'],
    condition: (all, atk, abl, name) => name === 'リッチエネルギー',
  },
  // レガシーエネルギー: このカードをトラッシュしたとき、トラッシュから好きなカードを1枚手札に加える → ドロー>トラッシュ回収
  {
    tags: ['ドロー', 'ドロー>トラッシュ回収'],
    condition: (all, atk, abl, name) => name === 'レガシーエネルギー',
  },

  // ── §B-20  ポケモンチェック参照 ──────────────────────────────────────────
  { tags: ['ポケモンチェック'], condition: (all) => /ポケモンチェックのたびに?/.test(all) },

  // ── §B-21  手札シャッフル・引き直し ──────────────────────────────────────
  // 手札トラッシュ→ドロー: 手札をすべてトラッシュし → NOT shuffle (Fix: was false-positive in 手札シャッフル)
  {
    tags: ['手札干渉', '手札干渉>手札トラッシュ'],
    condition: (all) => /手札をすべてトラッシュし/.test(all),
  },
  {
    tags: ['手札シャッフル'],
    condition: (all) =>
      /手札をすべて山札にもどして切る.{1,30}引く/.test(all) ||
      /手札を山札にもどして切る.{1,30}引く/.test(all) ||
      /山札にもどして切る.{1,20}このポケモン/.test(all),
  },
  // §B-21 name-based: stadiums that return cards from hand to deck (D-2)
  // 夜のアカデミー: 自分の番ごとに1回、自分の手札を1枚選び、山札の上にもどしてよい
  { tags: ['手札シャッフル'], condition: (all, atk, abl, name) => name === '夜のアカデミー' },

  // ── §B-22  特性無効化 ─────────────────────────────────────────────────────
  // 「この特性は使えない」を含む場合、自己制限（この番、すでに別の「X」を使っていたなら）か
  // 相手特性無効かを区別する。自己制限のみの場合は 特性無効 を付与しない。
  {
    tags: ['特性無効'],
    condition: (all) => {
      // Self-restriction patterns:
      //   1. 「この番、すでに別の「X」を使っていたなら、この特性は使えない」(スピンロトム, キチキギスex, etc.)
      //   2. 「この番、名前に「X」とつく特性を使っていたなら、この特性は使えない」(ニャースex)
      const selfRestrictionPattern = /この番、(すでに別の「.{1,20}」を使っていたなら|名前に「.{1,20}」とつく特性を使っていたなら)、この特性は使えない/;
      const hasSelfRestrictionOnly = /特性は使えない/.test(all) &&
        !/特性をなくす|特性がなくなる|おたがいの.{1,20}特性.{1,20}使えない|特性を持つポケモンからワザのダメージを受けない/.test(all) &&
        selfRestrictionPattern.test(all);
      return !hasSelfRestrictionOnly && (
        /特性をなくす/.test(all) ||
        /特性がなくなる/.test(all) ||
        /特性は使えない/.test(all) ||
        /おたがいの.{1,20}特性.{1,20}使えない/.test(all) ||
        // 「特性を持つポケモンからワザのダメージを受けない」（§B-22 border case）
        /特性を持つポケモンからワザのダメージを受けない/.test(all)
      );
    },
  },

  // ── D-4  将来候補グループ ─────────────────────────────────────────────────
  // タイプ変更
  {
    tags: ['タイプ変更'],
    condition: (all) => /弱点.{1,15}タイプが.{1,10}になる|弱点が.{1,10}になる/.test(all),
  },
  // にげるコスト無償（§1-3のうち完全0化）
  {
    tags: ['にげるコスト無償'],
    condition: (all) =>
      /にげるためのエネルギー.{1,20}すべてなくなる|にげるためのエネルギー.{1,20}なくなる/.test(all) ||
      /にげるためのエネルギーは0になる/.test(all) ||
      /にげるためのエネルギーが.{1,10}なくなる/.test(all),
  },
  // ワザコピー（C-18）
  { tags: ['ワザコピー'], condition: (all) => /このワザの効果として使う/.test(all) },
  // 退化（C-13）
  { tags: ['退化'], condition: (all) => /退化させる|進化前のカードにもどす|はがして退化/.test(all) },

  // ── §B-24  ダメージ操作 ────────────────────────────────────────────────────
  // §B-24-1  抵抗無視: 「このワザのダメージは抵抗力を計算しない」系
  // NOTE: ベンチ注釈 ［ベンチは弱点・抵抗力を計算しない。］ は §4 で処理済み; ここでは
  //       ワザ本文の「このワザのダメージは…抵抗力…計算しない」パターンのみ対象
  {
    tags: ['ダメージ操作', 'ダメージ操作>抵抗無視'],
    condition: (all, atk) =>
      /このワザのダメージは抵抗力を計算しない/.test(atk) ||
      /このワザのダメージは.{0,10}弱点・抵抗力.{0,10}計算しない/.test(atk),
  },

  // ── §B-25  特殊エネルギー効果（ルールテキスト検出）─────────────────────
  // Special energies store their effect in rules text (not abilities/attacks).
  // Most are handled by name-based matching above, but these patterns catch
  // future additions automatically.
  // ダメージ軽減 in rules text (e.g. "受けるダメージは-20")
  {
    tags: ['ダメージ軽減', 'ダメージ軽減>軽減'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' &&
      (/受けるダメージ.{1,10}[-ー]\d+/.test(rul) || /ダメージを.{1,10}少なく/.test(rul)),
  },
  // 特殊状態 prevention in rules text (e.g. "特殊状態にならない")
  {
    tags: ['特殊状態'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /特殊状態にならない/.test(rul),
  },
  // エネ加速 via rules text (e.g. "エネルギーを…つける")
  {
    tags: ['エネ加速'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' &&
      /エネルギー.{1,30}つける/.test(rul) && /山札|トラッシュ|手札/.test(rul),
  },
  // ドロー via rules text (e.g. "山札を引く")
  {
    tags: ['ドロー', 'ドロー>固定枚数ドロー'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /山札.{1,10}引く/.test(rul),
  },
  // カウンター効果 via rules text (e.g. "ダメージを受けたとき")
  {
    tags: ['カウンター効果'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /ダメージを受けたとき/.test(rul),
  },
  // トラッシュ回収 via rules text (e.g. "トラッシュ…手札に加える")
  {
    tags: ['ドロー', 'ドロー>トラッシュ回収'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /トラッシュ.{1,30}手札に加える/.test(rul),
  },
  // ベンチ展開 via rules text
  {
    tags: ['ベンチ展開'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' && /ベンチに出す/.test(rul),
  },
  // ダメージブースト via rules text (e.g. "ダメージ+20")
  {
    tags: ['条件ダメージ', '条件ダメージ>場参照'],
    condition: (all, atk, abl, name, rul, c) =>
      c.cardKind === '特殊エネルギー' &&
      (/ダメージ[+＋]\d+/.test(rul) || /ダメージが.{1,10}多くなる/.test(rul)),
  },
];

// ── §B-23  キャラクター連動 ───────────────────────────────────────────────
// Cards whose name starts with <キャラクター名>の
// Covers known characters plus any 〇〇の prefix auto-detected from the card pool.
// Excludes ロケット団の (handled above under §B-18) and non-character prefixes
// (e.g. ○○のみ berries, regional Pikachu place names, generic nouns).
{
  const CHARACTER_PREFIXES = [
    'MC', 'N', 'アイリス', 'アオキ', 'アクロマ', 'アセロラ', 'アンズ', 'インフルエンサー',
    'エリカ', 'カスミ', 'ギーマ', 'クセロシキ', 'シトロン', 'シロナ', 'スイレン',
    'ゼロ', 'タケシ', 'ダイゴ', 'ナンジャモ', 'ヒビキ', 'ベル', 'ペパー', 'ホップ',
    'ボス', 'マチス', 'マツバ', 'マリィ', 'ミカン', 'ミツル', 'メイ', 'リーリエ', 'ルチア',
    'ポケモンセンター', '暗号マニア', '探検家',
  ];
  for (const ch of CHARACTER_PREFIXES) {
    TAG_RULES.push({
      tags: ['キャラクター連動', `キャラクター連動>${ch}`],
      condition: (all, atk, abl, name) => name.startsWith(ch + 'の'),
    });
  }
}

// ─── Tag assignment ───────────────────────────────────────────────────────────
function assignTags(c) {
  const tags = new Set();
  const add  = (...ts) => ts.forEach(t => tags.add(t));

  const all  = allText(c);
  const atk  = attackText(c);
  const abl  = abilityText(c);
  const rul  = rulesText(c);
  const name = c.name;

  for (const rule of TAG_RULES) {
    if (rule.condition(all, atk, abl, name, rul, c)) {
      add(...[rule.tags].flat());
    }
  }

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
  'ポケモン入れ替え', 'ポケモン入れ替え>ワザ', 'ポケモン入れ替え>特性', 'ポケモン入れ替え>にげるコスト操作',
  '相手入れ替え', '相手入れ替え>C-04型', '相手入れ替え>C-05型', '相手入れ替え>バウンス',
  '手札干渉', '手札干渉>手札を見る', '手札干渉>トラッシュ', '手札干渉>山札戻し', '手札干渉>手札参照', '手札干渉>手札トラッシュ',
  'ベンチ狙撃', 'ベンチ狙撃>ダメージ型', 'ベンチ狙撃>全体スプレッド', 'ベンチ狙撃>ダメカン型', 'ベンチ狙撃>移動型',
  'エネ加速', 'エネ加速>山札→手札', 'エネ加速>山札→ポケモン', 'エネ加速>手札→ポケモン', 'エネ加速>トラッシュ→ポケモン',
  'ドロー', 'ドロー>固定枚数ドロー', 'ドロー>ポケモンサーチ', 'ドロー>トレーナーズサーチ', 'ドロー>トラッシュ回収',
  '特殊状態', '特殊状態>どく', '特殊状態>やけど', '特殊状態>こんらん', '特殊状態>ねむり', '特殊状態>マヒ',
  '回復', '回復>固定HP回復', '回復>全回復', '回復>複数回復',
  'ダメカン操作',
  'エネ移動',
  'エネ除去', 'エネ除去>相手エネ除去', 'エネ除去>自己コスト',
  'ワザロック', 'ワザロック>自己ロック', 'ワザロック>相手ロック', 'ワザロック>にげられない',
  'グッズサポートロック', 'グッズサポートロック>グッズロック', 'グッズサポートロック>サポートロック', 'グッズサポートロック>ACE SPECロック',
  'ダメージ軽減', 'ダメージ軽減>軽減', 'ダメージ軽減>無効',
  'カウンター効果',
  '自傷',
  'ベンチ展開', 'ベンチ展開>山札展開', 'ベンチ展開>リバイバル',
  '進化加速',
  '山札破壊',
  'スタジアム', 'スタジアム>破壊', 'スタジアム>参照',
  'サイド操作',
  '条件ダメージ', '条件ダメージ>場参照', '条件ダメージ>相手参照', '条件ダメージ>コイン可変',
  '特殊連動', '特殊連動>古代', '特殊連動>未来', '特殊連動>テラスタル', '特殊連動>ロケット団',
  'ACE SPEC',
  'ポケモンチェック',
  '手札シャッフル',
  '特性無効',
  // §B-23 キャラクター連動
  'キャラクター連動',
  'キャラクター連動>MC',
  'キャラクター連動>N',
  'キャラクター連動>アイリス',
  'キャラクター連動>アオキ',
  'キャラクター連動>アクロマ',
  'キャラクター連動>アセロラ',
  'キャラクター連動>アンズ',
  'キャラクター連動>インフルエンサー',
  'キャラクター連動>エリカ',
  'キャラクター連動>カスミ',
  'キャラクター連動>ギーマ',
  'キャラクター連動>クセロシキ',
  'キャラクター連動>シトロン',
  'キャラクター連動>シロナ',
  'キャラクター連動>スイレン',
  'キャラクター連動>ゼロ',
  'キャラクター連動>タケシ',
  'キャラクター連動>ダイゴ',
  'キャラクター連動>ナンジャモ',
  'キャラクター連動>ヒビキ',
  'キャラクター連動>ベル',
  'キャラクター連動>ペパー',
  'キャラクター連動>ホップ',
  'キャラクター連動>ボス',
  'キャラクター連動>マチス',
  'キャラクター連動>マツバ',
  'キャラクター連動>マリィ',
  'キャラクター連動>ミカン',
  'キャラクター連動>ミツル',
  'キャラクター連動>メイ',
  'キャラクター連動>リーリエ',
  'キャラクター連動>ルチア',
  'キャラクター連動>ポケモンセンター',
  'キャラクター連動>暗号マニア',
  'キャラクター連動>探検家',
  // §B-24 ダメージ操作
  'ダメージ操作', 'ダメージ操作>抵抗無視',
  // D-4 future candidates
  'タイプ変更',
  'にげるコスト無償',
  'ワザコピー',
  '退化',
];

// Add any tags not in GROUP_ORDER (shouldn't happen but safety net)
const allTags = new Set([...GROUP_ORDER, ...Object.keys(tagCounts)]);
const orderedTags = [...GROUP_ORDER, ...[...allTags].filter(t => !GROUP_ORDER.includes(t))];

// Group mappings for the report headers
const SECTION_MAP = {
  'ポケモン入れ替え':   '§1',  '相手入れ替え': '§2',  '手札干渉': '§3',
  'ベンチ狙撃':         '§4',  'エネ加速':     '§5',
  'ドロー':             '§B-1','特殊状態':     '§B-2','回復': '§B-3',
  'ダメカン操作':       '§B-4','エネ移動':     '§B-5','エネ除去': '§B-6',
  'ワザロック':         '§B-7','グッズサポートロック': '§B-8','ダメージ軽減': '§B-9',
  'カウンター効果':     '§B-10','自傷':        '§B-11','ベンチ展開': '§B-12',
  '進化加速':           '§B-13','山札破壊':    '§B-14','スタジアム': '§B-15',
  'サイド操作':         '§B-16','条件ダメージ':'§B-17','特殊連動': '§B-18',
  'ACE SPEC':           '§B-19','ポケモンチェック': '§B-20','手札シャッフル': '§B-21',
  '特性無効':           '§B-22',
  'キャラクター連動':   '§B-23',
  'タイプ変更':         'D-4', 'にげるコスト無償': 'D-4','ワザコピー': 'D-4',
  '退化':               'D-4',
  'ダメージ操作':       '§B-24',
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
