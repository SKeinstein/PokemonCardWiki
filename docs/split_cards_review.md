# Split Cards Human Review Checklist

Generated: 2026-04-05

## Background

After fixing `normalize_cards.js` to include attack+ability fingerprints in the master card ID, the master card count grew from **1,555 → 1,774** (+219 new cards). These 219 cards were previously merged with other cards sharing the same name but having different attacks or abilities.

This checklist covers all **355 split groups** (card names that now have 2+ master card entries). For each group, verify that the tag assignments are correct — i.e., tags assigned to individual variants correctly reflect the abilities/attacks of that variant.

## Summary

| Metric | Count |
|--------|-------|
| Total split groups | 355 |
| Split groups with ≥1 tagged variant | 296 |
| Split groups with no tags | 59 |
| Total master card variants across all splits | 808 |
| Variants with tags | 479 |
| Variants without tags | 329 |

## How to Review

For each card group below:
1. Read each variant's attacks/abilities summary
2. Check that the assigned tags match the functionality described
3. If tags look correct → check the box ✅
4. If tags look wrong or missing → leave unchecked and add a note

**Tag format**: Tags follow a hierarchical scheme, e.g., `エネ除去 > エネ除去>相手エネ除去`.

---

## Part 1: Split Groups WITH Tags (296 groups)

These groups are higher priority — at least one variant has tags that need verification.

### アイアント

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アイアント_90_grass_none_かみくだく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | grass |
| Regulation | MP1, MC, SVM |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer., スタートデッキ100 バトルコレクション, スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **かみくだく** 50ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

#### Variant 2: `アイアント_110_steel_none_いっしょにかむ|はさむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | steel |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **いっしょにかむ** 20＋ダメージ — 自分のベンチに「アイアント」がいるなら、20ダメージ追加。<br>[steelnone] **はさむ** 50ダメージ

**Assigned Tags:** _（タグなし）_

---

### アギルダー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アギルダー_100_grass_none_うつせみポイズン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **うつせみポイズン** 70ダメージ — 相手のバトルポケモンをどくとこんらんにする。このポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `アギルダー_100_grass_none_アシッドボム_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **アシッドボム** 50ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

---

### アサナン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アサナン_70_fighting_none_キック|ビンタ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ビンタ** 10ダメージ<br>[nonenone] **キック** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `アサナン_70_fighting_none_たたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[fighting] **たたく** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `アサナン_70_fighting_none_めいそう|チョップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV7 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **めいそう** — このポケモンのHPを「20」回復する。<br>[fightingnonenone] **チョップ** 50ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 4: `アサナン_70_fighting_none_ワンツーパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ワンツーパンチ** 10＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 5: `アサナン_70_fighting_none_ひっぱたく|もってくる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。<br>[fighting] **ひっぱたく** 10ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### アズマオウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アズマオウ_90_water_none_つつきおとす|つのドリル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | water |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[water] **つつきおとす** 50ダメージ — ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。<br>[nonenonenone] **つのドリル** 90ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `アズマオウ_110_water_none_クイックドロー_おまつりおんど`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | water |
| Regulation | SV8a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」 |

**Abilities:**

**[特性] おまつりおんど** — 場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出…

**Attacks:**

[none] **クイックドロー** 60ダメージ — 自分の山札を2枚引く。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### アチャモ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アチャモ_60_fire_none_ひっかく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fire |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations カイオーガex・バシャーモex |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ひっかく** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `アチャモ_70_fire_none_かえん|もってくる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。<br>[fire] **かえん** 10ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### アノクサ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アノクサ_50_grass_none_トゲでさす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | MC, SV8a, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **トゲでさす** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `アノクサ_50_psychic_none_そっとのせる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | psychic |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **そっとのせる** — 相手のポケモン1匹に、ダメカンを1個のせる。

**Assigned Tags:** `ダメカン操作`

---

### アノホラグサ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アノホラグサ_100_grass_none_パワフルニードル_ざっそうだましい`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | MC, SV8a, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

**[特性] ざっそうだましい** — 相手がすでにとったサイド1枚につき、このポケモンの最大HPは「＋50」される。

**Attacks:**

[grassnonenone] **パワフルニードル** 80×ダメージ — このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `条件ダメージ>場参照`

#### Variant 2: `アノホラグサ_100_psychic_none_ねんどうだん_パニックプリズン`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | psychic |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

**[特性] パニックプリズン** — 自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをこんらんにする。

**Attacks:**

[psychicnonenone] **ねんどうだん** 80ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

---

### アバゴーラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アバゴーラ_160_water_none_ハイドロクラッシュ_げんしのこころえ`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | water |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

**[特性] げんしのこころえ** — このポケモンがいるかぎり、自分のポケモンが使うワザの、相手のバトル場の進化ポケモンへのダメージは「+30」される。

**Attacks:**

[waterwater] **ハイドロクラッシュ** 150ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `アバゴーラ_180_water_none_かじりつく_マイティシェル`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | water |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

**[特性] マイティシェル** — このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージや効果を受けない。

**Attacks:**

[waternonenone] **かじりつく** 150ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ダメージ軽減`, `ワザロック`, `ワザロック>にげられない`

---

### アブソル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アブソル_110_dark_none_バッドフォール_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | dark |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **バッドフォール** 20＋ダメージ — 自分の場にエネルギーが3個以上あるなら、50ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `アブソル_110_dark_none_ひきつける|ダークカッター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | dark |
| Regulation | MBG |
| Variant Count | 1枚 |
| Sample Sets | スターターセットMEGA メガゲンガーex |

**Abilities:**

_なし_

**Attacks:**

[none] **ひきつける** — 自分の山札を2枚引く。<br>[darknone] **ダークカッター** 60ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### アリアドス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アリアドス_90_grass_none_いとがらめ_ビッグネット`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | grass |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

**[特性] ビッグネット** — このポケモンがいるかぎり、相手のバトル場の進化ポケモンのにげるためのエネルギーは、1個ぶん多くなる。

**Attacks:**

[grass] **いとがらめ** 10＋ダメージ — 相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

#### Variant 2: `アリアドス_110_grass_none_ポイズンサークル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ポイズンサークル** 50ダメージ — 相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `特殊状態`, `特殊状態>どく`

---

### アリゲイツ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アリゲイツ_90_water_none_ぎゃくふんしゃ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | water |
| Regulation | MC, SV8a, SV5K |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[water] **ぎゃくふんしゃ** 30ダメージ — このポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

#### Variant 2: `アリゲイツ_100_water_none_かみくだく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | water |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[waterwater] **かみくだく** 50ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

---

### アルクジラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `アルクジラ_100_water_none_ドレインフィン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | water |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[waternone] **ドレインフィン** 20ダメージ — このポケモンのHPを「20」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 2: `アルクジラ_100_water_none_ひっぱたく|フロストスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | water |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[waternone] **ひっぱたく** 30ダメージ<br>[waterwaterwaternone] **フロストスマッシュ** 80ダメージ

**Assigned Tags:** _（タグなし）_

---

### イーブイ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イーブイ_60_none_none_かじる|なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | MC, SVM, SVI |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ゼルネアスex・オンバーンex, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。<br>[nonenone] **かじる** 20ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `イーブイ_50_none_none_かくせい|でんこうせっか_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | none |
| Regulation | SV5a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かくせい** — このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。<br>[nonenonenone] **でんこうせっか** 20＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

**Assigned Tags:** `進化加速`

#### Variant 3: `イーブイ_70_none_none_ずつき|カラフルキャッチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV-P, SV6a |
| Variant Count | 3枚 |
| Sample Sets | デッキそのままバトル～イーブイゲットだぜ～, ポケカバトルをはじめよう！キャンペーン, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **カラフルキャッチ** — 自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[nonenone] **ずつき** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 4: `イーブイ_50_none_none_とつげき_ブーストしんか`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | none |
| Regulation | MC, SV8a, SVLN |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

**[特性] ブーストしんか** — このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。

**Attacks:**

[nonenone] **とつげき** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### イーユイ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イーユイ_110_fire_none_ひきつける|グラウンドメルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | fire |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひきつける** — 自分の山札を2枚引く。<br>[firenone] **グラウンドメルト** 60＋ダメージ — 場にスタジアムが出ているなら、60ダメージ追加。その後、そのスタジアムをトラッシュする。

**Assigned Tags:** `スタジアム`, `スタジアム>参照`, `スタジアム>破壊`, `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `イーユイ_110_fire_none_やけつくだいち_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | fire |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **やけつくだいち** 40ダメージ — 場に出ている相手のスタジアムをトラッシュする。トラッシュした場合、次の相手の番、相手は手札からスタジアムを出せない。

**Assigned Tags:** `スタジアム`, `スタジアム>破壊`

---

### イキリンコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イキリンコ_70_none_none_くわえる|ハイパーボイス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[none] **くわえる** — 自分の山札を2枚引く。<br>[nonenone] **ハイパーボイス** 40ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `イキリンコ_70_none_none_つきとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つきとばす** 20ダメージ — のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

---

### イシズマイ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イシズマイ_70_grass_none_かくせい_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | MC, M2a, SV9a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かくせい** — このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。

**Assigned Tags:** `進化加速`

#### Variant 2: `イシズマイ_70_fighting_none_じたばた|ツメをたてる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **じたばた** 10×ダメージ — このポケモンにのっているダメカンの数×10ダメージ。<br>[nonenone] **ツメをたてる** 20ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### イダイナキバ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イダイナキバ_140_fighting_none_きょだいなキバ|じばんほうかい_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 140 |
| Type | fighting |
| Regulation | SV8a, SV5K |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **じばんほうかい** — 相手の山札を上から1枚トラッシュする。この番、手札から「古代」のサポートを出して使っていたなら、さらに3枚トラッシュする。<br>[fightingfightingnonenone] **きょだいなキバ** 160ダメージ

**Assigned Tags:** `古代未来テラスタル`, `古代未来テラスタル>古代`, `山札破壊`

#### Variant 2: `イダイナキバ_140_fighting_none_つきたおし|ふんぬとつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 140 |
| Type | fighting |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **つきたおし** 30ダメージ<br>[fightingnonenone] **ふんぬとつげき** 80＋ダメージ — 自分のベンチポケモンにダメカンがのっているなら、80ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### イトマル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イトマル_60_grass_none_むしくい_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **むしくい** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `イトマル_60_grass_none_ねばるいと_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ねばるいと** 10ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

---

### イベルタル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イベルタル_120_dark_none_はかいビーム|むしばむかぜ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | dark |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **むしばむかぜ** — ダメカンがのっている相手のポケモン全員に、それぞれダメカンを2個のせる。<br>[darkdarknone] **はかいビーム** 100ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`, `ダメカン操作`, `ベンチ狙撃`, `ベンチ狙撃>ダメカン型`

#### Variant 2: `イベルタル_110_dark_none_わしづかみ|ダークフェザー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | dark |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **わしづかみ** 20ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。<br>[darkdarknone] **ダークフェザー** 110ダメージ

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

---

### イルカマン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イルカマン_150_water_none_ダブルアタック|ヴァンガードパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | water |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[water] **ヴァンガードパンチ** 130ダメージ — このポケモンにも、このポケモンにのっているダメカンの数×10ダメージ。<br>[waternonenone] **ダブルアタック** 90×ダメージ — コインを2回投げ、オモテの数×90ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `条件ダメージ>場参照`

#### Variant 2: `イルカマン_100_water_none_スプラッシュ_マイティチェンジ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | water |
| Regulation | MC, SV8a, SV6 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] マイティチェンジ** — 自分の番に、このポケモンがバトル場からベンチにもどったとき、1回使える。自分の山札から「イルカマンex」を1枚選び、このカードと入れ替える（ついているカード・ダ…

**Attacks:**

[waternone] **スプラッシュ** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### イワパレス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `イワパレス_150_grass_none_グレートシザー_しんぴのいしやど`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | grass |
| Regulation | MC, M2a, SV9a |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

**[特性] しんぴのいしやど** — このポケモンは、相手の「ポケモンex」からワザのダメージを受けない。

**Attacks:**

[grassnonenone] **グレートシザー** 120ダメージ — このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `イワパレス_150_fighting_none_ストーンエッジ_がんじょう`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | fighting |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

**[特性] がんじょう** — このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。

**Attacks:**

[fightingnonenone] **ストーンエッジ** 80＋ダメージ — コインを1回投げオモテなら、60ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### ウォーグル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ウォーグル_130_none_none_ひきずりだす|ブラストウインド_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | none |
| Regulation | SV7a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ひきずりだす** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。<br>[nonenonenone] **ブラストウインド** 120ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

#### Variant 2: `ウォーグル_140_none_none_つばめがえし|スピードウイング_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | none |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つばめがえし** 40＋ダメージ — コインを1回投げオモテなら、40ダメージ追加。<br>[nonenonenonenone] **スピードウイング** 130ダメージ

**Assigned Tags:** _（タグなし）_

---

### ウッウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ウッウ_110_water_none_みずでっぽう|スピットシュート_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | water |
| Regulation | MC, SV5a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **みずでっぽう** 20ダメージ<br>[nonenonenone] **スピットシュート** — このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `ウッウ_110_none_none_れんぞくスピット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **れんぞくスピット** 50×ダメージ — ウラが出るまでコインを投げ、オモテの数×50ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ウリムー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ウリムー_70_fighting_none_つきたおし|なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SV9 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[fighting] **つきたおし** 10ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `ウリムー_70_water_none_ふむ|スノーアイス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ふむ** 10ダメージ<br>[waternone] **スノーアイス** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ウルガモス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ウルガモス_140_fire_none_きゅうけつ|どとうのはばたき_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **きゅうけつ** 30ダメージ — 相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。<br>[firenonenone] **どとうのはばたき** 150ダメージ — このポケモンにも50ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ウルガモス_140_fire_none_ほのおのりんぷん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ほのおのりんぷん** 80ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ウルガモス_120_fire_none_ほのおのつばさ_ねっぱりんぷん`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

**[特性] ねっぱりんぷん** — 自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のバトルポケモンをやけどにする。

**Attacks:**

[firenonenone] **ほのおのつばさ** 70ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>やけど`

---

### エアームド

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エアームド_120_steel_none_おおあらし|カッターウインド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | steel |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **カッターウインド** 30ダメージ<br>[nonenonenone] **おおあらし** 90ダメージ — 場に出ているスタジアムをトラッシュする。

**Assigned Tags:** `スタジアム`, `スタジアム>破壊`

#### Variant 2: `エアームド_110_steel_none_はがねのつばさ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | steel |
| Regulation | MC, SV7a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **はがねのつばさ** 50ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-30」される。

**Assigned Tags:** `ダメージ軽減`

#### Variant 3: `エアームド_110_steel_none_はねやすめ|メタルクロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | steel |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はねやすめ** — このポケモンのHPを「50」回復する。次の自分の番、このポケモンはにげられない。<br>[steelnone] **メタルクロー** 60ダメージ

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `回復`, `回復>固定HP回復`

---

### エテボース

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エテボース_110_none_none_ひっぱたく_いけずなしっぽ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] いけずなしっぽ** — 自分の番に、このカードを手札から出して進化させたとき、1回使える。コインを2回投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、そのカードのオモテを見て…

**Attacks:**

[nonenonenone] **ひっぱたく** 100ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `エテボース_110_none_none_デュアルテール|ビンタ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ビンタ** 50ダメージ<br>[nonenonenone] **デュアルテール** — このポケモンについているエネルギーを2個トラッシュし、相手のポケモン2匹に、それぞれ60ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### エネコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エネコ_60_none_none_たいあたり|なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。<br>[nonenone] **たいあたり** 20ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `エネコ_60_none_none_ねこキック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[none] **ねこキック** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### エネコロロ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エネコロロ_110_none_none_しっぽでまどわす|エナジーミキサー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **しっぽでまどわす** 30ダメージ — 相手のバトルポケモンをこんらんにする。<br>[nonenonenone] **エナジーミキサー** 110ダメージ — 自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。

**Assigned Tags:** `エネ移動`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `エネコロロ_100_none_none_ねこキック|エナジークラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | none |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[none] **ねこキック** 40ダメージ<br>[nonenone] **エナジークラッシュ** 40×ダメージ — 相手のポケモン全員についているエネルギーの数×40ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

---

### エモンガ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エモンガ_60_electric_none_スカイウェーブ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **スカイウェーブ** 10ダメージ — おたがいのベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `ベンチ狙撃>全体スプレッド`

#### Variant 2: `エモンガ_70_electric_none_なかまをよぶ|バチバチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | MP1, MC, SV11B |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer., スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[electric] **バチバチ** 20ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

---

### エリキテル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エリキテル_60_electric_none_もってくる|バチバチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。<br>[electric] **バチバチ** 10ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `エリキテル_70_none_none_とつげき|プチボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **プチボルト** 10ダメージ<br>[nonenonenone] **とつげき** 40ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 3: `エリキテル_70_electric_none_ダブルひっかき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M1S |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ダブルひっかき** 10×ダメージ — コインを2回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 4: `エリキテル_70_electric_none_エレキック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **エレキック** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### エルフーン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エルフーン_100_grass_none_タネばくだん_かるがるヒール`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | SV8a, SV5K |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

**[特性] かるがるヒール** — 自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトル場のポケモンのHPを、すべて回復する。その後、回復したポケモンについているエネルギ…

**Attacks:**

[grass] **タネばくだん** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `エルフーン_90_psychic_none_いやしのわたげ|とんぼがえり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | psychic |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **いやしのわたげ** — 自分のベンチポケモン1匹のHPを、すべて回復する。<br>[psychic] **とんぼがえり** 50ダメージ — このポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`, `回復`, `回復>複数回復`

---

### エレザード

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エレザード_100_electric_none_ワイルドボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | electric |
| Regulation | MC, SV5a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ワイルドボルト** 70ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `エレザード_110_none_none_エレキスラッグ|パラボラチャージ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **パラボラチャージ** — 自分の山札からエネルギーを4枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[nonenonenone] **エレキスラッグ** 80ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `エレザード_120_electric_none_せんこうだん|ヘッドボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **せんこうだん** 20ダメージ — 相手のバトルポケモンをこんらんにする。<br>[electricnone] **ヘッドボルト** 70ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

#### Variant 4: `エレザード_120_electric_none_パワフルボルト_エリマキはつでん`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | M2a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

**[特性] エリマキはつでん** — この番に、手札から「カナリィ」を出して使っていたなら、自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切…

**Attacks:**

[electricnonenone] **パワフルボルト** 70×ダメージ — このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×70ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `条件ダメージ>場参照`

---

### エレブー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `エレブー_90_electric_none_チョップ|ビリリパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | electric |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **チョップ** 20ダメージ<br>[electricnonenone] **ビリリパンチ** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `エレブー_90_electric_none_もってくる|マグナムパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | electric |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **もってくる** — 自分の山札を1枚引く。<br>[electricelectric] **マグナムパンチ** 40ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 3: `エレブー_90_electric_none_エレキスラッグ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | electric |
| Regulation | MC, SV9a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **エレキスラッグ** 50ダメージ

**Assigned Tags:** _（タグなし）_

---

### オーガポン みどりのめん

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オーガポン みどりのめん_110_grass_none_おにがえし|やまあるき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | grass |
| Regulation | MC, SV-P, SV6 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スペシャルジャンボカードセット オーガポン, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **やまあるき** — 自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[grassnone] **おにがえし** 20＋ダメージ — 相手のベンチポケモンの数×20ダメージ追加。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`, `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `オーガポン みどりのめん_110_grass_none_おにハンマー|くさかぐら_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | grass |
| Regulation | MC, SV9a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **くさかぐら** — 自分の山札から「基本エネルギー」を1枚選び、自分のポケモンにつける。そして山札を切る。<br>[grassgrassnone] **おにハンマー** 120ダメージ — 次の自分の番、このポケモンは「おにハンマー」が使えない。

**Assigned Tags:** _（タグなし）_

---

### オーダイル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オーダイル_180_water_none_おおなみ_トレントハート`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | water |
| Regulation | MC, SV8a, SV5K |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

**[特性] トレントハート** — 自分の番に1回使える。このポケモンにダメカンを5個のせる。その場合、この番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。

**Attacks:**

[waterwater] **おおなみ** 160ダメージ — 次の自分の番、このポケモンは「おおなみ」が使えない。

**Assigned Tags:** `ダメカン操作`, `自傷`

#### Variant 2: `オーダイル_180_water_none_ディープダイビング_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | water |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | Pokémon Trading Card Game イラストレーションコンテスト 2024 |

**Abilities:**

_なし_

**Attacks:**

[waterwaterwaternone] **ディープダイビング** 140ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

---

### オーベム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オーベム_100_psychic_none_コスモビート_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | psychic |
| Regulation | MC, SVHM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「未来のミライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **コスモビート** 20×ダメージ — 自分の場のポケモンの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `オーベム_90_psychic_none_めいそう|サイコキネシス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **めいそう** — このポケモンのHPを「40」回復する。<br>[nonenonenone] **サイコキネシス** 80＋ダメージ — 相手のバトルポケモンについているエネルギーの数×30ダメージ追加。

**Assigned Tags:** `回復`, `回復>固定HP回復`, `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

---

### オーロンゲ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オーロンゲ_170_dark_none_ちょうはつクラッチ|グーパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dark |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ちょうはつクラッチ** — 相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、新しく出てきたポケモンに160ダメージ。<br>[darknonenone] **グーパンチ** 160ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `オーロンゲ_170_psychic_none_かげむすび|メガトンパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | psychic |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **かげむすび** 50×ダメージ — 相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ。<br>[psychicnone] **メガトンパンチ** 120ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

---

### オコリザル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オコリザル_110_fighting_none_あしばらい|メガトンパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **あしばらい** 30ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。<br>[fightingnone] **メガトンパンチ** 70ダメージ

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

#### Variant 2: `オコリザル_110_fighting_none_ひきずりだす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ひきずりだす** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

---

### オトシドリ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オトシドリ_100_dark_none_とつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | dark |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[darknone] **とつげき** 70ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `オトシドリ_120_dark_none_かっくう|ドロップショット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | dark |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[none] **かっくう** 20ダメージ<br>[darkdarknone] **ドロップショット** — このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### オドリドリ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オドリドリ_90_fire_none_ひばな|エネアシスト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | fire |
| Regulation | MC, SVLS |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ソウブレイズex |

**Abilities:**

_なし_

**Attacks:**

[fire] **エネアシスト** — 自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。<br>[fire] **ひばな** 30ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 2: `オドリドリ_90_psychic_none_げんわくダンス|エネアシスト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | MC, SVLN |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **エネアシスト** — 自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。<br>[psychicnone] **げんわくダンス** 20ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`, `特殊状態`, `特殊状態>こんらん`

#### Variant 3: `オドリドリ_80_psychic_none_なかまをよぶ|ホロウショット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | psychic |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations カプ・コケコex・ミミッキュex |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[psychic] **ホロウショット** 20ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

---

### オノンド

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オノンド_100_dragon_none_りゅうのはどう_きんちょうかん`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dragon |
| Regulation | MC, SV6a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

**[特性] きんちょうかん** — このポケモンは、相手が手札からグッズまたはサポートを出して使ったとき、その効果を受けない。

**Attacks:**

[fightingsteel] **りゅうのはどう** 80ダメージ — 自分の山札を上から1枚トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `オノンド_100_dragon_none_かみつく|そこぢから_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dragon |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かみつく** 30ダメージ<br>[fightingsteel] **そこぢから** 90ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

---

### オンバーン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オンバーン_110_none_none_パニックハウル_チューニングエコー`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

**[特性] チューニングエコー** — 自分の手札と相手の手札が同じ枚数なら、このポケモンが「パニックハウル」を使うためのエネルギーは、すべてなくなる。

**Attacks:**

[nonenonenone] **パニックハウル** 110ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `手札干渉`, `手札干渉>手札参照`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `オンバーン_120_dragon_none_きょうかスラッシュ|こうそくいどう_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dragon |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **こうそくいどう** 40ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。<br>[psychicdark] **きょうかスラッシュ** 70＋ダメージ — このポケモンに「ポケモンのどうぐ」がついているなら、70ダメージ追加。

**Assigned Tags:** `ダメージ軽減`, `条件ダメージ`, `条件ダメージ>場参照`

---

### オンバット

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `オンバット_60_none_none_はばたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

_なし_

**Attacks:**

[none] **はばたく** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `オンバット_60_none_none_クイックドロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | MC, SV9 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **クイックドロー** 10ダメージ — 自分の山札を1枚引く。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 3: `オンバット_70_dragon_none_かみつく|ガラクタはこび_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dragon |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ガラクタはこび** — 自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[psychicdark] **かみつく** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>ポケモンサーチ`

---

### カイデン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カイデン_60_electric_none_でんきショック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | SV6 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **でんきショック** 10ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `カイデン_60_electric_none_つばめがえし_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **つばめがえし** 10＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### カエンジシ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カエンジシ_120_fire_none_ほのおのたてがみ|フレイムタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ほのおのたてがみ** 50ダメージ<br>[firefirenone] **フレイムタックル** 160ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `カエンジシ_130_fire_none_やきこがす_いかくのキバ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fire |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

**[特性] いかくのキバ** — このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-30」される。

**Attacks:**

[firenonenone] **やきこがす** 70ダメージ — 相手のバトルポケモンをやけどにする。

**Assigned Tags:** `ダメージ軽減`, `特殊状態`, `特殊状態>やけど`

---

### カクレオン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カクレオン_70_none_none_ベロウィップ_かくれじょうず`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV8 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] かくれじょうず** — このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。

**Attacks:**

[nonenone] **ベロウィップ** — 相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `カクレオン_80_none_none_ステルスアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations カイオーガex・バシャーモex |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **ステルスアタック** 80ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

---

### カジッチュ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カジッチュ_40_dragon_none_ころがりタックル|ともだちをさがす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | dragon |
| Regulation | SV5a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ともだちをさがす** — 自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[grassfire] **ころがりタックル** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `カジッチュ_40_grass_none_しるをとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | MC, SV8a, SV7 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **しるをとばす** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `カジッチュ_40_dragon_none_えいようそ|ころばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | dragon |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **えいようそ** — 自分のポケモン1匹のHPを「30」回復する。<br>[grassfire] **ころばす** 20＋ダメージ — コインを1回投げオモテなら、30ダメージ追加。

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 4: `カジッチュ_40_grass_none_プチドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | SV9a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **プチドレイン** 10ダメージ — このポケモンのHPを「10」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### カットロトム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カットロトム_90_grass_none_かりとりダッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | grass |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かりとりダッシュ** 30ダメージ — ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」と「特殊エネルギー」を、すべてトラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

#### Variant 2: `カットロトム_70_grass_none_かりとりカッター|ガジェットショー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **かりとりカッター** 20ダメージ — 場に出ているスタジアムをトラッシュする。<br>[nonenone] **ガジェットショー** 30×ダメージ — 自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。

**Assigned Tags:** `スタジアム`, `スタジアム>破壊`, `条件ダメージ`, `条件ダメージ>場参照`

---

### カバルドン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カバルドン_160_fighting_none_おおすなあらし|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 160 |
| Type | fighting |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第8弾 |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **ぶつかる** 60ダメージ<br>[fightingfightingnone] **おおすなあらし** 150ダメージ — ダメカンがのっているおたがいのベンチポケモン全員にも、それぞれ40ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `ベンチ狙撃>全体スプレッド`

#### Variant 2: `カバルドン_150_fighting_none_すなしぶき|ランドクラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **すなしぶき** 90ダメージ<br>[fightingnonenonenone] **ランドクラッシュ** 140ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `カバルドン_150_fighting_none_たつまきふんしゃ|ヘビーインパクト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | fighting |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fightingfightingnone] **たつまきふんしゃ** 80ダメージ — この番に、手札から「タラゴン」を出して使っていたなら、相手の山札を上から3枚トラッシュする。<br>[fightingfightingnonenone] **ヘビーインパクト** 130ダメージ

**Assigned Tags:** `山札破壊`

---

### カビゴン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カビゴン_160_none_none_ぐうたらプレス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 160 |
| Type | none |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[nonenonenonenone] **ぐうたらプレス** 120ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `カビゴン_160_none_none_はらごしらえ|ヘビーインパクト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 160 |
| Type | none |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はらごしらえ** — 自分の手札からエネルギーを1枚選び、このポケモンにつける。その後、このポケモンのHPを「60」回復する。<br>[nonenonenonenonenone] **ヘビーインパクト** 160ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>手札→ポケモン`, `回復`, `回復>固定HP回復`

#### Variant 3: `カビゴン_150_none_none_スパイクドロー|メガトンパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 150 |
| Type | none |
| Regulation | MP1, SVLN |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer., スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

_なし_

**Attacks:**

[none] **スパイクドロー** 20ダメージ — 自分の山札を1枚引く。<br>[nonenonenone] **メガトンパンチ** 100ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 4: `カビゴン_160_none_none_おおぐい|たおれこむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 160 |
| Type | none |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **おおぐい** — ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から基本エネルギーを選び、このポケモンにつける。そして山札を切る。<br>[nonenonenonenone] **たおれこむ** 160ダメージ — このポケモンをねむりにする。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`, `特殊状態`, `特殊状態>ねむり`

---

### カプ・コケコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カプ・コケコ_120_electric_none_かみなりをよぶ|サイドカウンター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かみなりをよぶ** — 自分の山札からポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[electricelectricnone] **サイドカウンター** 90＋ダメージ — 自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `カプ・コケコ_120_electric_none_サンダーブラスト|ファストフライト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ファストフライト** — このワザは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を5枚引く。<br>[electricelectricnone] **サンダーブラスト** 130ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`, `手札干渉`, `手札干渉>手札トラッシュ`

---

### カブルモ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カブルモ_60_grass_none_つきとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つきとばす** 10ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `カブルモ_60_grass_none_つのでつく_しげきしんか`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

**[特性] しげきしんか** — 自分の場に「チョボマキ」がいるなら、このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。

**Attacks:**

[none] **つのでつく** 10ダメージ

**Assigned Tags:** _（タグなし）_

---

### カミッチュ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カミッチュ_80_dragon_none_みつあめキャッチャー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | dragon |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[grassfire] **みつあめキャッチャー** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに70ダメージ。

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

#### Variant 2: `カミッチュ_80_grass_none_ともだちのわ_おまつりおんど`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | grass |
| Regulation | SV8a, SV6 |
| Variant Count | 3枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] おまつりおんど** — 場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出…

**Attacks:**

[grass] **ともだちのわ** 20×ダメージ — 自分のベンチポケモンの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 3: `カミッチュ_90_grass_none_コーティングアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | grass |
| Regulation | MC, SV7 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **コーティングアタック** 20ダメージ — 次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 4: `カミッチュ_90_grass_none_エネループ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | grass |
| Regulation | SV9a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **エネループ** 50ダメージ — このポケモンについているエネルギーを1個選び、手札にもどす。

**Assigned Tags:** _（タグなし）_

---

### カラカラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カラカラ_70_fighting_none_とつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **とつげき** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `カラカラ_70_fighting_none_なぐる|ふむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations カプ・コケコex・ミミッキュex |

**Abilities:**

_なし_

**Attacks:**

[none] **ふむ** 10ダメージ<br>[nonenone] **なぐる** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ガルーラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ガルーラ_130_none_none_なかまをよぶ|メガトンパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | none |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | コロコロイチバン！ 2024年10月号付録 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。<br>[nonenonenone] **メガトンパンチ** 100ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `ガルーラ_120_none_none_ひっぱたく|ピヨピヨパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | none |
| Regulation | SV10 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ひっぱたく** 50ダメージ<br>[nonenonenone] **ピヨピヨパンチ** 90×ダメージ — コインを2回投げ、オモテの数×90ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### カルボウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `カルボウ_70_fire_none_ほのお_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ほのお** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `カルボウ_70_fire_none_おにび_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | M2a, SVLS |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, スターターセット テラスタイプ：ステラ ソウブレイズex |

**Abilities:**

_なし_

**Attacks:**

[fire] **おにび** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `カルボウ_80_fire_none_かえんほうしゃ|なぐる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **なぐる** 10ダメージ<br>[firefirenone] **かえんほうしゃ** 70ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 4: `カルボウ_70_fire_none_ちからをあつめる|チョップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ちからをあつめる** — 自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[fire] **チョップ** 10ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`

---

### ギアル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ギアル_60_steel_none_ひきつける|ビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | steel |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひきつける** — 自分の山札を1枚引く。<br>[nonenone] **ビーム** 20ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `ギアル_60_steel_none_かたいギア_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | steel |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **かたいギア** 10ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-10」される。

**Assigned Tags:** `ダメージ軽減`

---

### ギギアル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ギギアル_90_steel_none_アイアンタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | steel |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **アイアンタックル** 60ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ギギアル_90_steel_none_かたいギア_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | steel |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **かたいギア** 50ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-20」される。

**Assigned Tags:** `ダメージ軽減`

---

### ギギギアル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ギギギアル_140_steel_none_ハイパービーム_きんきゅうかいてん`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | steel |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

**[特性] きんきゅうかいてん** — 自分の番に、このカードが手札にあり、相手の場に2進化ポケモンがいるなら、1回使える。このカードをベンチに出す。

**Attacks:**

[nonenone] **ハイパービーム** 130ダメージ — このポケモンについているエネルギーを、すべてトラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ギギギアル_150_steel_none_ぶちかます_ギアコーティング`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | steel |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

**[特性] ギアコーティング** — このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。

**Attacks:**

[steelnonenone] **ぶちかます** 120ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### キノガッサ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キノガッサ_120_grass_none_ナックルインパクト|パンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | grass |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **パンチ** 30ダメージ<br>[grassnone] **ナックルインパクト** 120ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `キノガッサ_120_grass_none_ダメージラッシュ|メガドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | grass |
| Regulation | MC, SV10 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ダメージラッシュ** 30＋ダメージ — ウラが出るまでコインを投げ、オモテの数×50ダメージ追加。<br>[grassnonenone] **メガドレイン** 90ダメージ — このポケモンのHPを「30」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`, `条件ダメージ`, `条件ダメージ>コイン可変`

---

### キノココ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キノココ_60_grass_none_にどずつき|タネばくだん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **にどずつき** 10×ダメージ — コインを2回投げ、オモテの数×10ダメージ。<br>[grassnone] **タネばくだん** 20ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `キノココ_60_grass_none_ころがりタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | MC, SV10 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ころがりタックル** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### キバゴ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キバゴ_70_dragon_none_するどいキバ|ひっかく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dragon |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ひっかく** 10ダメージ<br>[fightingsteel] **するどいキバ** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `キバゴ_70_dragon_none_ちからをあつめる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dragon |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ちからをあつめる** — 自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`

---

### キバニア

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キバニア_50_water_none_スプラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | water |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **スプラッシュ** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `キバニア_70_dark_none_とつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **とつげき** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### ギャロップ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ギャロップ_110_fire_none_かえん|もうかのとっしん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fire |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かえん** 20ダメージ<br>[firenone] **もうかのとっしん** 120ダメージ — このポケモンにも30ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ギャロップ_120_fire_none_バーニングラン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[firenone] **バーニングラン** 60＋ダメージ — コインを1回投げオモテなら、60ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ギャロップ_110_fire_none_ほのおのたてがみ_いそぎあし`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fire |
| Regulation | MC, SV9a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

**[特性] いそぎあし** — 自分の番に1回使える。自分の山札を1枚引く。

**Attacks:**

[firenone] **ほのおのたてがみ** 60ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### キュウコン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キュウコン_120_fire_none_あやしいともしび_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[firefire] **あやしいともしび** 90ダメージ — 相手のバトルポケモンをやけどとこんらんにする。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`, `特殊状態>やけど`

#### Variant 2: `キュウコン_120_fire_none_ほのおのみたま_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | SVLS |
| Variant Count | 1枚 |
| Sample Sets | スターターセット テラスタイプ：ステラ ソウブレイズex |

**Abilities:**

_なし_

**Attacks:**

[fire] **ほのおのみたま** 50ダメージ — 相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 3: `キュウコン_120_fire_none_あやかしへんげ|かえん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **あやかしへんげ** — 自分の山札を上から1枚トラッシュし、そのカードがサポートなら、その効果を、このワザの効果として使う。<br>[firenone] **かえん** 60ダメージ

**Assigned Tags:** `ワザコピー`

---

### キラフロル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キラフロル_130_fighting_none_しんけいどく|ベノムショック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **しんけいどく** — コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。<br>[fighting] **ベノムショック** 30＋ダメージ — 相手のバトルポケモンがどくなら、100ダメージ追加。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`, `特殊状態>どく`, `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `キラフロル_130_fighting_none_いわおとし|むしばむはへん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **むしばむはへん** 20ダメージ — 相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、手札から出すエネルギーをつけられない。<br>[fightingnone] **いわおとし** 60ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

---

### キリキザン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キリキザン_100_dark_none_いあいぎり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[dark] **いあいぎり** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `キリキザン_120_steel_none_きる|とどめをさす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | steel |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **きる** 40ダメージ<br>[steelnone] **とどめをさす** 60＋ダメージ — 相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 3: `キリキザン_120_steel_none_クイックドロー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | steel |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **クイックドロー** 50ダメージ — 自分の山札を2枚引く。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### キリンリキ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `キリンリキ_90_psychic_none_サイコダメージ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **サイコダメージ** 20＋ダメージ — 相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `キリンリキ_100_psychic_none_どっちもヘッド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | psychic |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **どっちもヘッド** 30ダメージ — 自分のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### クイタラン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `クイタラン_110_fire_none_なめやきファイヤー|ひだね_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | fire |
| Regulation | SVM, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひだね** 20ダメージ<br>[firefirenone] **なめやきファイヤー** 130ダメージ — コインを3回投げ、ウラの数ぶん、このポケモンについているエネルギーを選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `クイタラン_120_fire_none_ほのおのツメ|ベロベロキャッチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | fire |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ベロベロキャッチ** — 自分の山札からポケモンと「基本エネルギー」を合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[firefire] **ほのおのツメ** 60ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`

---

### クエスパトラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `クエスパトラ_130_psychic_none_サイコフラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | psychic |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[psychic] **サイコフラッシュ** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `クエスパトラ_120_psychic_none_スパイラルドレイン|ミスティックアイ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ミスティックアイ** — 相手の進化しているポケモンを1匹選び、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。<br>[psychicnone] **スパイラルドレイン** 60ダメージ — このポケモンのHPを「30」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`, `退化`

---

### クチート

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `クチート_90_steel_none_さそっていたぶる|するどいキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | steel |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **さそっていたぶる** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。<br>[steelsteelnone] **するどいキバ** 100ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

#### Variant 2: `クチート_90_steel_none_かみつく|なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | steel |
| Regulation | MC |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[steelnonenone] **かみつく** 90ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 3: `クチート_110_psychic_none_ダブルイーター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | psychic |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **ダブルイーター** 60×ダメージ — 自分の手札からエネルギーを2枚までトラッシュし、その枚数×60ダメージ。

**Assigned Tags:** _（タグなし）_

---

### グラエナ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `グラエナ_120_dark_none_けりとばす|するどいキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | MC, SV5K |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **けりとばす** 50ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］<br>[darkdarknone] **するどいキバ** 130ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `グラエナ_120_dark_none_おいつめる|むれでかる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **むれでかる** 30＋ダメージ — 自分のベンチに「グラエナ」がいるなら、90ダメージ追加。<br>[darknone] **おいつめる** 60ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `条件ダメージ`, `条件ダメージ>場参照`

---

### クリムガン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `クリムガン_120_dragon_none_りゅうのたけり|スラッシュクロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | dragon |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **りゅうのたけり** 20ダメージ — 自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。<br>[firewaternone] **スラッシュクロー** 120ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 2: `クリムガン_120_dragon_none_おそいかかる|ひきさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | dragon |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひきさく** 40ダメージ — このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。<br>[firewaternone] **おそいかかる** 90＋ダメージ — コインを1回投げオモテなら、60ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### クレッフィ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `クレッフィ_70_steel_none_さしこみドロー|ひっかける_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **さしこみドロー** — 自分の手札を1枚トラッシュする。その後、自分の山札を2枚引く。<br>[none] **ひっかける** 20ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `クレッフィ_70_steel_none_メモリーロック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **メモリーロック** 30ダメージ — 相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>相手ロック`

---

### ケーシィ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ケーシィ_40_psychic_none_ビーム_テレポーター`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | psychic |
| Regulation | SV8a, SV6 |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] テレポーター** — このポケモンがバトル場にいるなら、自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。

**Attacks:**

[psychic] **ビーム** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ケーシィ_50_psychic_none_テレポートアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | psychic |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **テレポートアタック** 10ダメージ — このポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

---

### ゲコガシラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゲコガシラ_90_water_none_スプラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | water |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[waternone] **スプラッシュ** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ゲコガシラ_90_water_none_しびれみず_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | water |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **しびれみず** 20ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

---

### ゲッコウガex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゲッコウガex_300_water_none_へんげんしゅりけん_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 300 |
| Type | water |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[waternone] **へんげんしゅりけん** 100＋ダメージ — コインを1回投げオモテなら、100ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `ゲッコウガex_310_fighting_none_しのびのやいば|ぶんしんれんだ_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 310 |
| Type | fighting |
| Regulation | SV5a |
| Variant Count | 3枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **しのびのやいば** 170ダメージ — のぞむなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。<br>[waternonenone] **ぶんしんれんだ** — このポケモンについているエネルギーを2個トラッシュし、相手のポケモン2匹に、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `ドロー`, `ドロー>トレーナーズサーチ`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### ゲノセクト

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゲノセクト_110_steel_none_マグネブラスト_エースキャンセラー`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | steel |
| Regulation | SV6a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

**[特性] エースキャンセラー** — このポケモンに「ポケモンのどうぐ」がついているなら、相手は手札から「ACE SPEC」のカードを出して使えない。

**Attacks:**

[steelnonenone] **マグネブラスト** 100ダメージ

**Assigned Tags:** `グッズサポートロック`, `グッズサポートロック>ACE SPECロック`

#### Variant 2: `ゲノセクト_120_grass_none_スピードアタック|バグズキャノン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **バグズキャノン** — 相手のポケモン1匹に、このポケモンについているエネルギーの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[grassgrassnone] **スピードアタック** 110ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `条件ダメージ`, `条件ダメージ>場参照`

---

### ケンタロス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ケンタロス_120_none_none_はかいのつの_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | none |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **はかいのつの** 70ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

#### Variant 2: `ケンタロス_130_none_none_つのでつく|クリーンヒット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | none |
| Regulation | MC, SV9a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つのでつく** 30ダメージ<br>[nonenone] **クリーンヒット** 50＋ダメージ — 相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>相手参照`

---

### ケンホロウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ケンホロウ_150_none_none_そこぢから|リバースウインド_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | none |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **リバースウインド** 70ダメージ — のぞむなら、相手のバトルポケモンについているエネルギーを2個選び、相手の手札にもどす。<br>[nonenonenone] **そこぢから** 180ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ケンホロウ_150_none_none_くわえる|こうそくフライト_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | none |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **くわえる** — 自分の山札を4枚引く。<br>[nonenone] **こうそくフライト** 120ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`, `ドロー`, `ドロー>固定枚数ドロー`

---

### コアルヒー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コアルヒー_60_none_none_するどいはね|ダブルドロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ダブルドロー** — 自分の山札を2枚引く。<br>[nonenone] **するどいはね** 20ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `コアルヒー_70_water_none_しょうか|つばさでうつ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **しょうか** — 相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。<br>[nonenone] **つばさでうつ** 20ダメージ

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

---

### ゴース

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゴース_60_dark_none_ふしぎなビーム|ガスでつつむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | dark |
| Regulation | MC, SV5K |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ふしぎなビーム** — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。<br>[darkdark] **ガスでつつむ** 30ダメージ

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

#### Variant 2: `ゴース_70_dark_none_ちょっとうらむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC, MBG |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセットMEGA メガゲンガーex |

**Abilities:**

_なし_

**Attacks:**

[dark] **ちょっとうらむ** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ゴース_70_dark_none_ふいをつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ふいをつく** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### ゴースト

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゴースト_90_dark_none_どくのいき_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | dark |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[darkdark] **どくのいき** 30ダメージ — 相手のバトルポケモンをどくにする。

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

#### Variant 2: `ゴースト_100_dark_none_ホロウショット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | MC, MBG |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセットMEGA メガゲンガーex |

**Abilities:**

_なし_

**Attacks:**

[dark] **ホロウショット** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ゴースト_100_dark_none_のろう_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **のろう** — 相手のバトルポケモンに、ダメカンを3個のせる。

**Assigned Tags:** `ダメカン操作`

---

### コータス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コータス_130_fire_none_こうらでぶつかる|ほのおのうず_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | SV5a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[firenone] **こうらでぶつかる** 30ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-30」される。<br>[firenonenone] **ほのおのうず** 110ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `コータス_130_fire_none_ひだね|ヒートブラスト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations カイオーガex・バシャーモex |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひだね** 20ダメージ<br>[firefirenone] **ヒートブラスト** 110ダメージ

**Assigned Tags:** _（タグなし）_

---

### コジョフー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コジョフー_60_fighting_none_はたきおとす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **はたきおとす** 10ダメージ — 相手の手札からオモテを見ないで1枚選び、トラッシュする。

**Assigned Tags:** `手札干渉`, `手札干渉>トラッシュ`

#### Variant 2: `コジョフー_60_fighting_none_キック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **キック** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### コノハナ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コノハナ_90_grass_none_どつく|れんぞくビンタ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **どつく** 20ダメージ<br>[nonenone] **れんぞくビンタ** 30×ダメージ — コインを3回投げ、オモテの数×30ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `コノハナ_100_grass_none_けたぐり|はたく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **はたく** 30ダメージ<br>[grassnone] **けたぐり** 50ダメージ

**Assigned Tags:** _（タグなし）_

---

### コノヨザル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コノヨザル_140_fighting_none_あばれまわる|みちづれファイト_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **あばれまわる** 130ダメージ — このポケモンをこんらんにする。<br>[fightingnone] **みちづれファイト** — おたがいのバトルポケモンをきぜつさせる。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `コノヨザル_150_fighting_none_インパクトブロー_ふんどのつぼ`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

**[特性] ふんどのつぼ** — このポケモンにダメカンが2個以上のっているなら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。

**Attacks:**

[fightingfighting] **インパクトブロー** 160ダメージ — 次の自分の番、このポケモンは「インパクトブロー」が使えない。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `ワザロック`, `ワザロック>自己ロック`

---

### ゴビット

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゴビット_90_fighting_none_てっぺき|パンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | fighting |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **てっぺき** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。<br>[nonenonenone] **パンチ** 40ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `ゴビット_90_psychic_none_ぜんりょくパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ぜんりょくパンチ** 60ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### コフーライ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コフーライ_80_grass_none_あるきまわる|たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **あるきまわる** — このポケモンをベンチポケモンと入れ替える。<br>[grass] **たいあたり** 30ダメージ

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

#### Variant 2: `コフーライ_80_grass_none_かくれる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **かくれる** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

---

### コフキムシ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コフキムシ_40_grass_none_なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `コフキムシ_40_grass_none_かじる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **かじる** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### コマタナ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コマタナ_70_dark_none_つきさす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[dark] **つきさす** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `コマタナ_60_steel_none_おいつめる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | steel |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **おいつめる** 10ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

#### Variant 3: `コマタナ_70_steel_none_つきとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **つきとばす** 10ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

---

### コライドン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コライドン_140_dragon_none_げんせいらんだ|ひきさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 140 |
| Type | dragon |
| Regulation | MC, SV8a, SV-P, SV5K |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, ファーストエントリーキャンペーン ... (+1セット) |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **げんせいらんだ** 30×ダメージ — 自分の場の「古代」のポケモンの数×30ダメージ。<br>[firefightingnone] **ひきさく** 130ダメージ — このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。

**Assigned Tags:** `特殊連動`, `特殊連動>古代`, `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `コライドン_130_fighting_none_かくごのキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **かくごのキバ** 50＋ダメージ — 相手のバトルポケモンが「ポケモンex」なら、70ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>相手参照`

#### Variant 3: `コライドン_130_fighting_none_はじょうもうこう|ぶちかます_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **はじょうもうこう** 30＋ダメージ — 前の自分の番、このポケモン以外の「古代」のポケモンがワザを使っていたなら、150ダメージ追加。<br>[fightingfightingnone] **ぶちかます** 110ダメージ

**Assigned Tags:** `特殊連動`, `特殊連動>古代`

---

### コライドンex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コライドンex_230_dragon_none_ほうふくてっつい|カイザータックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 230 |
| Type | dragon |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ほうふくてっつい** 20＋ダメージ — このポケモンにのっているダメカンの数×10ダメージ追加。<br>[firefightingfighting] **カイザータックル** 280ダメージ — このポケモンにも60ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `自傷`

#### Variant 2: `コライドンex_230_fighting_none_ツメできりさく|リベンジバスター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 230 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **ツメできりさく** 50ダメージ<br>[fightingfightingnone] **リベンジバスター** 100＋ダメージ — 自分のベンチポケモンにダメカンがのっているなら、120ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 3: `コライドンex_230_fighting_none_ひひいろのキバ|インパクトブロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 230 |
| Type | fighting |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **ひひいろのキバ** 50＋ダメージ — 前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、120ダメージ追加。<br>[fightingfightingnone] **インパクトブロー** 200ダメージ — 次の自分の番、このポケモンは「インパクトブロー」が使えない。

**Assigned Tags:** _（タグなし）_

---

### コリンク

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コリンク_60_electric_none_こうきしん|バチバチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **こうきしん** — 相手の手札を見る。<br>[electricelectric] **バチバチ** 30ダメージ

**Assigned Tags:** `手札干渉`, `手札干渉>手札を見る`

#### Variant 2: `コリンク_70_electric_none_ダブルひっかき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ダブルひっかき** 10×ダメージ — コインを2回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ゴルーグ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゴルーグ_160_fighting_none_てっぺき|とうしのこぶし_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 160 |
| Type | fighting |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **てっぺき** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。<br>[nonenonenonenone] **とうしのこぶし** 120＋ダメージ — 相手のバトルポケモンが「ポケモンex・V」なら、120ダメージ追加。

**Assigned Tags:** `ダメージ軽減`, `条件ダメージ`, `条件ダメージ>相手参照`

#### Variant 2: `ゴルーグ_160_psychic_none_ゴルーグハンマー|ダブルスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 160 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **ダブルスマッシュ** 80×ダメージ — コインを2回投げ、オモテの数×80ダメージ。<br>[psychicpsychicnonenonenone] **ゴルーグハンマー** 200ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### コレクレー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コレクレー_70_psychic_none_たいあたり|ちいさなおつかい_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ちいさなおつかい** — 自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[nonenonenone] **たいあたり** 50ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`

#### Variant 2: `コレクレー_70_psychic_none_ビンタ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ビンタ** 10ダメージ

**Assigned Tags:** _（タグなし）_

---

### ゴロンダ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゴロンダ_140_dark_none_あばれまわる|ひっぱる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | dark |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ひっぱる** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。<br>[darkdarknone] **あばれまわる** 160ダメージ — このポケモンをこんらんにする。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`, `相手入れ替え`, `相手入れ替え>C-05型`

#### Variant 2: `ゴロンダ_140_dark_none_いちゃもん|パワータックル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | dark |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **いちゃもん** 30ダメージ — 相手のバトルポケモンが持つワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。<br>[darkdarknone] **パワータックル** 160ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>相手ロック`, `ワザロック>自己ロック`

#### Variant 3: `ゴロンダ_140_dark_none_おやぶんパンチ|どつく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | dark |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **どつく** 40ダメージ<br>[darkdarknone] **おやぶんパンチ** 80＋ダメージ — 自分のベンチの「ヤンチャム」にダメカンがのっているなら、120ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### サーフゴー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `サーフゴー_130_steel_none_サーフリターン|リッチストライク_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **リッチストライク** 30＋ダメージ — この番、このポケモンが「コレクレー」から進化していたなら、90ダメージ追加。<br>[nonenonenone] **サーフリターン** 100ダメージ — のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `サーフゴー_130_steel_none_つかみほうだい|スピードアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つかみほうだい** — ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。<br>[steelnonenone] **スピードアタック** 100ダメージ

**Assigned Tags:** `ドロー`, `ドロー>トレーナーズサーチ`

---

### サザンドラex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `サザンドラex_330_dark_none_オブシディアン|クラッシュヘッズ_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 330 |
| Type | dark |
| Regulation | SV8 |
| Variant Count | 3枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **クラッシュヘッズ** 200ダメージ — 相手の山札を上から3枚トラッシュする。<br>[psychicdarksteelnone] **オブシディアン** 130ダメージ — 相手のベンチポケモン2匹にも、それぞれ130ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `山札破壊`

#### Variant 2: `サザンドラex_330_dark_none_ダークバイト_グリードイーター`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 330 |
| Type | dark |
| Regulation | MC, SV11W |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

**[特性] グリードイーター** — このポケモンが使うワザのダメージで、相手のたねポケモンがきぜつしたなら、サイドを1枚多くとる。

**Attacks:**

[darkdarkdarknonenone] **ダークバイト** 200ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `サイド操作`, `ワザロック`, `ワザロック>にげられない`

---

### サナギラス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `サナギラス_90_fighting_none_すなしぶき|ぶちかます_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[none] **すなしぶき** 20ダメージ<br>[nonenonenone] **ぶちかます** 60ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `サナギラス_90_fighting_none_とっしん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fighting |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **とっしん** 60ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `自傷`

---

### ザルード

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ザルード_120_grass_none_もぎとる|ハンマーウィップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | コロコロイチバン！ 2024年7月発売号 |

**Abilities:**

_なし_

**Attacks:**

[grass] **もぎとる** — 自分の山札から「基本エネルギー」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[grassgrassgrass] **ハンマーウィップ** 130ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`, `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ザルード_120_grass_none_ジャングルウィップ|リーフドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **リーフドレイン** 20ダメージ — このポケモンのHPを「20」回復する。<br>[grassgrassnone] **ジャングルウィップ** 80＋ダメージ — のぞむなら、このポケモンについているエネルギーをすべて手札にもどし、80ダメージ追加。

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### サンダー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `サンダー_120_electric_none_10まんボルト|でんじは_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | MC, SVM, SV5a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ピカチュウex・カビゴンex, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **でんじは** — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。<br>[electricelectricnone] **10まんボルト** 190ダメージ — このポケモンについているエネルギーを、すべてトラッシュする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `サンダー_110_electric_none_ついげきボルト|ドリルくちばし_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | electric |
| Regulation | MC, SVLN |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **ついげきボルト** 20＋ダメージ — 相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。<br>[electricnonenone] **ドリルくちばし** 80ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### サンド

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `サンド_60_fighting_none_ころがる|ダブルひっかき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ころがる** 10ダメージ<br>[fightingnone] **ダブルひっかき** 20×ダメージ — コインを2回投げ、オモテの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `サンド_70_fighting_none_どろかけ|ツメをたてる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ツメをたてる** 10ダメージ<br>[fightingnone] **どろかけ** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### サンドパン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `サンドパン_120_fighting_none_じしん|ツメをたてる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ツメをたてる** 30ダメージ<br>[fightingnone] **じしん** 120ダメージ — 自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `ベンチ狙撃>全体スプレッド`

#### Variant 2: `サンドパン_120_fighting_none_すなかけ|マッドショット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **すなかけ** 50ダメージ — 次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。<br>[fightingnonenone] **マッドショット** 100ダメージ

**Assigned Tags:** _（タグなし）_

---

### シェイミ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シェイミ_70_grass_none_うしろげり|ピンポイントダイブ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ピンポイントダイブ** — 相手のベンチの「ポケモンex・V」1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[nonenone] **うしろげり** 50ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `シェイミ_70_none_none_エネリフレクト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **エネリフレクト** 60ダメージ — このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。

**Assigned Tags:** `エネ移動`

#### Variant 3: `シェイミ_80_grass_none_けとばす_はなのカーテン`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | grass |
| Regulation | M2a, M-P, MA, SV9a |
| Variant Count | 5枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, ポケモンカードゲームチャンピオンシップシリーズ2026, プレミアムトレーナーボックスMEGA ... (+1セット) |

**Abilities:**

**[特性] はなのカーテン** — このポケモンがいるかぎり、自分のベンチポケモン（「ルールを持つポケモン」をのぞく）全員は、相手のワザのダメージを受けない。

**Attacks:**

[nonenone] **けとばす** 30ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 4: `シェイミ_70_grass_none_はなをとどける|リーフステップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **はなをとどける** — 自分の山札からエネルギーを1枚選び、ベンチのポケモンにつける。そして山札を切る。<br>[grass] **リーフステップ** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### シガロコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シガロコ_50_grass_none_ちょっとつっこむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | SV8a, SV5M |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ちょっとつっこむ** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `シガロコ_40_grass_none_ころがる|もってくる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。<br>[grass] **ころがる** 10ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### シザリガー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シザリガー_130_water_none_あばれハンマー|ジョキジョキ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | water |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[waternone] **ジョキジョキ** 40ダメージ — コインを2回投げ、オモテの数ぶん、相手の山札を上からトラッシュする。<br>[waterwaternone] **あばれハンマー** 180ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`, `山札破壊`

#### Variant 2: `シザリガー_130_dark_none_はさむ|やりかえしシザー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | dark |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はさむ** 30ダメージ<br>[darkdarknone] **やりかえしシザー** 130ダメージ — このワザは、このポケモンにダメカンがのっているなら、エネルギー1個で使える。

**Assigned Tags:** _（タグなし）_

---

### ジジーロン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ジジーロン_120_none_none_げきこうほう|ひっぱたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | none |
| Regulation | SV5M |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひっぱたく** 20ダメージ<br>[nonenonenone] **げきこうほう** 100＋ダメージ — 自分のベンチポケモン全員にダメカンがのっているなら、120ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `ジジーロン_120_none_none_ぶつかる|ドラゴンクロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | none |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations カプ・コケコex・ミミッキュex |

**Abilities:**

_なし_

**Attacks:**

[none] **ぶつかる** 30ダメージ<br>[nonenone] **ドラゴンクロー** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ジジーロン_130_none_none_ひっぱたく|ドラゴンストライク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | none |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ひっぱたく** 50ダメージ<br>[nonenonenone] **ドラゴンストライク** 120ダメージ — 次の自分の番、このポケモンは「ドラゴンストライク」が使えない。

**Assigned Tags:** _（タグなし）_

---

### ジバコイル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ジバコイル_170_electric_none_きょうりょくじば|でんじほう_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | electric |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electricnonenone] **きょうりょくじば** 80ダメージ — 相手のバトルポケモンをこんらんにする。次の相手の番、このワザを受けたポケモンは、にげられない。<br>[electricnonenonenone] **でんじほう** 180ダメージ — 次の自分の番、このポケモンは「でんじほう」が使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `ジバコイル_160_electric_none_アッパースパーク|フラッシュボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | electric |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **アッパースパーク** 50＋ダメージ — この番に、このポケモンが「レアコイル」から進化していたなら、120ダメージ追加。<br>[electricelectric] **フラッシュボルト** 160ダメージ — 次の自分の番、このポケモンは「フラッシュボルト」が使えない。

**Assigned Tags:** _（タグなし）_

---

### ジヘッド

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ジヘッド_100_dark_none_ふみならす|やみのキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ふみならす** — 相手の山札を上から2枚トラッシュする。<br>[darknonenone] **やみのキバ** 60ダメージ

**Assigned Tags:** `山札破壊`

#### Variant 2: `ジヘッド_110_dark_none_しっこくのキバ|ダブルアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | dark |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ダブルアタック** 40×ダメージ — コインを2回投げ、オモテの数×40ダメージ。<br>[darkdarknonenone] **しっこくのキバ** 100ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### シママ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シママ_70_electric_none_くわえる|バチバチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **くわえる** — 自分の山札を1枚引く。<br>[electricnone] **バチバチ** 20ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `シママ_60_electric_none_けとばす|エレキック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **けとばす** 10ダメージ<br>[electricnone] **エレキック** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### ジャノビー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ジャノビー_100_grass_none_つるのムチ|まきつく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **まきつく** 20ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。<br>[grassnonenone] **つるのムチ** 60ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `ジャノビー_100_grass_none_ソーラーカッター_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ソーラーカッター** 40ダメージ

**Assigned Tags:** _（タグなし）_

---

### シャンデラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シャンデラ_130_fire_none_マインドルーラー_いざなうあかり`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 130 |
| Type | fire |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] いざなうあかり** — 自分の番に1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。

**Attacks:**

[fire] **マインドルーラー** 30×ダメージ — 相手の手札の枚数×30ダメージ。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `シャンデラ_150_fire_none_はじけるひばしら|もえつくす_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | fire |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **はじけるひばしら** 50＋ダメージ — 自分のトラッシュに「基本エネルギー」が10枚以上あるなら、100ダメージ追加。<br>[firefire] **もえつくす** 180ダメージ — このポケモンについているエネルギーを、すべてトラッシュする。

**Assigned Tags:** _（タグなし）_

---

### ジュゴン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ジュゴン_130_water_none_たたきつける_あついしぼう`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | water |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

**[特性] あついしぼう** — このポケモンが、相手のまたはポケモンから受けるワザのダメージは「-30」される。

**Attacks:**

[waternone] **たたきつける** 70×ダメージ — コインを2回投げ、オモテの数×70ダメージ。

**Assigned Tags:** `ダメージ軽減`, `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `ジュゴン_130_water_none_スプラッシュ_おしながす`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | water |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

**[特性] おしながす** — 自分の番に何回でも使える。自分のベンチポケモンについているエネルギーを1個選び、バトルポケモンにつけ替える。

**Attacks:**

[waterwater] **スプラッシュ** 60ダメージ

**Assigned Tags:** `エネ移動`

---

### シュシュプ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シュシュプ_60_psychic_none_ようせいのかぜ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ようせいのかぜ** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `シュシュプ_70_psychic_none_あまいかおり|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **あまいかおり** — 自分のポケモン1匹のHPを「30」回復する。<br>[psychic] **ぶつかる** 10ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### シュバルゴ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シュバルゴ_120_steel_none_つきさす|アイアンバスター_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | steel |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つきさす** 20ダメージ<br>[steelnone] **アイアンバスター** 120ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `シュバルゴ_130_steel_none_ワイルドランス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **ワイルドランス** 90ダメージ — このポケモンにも30ダメージ。

**Assigned Tags:** `自傷`

---

### ジュラルドン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ジュラルドン_130_steel_none_ぶちかます|レイジングハンマー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | steel |
| Regulation | MC, M2a, SV-P, SV8a, SVM, SV7 |
| Variant Count | 6枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, スタートデッキGenerations スペシャルバトルセット ... (+3セット) |

**Abilities:**

_なし_

**Attacks:**

[steel] **ぶちかます** 30ダメージ<br>[steelsteelnone] **レイジングハンマー** 80＋ダメージ — このポケモンにのっているダメカンの数×10ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `ジュラルドン_130_steel_none_がちんこ|ジュラルビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | steel |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[steelsteel] **がちんこ** 50ダメージ<br>[steelsteelsteel] **ジュラルビーム** 130ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ジュラルドン_130_steel_none_はかいこうせん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | steel |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[steelsteelsteel] **はかいこうせん** 70ダメージ — 相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

---

### シルシュルー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シルシュルー_60_dark_none_しるをとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | dark |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **しるをとばす** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `シルシュルー_60_dark_none_どくづき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | dark |
| Regulation | M1L |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **どくづき** 20ダメージ — 相手のバトルポケモンをどくにする。

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

---

### シンボラー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シンボラー_110_psychic_none_ねんりき|ダブルドロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | psychic |
| Regulation | MC, SVLS |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ソウブレイズex |

**Abilities:**

_なし_

**Attacks:**

[none] **ダブルドロー** — 自分の山札を2枚引く。<br>[psychicnonenone] **ねんりき** 60ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`, `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `シンボラー_120_psychic_none_テレキネシス|リフレクター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | psychic |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **リフレクター** — 次の相手の番、このポケモンが受けるワザのダメージは「-40」される。<br>[psychicnonenone] **テレキネシス** — 相手のポケモン1匹に、70ダメージ。このワザのダメージは弱点・抵抗力を計算しない。

**Assigned Tags:** `ダメージ軽減`

---

### スイクン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `スイクン_120_water_none_かけぬける|オーロラビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | water |
| Regulation | MC, SV-P, SVM |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations スペシャルバトルセット, スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かけぬける** 30ダメージ — 相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[waterwaternone] **オーロラビーム** 100ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `スイクン_130_water_none_クリスタルフォール_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | water |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[waterwater] **クリスタルフォール** 30＋ダメージ — 自分の場にエネルギーが4個以上あるなら、90ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### ズルズキン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ズルズキン_120_dark_none_かっぱらう|とびひざげり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第6弾 |

**Abilities:**

_なし_

**Attacks:**

[none] **かっぱらう** — 自分のベンチポケモンの数ぶんまで、自分の山札から好きなカードを選び、手札に加える。そして山札を切る。<br>[darknonenone] **とびひざげり** 100ダメージ

**Assigned Tags:** `ドロー`, `ドロー>トレーナーズサーチ`

#### Variant 2: `ズルズキン_120_dark_none_ごろつきアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[darkdark] **ごろつきアタック** 60×ダメージ — 自分の場のポケモンの数ぶんコインを投げ、オモテの数×60ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `条件ダメージ>場参照`

---

### ズルッグ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ズルッグ_60_dark_none_いっぱつげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | dark |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第6弾 |

**Abilities:**

_なし_

**Attacks:**

[dark] **いっぱつげり** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ズルッグ_70_dark_none_ずつき|せめこむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ずつき** 10ダメージ<br>[darkdark] **せめこむ** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ズルッグ_80_dark_none_はたきおとす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **はたきおとす** 20ダメージ — 相手の手札からオモテを見ないで1枚選び、トラッシュする。

**Assigned Tags:** `手札干渉`, `手札干渉>トラッシュ`

---

### セキタンザン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `セキタンザン_180_fighting_none_やまなだれ|ガトリングタール_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | fighting |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ガトリングタール** 40＋ダメージ — このポケモンについているエネルギーの数×80ダメージ追加。<br>[fightingnonenonenone] **やまなだれ** 150ダメージ — 相手の山札を上から2枚トラッシュする。

**Assigned Tags:** `山札破壊`, `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `セキタンザン_180_fighting_none_きょたいでつっこむ|タールキャノン_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **タールキャノン** — 相手のポケモン1匹に、140ダメージ。自分のトラッシュに「基本エネルギー」が10枚以上ないなら、このワザは失敗。［ベンチは弱点・抵抗力を計算しない。］<br>[fightingnonenonenone] **きょたいでつっこむ** 220ダメージ — このポケモンについているエネルギーを3個選び、トラッシュする。

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### ゼブライカ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゼブライカ_130_electric_none_キック|マッハボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | electric |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **キック** 30ダメージ<br>[electricelectricnone] **マッハボルト** 120ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ゼブライカ_120_electric_none_ぜんそくりょく|ヘッドボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | コロコロイチバン! 2025年1月号 |

**Abilities:**

_なし_

**Attacks:**

[none] **ぜんそくりょく** — 自分の手札をすべてトラッシュし、山札を6枚引く。<br>[electricnone] **ヘッドボルト** 70ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`, `手札シャッフル`

#### Variant 3: `ゼブライカ_120_electric_none_けとばす|エレキバレット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **けとばす** 30ダメージ<br>[electricelectricnone] **エレキバレット** 100ダメージ — 相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### ゼラオラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゼラオラ_120_electric_none_ストロングボルト|ビリビリナックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ビリビリナックル** 20ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。<br>[electricelectricnone] **ストロングボルト** 120ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `ゼラオラ_120_electric_none_コンバットサンダー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | MC, SV8a, SV7 |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **コンバットサンダー** 20＋ダメージ — 相手のベンチポケモンの数×20ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 3: `ゼラオラ_100_electric_none_ひっかく|サンダーブリッツ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | electric |
| Regulation | M2a, SV9a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひっかく** 20ダメージ<br>[electricelectricelectric] **サンダーブリッツ** — このポケモンについているエネルギーをすべてトラッシュし、相手のベンチの「ポケモンex」1匹に、210ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### ゼルネアス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゼルネアス_130_psychic_none_オーロラゲイン|ギガインパクト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | psychic |
| Regulation | MC, SVLN |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **オーロラゲイン** 30ダメージ — このポケモンのHPを「30」回復する。<br>[psychicpsychicnone] **ギガインパクト** 130ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`, `回復`, `回復>固定HP回復`

#### Variant 2: `ゼルネアス_120_psychic_none_ジオゲート|ブライトホーン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | psychic |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ジオゲート** — 自分の山札からタイプのたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。<br>[psychicpsychicnone] **ブライトホーン** 120ダメージ — 次の自分の番、このポケモンは「ブライトホーン」が使えない。

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

---

### セレビィ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `セレビィ_80_grass_none_もってくる|リーフステップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | grass |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。<br>[grass] **リーフステップ** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `セレビィ_80_grass_none_ときをめぐる|ソーラーカッター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | grass |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ときをめぐる** — 自分の山札からポケモンとスタジアムを合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[grass] **ソーラーカッター** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>トレーナーズサーチ`

---

### ソウブレイズ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ソウブレイズ_140_fire_none_こくえんぎり|ブレイズカース_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | SV8 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ブレイズカース** — 相手のポケモン全員についている特殊エネルギーを、すべてトラッシュする。<br>[firefirenone] **こくえんぎり** 160ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`, `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ソウブレイズ_140_fire_none_れんごくざん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **れんごくざん** 220ダメージ — 自分の手札から「基本エネルギー」を4枚選び、トラッシュする。4枚トラッシュできないなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### ゾロア

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゾロア_70_dark_none_ふむ|ダブルひっかき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV8a, SV6a |
| Variant Count | 3枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ふむ** 10ダメージ<br>[darknone] **ダブルひっかき** 20×ダメージ — コインを2回投げ、オモテの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `ゾロア_70_dark_none_とっしん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **とっしん** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### ゾロアーク

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゾロアーク_120_dark_none_げんえいジャック|ツメできりさく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | SV8a, SV6a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **げんえいジャック** 60×ダメージ — 相手の場の「ポケモンex・V」の数×60ダメージ。<br>[darknonenone] **ツメできりさく** 110ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `ゾロアーク_120_dark_none_イカサマ|マインドジャック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **マインドジャック** 30×ダメージ — 相手のベンチポケモンの数×30ダメージ。<br>[nonenonenone] **イカサマ** — 相手のバトルポケモンが持つワザを1つ選び、このワザとして使う。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### ダーテング

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダーテング_150_grass_none_おいだしトルネード|エネループ_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **おいだしトルネード** — 相手のベンチポケモンを3匹選ぶ。その後、選んでいない相手のベンチポケモン全員と、ついているすべてのカードを、相手の山札にもどして切る。<br>[nonenone] **エネループ** 140ダメージ — このポケモンについているエネルギーを1個選び、手札にもどす。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ダーテング_160_grass_none_とっぷうがえし|まどわす_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | grass |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **とっぷうがえし** — コインを1回投げオモテなら、相手のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。<br>[grassnone] **まどわす** 100ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

---

### ダイオウドウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダイオウドウ_200_steel_none_ノーズラリアット_どでかいからだ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 200 |
| Type | steel |
| Regulation | SV6a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

**[特性] どでかいからだ** — このポケモンがバトル場にいるかぎり、相手は手札からスタジアムを出せない。

**Attacks:**

[steelsteelsteelnone] **ノーズラリアット** 130＋ダメージ — のぞむなら、100ダメージ追加。その場合、次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ダイオウドウ_190_steel_none_ぶつかる|メガインパクト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 190 |
| Type | steel |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[steelsteelnone] **ぶつかる** 100ダメージ<br>[steelsteelnonenone] **メガインパクト** 160ダメージ

**Assigned Tags:** _（タグなし）_

---

### タイカイデン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タイカイデン_120_electric_none_ふうりょくチャージ|ストロングボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ふうりょくチャージ** 10ダメージ — 次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。<br>[electricnone] **ストロングボルト** 100ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `タイカイデン_120_electric_none_かっくう|ストームボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かっくう** 50ダメージ<br>[electricelectricnone] **ストームボルト** 160ダメージ — このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。

**Assigned Tags:** `エネ移動`

---

### ダイノーズ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダイノーズ_140_fighting_none_アサルトレーザー|ランドクラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fighting |
| Regulation | SV5a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **アサルトレーザー** 80＋ダメージ — 相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。<br>[fightingnonenonenone] **ランドクラッシュ** 120ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ダイノーズ_140_fighting_none_パワージェム|マウンテンフォール_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **パワージェム** 40ダメージ<br>[nonenonenone] **マウンテンフォール** 70＋ダメージ — 場にスタジアムが出ているなら、70ダメージ追加。

**Assigned Tags:** `スタジアム`, `スタジアム>参照`

#### Variant 3: `ダイノーズ_140_fighting_none_いわころがり|ノーズボンバー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fighting |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **いわころがり** 60ダメージ<br>[fightingfightingfightingnone] **ノーズボンバー** 260ダメージ — このポケモンについているエネルギーを3個選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

---

### タギングル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タギングル_100_dark_none_いたずらペイント|エナジーグラフィティ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **いたずらペイント** — 相手のトラッシュからエネルギーを3枚まで選び、相手のポケモンに好きなようにつける。<br>[darkdark] **エナジーグラフィティ** 40×ダメージ — 相手のポケモン全員についているエネルギーの数×40ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

#### Variant 2: `タギングル_100_dark_none_ミラクルペイント_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **ミラクルペイント** 90ダメージ — コインを1回投げオモテなら、特殊状態の中から1つ選び、相手のバトルポケモンをその状態にする。

**Assigned Tags:** _（タグなし）_

---

### ダダリン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダダリン_130_grass_none_かいてんアタック|スチールアンカー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | grass |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かいてんアタック** 30ダメージ<br>[grassgrassnone] **スチールアンカー** 80＋ダメージ — 自分のベンチにポケモンがいるなら、80ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ダダリン_130_grass_none_はかいのイカリ|レスキューアンカー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | grass |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **レスキューアンカー** — 自分のトラッシュからポケモンを2枚まで選び、相手に見せて、手札に加える。<br>[grassnonenone] **はかいのイカリ** 80ダメージ — ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ダダリン_130_psychic_none_しばりつける|アンカースマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | psychic |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations カプ・コケコex・ミミッキュex |

**Abilities:**

_なし_

**Attacks:**

[psychicnonenone] **しばりつける** 60ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。<br>[psychicpsychicnonenone] **アンカースマッシュ** 130ダメージ

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

#### Variant 4: `ダダリン_120_grass_none_グラウンドパワー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **グラウンドパワー** 30＋ダメージ — 場に自分のスタジアムが出ているなら、50ダメージ追加。

**Assigned Tags:** `スタジアム`, `スタジアム>参照`

---

### タネボー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タネボー_60_grass_none_こうちょく|ぶらさがる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **こうちょく** — 次の相手の番、このポケモンが受けるワザのダメージは「-30」される。<br>[nonenone] **ぶらさがる** 20ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `タネボー_60_grass_none_ひとやすみ|タネばくだん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひとやすみ** — このポケモンのHPを「20」回復する。<br>[grassnone] **タネばくだん** 20ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### ダブラン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダブラン_80_psychic_none_ダブルトリック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | psychic |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ダブルトリック** 30×ダメージ — コインを2回投げ、オモテの数×30ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `ダブラン_70_psychic_none_さいぼうしんか|しるをとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 70 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **さいぼうしんか** — 自分の場のポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。<br>[none] **しるをとばす** 30ダメージ

**Assigned Tags:** `進化加速`

---

### タブンネ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タブンネ_110_none_none_しねんのずつき|まねきよせる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[none] **まねきよせる** — 自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。<br>[nonenonenone] **しねんのずつき** 70ダメージ

**Assigned Tags:** `ドロー`, `ドロー>トラッシュ回収`

#### Variant 2: `タブンネ_100_none_none_おんがえし_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | none |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **おんがえし** 30ダメージ — のぞむなら、自分の手札が6枚になるように、山札を引く。

**Assigned Tags:** _（タグなし）_

---

### タマゲタケ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タマゲタケ_50_grass_none_ほうしだま_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[grass] **ほうしだま** 10ダメージ — 相手のバトルポケモンをねむりにする。

**Assigned Tags:** `特殊状態`, `特殊状態>ねむり`

#### Variant 2: `タマゲタケ_50_grass_none_どくのほうし_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **どくのほうし** — 相手のバトルポケモンをどくにする。

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

---

### タマタマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タマタマ_30_grass_none_そうじゅくしんか_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 30 |
| Type | grass |
| Regulation | MC, SV7a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **そうじゅくしんか** — このワザは、先攻プレイヤーの最初の番でも使える。このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。

**Assigned Tags:** `進化加速`

#### Variant 2: `タマタマ_50_grass_none_すいとる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **すいとる** 10ダメージ — このポケモンのHPを「10」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 3: `タマタマ_60_grass_none_ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ピカチュウex・カビゴンex |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **ぶつかる** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 4: `タマタマ_60_grass_none_みがつまる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **みがつまる** — 自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。

**Assigned Tags:** _（タグなし）_

---

### ダルマッカ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダルマッカ_80_fire_none_かいりき|ほのおタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **かいりき** 10ダメージ<br>[firefire] **ほのおタックル** 50ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ダルマッカ_80_fire_none_おにび_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[firenone] **おにび** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ダルマッカ_80_fire_none_ブレイズボール_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **ブレイズボール** 10＋ダメージ — このポケモンについているエネルギーの数×20ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### ダンバル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ダンバル_70_steel_none_アイアンタックル|ツメをたてる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | MC, SV8a, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **ツメをたてる** 10ダメージ<br>[steelnonenone] **アイアンタックル** 50ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ダンバル_60_psychic_none_かいてんアタック|ビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **かいてんアタック** 10ダメージ<br>[psychicpsychic] **ビーム** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### チコリータ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チコリータ_70_grass_none_はっぱカッター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | M-P, M1S |
| Variant Count | 2枚 |
| Sample Sets | ポケモンカードゲーム MEGA　プロモカードパック第1弾, 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **はっぱカッター** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `チコリータ_70_grass_none_なきごえ|タネばくだん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[none] **なきごえ** — 次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。<br>[grassgrass] **タネばくだん** 30ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### チャーレム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チャーレム_120_fighting_none_とびひざげり|ローキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ローキック** 40ダメージ<br>[nonenonenone] **とびひざげり** 110ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `チャーレム_110_fighting_none_ダブルスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fighting |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ダブルスマッシュ** 40×ダメージ — コインを2回投げ、オモテの数×40ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 3: `チャーレム_120_fighting_none_あいきしょう_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **あいきしょう** 50＋ダメージ — このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、120ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 4: `チャーレム_120_fighting_none_セブンスキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **セブンスキック** 150ダメージ — 自分の手札が7枚でないなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### チャオブー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チャオブー_110_fire_none_かえん|ヒートスタンプ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fire |
| Regulation | MC, M2a, SV11W |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **かえん** 30ダメージ<br>[firefirenone] **ヒートスタンプ** 80ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `チャオブー_110_fire_none_ほのおでこがす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fire |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[firefirenone] **ほのおでこがす** 70ダメージ — 相手のバトルポケモンをやけどにする。

**Assigned Tags:** `特殊状態`, `特殊状態>やけど`

---

### チャデス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チャデス_30_grass_none_ひっかける_くらがくれ`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 30 |
| Type | grass |
| Regulation | SV8a, SV5a |
| Variant Count | 3枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

**[特性] くらがくれ** — このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。

**Attacks:**

[grass] **ひっかける** 10ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `チャデス_40_grass_none_おちゃだし|ふいをつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **おちゃだし** — 自分のトラッシュから「基本エネルギー」を1枚選び、相手に見せて、手札に加える。<br>[grass] **ふいをつく** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### チュリネ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チュリネ_50_grass_none_リーフステップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **リーフステップ** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `チュリネ_60_grass_none_かくれる|このは_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かくれる** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。<br>[grass] **このは** 10ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### チョボマキ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チョボマキ_70_grass_none_シェルヒット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **シェルヒット** 20ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `チョボマキ_60_grass_none_とびだしヘッド_しげきしんか`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

**[特性] しげきしんか** — 自分の場に「カブルモ」がいるなら、このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。

**Attacks:**

[none] **とびだしヘッド** 10ダメージ

**Assigned Tags:** _（タグなし）_

---

### チラーミィ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チラーミィ_70_none_none_おそうじ|たたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV5K |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **たたく** 10ダメージ<br>[nonenone] **おそうじ** — 相手の場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `チラーミィ_70_none_none_ビンタ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[none] **ビンタ** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `チラーミィ_60_none_none_スイープビンタ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **スイープビンタ** 20×ダメージ — コインを2回投げ、オモテの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### チラチーノ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `チラチーノ_110_none_none_ひっぱたく|スペシャルころころ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | SV5K |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひっぱたく** 30ダメージ<br>[nonenone] **スペシャルころころ** 70×ダメージ — このポケモンについている特殊エネルギーの枚数×70ダメージ。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `チラチーノ_100_none_none_しっぽでたたく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[none] **しっぽでたたく** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `チラチーノ_100_none_none_ともだちのわ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | none |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ともだちのわ** 20＋ダメージ — 自分のベンチポケモンの数×20ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### ツタージャ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ツタージャ_70_grass_none_たいあたり|つるのムチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **たいあたり** 10ダメージ<br>[grassgrass] **つるのムチ** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ツタージャ_70_grass_none_とつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **とつげき** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### デスカーン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `デスカーン_120_psychic_none_めいふのおきて|ホロウショット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **めいふのおきて** — おたがいの特性を持つポケモン全員に、それぞれダメカンを6個のせる。<br>[psychicnonenone] **ホロウショット** 100ダメージ

**Assigned Tags:** `ダメカン操作`, `ベンチ狙撃`, `ベンチ狙撃>ダメカン型`

#### Variant 2: `デスカーン_120_psychic_none_のびるダメカーン|まどわす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **のびるダメカーン** — 自分のベンチポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のポケモン1匹にのせ替える。<br>[psychicnonenone] **まどわす** 60ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `ダメカン操作`, `ベンチ狙撃`, `ベンチ狙撃>移動型`, `特殊状態`, `特殊状態>こんらん`

---

### テツノツツミ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `テツノツツミ_90_water_none_インタージェット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | water |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[waternone] **インタージェット** 60ダメージ — このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`, `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `テツノツツミ_100_water_none_ガストコリジョン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | water |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[waterwaternone] **ガストコリジョン** 200－ダメージ — 相手のバトルポケモンのにげるためのエネルギーの数×50ダメージぶん、このワザのダメージは小さくなる。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

---

### テツノブジン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `テツノブジン_130_psychic_none_えんざん|マジェスティソード_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | psychic |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **えんざん** — 自分の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。<br>[psychicpsychicnone] **マジェスティソード** 100＋ダメージ — この番、手札から「未来」のサポートを出して使っていたなら、100ダメージ追加。

**Assigned Tags:** `古代未来テラスタル`, `古代未来テラスタル>未来`

#### Variant 2: `テツノブジン_130_psychic_none_しねんのやいば|ジェミニレーザー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | psychic |
| Regulation | MC, SVHM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「未来のミライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ジェミニレーザー** 20ダメージ — 相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[psychicpsychicnone] **しねんのやいば** 120ダメージ — 次の自分の番、このポケモンは「しねんのやいば」が使えない。

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### デデンネ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `デデンネ_70_psychic_none_かじる|でんじソナー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **でんじソナー** — 自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加える。<br>[psychic] **かじる** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>トラッシュ回収`

#### Variant 2: `デデンネ_70_electric_none_しっぽはつでん|でんきショック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **しっぽはつでん** — 相手のポケモン全員についているエネルギーの数ぶんまで、自分のトラッシュから「基本エネルギー」を選び、自分のポケモンに好きなようにつける。<br>[electricnone] **でんきショック** 30ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`, `条件ダメージ`, `条件ダメージ>場参照`, `特殊状態`, `特殊状態>マヒ`

---

### デンチュラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `デンチュラ_100_grass_none_ビリビリウェブ_ふくがん`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

**[特性] ふくがん** — このポケモンが使うワザの、相手のバトル場の特性を持つポケモンへのダメージは「+50」される。

**Attacks:**

[grassnone] **ビリビリウェブ** 50＋ダメージ — このポケモンにエネルギーがついているなら、80ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `デンチュラ_90_electric_none_ほうでん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | electric |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ほうでん** 50×ダメージ — このポケモンについているエネルギーをすべてトラッシュし、その枚数×50ダメージ。

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`

---

### ドータクン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドータクン_110_psychic_none_しんかジャマー|ちょうねんりき_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | psychic |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **しんかジャマー** 30ダメージ — 次の相手の番、相手は手札からポケモンを出して進化させられない。<br>[psychicnonenone] **ちょうねんりき** 100ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ドータクン_130_steel_none_かいてんアタック|ダブルインパクト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **かいてんアタック** 50ダメージ<br>[steelnonenone] **ダブルインパクト** 100×ダメージ — コインを2回投げ、オモテの数×100ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 3: `ドータクン_130_steel_none_ヘビーインパクト_まもりのかね`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

**[特性] まもりのかね** — このポケモンがいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-10」される。

**Attacks:**

[steelnone] **ヘビーインパクト** 50ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 4: `ドータクン_140_steel_none_どうぐおとし|トリプルドロー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | steel |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **トリプルドロー** — 自分の山札を3枚引く。<br>[nonenonenone] **どうぐおとし** 40×ダメージ — おたがいのポケモン全員についている「ポケモンのどうぐ」の数×40ダメージ。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`, `条件ダメージ`, `条件ダメージ>場参照`

---

### ドーミラー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドーミラー_80_psychic_none_ミラーアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | psychic |
| Regulation | SV5K |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ミラーアタック** 10＋ダメージ — 相手のバトルポケモンがポケモンなら、30ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ドーミラー_60_steel_none_シールドアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | steel |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **シールドアタック** 20＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ドーミラー_70_steel_none_ぶちかます_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **ぶちかます** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 4: `ドーミラー_80_steel_none_ころがる|てっぺき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | steel |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **てっぺき** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。<br>[nonenonenone] **ころがる** 30ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### ドクロッグ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドクロッグ_130_fighting_none_どつく|クリーンヒット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fighting |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **どつく** 50ダメージ<br>[fightingnonenone] **クリーンヒット** 90＋ダメージ — 相手のバトルポケモンが進化ポケモンなら、90ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ドクロッグ_130_fighting_none_とつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fighting |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **とつげき** 70ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `自傷`

---

### トゲデマル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `トゲデマル_80_electric_none_ビリビリチャンス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | electric |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ビリビリチャンス** 30ダメージ — 自分のサイドの残り枚数が1枚なら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `トゲデマル_80_electric_none_とげスパーク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | electric |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations カプ・コケコex・ミミッキュex |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **とげスパーク** 40ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 3: `トゲデマル_80_steel_none_かじる|ともだちをさがす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | steel |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ともだちをさがす** — 自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[steel] **かじる** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>ポケモンサーチ`

---

### ドテッコツ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドテッコツ_100_fighting_none_げんこつ|ばかぢから_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **げんこつ** 20ダメージ<br>[fightingnonenone] **ばかぢから** 50＋ダメージ — のぞむなら、30ダメージ追加。その場合、このポケモンにも30ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ドテッコツ_100_fighting_none_けたぐり|アームハンマー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fighting |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **けたぐり** 30ダメージ<br>[fightingnonenone] **アームハンマー** 60ダメージ — 相手の山札を上から1枚トラッシュする。

**Assigned Tags:** `山札破壊`

---

### ドドゲザン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドドゲザン_170_dark_none_ひじうち|スライスブレード_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dark |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[dark] **ひじうち** 40ダメージ<br>[darknone] **スライスブレード** 100ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ドドゲザン_170_steel_none_もろはぎり_そうだいしょう`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | steel |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

**[特性] そうだいしょう** — このポケモンが使うワザの、相手のバトルポケモンへのダメージは、相手がすでにとったサイド1枚につき「+30」される。

**Attacks:**

[steelsteel] **もろはぎり** 180ダメージ — このポケモンにも50ダメージ。

**Assigned Tags:** `自傷`

---

### トリミアン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `トリミアン_100_none_none_エネアシスト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | none |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **エネアシスト** 30ダメージ — 自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 2: `トリミアン_100_none_none_かみつく_ファーコート`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | none |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

**[特性] ファーコート** — このポケモンが受けるワザのダメージは「-20」される。

**Attacks:**

[nonenonenone] **かみつく** 80ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 3: `トリミアン_90_none_none_ずつき|ハンドカット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | none |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ハンドカット** — 相手の手札を、オモテを見ないで5枚になるように、トラッシュする。<br>[none] **ずつき** 30ダメージ

**Assigned Tags:** `手札干渉`, `手札干渉>トラッシュ`

---

### ドリュウズ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドリュウズ_130_fighting_none_マッドショット|ワイルドタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fighting |
| Regulation | SV5M |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **マッドショット** 20ダメージ<br>[fightingfightingnone] **ワイルドタックル** 180ダメージ — このポケモンにも50ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ドリュウズ_120_fighting_none_あなほりクロー|ドリルスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **あなほりクロー** 20ダメージ — 相手の山札を上から1枚トラッシュする。<br>[fightingnone] **ドリルスマッシュ** 60＋ダメージ — 自分のベンチにポケモンがいるなら、80ダメージ追加。

**Assigned Tags:** `山札破壊`

---

### トルネロス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `トルネロス_110_none_none_げんこつ|ぼうふうしょうへき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | none |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **げんこつ** 50ダメージ<br>[nonenonenone] **ぼうふうしょうへき** 100ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-50」される。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `トルネロス_120_none_none_かぜをまとう|ぼうふう_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | none |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かぜをまとう** — 自分の手札から基本エネルギーを1枚選び、このポケモンにつける。<br>[nonenonenone] **ぼうふう** 100ダメージ — このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替える。

**Assigned Tags:** `エネ加速`, `エネ加速>手札→ポケモン`, `エネ移動`

---

### ドレディア

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドレディア_110_grass_none_かいてんアタック_にほんばれ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | grass |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

**[特性] にほんばれ** — このポケモンがいるかぎり、自分のまたはポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。

**Attacks:**

[grassnonenone] **かいてんアタック** 60ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ドレディア_100_grass_none_いあいぎり|げんわくアロマ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **げんわくアロマ** 30ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。ウラなら、相手のバトルポケモンをこんらんにする。<br>[grassnonenone] **いあいぎり** 70ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`, `特殊状態>マヒ`, `特殊状態>どく`

---

### トロッゴン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `トロッゴン_110_fighting_none_はねとばす|ロックスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fighting |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **はねとばす** 20＋ダメージ — コインを1回投げオモテなら、40ダメージ追加。<br>[fightingnonenonenone] **ロックスマッシュ** 80ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `トロッゴン_110_fighting_none_ガードプレス|パワージェム_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ガードプレス** 20ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-20」される。<br>[fightingnonenone] **パワージェム** 60ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### ドロバンコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドロバンコ_80_fighting_none_けとばす|どろかけ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **けとばす** 10ダメージ<br>[fightingnonenone] **どろかけ** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ドロバンコ_90_fighting_none_つっぱしる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | fighting |
| Regulation | SV9a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **つっぱしる** 40×ダメージ — ウラが出るまでコインを投げ、オモテの数×40ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ドンメル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドンメル_80_fire_none_なかまをよぶ|ほのお_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[firenonenone] **ほのお** 30ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `ドンメル_80_fire_none_かえん_しゃくねつボディ`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | M2a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

**[特性] しゃくねつボディ** — このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。

**Attacks:**

[firenone] **かえん** 20ダメージ

**Assigned Tags:** `カウンター効果`, `特殊状態`, `特殊状態>やけど`

---

### ナックラー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ナックラー_60_fighting_none_かみつく|なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[fightingnone] **かみつく** 20ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `ナックラー_70_fighting_none_にどずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **にどずつき** 10×ダメージ — コインを2回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ナッシー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ナッシー_130_grass_none_たまなげアワー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **たまなげアワー** 60×ダメージ — おたがいのバトルポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×60ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `条件ダメージ>場参照`

#### Variant 2: `ナッシー_140_grass_none_ソーラービーム|メガドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | grass |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ピカチュウex・カビゴンex |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **メガドレイン** 50ダメージ — このポケモンのHPを「30」回復する。<br>[grassgrassnone] **ソーラービーム** 130ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 3: `ナッシー_140_grass_none_ウッドスタンプ|ガードプレス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | grass |
| Regulation | M1L |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ガードプレス** 30ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-30」される。<br>[nonenonenone] **ウッドスタンプ** 60＋ダメージ — このポケモンについているエネルギーの数×30ダメージ追加。

**Assigned Tags:** `ダメージ軽減`, `条件ダメージ`, `条件ダメージ>場参照`

---

### ナミイルカ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ナミイルカ_80_water_none_するどいひれ|みずかけ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | water |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[water] **みずかけ** 10ダメージ<br>[waternonenone] **するどいひれ** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ナミイルカ_70_water_none_アクアスラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | MC, SV8a, SV6 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[water] **アクアスラッシュ** 30ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

---

### ニャオニクス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ニャオニクス_90_psychic_none_サイコショット_さそうしっぽ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | psychic |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] さそうしっぽ** — 自分の番に、自分の手札から「のんびりじゃらし」を1枚トラッシュするなら、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。

**Attacks:**

[psychicnonenone] **サイコショット** 80ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

#### Variant 2: `ニャオニクス_100_psychic_none_まどわす|サイコキネシス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | psychic |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **まどわす** — 相手のバトルポケモンをこんらんにする。<br>[psychic] **サイコキネシス** 30＋ダメージ — 相手のバトルポケモンについているエネルギーの数×30ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`, `特殊状態`, `特殊状態>こんらん`

---

### ニャスパー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ニャスパー_60_psychic_none_みすかす|サイコショット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **みすかす** — 相手の手札を見る。<br>[psychicnone] **サイコショット** 20ダメージ

**Assigned Tags:** `手札干渉`, `手札干渉>手札を見る`

#### Variant 2: `ニャスパー_60_psychic_none_ひとやすみ|ふむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひとやすみ** — このポケモンのHPを「20」回復する。<br>[psychic] **ふむ** 10ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### ニューラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ニューラ_70_water_none_いあいぎり|つめよる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[water] **いあいぎり** 10ダメージ<br>[waterwater] **つめよる** 30ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

#### Variant 2: `ニューラ_60_dark_none_ツメできりさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | dark |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[dark] **ツメできりさく** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ニューラ_70_dark_none_ひっかく|ツメをたてる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ツメをたてる** 10ダメージ<br>[darkdark] **ひっかく** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### ニンフィア

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ニンフィア_120_psychic_none_チャームボイス|ミスティックリターン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SV8a, SV6a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ミスティックリターン** — コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。<br>[psychicnonenone] **チャームボイス** 90ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `ニンフィア_120_psychic_none_マジカルショット_しんぴのまもり`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

**[特性] しんぴのまもり** — このポケモンは、相手の「ポケモンex」からワザのダメージを受けない。

**Attacks:**

[psychicnonenone] **マジカルショット** 100ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### ヌイコグマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヌイコグマ_80_none_none_とっしん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | none |
| Regulation | MC, SVM, SV6a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations カプ・コケコex・ミミッキュex, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **とっしん** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ヌイコグマ_70_none_none_なぐる|はねまわる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | M1S |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なぐる** 10ダメージ<br>[nonenone] **はねまわる** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ノコッチ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ノコッチ_60_none_none_あなをほる|かじる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | SV8a, SV5K |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かじる** 10ダメージ<br>[nonenone] **あなをほる** 30ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `ノコッチ_70_none_none_いれかわる|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **いれかわる** — このポケモンをベンチポケモンと入れ替える。<br>[nonenone] **ぶつかる** 20ダメージ

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

---

### ノズパス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ノズパス_80_fighting_none_パワーラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **パワーラッシュ** 60ダメージ — コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ノズパス_80_fighting_none_いわおとし|ずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ずつき** 20ダメージ<br>[nonenonenone] **いわおとし** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ノズパス_90_fighting_none_いわころがり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | fighting |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **いわころがり** 40ダメージ

**Assigned Tags:** _（タグなし）_

---

### パウワウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `パウワウ_80_water_none_バブルドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | water |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[waternone] **バブルドレイン** 20ダメージ — このポケモンのHPを「20」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 2: `パウワウ_80_water_none_みずかけ|スプラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | water |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **みずかけ** 10ダメージ<br>[waterwater] **スプラッシュ** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### パオジアン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `パオジアン_120_water_none_アイシクルループ_ゆきにしずめる`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | water |
| Regulation | M2a, SV8 |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] ゆきにしずめる** — 自分の番に、このカードを手札からベンチに出したとき、1回使える。場に出ているスタジアムをトラッシュする。

**Attacks:**

[waterwaternone] **アイシクルループ** 120ダメージ — このポケモンについているエネルギーを1個選び、手札にもどす。

**Assigned Tags:** `スタジアム`, `スタジアム>破壊`

#### Variant 2: `パオジアン_120_dark_none_ひるがえす|ライジングブレード_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | dark |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ひるがえす** 20ダメージ — のぞむなら、このポケモンをベンチポケモンと入れ替える。<br>[darkdarknone] **ライジングブレード** 80＋ダメージ — 相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

---

### バオッキー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バオッキー_90_fire_none_ダブルスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fire |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ダブルスマッシュ** 70×ダメージ — コインを2回投げ、オモテの数×70ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `バオッキー_100_fire_none_ひっぱたく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fire |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ひっぱたく** 70ダメージ

**Assigned Tags:** _（タグなし）_

---

### バオップ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バオップ_60_fire_none_かえん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fire |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **かえん** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `バオップ_70_fire_none_ひっかく|もってくる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。<br>[nonenone] **ひっかく** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### バクガメス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バクガメス_120_fire_none_はきだしショット|ばくねつほう_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | fire |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[firenone] **はきだしショット** — 相手のベンチポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[firefirenone] **ばくねつほう** 100ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `バクガメス_130_fire_none_もうかのとっしん|フレイムサークル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | SV7 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[firenonenone] **フレイムサークル** 50ダメージ — 相手のバトルポケモンをやけどにする。次の相手の番、このワザを受けたポケモンは、にげられない。<br>[firefirenonenone] **もうかのとっしん** 180ダメージ — このポケモンにも60ダメージ。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `特殊状態`, `特殊状態>やけど`, `自傷`

#### Variant 3: `バクガメス_120_dragon_none_こがしつくす|ばくねつスタンプ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | dragon |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **こがしつくす** — 相手のバトル場の「ポケモンex」についているエネルギーを1個選び、トラッシュする。<br>[fightingnonenone] **ばくねつスタンプ** 100ダメージ

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

#### Variant 4: `バクガメス_120_fire_none_ヒートブレス_こうらのトゲ`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | fire |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

**[特性] こうらのトゲ** — このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、トラッシュする。

**Attacks:**

[firefirenone] **ヒートブレス** 80＋ダメージ — コインを1回投げオモテなら、80ダメージ追加。

**Assigned Tags:** `カウンター効果`

---

### ハスブレロ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ハスブレロ_90_water_none_アクアスラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | water |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[waterwater] **アクアスラッシュ** 70ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ハスブレロ_90_grass_none_メガドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | grass |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **メガドレイン** 30ダメージ — このポケモンのHPを「30」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### バチュル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バチュル_40_grass_none_はねてかわす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | grass |
| Regulation | SV6a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **はねてかわす** 10ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `バチュル_30_electric_none_バチュチャージ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 30 |
| Type | electric |
| Regulation | MC, SV7 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **バチュチャージ** — 自分の山札から「基本エネルギー」と「基本エネルギー」をそれぞれ2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`

#### Variant 3: `バチュル_40_electric_none_ふいをつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | electric |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ふいをつく** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### パチリス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `パチリス_70_electric_none_ぱちぱちチャージ|プチボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | コロコロイチバン！ 2024年3月発売号 |

**Abilities:**

_なし_

**Attacks:**

[none] **ぱちぱちチャージ** — コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから「基本エネルギー」を選び、ベンチポケモンに好きなようにつける。<br>[electricnone] **プチボルト** 30ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 2: `パチリス_70_electric_none_しびれるまえば_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | MC, M1S |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **しびれるまえば** 10ダメージ — 次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけるたび、そのポケモンにダメカンを8個のせる。

**Assigned Tags:** `ダメカン操作`

---

### バッフロン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バッフロン_100_none_none_そこぢから_カーリーウォール`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | none |
| Regulation | M2a, SV8a, SV7 |
| Variant Count | 3枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, ハイクラスパック「テラスタルフェスex」, 拡張パック「ステラミラクル」 |

**Abilities:**

**[特性] カーリーウォール** — このポケモンと、自分の別の「バッフロン」がいるかぎり、自分のタイプのたねポケモン全員が、相手のポケモンから受けるワザのダメージは「-60」される。この効果は、こ…

**Attacks:**

[nonenonenone] **そこぢから** 130ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ダメージ軽減`, `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `バッフロン_130_none_none_まちうけホーン|スマッシュヘッド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | none |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **まちうけホーン** 40ダメージ — 次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。<br>[nonenonenonenone] **スマッシュヘッド** 150ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

**Assigned Tags:** `カウンター効果`, `ダメカン操作`

---

### ハトーボー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ハトーボー_80_none_none_ジェットウイング|スピードひこう_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | none |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **スピードひこう** 20ダメージ<br>[nonenone] **ジェットウイング** 70ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ハトーボー_80_none_none_そらをとぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | none |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **そらをとぶ** 40ダメージ — コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

---

### ハバタクカミ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ハバタクカミ_90_psychic_none_たたりとばす_あんやのはばたき`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | MC, SV-P, SV8a, SV5K |
| Variant Count | 5枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スカーレット＆バイオレット プロモカードパック第10弾, ハイクラスパック「テラスタルフェスex」 ... (+1セット) |

**Abilities:**

**[特性] あんやのはばたき** — このポケモンがバトル場にいるかぎり、相手のバトルポケモンの特性（「あんやのはばたき」をのぞく）は、すべてなくなる。

**Attacks:**

[nonenonenone] **たたりとばす** 90ダメージ — ダメカン2個を、相手のベンチポケモンに好きなようにのせる。

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメカン型`

#### Variant 2: `ハバタクカミ_90_psychic_none_まどわしうつす|ムーンフォース_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **まどわしうつす** — 自分のベンチの「古代」のポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。<br>[psychicpsychic] **ムーンフォース** 70ダメージ — 次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。

**Assigned Tags:** `ダメカン操作`, `ダメージ軽減`, `ベンチ狙撃`, `ベンチ狙撃>移動型`, `古代未来テラスタル`, `古代未来テラスタル>古代`

---

### パモ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `パモ_40_electric_none_ねらってスパーク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | electric |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[electric] **ねらってスパーク** — 相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `パモ_60_electric_none_なきごえ|プチでんき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **なきごえ** — 次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。<br>[electric] **プチでんき** 10ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### バリヤード

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バリヤード_90_psychic_none_そっくりショー|ぶきみなねんぱ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **そっくりショー** — 相手の手札を見る。のぞむなら、その中にあるサポートを1枚選び、その効果を、このワザの効果として使う。<br>[psychic] **ぶきみなねんぱ** 20ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `ワザコピー`, `手札干渉`, `手札干渉>手札を見る`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `バリヤード_90_psychic_none_ねんりき|ものまね_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ものまね** — 自分の手札をすべて山札にもどして切る。その後、相手の手札の枚数ぶん、自分の山札を引く。<br>[psychicnone] **ねんりき** 40ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `手札シャッフル`, `特殊状態`, `特殊状態>マヒ`

---

### パルスワン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `パルスワン_120_electric_none_そうでんダッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | electric |
| Regulation | MP1, MC, SVHM |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer., スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「未来のミライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **そうでんダッシュ** 50ダメージ — 自分の山札から「基本エネルギー」を2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`

#### Variant 2: `パルスワン_130_electric_none_エレキラン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | electric |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **エレキラン** 70＋ダメージ — コインを1回投げオモテなら、70ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### パルデア ケンタロス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `パルデア ケンタロス_130_fire_none_うしろげり|きあいタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **うしろげり** 30ダメージ<br>[firenonenone] **きあいタックル** 90＋ダメージ — 相手のバトルポケモンが1進化ポケモンなら、90ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `パルデア ケンタロス_130_water_none_かちあげホーン|ジェットヘッド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | water |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かちあげホーン** 30ダメージ — のぞむなら、相手のバトル場の2進化ポケモンについているエネルギーを2個選び、相手の手札にもどす。<br>[waterwaternone] **ジェットヘッド** 100ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `パルデア ケンタロス_130_fighting_none_けとばす|ブロックスタンプ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **けとばす** 40ダメージ<br>[fightingnonenone] **ブロックスタンプ** 90ダメージ — 次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>相手ロック`

#### Variant 4: `パルデア ケンタロス_130_fighting_none_いかりのとっしん|すてみタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **いかりのとっしん** 40×ダメージ — 自分の場の、ダメカンがのっている名前に「ケンタロス」とつくポケモンの数×40ダメージ。<br>[fightingfighting] **すてみタックル** 70ダメージ — このポケモンにも20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `自傷`

---

### バンバドロ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バンバドロ_150_fighting_none_10まんばりき|マッドストック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | fighting |
| Regulation | MC, SV5K |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **マッドストック** — 自分のベンチポケモン全員に、トラッシュから「基本エネルギー」を1枚ずつつける。<br>[fightingnonenone] **10まんばりき** 140ダメージ — このポケモンにも40ダメージ。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`, `自傷`

#### Variant 2: `バンバドロ_150_fighting_none_ヘビーインパクト_マッドコート`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | fighting |
| Regulation | MC, SV9a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

**[特性] マッドコート** — このポケモンが受けるワザのダメージは「-30」される。

**Attacks:**

[fightingfightingnone] **ヘビーインパクト** 130ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### ヒードラン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒードラン_140_steel_none_スチールバースト_しゃくねつボディ`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 140 |
| Type | steel |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] しゃくねつボディ** — このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。

**Attacks:**

[steelnonenone] **スチールバースト** 50×ダメージ — このポケモンについているエネルギーをすべてトラッシュし、その枚数×50ダメージ。

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `カウンター効果`, `特殊状態`, `特殊状態>やけど`

#### Variant 2: `ヒードラン_130_steel_none_たたきつぶす|アイアンバスター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | steel |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **たたきつぶす** 40ダメージ<br>[steelsteelnone] **アイアンバスター** 130ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

---

### ピカチュウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ピカチュウ_70_electric_none_でんじスパーク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M-P, SV-P, SV5M |
| Variant Count | 3枚 |
| Sample Sets | マクドナルド「ハッピーセット2025」, ポケカの夏がキタ！プロモカードGetキャンペーン！, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **でんじスパーク** — 相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `ピカチュウ_70_electric_none_げきとうスパーク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | プロモカード「ピカチュウ」 |

**Abilities:**

_なし_

**Attacks:**

[electricelectricnone] **げきとうスパーク** 30＋ダメージ — ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 3: `ピカチュウ_60_electric_none_くつろぐ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | Pokémon Trading Card Game イラストレーションコンテスト 2024 |

**Abilities:**

_なし_

**Attacks:**

[none] **くつろぐ** — このポケモンのHPを「20」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 4: `ピカチュウ_70_electric_none_しっぽでたたく|プチボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[electric] **しっぽでたたく** 10ダメージ<br>[electricnone] **プチボルト** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### ピカチュウex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ピカチュウex_200_electric_none_10まんボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 200 |
| Type | electric |
| Regulation | MC, SVI |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[electricelectricnone] **10まんボルト** 120ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ピカチュウex_200_electric_none_トパーズボルト_がんばりハート`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 200 |
| Type | electric |
| Regulation | M2a, SV8a, SV8 |
| Variant Count | 7枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, ハイクラスパック「テラスタルフェスex」, 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] がんばりハート** — このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。

**Attacks:**

[grasselectricsteel] **トパーズボルト** 300ダメージ — このポケモンについているエネルギーを3個選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ピカチュウex_190_electric_none_かみなり|しっぽではたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 190 |
| Type | electric |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ピカチュウex・カビゴンex |

**Abilities:**

_なし_

**Attacks:**

[none] **しっぽではたく** 30ダメージ<br>[electricelectricnone] **かみなり** 220ダメージ — このポケモンにも30ダメージ。

**Assigned Tags:** `自傷`

#### Variant 4: `ピカチュウex_200_electric_none_ボルテッカー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 200 |
| Type | electric |
| Regulation | MP1 |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer. |

**Abilities:**

_なし_

**Attacks:**

[electricelectricnone] **ボルテッカー** 210ダメージ — このポケモンにも30ダメージ。

**Assigned Tags:** `自傷`

---

### ビクティニ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ビクティニ_80_fire_none_ぱたぱた|やきおとす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | MC, SVM, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations レシラムex・モロバレルex, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ぱたぱた** — 自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。<br>[fire] **やきおとす** 30ダメージ — 相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`, `ドロー`, `ドロー>固定枚数ドロー`, `手札シャッフル`

#### Variant 2: `ビクティニ_70_fire_none_ほのお_ビクトリーエール`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] ビクトリーエール** — このポケモンがいるかぎり、自分のタイプの進化ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。

**Attacks:**

[firenone] **ほのお** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ビクティニ_80_fire_none_Vフォース_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | SV-P, MC, SV11B |
| Variant Count | 5枚 |
| Sample Sets | ブラックボルト・ホワイトフレア カードファイルセット, スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 ... (+1セット) |

**Abilities:**

_なし_

**Attacks:**

[firefire] **Vフォース** 120ダメージ — 自分のベンチポケモンが4匹以下なら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### ピッピ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ピッピ_60_psychic_none_ムーンキック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ムーンキック** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ピッピ_70_psychic_none_このゆびとまれ|はねまわる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **このゆびとまれ** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。<br>[psychicpsychic] **はねまわる** 30ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

---

### ヒトカゲ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒトカゲ_80_fire_none_ひだね_みがる`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

**[特性] みがる** — このポケモンにエネルギーがついていないなら、このポケモンはにげるためのエネルギーが、すべてなくなる。

**Attacks:**

[fire] **ひだね** 20ダメージ

**Assigned Tags:** `にげるコスト無償`, `ポケモン入れ替え`, `ポケモン入れ替え>にげるコスト操作`

#### Variant 2: `ヒトカゲ_80_fire_none_ほのおのツメ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ほのおのツメ** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### ヒトモシ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒトモシ_60_fire_none_なかまをよぶ|ひだね_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fire |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **なかまをよぶ** — 自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。<br>[firenone] **ひだね** 20ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `ヒトモシ_60_fire_none_てらしてもやす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fire |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **てらしてもやす** — 自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。

**Assigned Tags:** _（タグなし）_

---

### ヒヒダルマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒヒダルマ_140_fire_none_ころがりタックル|もうかのとっしん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[firefire] **ころがりタックル** 60ダメージ<br>[firefirefire] **もうかのとっしん** 210ダメージ — このポケモンにも70ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ヒヒダルマ_140_fire_none_やきこがす|スマッシュヘッド_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[firenone] **やきこがす** 50ダメージ — 相手のバトルポケモンをやけどにする。<br>[firenonenonenone] **スマッシュヘッド** 180ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

**Assigned Tags:** `特殊状態`, `特殊状態>やけど`

#### Variant 3: `ヒヒダルマ_150_fire_none_ブレイズボール_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | fire |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenonenone] **ブレイズボール** 40＋ダメージ — このポケモンについているエネルギーの数×40ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### ビビヨン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ビビヨン_120_grass_none_エボルパウダー|カッターウインド_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 120 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **エボルパウダー** — 自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。<br>[grass] **カッターウインド** 90ダメージ

**Assigned Tags:** `進化加速`

#### Variant 2: `ビビヨン_120_grass_none_ふきぬける_おおきなはね`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 120 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

**[特性] おおきなはね** — 自分の番に1回使える。相手は相手自身の手札をすべてウラにして切り、山札の下にもどす。その後、相手は山札を4枚引く。

**Attacks:**

[grass] **ふきぬける** 60＋ダメージ — 場にスタジアムが出ているなら、60ダメージ追加。

**Assigned Tags:** `スタジアム`, `スタジアム>参照`, `ドロー`, `ドロー>固定枚数ドロー`

---

### ヒポポタス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒポポタス_90_fighting_none_つきとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | fighting |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第8弾 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **つきとばす** 10ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `ヒポポタス_90_fighting_none_たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **たいあたり** 70ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ヒポポタス_100_fighting_none_かみつく|すなかけ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | fighting |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **すなかけ** 10ダメージ — 次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。<br>[fightingnonenone] **かみつく** 60ダメージ

**Assigned Tags:** _（タグなし）_

---

### ヒラヒナ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒラヒナ_50_psychic_none_つつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | psychic |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[psychic] **つつく** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ヒラヒナ_40_psychic_none_はねてかわす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | psychic |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はねてかわす** 10ダメージ — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

---

### ビリジオン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ビリジオン_120_grass_none_スライスブレード|リーフドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | MP1, MC, SVM |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer., スタートデッキ100 バトルコレクション, スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **リーフドレイン** 30ダメージ — このポケモンのHPを「30」回復する。<br>[grassnonenone] **スライスブレード** 100ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 2: `ビリジオン_120_grass_none_エメラルドブレード|ギガドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ギガドレイン** 30ダメージ — 相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。<br>[grassgrassnone] **エメラルドブレード** 130ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`

---

### ヒンバス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒンバス_30_water_none_じたばた_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 30 |
| Type | water |
| Regulation | SV8a, SV6 |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[water] **じたばた** 10×ダメージ — このポケモンにのっているダメカンの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `ヒンバス_30_water_none_はねにげ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 30 |
| Type | water |
| Regulation | MC, SV8 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はねにげ** — このポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

---

### ファイアロー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ファイアロー_140_none_none_エアロチェイス_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | none |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **エアロチェイス** 110＋ダメージ — 相手のバトルポケモンのにげるためのエネルギーが2個以上なら、110ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ファイアロー_150_fire_none_ほのおのつばさ_スカイハント`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 150 |
| Type | fire |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

**[特性] スカイハント** — 自分の番に1回使える。コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。

**Attacks:**

[firefire] **ほのおのつばさ** 110ダメージ

**Assigned Tags:** `手札干渉`, `手札干渉>トラッシュ`

---

### フーディン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フーディン_140_psychic_none_サイコキネシス|ストレンジハック_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | psychic |
| Regulation | SV8a, SV6 |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ストレンジハック** — 相手のバトルポケモンをこんらんにする。相手の場のポケモンにのっているダメカンを好きなだけ選び、相手の場のポケモンに好きなようにのせ替える。<br>[psychic] **サイコキネシス** 10＋ダメージ — 相手のバトルポケモンについているエネルギーの数×50ダメージ追加。

**Assigned Tags:** `ダメカン操作`, `ベンチ狙撃`, `ベンチ狙撃>移動型`, `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `フーディン_140_psychic_none_ハンドパワー_サイコドロー`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | psychic |
| Regulation | M1S |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

**[特性] サイコドロー** — 自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を3枚引く。

**Attacks:**

[psychic] **ハンドパワー** — 自分の手札の枚数×2個ぶんのダメカンを、相手のバトルポケモンにのせる。

**Assigned Tags:** `ダメカン操作`, `ドロー`, `ドロー>固定枚数ドロー`

---

### フォレトス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フォレトス_130_steel_none_こうてつタックル|とげキャノン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **とげキャノン** 30×ダメージ — コインを3回投げ、オモテの数×30ダメージ。<br>[nonenonenone] **こうてつタックル** 130ダメージ — このポケモンにも40ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `自傷`

#### Variant 2: `フォレトス_130_steel_none_アイアンシェイク|ハリケーンニードル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | steel |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[none] **アイアンシェイク** 20ダメージ — 自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。<br>[steelnonenonenone] **ハリケーンニードル** 80×ダメージ — コインを4回投げ、オモテの数×80ダメージ。

**Assigned Tags:** `エネ移動`, `条件ダメージ`, `条件ダメージ>コイン可変`

---

### フクスロー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フクスロー_90_grass_none_だんけつのつばさ|カッターウインド_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | grass |
| Regulation | SV6a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **だんけつのつばさ** 20×ダメージ — 自分のトラッシュにある、ワザ「だんけつのつばさ」を持つポケモンの枚数×20ダメージ。<br>[grass] **カッターウインド** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `フクスロー_100_grass_none_このは|フェザーショット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **このは** 20ダメージ<br>[nonenonenone] **フェザーショット** — このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、90ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### フシデ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フシデ_80_dark_none_かいてんアタック|どくえき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **どくえき** — 相手のバトルポケモンをどくにする。<br>[darknonenone] **かいてんアタック** 40ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

#### Variant 2: `フシデ_80_dark_none_どくをとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **どくをとばす** — 相手のバトルポケモンをどくにする。

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

---

### フリージオ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フリージオ_90_water_none_れいとうビーム|コールサイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | water |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **コールサイン** — 自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[water] **れいとうビーム** 30ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `フリージオ_90_water_none_つらら|ひきずりだす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | water |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[water] **ひきずりだす** — 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに20ダメージ。<br>[water] **つらら** 30ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

---

### ブリジュラス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ブリジュラス_180_steel_none_アイアンブラスター_はがねのかけはし`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 180 |
| Type | steel |
| Regulation | MC, SV8a, SV7 |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「ステラミラクル」 |

**Abilities:**

**[特性] はがねのかけはし** — このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。

**Attacks:**

[steelsteelnone] **アイアンブラスター** 160ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `にげるコスト無償`, `ポケモン入れ替え`, `ポケモン入れ替え>にげるコスト操作`, `ワザロック`, `ワザロック>自己ロック`

#### Variant 2: `ブリジュラス_180_steel_none_コーティングアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 180 |
| Type | steel |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[steelsteelsteel] **コーティングアタック** 120ダメージ — 次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。

**Assigned Tags:** `ダメージ軽減`

---

### フレフワン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フレフワン_120_psychic_none_パフュームプレス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **パフュームプレス** 60ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `フレフワン_120_psychic_none_ドレインキッス_かおりあつめ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

**[特性] かおりあつめ** — 自分の番に1回使える。自分の山札から「基本エネルギー」を2枚まで選び、相手に見せて、手札に加える。そして山札を切る。

**Attacks:**

[psychicnone] **ドレインキッス** 50ダメージ — このポケモンのHPを「30」回復する。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`, `回復`, `回復>固定HP回復`

---

### プロトーガ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `プロトーガ_100_water_none_スプラッシュターン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | water |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[waterwater] **スプラッシュターン** 70ダメージ — このポケモンをベンチポケモンと入れ替える。

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

#### Variant 2: `プロトーガ_100_water_none_たいこのもくず|なみのり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | water |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[water] **たいこのもくず** 30×ダメージ — 相手のトラッシュにあるグッズの枚数×30ダメージ。<br>[waternonenone] **なみのり** 80ダメージ

**Assigned Tags:** _（タグなし）_

---

### ブロロローム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ブロロローム_150_steel_none_あらくれダッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | steel |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[steelnonenone] **あらくれダッシュ** 100ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ブロロローム_140_steel_none_つっぱしる|まきかえす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | steel |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **まきかえす** 30＋ダメージ — 前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。<br>[steelnonenone] **つっぱしる** 100×ダメージ — ウラが出るまでコインを投げ、オモテの数×100ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ブロロン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ブロロン_80_steel_none_ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | steel |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ぶつかる** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ブロロン_70_steel_none_ぶつかる|メタルコーティング_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **メタルコーティング** — 自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。<br>[steelnonenone] **ぶつかる** 50ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 3: `ブロロン_70_steel_none_こうちょく|とびだしヘッド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | SV8a, SV6a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **こうちょく** — 次の相手の番、このポケモンが受けるワザのダメージは「-30」される。<br>[steelsteel] **とびだしヘッド** 20ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### フワライド

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フワライド_130_psychic_none_みんなでばくはつ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | psychic |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **みんなでばくはつ** 50×ダメージ — 自分の場の「フワンテ」と「フワライド」の数×50ダメージ。自分の場の「フワンテ」と「フワライド」全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しな…

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `自傷`

#### Variant 2: `フワライド_110_psychic_none_ぶきみなかぜ|バルーンリターン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | psychic |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第9弾 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ぶきみなかぜ** — 相手のバトルポケモンをこんらんにする。<br>[psychicpsychic] **バルーンリターン** 110ダメージ — このポケモンと、ついているすべてのカードを、手札にもどす。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

---

### フワンテ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `フワンテ_70_psychic_none_ふくらむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ふくらむ** 10ダメージ — 次の相手の番、このポケモンが受けるワザのダメージは「-10」される。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `フワンテ_70_psychic_none_ひっぱる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第9弾 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ひっぱる** — コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-05型`

---

### ヘイガニ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヘイガニ_80_water_none_はさむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | water |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[waterwaternone] **はさむ** 60ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ヘイガニ_80_water_none_とっしん|はさむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | water |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はさむ** 10ダメージ<br>[nonenone] **とっしん** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### ベイリーフ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ベイリーフ_110_grass_none_つきとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | grass |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **つきとばす** 50ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `ベイリーフ_100_grass_none_リーフステップ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | grass |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[grassgrass] **リーフステップ** 60ダメージ

**Assigned Tags:** _（タグなし）_

---

### ベラカス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ベラカス_70_grass_none_サイコキネシス_スフィアシールド`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 70 |
| Type | grass |
| Regulation | SV8a, SV5M |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

**[特性] スフィアシールド** — このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のポケモンからワザのダメージや効果を受けない。

**Attacks:**

[grass] **サイコキネシス** 10＋ダメージ — 相手のバトルポケモンについているエネルギーの数×30ダメージ追加。

**Assigned Tags:** `ダメージ軽減`, `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

#### Variant 2: `ベラカス_70_grass_none_どんでんがえし|トリプルドロー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 70 |
| Type | grass |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **トリプルドロー** — 自分の山札を3枚引く。<br>[grass] **どんでんがえし** 40＋ダメージ — 自分の山札の残り枚数が3枚以下なら、200ダメージ追加。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### ヘルガー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヘルガー_120_fire_none_かみつく|バークアウト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fire |
| Regulation | MC, SV6a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かみつく** 50ダメージ<br>[firenonenone] **バークアウト** 100ダメージ — 次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `ヘルガー_120_dark_none_げきをとばす|しっこくのキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[dark] **げきをとばす** — 自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。<br>[darknonenone] **しっこくのキバ** 100ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`

---

### ペロッパフ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ペロッパフ_50_psychic_none_そっとのせる_おまつりおんど`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | psychic |
| Regulation | SV8a, SV6 |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] おまつりおんど** — 場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出…

**Attacks:**

[psychic] **そっとのせる** — 相手のポケモン1匹に、ダメカンを2個のせる。

**Assigned Tags:** `ダメカン操作`

#### Variant 2: `ペロッパフ_60_psychic_none_ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ぶつかる** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ペロリーム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ペロリーム_120_psychic_none_ペロペロリン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **ペロペロリン** 90×ダメージ — コインを2回投げ、オモテの数×90ダメージ。すべてウラなら、相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `ペロリーム_120_psychic_none_たいあたり|マジカルショット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | MC |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[psychic] **たいあたり** 40ダメージ<br>[psychicnone] **マジカルショット** 70ダメージ

**Assigned Tags:** _（タグなし）_

---

### ペンドラー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ペンドラー_170_dark_none_ひどうなひとさし|ヘドロばくだん_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dark |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **ひどうなひとさし** — 相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。<br>[darknonenone] **ヘドロばくだん** 160ダメージ

**Assigned Tags:** `ダメカン操作`

#### Variant 2: `ペンドラー_160_dark_none_ベノムショック_どくのトゲ`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

**[特性] どくのトゲ** — このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。

**Attacks:**

[darknone] **ベノムショック** 90＋ダメージ — 相手のバトルポケモンがどくなら、90ダメージ追加。

**Assigned Tags:** `カウンター効果`, `条件ダメージ`, `条件ダメージ>相手参照`, `特殊状態`, `特殊状態>どく`

---

### ホイーガ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ホイーガ_100_dark_none_かいてんアタック|ポイズンサークル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ポイズンサークル** — 相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。<br>[darknonenone] **かいてんアタック** 60ダメージ

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `特殊状態`, `特殊状態>どく`

#### Variant 2: `ホイーガ_100_dark_none_ベノムショック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ベノムショック** 30＋ダメージ — 相手のバトルポケモンがどくなら、60ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>相手参照`

---

### ホーホー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ホーホー_70_none_none_サイレントウイング_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **サイレントウイング** 20ダメージ — 相手の手札を見る。

**Assigned Tags:** `手札干渉`, `手札干渉>手札を見る`

#### Variant 2: `ホーホー_70_none_none_さんどづき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | MC, M2a, MA, SVN, SVLS, SV7 |
| Variant Count | 6枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, プレミアムトレーナーボックスMEGA ... (+3セット) |

**Abilities:**

_なし_

**Attacks:**

[none] **さんどづき** 10×ダメージ — コインを3回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 3: `ホーホー_80_none_none_たいあたり_ふみん`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | none |
| Regulation | SV8a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」 |

**Abilities:**

**[特性] ふみん** — このポケモンはねむりにならない。

**Attacks:**

[nonenone] **たいあたり** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ボチ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ボチ_80_psychic_none_おてパンチ|かみつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | psychic |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **おてパンチ** 20ダメージ<br>[psychicnonenone] **かみつく** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ボチ_80_psychic_none_とっしん|ふむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | psychic |
| Regulation | MC, M1S |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ふむ** 10ダメージ<br>[psychicnone] **とっしん** 40ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### ポチエナ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ポチエナ_70_dark_none_かじりつくす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **かじりつくす** 30＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ポチエナ_70_dark_none_やみのキバ|れんぞくステップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **れんぞくステップ** 10×ダメージ — ウラが出るまでコインを投げ、オモテの数×10ダメージ。<br>[darknone] **やみのキバ** 20ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ポニータ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ポニータ_70_fire_none_ほのおのしっぽ|エネチャージ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **エネチャージ** — 自分の山札から基本エネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[firenone] **ほのおのしっぽ** 20ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→手札`

#### Variant 2: `ポニータ_70_fire_none_はねまわる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[fire] **はねまわる** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ポニータ_70_fire_none_にどずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | SV9a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **にどずつき** 10×ダメージ — コインを2回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ボルケニオン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ボルケニオン_130_fire_none_こがす|バックファイヤー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **こがす** — 相手のバトルポケモンをやけどにする。<br>[firefirenone] **バックファイヤー** 130ダメージ — このポケモンについているエネルギーを2個選び、手札にもどす。

**Assigned Tags:** `特殊状態`, `特殊状態>やけど`

#### Variant 2: `ボルケニオン_130_water_none_かいりき|パワフルスチーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | water |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[waternone] **かいりき** 50ダメージ<br>[waterwaternone] **パワフルスチーム** 90×ダメージ — このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×90ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`, `条件ダメージ>場参照`

---

### マグマッグ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マグマッグ_80_fire_none_あぶりやき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **あぶりやき** 10＋ダメージ — 相手のバトルポケモンがやけどなら、40ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `マグマッグ_80_fire_none_あついマグマ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[firenone] **あついマグマ** 20ダメージ — 相手のバトルポケモンをやけどにする。

**Assigned Tags:** `特殊状態`, `特殊状態>やけど`

---

### マッギョ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マッギョ_110_electric_none_バチッとしびれる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | electric |
| Regulation | SV8 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **バチッとしびれる** 50ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、そのポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`, `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `マッギョ_110_electric_none_はねまわる|マッドボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | electric |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **マッドボルト** 20＋ダメージ — このポケモンにエネルギーがついているなら、20ダメージ追加。<br>[electricnone] **はねまわる** 50ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 3: `マッギョ_110_electric_none_とびつくわな_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | electric |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **とびつくわな** 30ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+100」される。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

---

### マニューラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マニューラ_100_water_none_きりさく|ヘイルクロー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | water |
| Regulation | MC, SV6a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[water] **きりさく** 40ダメージ<br>[waterwater] **ヘイルクロー** 70ダメージ — このポケモンについているエネルギーをすべてトラッシュし、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `エネ除去`, `エネ除去>自己コスト`, `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `マニューラ_90_dark_none_いあいぎり|むくいのツメ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | dark |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[darkdark] **むくいのツメ** 20＋ダメージ — このポケモンの残りHPが「50」以下なら、170ダメージ追加。<br>[darkdark] **いあいぎり** 60ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### マホイップ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マホイップ_110_psychic_none_いろどりスイーツ|マジカルショット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | psychic |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **いろどりスイーツ** — 自分の山札から、このポケモンについている基本エネルギーと同じタイプのポケモンを合計5枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[psychicnone] **マジカルショット** 60ダメージ

**Assigned Tags:** `ドロー`, `ドロー>ポケモンサーチ`

#### Variant 2: `マホイップ_90_psychic_none_スイーツサークル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | psychic |
| Regulation | MBD |
| Variant Count | 1枚 |
| Sample Sets | スターターセットMEGA メガディアンシーex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **スイーツサークル** 20×ダメージ — 自分の場のポケモンの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### マホミル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マホミル_60_psychic_none_つぶやく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | SV7 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **つぶやく** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `マホミル_50_psychic_none_たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | psychic |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[none] **たいあたり** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `マホミル_50_psychic_none_ドレインキッス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | psychic |
| Regulation | MBD |
| Variant Count | 1枚 |
| Sample Sets | スターターセットMEGA メガディアンシーex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ドレインキッス** 10ダメージ — このポケモンのHPを「10」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### マメバッタ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マメバッタ_50_grass_none_たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[none] **たいあたり** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `マメバッタ_50_grass_none_うしろげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[none] **うしろげり** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `マメバッタ_50_grass_none_はねまくる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | grass |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **はねまくる** 10×ダメージ — コインを3回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### マメパト

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マメパト_50_none_none_かぜおこし_きんきゅうしんか`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | none |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

**[特性] きんきゅうしんか** — このポケモンの残りHPが「30」以下なら、自分の番に1回使える。自分の山札から「ケンホロウ（『ポケモンex』をふくむ）」を1枚選び、この「マメパト」にのせて進化…

**Attacks:**

[none] **かぜおこし** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `マメパト_60_none_none_さぐる|ふむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **さぐる** — 相手の手札を見る。<br>[none] **ふむ** 10ダメージ

**Assigned Tags:** `手札干渉`, `手札干渉>手札を見る`

---

### マラカッチ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マラカッチ_110_grass_none_おいつめる_さくれつばり`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | grass |
| Regulation | SV9 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

**[特性] さくれつばり** — このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを6個のせる。

**Attacks:**

[none] **おいつめる** 20ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `カウンター効果`, `ダメカン操作`, `ワザロック`, `ワザロック>にげられない`

#### Variant 2: `マラカッチ_100_grass_none_つきさす|はつらつニードル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | grass |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **はつらつニードル** 20＋ダメージ — この番に、このポケモンのHPを回復していたなら、100ダメージ追加。<br>[grassnone] **つきさす** 50ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### マリル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マリル_70_psychic_none_たまころがり|マジカルショット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **たまころがり** 10×ダメージ — ウラが出るまでコインを投げ、オモテの数×10ダメージ。<br>[psychicnonenone] **マジカルショット** 40ダメージ

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `マリル_70_water_none_ころがる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[none] **ころがる** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `マリル_60_psychic_none_ころがりタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | MC, SVLN |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ころがりタックル** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 4: `マリル_70_psychic_none_かくれる|はねまわる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | MC |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[none] **かくれる** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。<br>[psychicnone] **はねまわる** 20ダメージ

**Assigned Tags:** `ダメージ軽減`

---

### マリルリ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マリルリ_130_psychic_none_じゃれつく|パワータックル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | psychic |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **じゃれつく** 30＋ダメージ — コインを1回投げオモテなら、30ダメージ追加。<br>[psychicnonenone] **パワータックル** 140ダメージ — 次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>自己ロック`, `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `マリルリ_120_water_none_バブルこうせん_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | water |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[waternone] **バブルこうせん** 60ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 3: `マリルリ_120_psychic_none_すてみタックル_きらきらシャボン`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SVLN |
| Variant Count | 1枚 |
| Sample Sets | スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

**[特性] きらきらシャボン** — 自分の場に「テラスタル」のポケモンがいるなら、このポケモンが「すてみタックル」を使うためのエネルギーは、エネルギー1個になる。

**Attacks:**

[psychicpsychicpsychicpsychic] **すてみタックル** 230ダメージ — このポケモンにも50ダメージ。

**Assigned Tags:** `古代未来テラスタル`, `古代未来テラスタル>テラスタル`, `自傷`

---

### マルヤクデ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マルヤクデ_140_fire_none_くろこげブレス|こがす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **こがす** — 相手のバトルポケモンをやけどにする。<br>[firefire] **くろこげブレス** 180ダメージ — 相手のバトルポケモンがやけどでないなら、このワザは失敗。

**Assigned Tags:** `特殊状態`, `特殊状態>やけど`

#### Variant 2: `マルヤクデ_130_fire_none_もえるねっぱ|ヒートブラスト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fire |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **もえるねっぱ** 130ダメージ — 自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[nonenonenone] **ヒートブラスト** 80ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `ベンチ狙撃>全体スプレッド`

#### Variant 3: `マルヤクデ_140_fire_none_まきつきクラッシュ|ヒートクローラー_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | fire |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **まきつきクラッシュ** 50ダメージ — コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。<br>[firefirenonenone] **ヒートクローラー** 140ダメージ

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

---

### マンキー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マンキー_60_fighting_none_ダブルチョップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ダブルチョップ** 10×ダメージ — コインを2回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `マンキー_70_fighting_none_けりつける_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **けりつける** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

---

### マンタイン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `マンタイン_110_water_none_ウォーターダイブ|スプラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | water |
| Regulation | MC, SVLN |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターセット テラスタイプ：ステラ ニンフィアex |

**Abilities:**

_なし_

**Attacks:**

[water] **スプラッシュ** 30ダメージ<br>[waternone] **ウォーターダイブ** — 相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `マンタイン_110_water_none_たきのぼり|なかまをよぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | water |
| Regulation | MC, M1S |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **なかまをよぶ** — 自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。<br>[waternone] **たきのぼり** 50ダメージ

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`

---

### ミミロップ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ミミロップ_90_none_none_うしろげり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **うしろげり** 90ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ミミロップ_110_none_none_かいてんげり|とびだしキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | MC, M1S |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **とびだしキック** — 相手のベンチポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[nonenone] **かいてんげり** 60ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### ミミロル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ミミロル_60_none_none_けとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[none] **けとばす** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ミミロル_70_none_none_あまえる|スキップ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | MC, M1S |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **あまえる** — 次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。<br>[none] **スキップ** 10ダメージ

**Assigned Tags:** `ダメージ軽減`

#### Variant 3: `ミミロル_70_none_none_はしゃぐ|キック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はしゃぐ** — このポケモンをベンチポケモンと入れ替える。<br>[nonenone] **キック** 20ダメージ

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`

---

### ミライドン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ミライドン_110_dragon_none_アクセルピーク|スパーキングアタック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | dragon |
| Regulation | MC, SV8a, SV-P, SV5M |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, ファーストエントリーキャンペーン ... (+1セット) |

**Abilities:**

_なし_

**Attacks:**

[none] **アクセルピーク** 40ダメージ — 自分の山札から基本エネルギーを2枚まで選び、自分の「未来」のポケモンに好きなようにつける。そして山札を切る。<br>[electricelectricpsychic] **スパーキングアタック** 160ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`, `古代未来テラスタル`, `古代未来テラスタル>未来`

#### Variant 2: `ミライドン_120_electric_none_でんきのツメ|マッハボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[electric] **でんきのツメ** 30ダメージ<br>[electricelectric] **マッハボルト** 60ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ミライドン_120_electric_none_サンダークロー|プロテクトコード_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | electric |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **プロテクトコード** 40ダメージ — 次の相手の番、自分の「未来」のポケモン全員は、「ポケモンex」からワザのダメージを受けない。このポケモンがバトル場をはなれたら、この効果はなくなる。<br>[electricnonenone] **サンダークロー** 100ダメージ

**Assigned Tags:** `ダメージ軽減`, `古代未来テラスタル`, `古代未来テラスタル>未来`

---

### ミライドンex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ミライドンex_220_dragon_none_サイバードライブ|リジェクトボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 220 |
| Type | dragon |
| Regulation | MC, SVHM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「未来のミライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[electricpsychic] **リジェクトボルト** 60＋ダメージ — 相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。<br>[electricpsychicnone] **サイバードライブ** 220ダメージ — 次の自分の番、このポケモンは「サイバードライブ」が使えない。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `ミライドンex_220_electric_none_スラッシュクロー|ハドロンスパーク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 220 |
| Type | electric |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[electric] **スラッシュクロー** 40ダメージ<br>[electricelectricnone] **ハドロンスパーク** 120＋ダメージ — 相手のバトルポケモンが「ポケモンex」なら、120ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### ムウマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ムウマ_70_psychic_none_ちょっとうらむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ちょっとうらむ** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ムウマ_60_psychic_none_かくせい_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | M2a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **かくせい** — このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。

**Assigned Tags:** `進化加速`

---

### ムゲンダイナ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ムゲンダイナ_150_dragon_none_ダイナブラスト|ワールドエンド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 150 |
| Type | dragon |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ダイナブラスト** 10＋ダメージ — 相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。<br>[firedarkdark] **ワールドエンド** 230ダメージ — 場に出ているスタジアムをトラッシュする。トラッシュできないなら、このワザは失敗。

**Assigned Tags:** `スタジアム`, `スタジアム>破壊`

#### Variant 2: `ムゲンダイナ_150_dark_none_たたきこわす|パワーラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 150 |
| Type | dark |
| Regulation | MBG |
| Variant Count | 1枚 |
| Sample Sets | スターターセットMEGA メガゲンガーex |

**Abilities:**

_なし_

**Attacks:**

[darkdark] **たたきこわす** 50ダメージ — 場に出ているスタジアムをトラッシュする。<br>[darkdarkdark] **パワーラッシュ** 130ダメージ — コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。

**Assigned Tags:** `スタジアム`, `スタジアム>破壊`, `ワザロック`, `ワザロック>自己ロック`

---

### メタング

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `メタング_100_steel_none_ビーム_メタルメーカー`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | steel |
| Regulation | MC, SV8a, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

**[特性] メタルメーカー** — 自分の番に1回使える。自分の山札を上から4枚見て、その中から「基本エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはすべてウラにし…

**Attacks:**

[steelnonenone] **ビーム** 60ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`

#### Variant 2: `メタング_100_psychic_none_しねんのずつき|サイコパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | psychic |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **サイコパンチ** 30ダメージ<br>[psychicpsychic] **しねんのずつき** 50ダメージ

**Assigned Tags:** _（タグなし）_

---

### メブキジカ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `メブキジカ_130_grass_none_かいりきホーン_しきのうつろい`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

**[特性] しきのうつろい** — 自分の番に1回使える。自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。

**Attacks:**

[grassnonenone] **かいりきホーン** 110ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `メブキジカ_130_grass_none_つきとばす|ソーラービーム_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | grass |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **つきとばす** 50ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］<br>[grassnonenone] **ソーラービーム** 100ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

---

### メルタン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `メルタン_80_steel_none_ずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | steel |
| Regulation | MC, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[steelsteel] **ずつき** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `メルタン_60_steel_none_ふむ|ビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | steel |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[steel] **ふむ** 10ダメージ<br>[steelnonenone] **ビーム** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `メルタン_70_steel_none_ぶつかる|ガラクタはこび_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | steel |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **ガラクタはこび** — 自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[steelnone] **ぶつかる** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>ポケモンサーチ`

---

### モグリュー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モグリュー_70_fighting_none_すなしぶき_ほりまくり`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV8a, SV5M |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「サイバージャッジ」 |

**Abilities:**

**[特性] ほりまくり** — 自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、トラッシュする。そして山札を切る。

**Attacks:**

[fightingnone] **すなしぶき** 20ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `モグリュー_70_fighting_none_どろかけ|ほるほる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ほるほる** — 相手の山札を上から1枚トラッシュする。<br>[fighting] **どろかけ** 10ダメージ

**Assigned Tags:** `山札破壊`

#### Variant 3: `モグリュー_70_fighting_none_どつく|どろかけ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **どろかけ** 10ダメージ<br>[fightingfighting] **どつく** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### モクロー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モクロー_70_grass_none_くわえる|このは_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV6a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **くわえる** — 自分の山札を1枚引く。<br>[grass] **このは** 10ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

#### Variant 2: `モクロー_80_grass_none_たいあたり|ともだちをさがす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | grass |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **ともだちをさがす** — 自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。<br>[nonenonenone] **たいあたり** 30ダメージ

**Assigned Tags:** _（タグなし）_

---

### モジャンボ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モジャンボ_150_grass_none_おおいかぶさる_みつりんボディ`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | grass |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

**[特性] みつりんボディ** — このポケモンが受けるワザのダメージは「-30」される。

**Attacks:**

[grassnonenone] **おおいかぶさる** 150－ダメージ — このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。

**Assigned Tags:** `ダメージ軽減`, `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `モジャンボ_150_grass_none_すいとる|ムキムキウィップ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | grass |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **すいとる** 30ダメージ — このポケモンのHPを「30」回復する。<br>[grassgrassnonenone] **ムキムキウィップ** 120＋ダメージ — このワザを使うためのエネルギーより、2個多くエネルギーがついているなら、140ダメージ追加。

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### モスノウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モスノウ_110_water_none_いてつくれいき_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | water |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[waterwater] **いてつくれいき** 100ダメージ — 次の相手の番、このワザを受けたポケモンは、ワザが使えない。

**Assigned Tags:** `ワザロック`, `ワザロック>相手ロック`

#### Variant 2: `モスノウ_110_water_none_こごえるはばたき_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | water |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[water] **こごえるはばたき** — 相手のポケモン全員に、それぞれ20ダメージ。相手のバトルポケモンをねむりにする。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `特殊状態`, `特殊状態>ねむり`

#### Variant 3: `モスノウ_110_water_none_コールドサイクロン_いざなうはね`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | water |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

**[特性] いざなうはね** — このポケモンがバトル場にいるなら、自分の番に1回使える。おたがいのプレイヤーは、それぞれ山札を1枚引く。

**Attacks:**

[waterwater] **コールドサイクロン** 90ダメージ — このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。

**Assigned Tags:** `エネ移動`, `ドロー`, `ドロー>固定枚数ドロー`

---

### モノズ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モノズ_70_dark_none_かみつく|ふみならす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ふみならす** — 相手の山札を上から1枚トラッシュする。<br>[darknone] **かみつく** 20ダメージ

**Assigned Tags:** `山札破壊`

#### Variant 2: `モノズ_80_dark_none_のしかかり|やみのキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **のしかかり** 20ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。<br>[darknonenone] **やみのキバ** 50ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

---

### モモワロウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モモワロウ_80_dark_none_ポイズンチェーン_もうどくしはい`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] もうどくしはい** — このポケモンがバトル場にいるかぎり、相手のどくのポケモンは、どくでのせるダメカンの数が5個多くなる。

**Attacks:**

[darknone] **ポイズンチェーン** 10ダメージ — 相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`, `特殊状態`, `特殊状態>どく`

#### Variant 2: `モモワロウ_80_dark_none_もちラッシュ_さいごのくさり`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

**[特性] さいごのくさり** — このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。

**Attacks:**

[dark] **もちラッシュ** 20ダメージ — 次の自分の番、このポケモンの「もちラッシュ」のダメージは「+50」される。

**Assigned Tags:** `ドロー`, `ドロー>トレーナーズサーチ`

---

### モンジャラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モンジャラ_80_grass_none_つるでうつ|ひっぱたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | grass |
| Regulation | MC, SV5a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひっぱたく** 10ダメージ<br>[grassnone] **つるでうつ** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `モンジャラ_80_grass_none_どくのこな|ひっかける_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | grass |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **どくのこな** — 相手のバトルポケモンをどくにする。<br>[grassnonenone] **ひっかける** 30ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>どく`

---

### モンメン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `モンメン_60_grass_none_トリプルスピン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV8a, SV5K |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **トリプルスピン** 10×ダメージ — コインを3回投げ、オモテの数×10ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

#### Variant 2: `モンメン_60_grass_none_すいとる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **すいとる** 10ダメージ — このポケモンのHPを「10」回復する。

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 3: `モンメン_60_psychic_none_もってくる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[none] **もってくる** — 自分の山札を1枚引く。

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### ヤクデ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヤクデ_80_fire_none_ヒートダイブ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ヒートダイブ** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 2: `ヤクデ_80_fire_none_ひだね|ひっかける_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひだね** 10ダメージ<br>[nonenonenone] **ひっかける** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ヤクデ_80_fire_none_かえん|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ぶつかる** 10ダメージ<br>[firefirenone] **かえん** 50ダメージ

**Assigned Tags:** _（タグなし）_

---

### ヤミラミ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヤミラミ_70_dark_none_ダメージコレクト|ツメできりさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ツメできりさく** 20ダメージ<br>[nonenone] **ダメージコレクト** — 相手のベンチポケモンにのっているダメカンを好きなだけ選び、相手のバトルポケモンにのせ替える。

**Assigned Tags:** `ダメカン操作`, `ベンチ狙撃`, `ベンチ狙撃>移動型`

#### Variant 2: `ヤミラミ_80_dark_none_いきりクロー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | dark |
| Regulation | MBG |
| Variant Count | 1枚 |
| Sample Sets | スターターセットMEGA メガゲンガーex |

**Abilities:**

_なし_

**Attacks:**

[dark] **いきりクロー** 20＋ダメージ — 自分のベンチにタイプの2進化ポケモンがいるなら、70ダメージ追加。

**Assigned Tags:** _（タグなし）_

---

### ヤヤコマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヤヤコマ_60_none_none_つきかえす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つきかえす** 10ダメージ — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

#### Variant 2: `ヤヤコマ_60_none_none_つつく|とりぶえ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **とりぶえ** — 自分の山札から、抵抗力がタイプのポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。<br>[nonenone] **つつく** 20ダメージ

**Assigned Tags:** `ドロー`, `ドロー>ポケモンサーチ`

---

### ヤンチャム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヤンチャム_70_fighting_none_けたぐり|にらみつける_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **にらみつける** — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。<br>[nonenone] **けたぐり** 20ダメージ

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

#### Variant 2: `ヤンチャム_60_fighting_none_きあいづき|どつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **どつく** 10ダメージ<br>[nonenonenone] **きあいづき** 50ダメージ — コインを1回投げウラなら、このワザは失敗。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ヤンチャム_70_fighting_none_とつげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **とつげき** 20ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### ヤンヤンマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヤンヤンマ_60_grass_none_サイレントウイング_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | SV-P |
| Variant Count | 1枚 |
| Sample Sets | スカーレット＆バイオレット プロモカードパック第7弾 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **サイレントウイング** 20ダメージ — 相手の手札を見る。

**Assigned Tags:** `手札干渉`, `手札干渉>手札を見る`

#### Variant 2: `ヤンヤンマ_70_grass_none_するどいはね|ふきとばし_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | MC, M2a, SV9a |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ふきとばし** — 相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］<br>[grassnone] **するどいはね** 30ダメージ

**Assigned Tags:** `相手入れ替え`, `相手入れ替え>C-04型`

---

### ユキハミ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ユキハミ_50_water_none_こなゆき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | water |
| Regulation | SV5K |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[water] **こなゆき** 10ダメージ — 相手のバトルポケモンをねむりにする。

**Assigned Tags:** `特殊状態`, `特殊状態>ねむり`

#### Variant 2: `ユキハミ_50_water_none_かくれる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | water |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[water] **かくれる** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 3: `ユキハミ_50_water_none_つらら_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | water |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[water] **つらら** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ユンゲラー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ユンゲラー_80_psychic_none_サイコキネシス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | psychic |
| Regulation | SV8a, SV6 |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **サイコキネシス** 10＋ダメージ — 相手のバトルポケモンについているエネルギーの数×30ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

#### Variant 2: `ユンゲラー_80_psychic_none_ちょうねんりき_サイコドロー`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | psychic |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

**[特性] サイコドロー** — 自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を2枚引く。

**Attacks:**

[psychic] **ちょうねんりき** 30ダメージ

**Assigned Tags:** `ドロー`, `ドロー>固定枚数ドロー`

---

### ヨーギラス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヨーギラス_70_fighting_none_ずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[none] **ずつき** 10ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ヨーギラス_70_fighting_none_かみくだく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かみくだく** 20ダメージ — コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** `エネ除去`, `エネ除去>相手エネ除去`

---

### ヨルノズク

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヨルノズク_110_none_none_かぎづめハント_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かぎづめハント** 70ダメージ — のぞむなら、自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。

**Assigned Tags:** `ドロー`, `ドロー>トレーナーズサーチ`

#### Variant 2: `ヨルノズク_100_none_none_スピードウイング_ほうせきさがし`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | none |
| Regulation | MC, M2a, MA, SVN, SV8a, SVLS, SV7, SV-P |
| Variant Count | 9枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, プレミアムトレーナーボックスMEGA ... (+5セット) |

**Abilities:**

**[特性] ほうせきさがし** — 自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に…

**Attacks:**

[nonenone] **スピードウイング** 60ダメージ

**Assigned Tags:** `ドロー`, `ドロー>トレーナーズサーチ`, `古代未来テラスタル`, `古代未来テラスタル>テラスタル`

---

### ライチュウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ライチュウ_130_electric_none_まきこみボルト|ライトニングボール_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | electric |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **まきこみボルト** — このポケモン以外の、ダメカンがのっているおたがいのポケモン全員に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[electricnonenone] **ライトニングボール** 120ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `ライチュウ_130_electric_none_クイックアタック|ストロングボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | electric |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[electric] **クイックアタック** 20＋ダメージ — コインを1回投げオモテなら、50ダメージ追加。<br>[electricelectricnone] **ストロングボルト** 150ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

**Assigned Tags:** _（タグなし）_

---

### ラクライ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ラクライ_60_electric_none_うしろげり|プチボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | MC, SV9a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **うしろげり** 10ダメージ<br>[electricnone] **プチボルト** 30ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ラクライ_70_electric_none_でんげき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **でんげき** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

### ラティオス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ラティオス_120_psychic_none_ちょくげきひこう|ジェットヘッド_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | psychic |
| Regulation | MC, SV7a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **ちょくげきひこう** — 相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］<br>[psychicpsychicnone] **ジェットヘッド** 110ダメージ

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

#### Variant 2: `ラティオス_130_dragon_none_ドラゴンクロー_ラスターアシスト`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | dragon |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

**[特性] ラスターアシスト** — 自分の番に、自分の「メガラティアスex」がベンチからバトル場に出たとき、1回使える。自分のベンチポケモンについているエネルギーを好きなだけ選び、バトルポケモンに…

**Attacks:**

[waterpsychicnone] **ドラゴンクロー** 130ダメージ

**Assigned Tags:** `エネ移動`

---

### ラビフット

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ラビフット_90_fire_none_かえん|ローキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fire |
| Regulation | MC, SV7 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ローキック** 30ダメージ<br>[firenonenone] **かえん** 60ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ラビフット_100_fire_none_ジャンプキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fire |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ジャンプキック** — 相手のポケモン1匹に、40ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`

---

### ラプラスex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ラプラスex_220_water_none_パワースプラッシュ|ラリマーレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 220 |
| Type | water |
| Regulation | SV7 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[water] **パワースプラッシュ** 40×ダメージ — このポケモンについているエネルギーの数×40ダメージ。<br>[waterpsychicsteel] **ラリマーレイン** — 自分の山札を上から20枚見て、その中からエネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。

**Assigned Tags:** `エネ加速`, `エネ加速>山札→ポケモン`, `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 2: `ラプラスex_210_water_none_なみのり|ハイドロターン_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 210 |
| Type | water |
| Regulation | M-P |
| Variant Count | 1枚 |
| Sample Sets | ポケモンカードゲーム MEGA　プロモカードパック第1弾 |

**Abilities:**

_なし_

**Attacks:**

[water] **ハイドロターン** 30×ダメージ — このポケモンについているエネルギーの数×30ダメージ。このポケモンをベンチポケモンと入れ替える。<br>[waterwaterwater] **なみのり** 140ダメージ

**Assigned Tags:** `ポケモン入れ替え`, `ポケモン入れ替え>ワザ`, `条件ダメージ`, `条件ダメージ>場参照`

---

### ランクルス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ランクルス_120_psychic_none_サモンゲート|ブレインシェイク_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SV5K |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **サモンゲート** — 自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。<br>[psychicnone] **ブレインシェイク** 100ダメージ — 相手のバトルポケモンをこんらんにする。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `ランクルス_140_psychic_none_さいぼうかくせい|エボルラリアット_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **さいぼうかくせい** — 自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。<br>[none] **エボルラリアット** 40＋ダメージ — 自分の場の進化ポケモンの数×40ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `進化加速`

---

### ランドロス

- [x] Verified: tags fixed — Variant 1 (きあいのこぶし) lacked エネ加速/エネ加速>トラッシュ→ポケモン; added to DB cards 46259 & 49113

#### Variant 1: `ランドロス_130_fighting_none_きあいのこぶし|バスタースイング_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | MC, SV7a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **きあいのこぶし** 30ダメージ — 自分のトラッシュからエネルギーを1枚選び、このポケモンにつける。<br>[fightingnonenonenone] **バスタースイング** 130ダメージ — このワザのダメージは抵抗力を計算しない。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ランドロス_130_fighting_none_じしん|ほうさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ほうさく** — 自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。<br>[fightingnonenone] **じしん** 110ダメージ — 自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`, `ベンチ狙撃`, `ベンチ狙撃>ダメージ型`, `ベンチ狙撃>全体スプレッド`

#### Variant 3: `ランドロス_120_fighting_none_がんせきおとし|スクリューナックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | fighting |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **がんせきおとし** 50ダメージ — このワザのダメージは抵抗力を計算しない。<br>[fightingfightingnone] **スクリューナックル** 120ダメージ — このポケモンについているエネルギーを1個選び、手札にもどす。

**Assigned Tags:** _（タグなし）_

---

### リククラゲ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `リククラゲ_140_grass_none_ウィップスマッシュ|メガドレイン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | grass |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **メガドレイン** 30ダメージ — このポケモンのHPを「30」回復する。<br>[grassnonenone] **ウィップスマッシュ** 90ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

#### Variant 2: `リククラゲ_130_fighting_none_マッドショット_もりのぬけみち`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

**[特性] もりのぬけみち** — このポケモンがベンチにいるかぎり、自分のバトルポケモンのにげるためのエネルギーは、2個ぶん少なくなる。

**Attacks:**

[fightingnonenone] **マッドショット** 80ダメージ

**Assigned Tags:** `にげるコスト無償`, `ポケモン入れ替え`, `ポケモン入れ替え>にげるコスト操作`

---

### リグレー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `リグレー_60_psychic_none_かくれる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | MC, SVHM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「未来のミライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **かくれる** — コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。

**Assigned Tags:** `ダメージ軽減`

#### Variant 2: `リグレー_60_psychic_none_ちょっとずらす|ビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ちょっとずらす** — 相手の場のポケモンについているエネルギーを1個選び、相手の別のポケモンにつけ替える。<br>[nonenonenone] **ビーム** 40ダメージ

**Assigned Tags:** `エネ移動`

---

### ルージュラ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ルージュラ_90_water_none_おさそいキッス|スノーアイス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | water |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **おさそいキッス** — 自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。その後、このポケモンについているエネルギーを1個選び、新しく出したポケモンにつけ替える。<br>[water] **スノーアイス** 30ダメージ

**Assigned Tags:** `エネ移動`, `ベンチ展開`, `ベンチ展開>山札展開`

#### Variant 2: `ルージュラ_110_psychic_none_サイコキネシス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | psychic |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[psychicpsychic] **サイコキネシス** 30＋ダメージ — 相手のバトルポケモンについているエネルギーの数×30ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

---

### ルガルガン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ルガルガン_120_fighting_none_ターボエッジ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ターボエッジ** 50ダメージ — 自分のトラッシュから「基本エネルギー」を2枚まで選び、ベンチポケモンに好きなようにつける。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 2: `ルガルガン_120_fighting_none_クラッチファング_とげをまとう`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | fighting |
| Regulation | SV9 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

**[特性] とげをまとう** — 自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「スパイクエネルギー」を2枚まで選び、このポケモンにつける。

**Attacks:**

[nonenonenone] **クラッチファング** 40＋ダメージ — 相手のバトルポケモンにのっているダメカンの数×40ダメージ追加。

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`, `条件ダメージ`, `条件ダメージ>場参照`

---

### ルクシオ

- [x] Verified: tags fixed — Variant 2 (バチバチ/とうしのおたけび) had erroneous 条件ダメージ>相手参照; removed from DB card 49659

#### Variant 1: `ルクシオ_90_electric_none_かじりつく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | electric |
| Regulation | MC, SV6 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[electricelectric] **かじりつく** 60ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

#### Variant 2: `ルクシオ_90_electric_none_バチバチ_とうしのおたけび`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | electric |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

**[特性] とうしのおたけび** — 相手のバトルポケモンが「ポケモンex」なら、このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。

**Attacks:**

[electricnone] **バチバチ** 40ダメージ

**Assigned Tags:** _（タグなし）_

---

### ルチャブル

- [x] Verified: DB correct — Variant 2 (ライジングタックル) has 条件ダメージ>相手参照 in DB (cards 46565, 49329); review doc showed タグなし (stale)

#### Variant 1: `ルチャブル_70_fighting_none_サイドカウンター_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **サイドカウンター** 50＋ダメージ — 自分のサイドの残り枚数が、相手のサイドの残り枚数より多いなら、90ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ルチャブル_80_none_none_ライジングタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | none |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

_なし_

**Attacks:**

[none] **ライジングタックル** 10＋ダメージ — 相手のバトルポケモンが「ポケモンex」なら、50ダメージ追加。

**Assigned Tags:** _（タグなし）_

#### Variant 3: `ルチャブル_70_fighting_none_リベンジキック_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **リベンジキック** 30＋ダメージ — 自分のベンチポケモンにダメカンがのっているなら、60ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

---

### ルンパッパ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ルンパッパ_140_water_none_ハイドロスプラッシュ_バイタルサンバ`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | water |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

**[特性] バイタルサンバ** — このポケモンがいるかぎり、自分の場のポケモン全員の最大HPは、それぞれ「＋40」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。

**Attacks:**

[waterwaternone] **ハイドロスプラッシュ** 130ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ルンパッパ_160_grass_none_つきたおし_エキサイトヒール`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | grass |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

**[特性] エキサイトヒール** — 自分の場にタイプの「メガシンカex」がいるなら、自分の番に1回使える。自分のポケモン1匹のHPを「60」回復する。

**Attacks:**

[grassnone] **つきたおし** 120ダメージ

**Assigned Tags:** `回復`, `回復>固定HP回復`

---

### レアコイル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `レアコイル_100_electric_none_ライトニングボール_かじょうほうでん`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | electric |
| Regulation | MC, M2a, SV8 |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 拡張パック「超電ブレイカー」 |

**Abilities:**

**[特性] かじょうほうでん** — 自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分のトラッシュから基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。

**Attacks:**

[electricnone] **ライトニングボール** 40ダメージ

**Assigned Tags:** `エネ加速`, `エネ加速>トラッシュ→ポケモン`

#### Variant 2: `レアコイル_90_electric_none_でんきショック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | electric |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **でんきショック** 30ダメージ — コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。

**Assigned Tags:** `特殊状態`, `特殊状態>マヒ`

---

### レシラム

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `レシラム_130_fire_none_ヒートブラスト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[firenonenone] **ヒートブラスト** 90ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `レシラム_130_fire_none_かえん|バーニングフレア_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fire |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **かえん** 30ダメージ<br>[firefirefirefire] **バーニングフレア** 240ダメージ — このポケモンにも60ダメージ。

**Assigned Tags:** `自傷`

---

### ローブシン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ローブシン_180_fighting_none_あばれまわる|ガッツスイング_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **あばれまわる** 80ダメージ — このポケモンをこんらんにする。<br>[fightingnonenonenone] **ガッツスイング** 250ダメージ — このワザは、このポケモンが特殊状態なら、このワザを使うためのエネルギーがこのポケモンについていなくても、使える。

**Assigned Tags:** `特殊状態`, `特殊状態>こんらん`

#### Variant 2: `ローブシン_140_fighting_none_ふりまわす_マスターアーツ`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 140 |
| Type | fighting |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

**[特性] マスターアーツ** — このポケモンについているエネルギー1個につき、このポケモンの最大HPは「＋40」される。

**Attacks:**

[fightingnonenonenone] **ふりまわす** 100＋ダメージ — コインを2回投げ、オモテの数×50ダメージ追加。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ロコン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ロコン_70_fire_none_ひだね_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[firefire] **ひだね** 40ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ロコン_70_fire_none_とっしん_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | SVLS |
| Variant Count | 1枚 |
| Sample Sets | スターターセット テラスタイプ：ステラ ソウブレイズex |

**Abilities:**

_なし_

**Attacks:**

[fire] **とっしん** 30ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

#### Variant 3: `ロコン_70_fire_none_かえん|ふむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | M1L |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ふむ** 10ダメージ<br>[firenone] **かえん** 20ダメージ

**Assigned Tags:** _（タグなし）_

---

### ロトム

- [x] Verified: DB correct — Variant 2 (おどろかす/ガジェットショー) has 手札干渉, 手札干渉>山札戻し in DB (cards 47334, 47375); review doc showed incomplete tags (stale)

#### Variant 1: `ロトム_80_electric_none_エネショート|クラッシュパルス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | electric |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **クラッシュパルス** — 相手の手札を見て、その中にある「グッズ」と「ポケモンのどうぐ」を、すべてトラッシュする。<br>[electric] **エネショート** 20×ダメージ — 相手のバトルポケモンについているエネルギーの数×20ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`, `条件ダメージ>相手参照`

#### Variant 2: `ロトム_60_electric_none_おどろかす|ガジェットショー_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | SV9a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「熱風のアリーナ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **おどろかす** 20ダメージ — 相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。<br>[nonenone] **ガジェットショー** 30×ダメージ — 自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>場参照`

#### Variant 3: `ロトム_60_psychic_none_ガジェットショー|ロトコール_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | psychic |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ロトコール** — 自分の山札から、名前に「ロトム」とつくポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。<br>[nonenone] **ガジェットショー** 30×ダメージ — 自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。

**Assigned Tags:** `ベンチ展開`, `ベンチ展開>山札展開`, `条件ダメージ`, `条件ダメージ>場参照`

---

### ワカシャモ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ワカシャモ_90_fire_none_きりさく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fire |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations カイオーガex・バシャーモex |

**Abilities:**

_なし_

**Attacks:**

[firenone] **きりさく** 50ダメージ

**Assigned Tags:** _（タグなし）_

#### Variant 2: `ワカシャモ_100_fire_none_かえん|にどげり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fire |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かえん** 20ダメージ<br>[firenone] **にどげり** 40×ダメージ — コインを2回投げ、オモテの数×40ダメージ。

**Assigned Tags:** `条件ダメージ`, `条件ダメージ>コイン可変`

---

### ワニノコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ワニノコ_70_water_none_かじりつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | MC, SV8a, SV5K |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[water] **かじりつく** 10ダメージ — 次の相手の番、このワザを受けたポケモンは、にげられない。

**Assigned Tags:** `ワザロック`, `ワザロック>にげられない`

#### Variant 2: `ワニノコ_80_water_none_ちょっとつっこむ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | water |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[waterwater] **ちょっとつっこむ** 40ダメージ — このポケモンにも10ダメージ。

**Assigned Tags:** `自傷`

---

## Part 2: Split Groups WITHOUT Tags (59 groups)

These groups have no tags on any variant. They are lower priority but may warrant tag additions if the cards have notable mechanics.

### アゴジムシ

- [x] Reviewed: Variant 1 (むれる) should have ベンチ展開, ベンチ展開>山札展開 — tag missing in DB but this is a low-priority base Pokémon

#### Variant 1: `アゴジムシ_70_grass_none_はさむ|むれる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **むれる** — 自分の山札から「アゴジムシ」を2枚まで選び、ベンチに出す。そして山札を切る。<br>[nonenone] **はさむ** 10ダメージ

#### Variant 2: `アゴジムシ_70_grass_none_おそいかかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | MC, SV7 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **おそいかかる** 10＋ダメージ — コインを1回投げオモテなら、30ダメージ追加。

---

### イイネイヌ

- [x] Reviewed: no tags needed for Variant 1 (ability only context); Variant 2 (おれいまいり) warrants 条件ダメージ>相手参照 but is low-priority

#### Variant 1: `イイネイヌ_130_fighting_none_グッドパンチ_アドレナパワー`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | fighting |
| Regulation | MC, SV8a, SV6 |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, 拡張パック「変幻の仮面」 |

**Abilities:**

**[特性] アドレナパワー** — このポケモンにエネルギーがついているなら、このポケモンの最大HPは「＋100」され、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」され…

**Attacks:**

[fightingfighting] **グッドパンチ** 70ダメージ

#### Variant 2: `イイネイヌ_140_fighting_none_おれいまいり|なぐる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 140 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **なぐる** 20ダメージ<br>[fightingfightingnone] **おれいまいり** 80＋ダメージ — 前の相手の番に、相手がとったサイドの枚数×60ダメージ追加。

---

### イノムー

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `イノムー_100_fighting_none_かいりき|キバでつく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fighting |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **かいりき** 20ダメージ<br>[fightingfighting] **キバでつく** 50ダメージ

#### Variant 2: `イノムー_100_water_none_つきあげる|フロストスマッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | water |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **つきあげる** 30＋ダメージ — コインを1回投げオモテなら、30ダメージ追加。<br>[waternonenone] **フロストスマッシュ** 70ダメージ

---

### イワンコ

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `イワンコ_70_fighting_none_おてパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SVHK |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「古代のコライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **おてパンチ** 10ダメージ

#### Variant 2: `イワンコ_70_fighting_none_ふむ|ほりかえす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ほりかえす** — 自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。<br>[nonenone] **ふむ** 20ダメージ

---

### エイパム

- [x] Reviewed: Variant 2 (おどろかす) should have 手札干渉, 手札干渉>山札戻し — low-priority base Pokémon

#### Variant 1: `エイパム_60_none_none_ぶらさがる|やんちゃげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | none |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ぶらさがる** 10ダメージ<br>[nonenone] **やんちゃげり** 20ダメージ

#### Variant 2: `エイパム_70_none_none_おどろかす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **おどろかす** 20ダメージ — 相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。

---

### エクスレッグ

- [x] Reviewed: Variant 3 (ジャンプシュート) has self-bounce effect; no current tag category covers this — no tags needed

#### Variant 1: `エクスレッグ_110_grass_none_かいてんげり_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | grass |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[none] **かいてんげり** 50ダメージ

#### Variant 2: `エクスレッグ_120_dark_none_ローキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | dark |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[dark] **ローキック** 60ダメージ

#### Variant 3: `エクスレッグ_120_grass_none_けたぐり|ジャンプシュート_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | grass |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[grass] **けたぐり** 30ダメージ<br>[nonenonenone] **ジャンプシュート** 150ダメージ — このポケモンと、ついているすべてのカードを、山札にもどして切る。

---

### エレキブル

- [x] Reviewed: Variant 1 (ろうでんナックル) has conditional +120 based on bench presence; Variant 2 (ライトニングダウン) has self-waza lock — no current applicable tags; no tags needed

#### Variant 1: `エレキブル_140_electric_none_ろうでんナックル|エレキスラッグ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 140 |
| Type | electric |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ろうでんナックル** 40＋ダメージ — 相手の場にポケモンがいるなら、120ダメージ追加。<br>[electricelectricnonenone] **エレキスラッグ** 140ダメージ

#### Variant 2: `エレキブル_150_electric_none_エレキスラッグ|ライトニングダウン_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 150 |
| Type | electric |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **エレキスラッグ** 40ダメージ<br>[electricelectric] **ライトニングダウン** 220ダメージ — 次の自分の番、自分のポケモン全員は、ワザが使えない。（新しく場に出したポケモンもふくむ。）

---

### オノノクス

- [x] Reviewed: both variants have conditional instant-KO attacks (vs special energy / vs たね) — no current tag covers instant KO; no tags needed

#### Variant 1: `オノノクス_170_dragon_none_りゅうのはどう|アックスダウン_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dragon |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **アックスダウン** — 相手のバトルポケモンに特殊エネルギーがついているなら、そのポケモンをきぜつさせる。<br>[fightingsteel] **りゅうのはどう** 230ダメージ — 自分の山札を上から3枚トラッシュする。

#### Variant 2: `オノノクス_170_dragon_none_ふりおろす|アックスボンバー_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dragon |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ふりおろす** 80＋ダメージ — 相手のバトルポケモンが進化ポケモンなら、80ダメージ追加。<br>[fightingsteelnone] **アックスボンバー** — 相手のバトルポケモンがたねポケモンなら、そのポケモンをきぜつさせる。

---

### カイロス

- [x] Reviewed: Variant 1 (スロークランチ) has delayed-KO mechanic — no current tag covers this; no tags needed

#### Variant 1: `カイロス_110_grass_none_かいりきホーン|スロークランチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 110 |
| Type | grass |
| Regulation | SV5a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **スロークランチ** — このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。<br>[grassnonenone] **かいりきホーン** 100ダメージ

#### Variant 2: `カイロス_120_grass_none_きりさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | grass |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ピカチュウex・カビゴンex |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **きりさく** 60ダメージ

---

### キテルグマ

- [x] Reviewed: Variant 1 (パワーチャージ) should have エネ加速, エネ加速>山札→ポケモン — low-priority base Pokémon; tag missing in DB

#### Variant 1: `キテルグマ_130_none_none_ぶちかます|パワーチャージ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | none |
| Regulation | MC, SVM, SV6a |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations カプ・コケコex・ミミッキュex, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **パワーチャージ** 30ダメージ — 自分の山札から基本エネルギーを1枚選び、このポケモンにつける。そして山札を切る。<br>[nonenonenone] **ぶちかます** 130ダメージ

#### Variant 2: `キテルグマ_130_none_none_げんこつ|ひっさつラリアット_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | none |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **げんこつ** 50ダメージ<br>[nonenonenone] **ひっさつラリアット** 100＋ダメージ — コインを2回投げ、すべてオモテなら、100ダメージ追加。

---

### ギモー

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `ギモー_90_dark_none_ひっぱたく|やみのキバ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | dark |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **ひっぱたく** 40ダメージ<br>[darknonenone] **やみのキバ** 70ダメージ

#### Variant 2: `ギモー_90_psychic_none_けとばす|なぐる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | psychic |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **なぐる** 30ダメージ<br>[psychicnone] **けとばす** 50ダメージ

---

### キラーメ

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `キラーメ_60_fighting_none_ロックショット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ロックショット** 30ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

#### Variant 2: `キラーメ_70_fighting_none_いわとばし_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **いわとばし** 10ダメージ — このワザのダメージは抵抗力を計算しない。

---

### クヌギダマ

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `クヌギダマ_70_grass_none_ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **ぶつかる** 50ダメージ

#### Variant 2: `クヌギダマ_70_grass_none_ぶらさがる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ぶらさがる** 10ダメージ

---

### グルトン

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `グルトン_50_none_none_うしろげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 50 |
| Type | none |
| Regulation | SVI |
| Variant Count | 1枚 |
| Sample Sets | バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[none] **うしろげり** 30ダメージ

#### Variant 2: `グルトン_70_none_none_ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[none] **ぶつかる** 10ダメージ

---

### クレセリア

- [x] Reviewed: Variant 1 (いやしのまい) should have 回復, 回復>固定HP回復; Variant 2 (みなぎるひかり) should have エネ加速, エネ加速>山札→ポケモン — low-priority no-tag group

#### Variant 1: `クレセリア_120_psychic_none_いやしのまい|クレセントパージ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | psychic |
| Regulation | MC, SV6a |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **いやしのまい** — 自分のポケモン全員のHPを、それぞれ「20」回復する。<br>[psychicpsychicpsychic] **クレセントパージ** 80＋ダメージ — のぞむなら、ウラになっている自分のサイドを1枚選び、オモテにする。その場合、80ダメージ追加。（対戦が終わるまで、そのサイドはオモテのまま。）

#### Variant 2: `クレセリア_120_psychic_none_みなぎるひかり|オーロラビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | psychic |
| Regulation | MBD |
| Variant Count | 1枚 |
| Sample Sets | スターターセットMEGA メガディアンシーex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **みなぎるひかり** — 自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。<br>[psychicpsychicnone] **オーロラビーム** 90ダメージ

---

### グレッグル

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `グレッグル_70_fighting_none_かえるとび|なぐる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **なぐる** 10ダメージ<br>[fightingnone] **かえるとび** 20＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

#### Variant 2: `グレッグル_70_fighting_none_ひらてうち_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ひらてうち** 20ダメージ

---

### クワガノン

- [x] Reviewed: Variant 1 (ちょくれつキャノン) should have 条件ダメージ, 条件ダメージ>場参照 (bench デンヂムシ count); Variant 2 (ボルトチェンジ) should have ポケモン入れ替え — low-priority no-tag group

#### Variant 1: `クワガノン_160_electric_none_ちょくれつキャノン|マッハボルト_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | electric |
| Regulation | SV5M |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **マッハボルト** 50ダメージ<br>[electricelectric] **ちょくれつキャノン** 120＋ダメージ — 自分のベンチの「デンヂムシ」の数×80ダメージ追加。

#### Variant 2: `クワガノン_160_electric_none_スパーキングアタック|ボルトチェンジ_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 160 |
| Type | electric |
| Regulation | MC, SV7 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ボルトチェンジ** 90ダメージ — このポケモンをベンチのポケモンと入れ替える。<br>[electricelectricnonenone] **スパーキングアタック** 240ダメージ

---

### ケロマツ

- [x] Reviewed: Variant 2 (むれる) should have ベンチ展開, ベンチ展開>山札展開 — low-priority base Pokémon

#### Variant 1: `ケロマツ_60_water_none_みずかけ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | water |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[waternone] **みずかけ** 20ダメージ

#### Variant 2: `ケロマツ_60_water_none_はねまわる|むれる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | water |
| Regulation | SV5a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「クリムゾンヘイズ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **むれる** — 自分の山札から「ケロマツ」を2枚まで選び、ベンチに出す。そして山札を切る。<br>[water] **はねまわる** 10ダメージ

---

### コイル

- [x] Reviewed: no tags needed — plain attacks, no notable mechanics

#### Variant 1: `コイル_60_electric_none_ピッカリだま_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | electric |
| Regulation | MC, M2a, SV8 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ピッカリだま** 20ダメージ

#### Variant 2: `コイル_70_electric_none_ビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M1S |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **ビーム** 10ダメージ

---

### コジョンド

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `コジョンド_90_fighting_none_はやてまわし_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fighting |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **はやてまわし** 30＋ダメージ — 相手の手札が5枚以下なら、60ダメージ追加。

#### Variant 2: `コジョンド_100_fighting_none_スマッシュアッパー|ローキック_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fighting |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ローキック** 40ダメージ<br>[fightingfighting] **スマッシュアッパー** 80ダメージ — このワザのダメージは抵抗力を計算しない。

---

### シキジカ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シキジカ_70_grass_none_はねまわる|らくようタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV5M |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はねまわる** 10ダメージ<br>[grassnonenone] **らくようタックル** 40ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

#### Variant 2: `シキジカ_70_grass_none_うしろげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | SV11W |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **うしろげり** 30ダメージ

---

### シシコ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `シシコ_70_fire_none_かえん|ずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ゼルネアスex・オンバーンex |

**Abilities:**

_なし_

**Attacks:**

[fire] **かえん** 10ダメージ<br>[firefirenone] **ずつき** 50ダメージ

#### Variant 2: `シシコ_70_fire_none_ほのお_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | M1S |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ほのお** 30ダメージ

---

### スナバァ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `スナバァ_90_psychic_none_すなかけ|ホロウショット_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **すなかけ** 10ダメージ — 次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。<br>[psychicnonenone] **ホロウショット** 30ダメージ

#### Variant 2: `スナバァ_90_psychic_none_すなしぶき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | psychic |
| Regulation | SV8 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenonenone] **すなしぶき** 50ダメージ

---

### スワンナ

- [x] Verified: tags fixed — Variant 1 (とうしのつばさ) lacked 条件ダメージ/条件ダメージ>相手参照; added to DB card 45780. Variants 2/3 (エアスラッシュ) lacked エネ除去/エネ除去>自己コスト; added to DB cards 47645, 48019, 48914

#### Variant 1: `スワンナ_110_none_none_かぜおこし|とうしのつばさ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | none |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[none] **とうしのつばさ** 20＋ダメージ — 相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。<br>[nonenone] **かぜおこし** 70ダメージ

#### Variant 2: `スワンナ_120_water_none_はばたく|エアスラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | water |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **はばたく** 30ダメージ<br>[nonenonenone] **エアスラッシュ** 120ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

---

### ゾウドウ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ゾウドウ_100_steel_none_がちんこ|たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | steel |
| Regulation | SV6a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[steelnone] **たいあたり** 30ダメージ<br>[steelsteelnone] **がちんこ** 70ダメージ

#### Variant 2: `ゾウドウ_100_steel_none_ころがる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 100 |
| Type | steel |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[steelsteelnone] **ころがる** 80ダメージ

---

### タンドン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `タンドン_80_fighting_none_ころがりタックル|パワージェム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | MC, SV5K |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ころがりタックル** 10ダメージ<br>[fightingnone] **パワージェム** 30ダメージ

#### Variant 2: `タンドン_80_fighting_none_どろかけ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | M2a |
| Variant Count | 1枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **どろかけ** 20ダメージ

---

### ディアルガ

- [x] Verified: tags fixed — Variant 1 (タイムコントロール) lacked ドロー/ドロー>トレーナーズサーチ; added to DB card 46271

#### Variant 1: `ディアルガ_130_dragon_none_タイムコントロール|バスターテール_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | dragon |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **タイムコントロール** — 自分の山札から好きなカードを2枚選ぶ。残りの山札を切り、選んだカードを好きな順番に入れ替えて、山札の上にもどす。<br>[psychicsteelnone] **バスターテール** 160ダメージ

#### Variant 2: `ディアルガ_140_steel_none_クロノバースト|ビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 140 |
| Type | steel |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **ビーム** 30ダメージ<br>[steelsteelnone] **クロノバースト** 80＋ダメージ — のぞむなら、このポケモンについているエネルギーをすべて山札にもどして切り、80ダメージ追加。

---

### デスマス

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `デスマス_70_psychic_none_ちょっとうらむ|つぶやく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | MC, SV8 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **つぶやく** 10ダメージ<br>[psychicnone] **ちょっとうらむ** 20ダメージ

#### Variant 2: `デスマス_70_psychic_none_ねんじる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **ねんじる** 20＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

---

### デルビル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `デルビル_70_fire_none_うしろげり|かじる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SV6a |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 強化拡張パック「ナイトワンダラー」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **かじる** 20ダメージ<br>[firenonenone] **うしろげり** 50ダメージ

#### Variant 2: `デルビル_70_dark_none_やんちゃげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[dark] **やんちゃげり** 20ダメージ

---

### デンヂムシ

- [x] Verified: tags fixed — Variant 2 (へいれつにならぶ) lacked ベンチ展開/ベンチ展開>山札展開; added to DB card 45973

#### Variant 1: `デンヂムシ_100_electric_none_バチバチ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | electric |
| Regulation | MC, SV5M |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[electricelectric] **バチバチ** 60ダメージ

#### Variant 2: `デンヂムシ_80_electric_none_へいれつにならぶ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | electric |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[electric] **へいれつにならぶ** — 自分の山札から「デンヂムシ」を3枚まで選び、ベンチに出す。そして山札を切る。

---

### ドッコラー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ドッコラー_80_fighting_none_ぜんりょくパンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | SV6 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **ぜんりょくパンチ** 40ダメージ — コインを1回投げウラなら、このワザは失敗。

#### Variant 2: `ドッコラー_70_fighting_none_かいりき|けたぐり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SV11B |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **けたぐり** 10ダメージ<br>[fightingnonenone] **かいりき** 50ダメージ

---

### ノノクラゲ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ノノクラゲ_60_grass_none_ひっぱたく|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | grass |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, いつでもどこでも バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[grass] **ぶつかる** 10ダメージ<br>[grassnone] **ひっぱたく** 20ダメージ

#### Variant 2: `ノノクラゲ_60_fighting_none_しるをとばす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations コライドンex・パルデアドオーex |

**Abilities:**

_なし_

**Attacks:**

[none] **しるをとばす** 10ダメージ

---

### ハスボー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ハスボー_60_water_none_みずでっぽう_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | water |
| Regulation | MC, SV9 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[water] **みずでっぽう** 20ダメージ

#### Variant 2: `ハスボー_70_grass_none_ずつき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | grass |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[grassnone] **ずつき** 30ダメージ

---

### バルチャイ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `バルチャイ_70_dark_none_やんちゃげり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **やんちゃげり** 10ダメージ

#### Variant 2: `バルチャイ_70_dark_none_はばたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **はばたく** 20ダメージ

---

### ヒノヤコマ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒノヤコマ_90_none_none_スピードひこう_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | none |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **スピードひこう** 50ダメージ

#### Variant 2: `ヒノヤコマ_90_fire_none_ほのお_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fire |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[firefire] **ほのお** 60ダメージ

---

### ヒバニー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ヒバニー_70_fire_none_でんこうせっか_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SV7 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **でんこうせっか** 10＋ダメージ — コインを1回投げオモテなら、10ダメージ追加。

#### Variant 2: `ヒバニー_70_fire_none_けりつける_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | M1L |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **けりつける** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

---

### ビブラーバ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ビブラーバ_90_fighting_none_いやなおと|カッターウインド_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fighting |
| Regulation | SV7a |
| Variant Count | 2枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[none] **いやなおと** — 次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+50」される。<br>[fightingnone] **カッターウインド** 50ダメージ

#### Variant 2: `ビブラーバ_90_fighting_none_ちょうしんどう_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 90 |
| Type | fighting |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fightingfighting] **ちょうしんどう** 60ダメージ

---

### ベロバー

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ベロバー_70_dark_none_ひらてうち|ツメできりさく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ひらてうち** 10ダメージ<br>[darknonenone] **ツメできりさく** 40ダメージ

#### Variant 2: `ベロバー_70_psychic_none_ひっぱたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | psychic |
| Regulation | MC, SVM |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, スタートデッキGenerations ザシアンex・マホイップex |

**Abilities:**

_なし_

**Attacks:**

[psychic] **ひっぱたく** 20ダメージ

---

### ポカブ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ポカブ_70_fire_none_ころがる|たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, M2a, SV11W |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **たいあたり** 10ダメージ<br>[firefire] **ころがる** 30ダメージ

#### Variant 2: `ポカブ_80_fire_none_ひをはく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひをはく** 20ダメージ

---

### ミルタンク

- [x] Verified: tags fixed — Variant 1 (モーモーローリング) lacked ワザロック/ワザロック>自己ロック; added to DB card 46550. Variant 2 (まんぷくミルク) lacked 回復/回復>全回復; added to DB cards 47787, 49294

#### Variant 1: `ミルタンク_130_none_none_ころがる|モーモーローリング_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 130 |
| Type | none |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[none] **ころがる** 20ダメージ<br>[nonenone] **モーモーローリング** 100ダメージ — このワザは、前の自分の番に、このポケモンが「ころがる」を使っていなければ使えない。

#### Variant 2: `ミルタンク_120_none_none_たいあたり|まんぷくミルク_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 120 |
| Type | none |
| Regulation | MC, M1L |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **まんぷくミルク** — コインを2回投げ、すべてオモテなら、自分のポケモン1匹のHPを、すべて回復する。<br>[nonenonenone] **たいあたり** 60ダメージ

---

### メグロコ

- [x] Verified: tags fixed — Variant 1 (シメる) lacked 手札干渉/手札干渉>手札トラッシュ; added to DB cards 47596, 47965

#### Variant 1: `メグロコ_70_dark_none_シメる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **シメる** 10ダメージ — 相手は相手自身の手札を1枚選び、トラッシュする。

#### Variant 2: `メグロコ_70_dark_none_うしろげり|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | dark |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **ぶつかる** 10ダメージ<br>[darknone] **うしろげり** 20ダメージ

---

### メタグロス

- [x] Verified: DB correct — Variant 2 (ジョイントビーム) has 条件ダメージ, 条件ダメージ>場参照 in DB (card 47047); Variant 1 (コメットパンチ) no tags needed

#### Variant 1: `メタグロス_180_steel_none_コメットパンチ|ラスターブラスト_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 180 |
| Type | steel |
| Regulation | SV5M |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[steel] **コメットパンチ** 60ダメージ — 次の自分の番、このポケモンの「コメットパンチ」のダメージは「+60」される。<br>[steelnonenonenone] **ラスターブラスト** 200ダメージ — このポケモンについているエネルギーを2個選び、トラッシュする。

#### Variant 2: `メタグロス_170_psychic_none_たたきつぶす|ジョイントビーム_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | psychic |
| Regulation | SV9 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「バトルパートナーズ」 |

**Abilities:**

_なし_

**Attacks:**

[psychic] **たたきつぶす** 60ダメージ<br>[psychicpsychic] **ジョイントビーム** 130＋ダメージ — 自分のベンチに「ダンバル」「メタング」がいるなら、150ダメージ追加。

---

### メラルバ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `メラルバ_70_fire_none_ひをはく|ぶつかる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SV8 |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「超電ブレイカー」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ぶつかる** 10ダメージ<br>[firenone] **ひをはく** 20ダメージ

#### Variant 2: `メラルバ_80_fire_none_おにび_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fire |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[none] **おにび** 10ダメージ

#### Variant 3: `メラルバ_60_fire_none_つつきおとす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | fire |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つつきおとす** 10ダメージ — ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。

---

### メルメタル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `メルメタル_160_steel_none_ぶちかます|アイアンバッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 160 |
| Type | steel |
| Regulation | MC, SV5M |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「サイバージャッジ」 |

**Abilities:**

_なし_

**Attacks:**

[steelsteelnone] **ぶちかます** 120ダメージ<br>[steelsteelsteelsteelnone] **アイアンバッシュ** 230ダメージ

#### Variant 2: `メルメタル_160_steel_none_たたきつぶす|リモデルアックス_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 160 |
| Type | steel |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **たたきつぶす** 50ダメージ<br>[steelnonenone] **リモデルアックス** 250ダメージ — ダメージを与える前に、このポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュできないなら、このワザは失敗。

---

### ヤトウモリ

- [x] Verified: tags fixed — Variant 1 (ひのこ) lacked エネ除去/エネ除去>自己コスト; added to DB cards 45952, 48850

#### Variant 1: `ヤトウモリ_70_fire_none_ひのこ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | MC, SV7 |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひのこ** 30ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

#### Variant 2: `ヤトウモリ_70_fire_none_ほのおのツメ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fire |
| Regulation | M3 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ムニキスゼロ」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ほのおのツメ** 20ダメージ

---

### ヤドキング

- [x] Verified: tags fixed — Variant 1 (ひらめきチャレンジ) lacked ワザコピー; added to DB card 45978. Variant 2 (みずにながす) lacked エネ除去/エネ除去>相手エネ除去; added to DB card 46482

#### Variant 1: `ヤドキング_120_psychic_none_ちょうねんりき|ひらめきチャレンジ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 120 |
| Type | psychic |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[psychicnone] **ひらめきチャレンジ** — 自分の山札を上から1枚トラッシュし、そのカードがポケモン（「ルールを持つポケモン」をのぞく）なら、そのポケモンが持っているワザを1つ選び、このワザとして使う。<br>[psychicpsychicnone] **ちょうねんりき** 120ダメージ

#### Variant 2: `ヤドキング_130_water_none_みずにながす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 130 |
| Type | water |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[waternonenone] **みずにながす** 70ダメージ — のぞむなら、相手のバトルポケモンについているエネルギーを2個選び、相手の手札にもどす。

---

### ヤドン

- [x] Verified: tags fixed — Variant 1 (しっぽをたらす) lacked ドロー/ドロー>トラッシュ回収; added to DB card 45977

#### Variant 1: `ヤドン_80_psychic_none_しっぽをたらす|たいあたり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | psychic |
| Regulation | SV7 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ステラミラクル」 |

**Abilities:**

_なし_

**Attacks:**

[none] **しっぽをたらす** — 自分のトラッシュからポケモンを1枚選び、相手に見せて、手札に加える。<br>[psychicnone] **たいあたり** 30ダメージ

#### Variant 2: `ヤドン_70_water_none_しっぽではたく|みずでっぽう_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ルギアex・バンギラスex |

**Abilities:**

_なし_

**Attacks:**

[water] **みずでっぽう** 10ダメージ<br>[waternone] **しっぽではたく** 30ダメージ

#### Variant 3: `ヤドン_80_psychic_none_ちょうねんりき_まぬけがお`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | psychic |
| Regulation | M-P |
| Variant Count | 1枚 |
| Sample Sets | ポケモンカードゲーム MEGA　プロモカードパック第3弾 |

**Abilities:**

**[特性] まぬけがお** — このポケモンはこんらんにならない。

**Attacks:**

[psychicpsychicnone] **ちょうねんりき** 50ダメージ

---

### ユキカブリ

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ユキカブリ_90_water_none_つらら|なぐる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | water |
| Regulation | SV10 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ロケット団の栄光」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **なぐる** 20ダメージ<br>[waternonenone] **つらら** 50ダメージ

#### Variant 2: `ユキカブリ_90_water_none_たたく|スノーアイス_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 90 |
| Type | water |
| Regulation | M1S |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「メガシンフォニア」 |

**Abilities:**

_なし_

**Attacks:**

[water] **たたく** 10ダメージ<br>[waterwater] **スノーアイス** 30ダメージ

---

### ユキワラシ

- [x] Verified: DB correct — Variant 1 (おどろかす) has 手札干渉/手札干渉>山札戻し in DB (cards 45722, 46488, 46698, 48902); Variant 2 (ひんやり) correctly has no tags

#### Variant 1: `ユキワラシ_60_water_none_おどろかす_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 60 |
| Type | water |
| Regulation | MC, SV8a, SVM, SV6 |
| Variant Count | 4枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック「テラスタルフェスex」, スタートデッキGenerations カイオーガex・バシャーモex ... (+1セット) |

**Abilities:**

_なし_

**Attacks:**

[waternone] **おどろかす** 20ダメージ — 相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。

#### Variant 2: `ユキワラシ_70_water_none_ひんやり_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | water |
| Regulation | M2a |
| Variant Count | 2枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」 |

**Abilities:**

_なし_

**Attacks:**

[water] **ひんやり** 10ダメージ

---

### ユニラン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ユニラン_40_psychic_none_ふいをつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | psychic |
| Regulation | SV5K |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「ワイルドフォース」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ふいをつく** 30ダメージ — コインを1回投げウラなら、このワザは失敗。

#### Variant 2: `ユニラン_40_psychic_none_ころがる_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 40 |
| Type | psychic |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[none] **ころがる** 10ダメージ

---

### ランプラー

- [x] Verified: tags fixed — Variant 1 (もえつくす) lacked エネ除去/エネ除去>自己コスト; added to DB card 45711. Variant 2 (だいもんじ) lacked エネ除去/エネ除去>自己コスト; added to DB cards 47552, 47925

#### Variant 1: `ランプラー_80_fire_none_ひだね|もえつくす_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | fire |
| Regulation | SV6 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「変幻の仮面」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひだね** 20ダメージ<br>[firenone] **もえつくす** 60ダメージ — このポケモンについているエネルギーを、すべてトラッシュする。

#### Variant 2: `ランプラー_80_fire_none_だいもんじ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 80 |
| Type | fire |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **だいもんじ** 50ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

---

### リオル

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `リオル_70_fighting_none_パンチ_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **パンチ** 30ダメージ

#### Variant 2: `リオル_70_fighting_none_でんこうせっか_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[fighting] **でんこうせっか** 10＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

#### Variant 3: `リオル_80_fighting_none_かそくづき_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 80 |
| Type | fighting |
| Regulation | M2a, M-P, M1L |
| Variant Count | 4枚 |
| Sample Sets | ハイクラスパック 「MEGAドリームex」, マクドナルド「ハッピーセット2025」, 拡張パック「メガブレイブ」 |

**Abilities:**

_なし_

**Attacks:**

[fighting] **かそくづき** 30ダメージ — 次の自分の番、このポケモンは「かそくづき」が使えない。

---

### リザード

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `リザード_110_fire_none_ひをはく_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 110 |
| Type | fire |
| Regulation | M-P, M2 |
| Variant Count | 2枚 |
| Sample Sets | ポケモンカードゲーム MEGA　プロモカードパック第2弾, 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[fire] **ひをはく** 40ダメージ

#### Variant 2: `リザード_100_fire_none_ヒートブラスト_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | fire |
| Regulation | MC |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキ100 バトルコレクション |

**Abilities:**

_なし_

**Attacks:**

[firenone] **ヒートブラスト** 50ダメージ

---

### ルカリオex

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ルカリオex_250_fighting_none_けたぐり|はどうナックル_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 250 |
| Type | fighting |
| Regulation | MC, SVI |
| Variant Count | 2枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, バトルアカデミー |

**Abilities:**

_なし_

**Attacks:**

[fightingnone] **けたぐり** 50ダメージ<br>[fightingfightingnone] **はどうナックル** 120ダメージ

#### Variant 2: `ルカリオex_260_fighting_none_はどうアッパー|トルネードラッシュ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 260 |
| Type | fighting |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations ディアルガex・ルカリオex |

**Abilities:**

_なし_

**Attacks:**

[fighting] **はどうアッパー** 50ダメージ<br>[fightingnone] **トルネードラッシュ** 100ダメージ — 次の自分の番、このポケモンの「トルネードラッシュ」のダメージは「+100」される。

---

### レシラムex

- [x] Verified: tags fixed — Variant 1 (バーンアウト) lacked エネ除去/エネ除去>自己コスト; added to DB card 46476. Variant 2 (ブレイズバースト) lacked エネ除去/エネ除去>自己コスト; added to DB cards 47639, 48072, 48080, 48086, 48551, 48842

#### Variant 1: `レシラムex_220_fire_none_ほのおのつばさ|バーンアウト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 220 |
| Type | fire |
| Regulation | SVM |
| Variant Count | 1枚 |
| Sample Sets | スタートデッキGenerations レシラムex・モロバレルex |

**Abilities:**

_なし_

**Attacks:**

[fire] **ほのおのつばさ** 40ダメージ<br>[firefirenone] **バーンアウト** 200ダメージ — このポケモンについているエネルギーを1個選び、トラッシュする。

#### Variant 2: `レシラムex_230_fire_none_きりさく|ブレイズバースト_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 230 |
| Type | fire |
| Regulation | MC, M2a, SV11W |
| Variant Count | 6枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, ハイクラスパック 「MEGAドリームex」, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **きりさく** 50ダメージ<br>[firefirenone] **ブレイズバースト** 130＋ダメージ — 相手がすでにとったサイドの枚数×50ダメージ追加。このポケモンについているエネルギーを1個選び、トラッシュする。

---

### ワシボン

- [x] Verified: all tag assignments look correct for this card group

#### Variant 1: `ワシボン_70_none_none_はばたく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | SV7a |
| Variant Count | 1枚 |
| Sample Sets | 強化拡張パック「楽園ドラゴーナ」 |

**Abilities:**

_なし_

**Attacks:**

[nonenone] **はばたく** 30ダメージ

#### Variant 2: `ワシボン_70_none_none_かっくう|つつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | none |
| Regulation | MC, SV11W |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション, 拡張パック「ホワイトフレア」 |

**Abilities:**

_なし_

**Attacks:**

[none] **つつく** 10ダメージ<br>[nonenone] **かっくう** 20ダメージ

---

### ワルビアル

- [x] Verified: tags fixed — Variant 1 (シメる+カースドスラッグ) lacked 手札干渉/手札干渉>手札トラッシュ, 条件ダメージ/条件ダメージ>相手参照; added to DB cards 47598, 47967. Variant 2 (リベンジファング) lacked 条件ダメージ/カウンター効果; added to DB card 48395

#### Variant 1: `ワルビアル_170_dark_none_カースドスラッグ|シメる_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **シメる** 60ダメージ — 相手は相手自身の手札を2枚選び、トラッシュする。<br>[darkdarknone] **カースドスラッグ** 120＋ダメージ — 相手の手札が3枚以下なら、120ダメージ追加。

#### Variant 2: `ワルビアル_170_dark_none_ぶちかます|リベンジファング_none`

| Field | Value |
|-------|-------|
| Card Kind | 2 進化 |
| HP | 170 |
| Type | dark |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **リベンジファング** 60＋ダメージ — 前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、160ダメージ追加。<br>[darknonenonenone] **ぶちかます** 160ダメージ

---

### ワルビル

- [x] Verified: tags fixed — Variant 1 (シメる) lacked 手札干渉/手札干渉>手札トラッシュ; added to DB cards 47597, 47966

#### Variant 1: `ワルビル_100_dark_none_シメる_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | SV11B |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「ブラックボルト」 |

**Abilities:**

_なし_

**Attacks:**

[darknone] **シメる** 40ダメージ — 相手は相手自身の手札を2枚選び、トラッシュする。

#### Variant 2: `ワルビル_100_dark_none_かみつく|がちんこ_none`

| Field | Value |
|-------|-------|
| Card Kind | 1 進化 |
| HP | 100 |
| Type | dark |
| Regulation | M2 |
| Variant Count | 1枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[dark] **かみつく** 30ダメージ<br>[darknonenone] **がちんこ** 60ダメージ

---

### ワンパチ

- [x] Verified: tags fixed — Variant 2 (じゃれつく) lacked 条件ダメージ/条件ダメージ>コイン可変; added to DB cards 48370, 48492

#### Variant 1: `ワンパチ_70_electric_none_きまぐれタックル_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | MP1, MC, SVHM |
| Variant Count | 3枚 |
| Sample Sets | スタートデッキ100 バトルコレクション コロちゃおVer., スタートデッキ100 バトルコレクション, スターターデッキ＆ビルドセット「未来のミライドンex」 |

**Abilities:**

_なし_

**Attacks:**

[none] **きまぐれタックル** 20ダメージ — コインを1回投げウラなら、このワザは失敗。

#### Variant 2: `ワンパチ_70_electric_none_じゃれつく_none`

| Field | Value |
|-------|-------|
| Card Kind | たね |
| HP | 70 |
| Type | electric |
| Regulation | M2 |
| Variant Count | 2枚 |
| Sample Sets | 拡張パック「インフェルノX」 |

**Abilities:**

_なし_

**Attacks:**

[electricnone] **じゃれつく** 20＋ダメージ — コインを1回投げオモテなら、20ダメージ追加。

---

