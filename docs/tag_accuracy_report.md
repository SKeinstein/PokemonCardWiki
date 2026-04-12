# Tag Accuracy Report

**Generated:** 2026-04-05
**Scope:** All 31 top-level tag groups (77 total tags including sub-tags)
**Method:** Random seed 42, 5 cards sampled per top-level tag group, card text verified against `data/card_details.json`

---

## Summary

| Severity | Count | Description |
|---|---|---|
| Critical | 2 | Tag is systematically wrong across multiple cards |
| Moderate | 2 | Tag definition is ambiguous / partially misapplied |
| Minor | 1 | Sub-tag classification is too broad |
| OK | 26 | Tag appears correctly applied |

---

## Critical Issues

### 1. `特性無効` — Systematic Misclassification (21 of 27 cards)

**Expected meaning:** Cards that suppress or nullify an opponent's abilities (特性).

**Actual tagging:** The tag is applied to two completely different categories:

**Category A — Correctly tagged (6 cards):** All are `オーガポン いしずえのめんex`.
- Ability `いしずえのかまえ`: "このポケモンは、相手の特性を持つポケモンからワザのダメージを受けない。"
- This is a form of 特性 interaction (being immune to ability-users), though it does not suppress the opponent's ability outright.

**Category B — Incorrectly tagged (21 cards):** `キチキギスex`, `モモワロウex`, `スピンロトム`, `ニャースex`
- Example — キチキギスex `さかてにとる`: "この番、すでに別の「さかてにとる」を使っていたなら、この特性は使えない。"
- Example — スピンロトム `ファンコール`: "この番、すでに別の「ファンコール」を使っていたなら、この特性は使えない。"
- These cards have **self-use restrictions** on their own abilities. The phrase "この特性は使えない" refers to the card's own ability being blocked, not suppressing an opponent's ability.

**Verdict:** 21 cards (78%) are false positives. `特性無効` should only cover cards that actively disable or counter opponent abilities. Cards with self-use restrictions should either have no tag or a new tag such as `自己特性制限`.

**Affected card IDs (partial):** 45913, 45914, 46019, 46058, 46059, 46066, 46067, 46069, 46765, 46766, 46792, 47140, 47177, 47862, 48636, 48661, 49205, 49207, 49694, 49973, 50004

---

### 2. `手札シャッフル` — Conflates Three Distinct Mechanics (9 of 18 cards mislabeled)

**Expected meaning:** Cards that shuffle a hand back into the deck.

**Actual tagging breakdown (18 total cards):**

| Sub-type | Count | Correct? | Example |
|---|---|---|---|
| Shuffle OWN hand back to deck | 6 | YES | ビクティニ `ぱたぱた`, カポエラー `スピンドロー` |
| **TRASH** own hand (not shuffle) | **9** | **NO** | タケルライコex `はじけるほうこう`, カプ・コケコ `ファストフライト`, ゼブライカ `ぜんそくりょく` |
| Shuffle OPPONENT's hand back to deck | 3 | Borderline | ゴチルゼル `ねじれたみらい` |

**Key difference:** "手札をすべてトラッシュし" (discard all hand to trash) vs "手札をすべて山札にもどして切る" (shuffle all hand back to deck). These are fundamentally different — trashing is irreversible, shuffling is not.

**Affected cards (hand-trash, not shuffle):**
- `45199`, `45532`, `45538`, `45543`, `46785`, `47143`, `47166`, `48576`, `49270` — all タケルライコex / カプ・コケコ / ゼブライカ variants

**Recommendation:** Tag `手札シャッフル` should be reserved for cards that literally shuffle the hand back to deck. Cards that trash the hand should use a new tag such as `手札トラッシュリフレッシュ` or be tagged under `手札干渉>トラッシュ`. ゴチルゼル (opponent shuffle + reduced draw) is legitimately both `手札シャッフル` and `手札干渉>山札戻し`.

---

## Moderate Issues

### 3. `古代未来テラスタル>テラスタル` applied to レジギガス — Wrong Sub-tag (1 card)

**Card:** レジギガス `46793`
**Tags:** `['古代未来テラスタル', '古代未来テラスタル>テラスタル']`
**Card text:** `[ワザ:ジュエルブレイク(100＋)] 相手のバトルポケモンが「テラスタル」のポケモンなら、230ダメージ追加。`

**Issue:** レジギガス is **not** a テラスタル card. Its attack merely deals bonus damage *against* テラスタル targets. The tag `古代未来テラスタル>テラスタル` implies the card **is** a テラスタル card (consistent with how this tag is used on e.g. ヨルノズク, テツノカシラex).

**Correct classification:** This is a `条件ダメージ>相手参照` card (damage conditioned on opponent's card type). The テラスタル reference in the text does not make レジギガス a テラスタル card.

**Recommendation:** Remove `古代未来テラスタル` and `古代未来テラスタル>テラスタル`. Add `条件ダメージ>相手参照`.

---

### 4. `グッズサポートロック>サポートロック` applied to ゲノセクト — Incorrect Sub-tag (1 card)

**Card:** ゲノセクト `45915`
**Tags:** `['グッズサポートロック', 'グッズサポートロック>サポートロック']`
**Card text:** `[特性:エースキャンセラー] このポケモンに「ポケモンのどうぐ」がついているなら、相手は手札から「ACE SPEC」のカードを出して使えない。`

**Issue:** `エースキャンセラー` blocks **ACE SPEC** cards specifically — not サポート cards in general. ACE SPEC is a category that includes both グッズ and サポート. The sub-tag `グッズサポートロック>サポートロック` implies it only locks Supporter cards, which is incorrect.

**Note:** The ACE SPEC card pool includes items like `ネオアッパーエネルギー` (special energy), `マスターボール` (goods), and `カウンターキャッチャー` (goods), not exclusively サポート.

**Recommendation:** Change sub-tag from `グッズサポートロック>サポートロック` to a more accurate `グッズサポートロック>ACE SPECロック`, or add a new top-level tag for this unique effect.

---

## Minor Issues

### 5. `ゴチルゼル` — `手札干渉>手札参照` Sub-tag is Inaccurate

**Cards:** `47662`, `48035`, `49041`
**Tags:** `['ドロー', 'ドロー>固定枚数ドロー', '手札シャッフル', '手札干渉', '手札干渉>手札参照']`
**Card text:** `[特性:ねじれたみらい] ...相手は相手自身の手札をすべて山札にもどして切る。その後、相手は山札を3枚引く。`

**Issue:** The sub-tag `手札干渉>手札参照` is typically used for effects that **reference** or **look at** the opponent's hand count to determine damage or other effects. ゴチルゼル's ability instead **forces** the opponent to shuffle their hand and redraw — this is clearly `手札干渉>山札戻し`, not `手札参照`.

**Note:** The `シンクロショット` attack does reference hand size (`自分の手札と相手の手札が同じ枚数なら`) — but the タグ appears to have been assigned to the ability's effect, not the attack.

**Recommendation:** Change `手札干渉>手札参照` to `手札干渉>山札戻し`. Optionally add a separate tag for the hand-size-referencing attack.

---

## Tags Verified as Correct

The following tag groups were sampled and found to be accurately applied:

| Tag | Cards Sampled | Verdict |
|---|---|---|
| `ポケモン入れ替え` | 5 | Correct — グッズ `ポケモンいれかえ`, ワザ by ヒンバス, 特性 by ヒビキのマグカルゴ all match |
| `ベンチ狙撃` | 5 | Correct — all include "相手のベンチポケモン…ダメージ" or ダメカン型 |
| `エネ加速` | 5 | Correct — covers トラッシュ→ポケモン, 手札→ポケモン, 山札→手札 paths accurately |
| `手札干渉` | 5 | Correct — ジャッジマン (山札戻し) correctly tagged (even without text, type matches) |
| `ワザロック` | 5 | Correct — にげられない, 相手ロック, 自己ロック variants all verified |
| `特殊状態` | 5 | Correct — どく, マヒ, こんらん, やけど all present and matching |
| `ドロー` | 5 | Correct — ポケモンサーチ, トレーナーズサーチ, 固定枚数ドロー all match |
| `相手入れ替え` | 5 | Correct — C-04型 (forced swap after self-switch) and C-05型 (forced swap) accurate |
| `エネ除去` | 5 | Correct — 相手エネ除去 and 自己コスト both verified |
| `回復` | 5 | Correct — 全回復, 固定HP回復, 複数回復 sub-tags match |
| `ダメカン操作` | 5 | Correct — placing/moving ダメカン effects all verified |
| `進化加速` | 5 | Correct — ふしぎなアメ (グッズ), かくせい (ワザ), etc. match |
| `エネ移動` | 5 | Correct — エネルギーつけかえ and ability-based transfers match |
| `自傷` | 5 | Correct — "このポケモンにも○ダメージ" pattern confirmed in all |
| `グッズサポートロック` | 5 | Mostly correct — see Issue #4 for ゲノセクト exception |
| `スタジアム` | 5 | Correct — 参照 (bonus when stadium in play) and 破壊 (trash stadium) accurate |
| `退化` | All 7 | Correct — アーケオス `げんしのつばさ`, エーフィex `アマゼツ` all verified |
| `ワザコピー` | All 2 | Correct — バリヤード and キュウコン both copy サポート effects |
| `ポケモンチェック` | All 4 | Correct — ユキメノコ (ダメカン on ability-pokemon at check), ロケット団のバンギラス |
| `ロケット団連動` | 5 | Correct — all reference "ロケット団のポケモン" in effects |
| `にげるコスト無償` | All 15 | Correct — all reduce retreat cost to 0 via ability |
| `サイド操作` | All 9 | Correct — extra prize taking conditions all verified |
| `ベンチ展開` | 5 | Correct — mountain/revival bench placement confirmed |
| `カウンター効果` | 5 | Correct — all trigger when hit by opponent's attack |
| `山札破壊` | 5 | Correct — all include "相手の山札を上から…トラッシュ" |
| `ダメージ軽減` | 5 | Correct — -X damage effects and conditional immunities verified |
| `条件ダメージ` | 5 | Correct — コイン可変, 場参照, 相手参照 sub-tags match |
| `古代未来テラスタル` | 5 | Mostly correct — see Issue #3 for レジギガス exception |

---

## Notes on Cards Without Text

Many older cards (e.g. `ポケモンいれかえ` グッズ, `ジャッジマン` サポート) have empty `abilities` and `attacks` arrays in `card_details.json`. These cannot be verified from the data alone, but their tag assignments are consistent with their known card functions (the items are well-known reprints). This is a data completeness gap rather than a tagging error.

---

## Recommendations Summary

1. **`特性無効`** — Remove tag from 21 cards (キチキギスex, モモワロウex, スピンロトム, ニャースex). These have self-limited abilities, not ability-suppressing effects. Consider introducing `自己特性制限` tag.

2. **`手札シャッフル`** — Rename or split tag. 9 タケルライコex/カプ・コケコ/ゼブライカ variants trash (not shuffle) their hand. Consider `手札リフレッシュ` as umbrella or distinguish `手札シャッフル` (back to deck) from `手札トラッシュドロー` (discard + draw).

3. **`古代未来テラスタル>テラスタル` on レジギガス** — Replace with `条件ダメージ>相手参照`. レジギガス is not a テラスタル card; it only has a テラスタル-conditional attack.

4. **`グッズサポートロック>サポートロック` on ゲノセクト** — Replace sub-tag with `グッズサポートロック>ACE SPECロック` or introduce a dedicated ACE SPECロック tag.

5. **`手札干渉>手札参照` on ゴチルゼル** — Replace with `手札干渉>山札戻し` (3 card versions affected).
