# Duplicate Card Analysis

## Summary

`master_cards.json` contained **215 card names** that produced more than one master
card entry.  These fall into two distinct categories with very different root causes
and appropriate responses.

---

## Category 1 — Boilerplate-Rule Duplicates (Bug, Fixed)

**4 card names** were incorrectly split into multiple master cards solely because
some print runs include a standard game-mechanic reminder rule while other print
runs of the **same card** omit it.

| Card name | Without rule text (variants) | With rule text (variants) |
|-----------|------------------------------|---------------------------|
| ふうせん | 12 (S1W, S4a, SD, SK, SV11B, MA, MBD, MBG, M1L, M-P, M2a, MC) | 2 (SF, S8b) |
| プリズムエネルギー | 4 (SV11B, MA, M2a, MC reprints) | 2 (SM-era originals) |
| リーリエのピッピex | 1 (MC reprint) | 5 (SV9, M2a, MC) |
| Nのゾロアークex | 1 (M2a reprint) | 6 (SV9, M2a, MC) |

### Root cause

`createMasterKey` included `card.rules.join("|")` verbatim.  Certain rule texts
are mechanical reminders printed as a courtesy to the player — they describe the
card **type's** behaviour, not a unique card-specific effect:

| Boilerplate rule | Appears on |
|------------------|-----------|
| `ポケモンexがきぜつしたとき、相手はサイドを2枚とる。` | Every ex Pokémon (~2024 raw records) |
| `メガシンカexがきぜつしたとき、相手はサイどを3枚とる。` | Every Mega-ex Pokémon (~332 raw records) |
| `ポケモンのどうぐは、自分のポケモンにつけて使う。…` | Pokémon Tool items (~8 raw records) |
| `このカードは、エネルギー1個ぶんとしてはたらく。…` | Prism Energy reprints (~8 raw records) |

Older prints (typically the original release) did not include the reminder;
newer reprints added it for clarity.  Because the rule text changed the key,
the two print generations were assigned different master cards and the card
appeared **twice** in search results.

### Fix applied (`normalize_cards.js`)

1. Added `BOILERPLATE_RULES` — a `Set` of the four rule strings above.
2. `createMasterKey` now filters those rules out before building the key:
   ```js
   const significantRules = (card.rules || []).filter(r => !BOILERPLATE_RULES.has(r));
   ```
3. The merge path now prefers the richer `rules` array, so the master card
   retains the full rule text even when the first-processed print lacks it.

**Result:** After re-running normalization the 4 split names collapse to single
master entries, reducing the total master count by 4.

---

## Category 2 — Stats Duplicates (Expected, No Change)

**211 card names** have multiple master cards because the underlying cards
genuinely differ in HP, type, or both.  These are distinct card designs printed
across different generations of the Pokémon TCG and have different gameplay
properties.

| Sub-category | Count |
|---|---|
| Different HP only | 138 |
| Different type only | 30 |
| Different HP **and** type | 43 |

### Representative examples

| Name | Master A | Master B |
|------|----------|----------|
| ワニノコ | 70 HP / water | 80 HP / water |
| モンメン | 60 HP / grass | 60 HP / psychic |
| コライドン | 140 HP / dragon | 130 HP / fighting |
| シェイミ | 70 HP / grass | 70 HP / none (old era) | 80 HP / grass |
| ドーミラー | 80 HP / psychic | 60–80 HP / steel (multiple) |

These entries are **correct**.  A Pokémon like ワニノコ published in the Sword
era has genuinely different stats from its BW-era print; treating them as one
master card would lose that distinction.

The `type=none` entries seen in a small number of cases (e.g. ホーホー, ノコッチ)
reflect older scraper records where the type field was not captured; these may
be cleaned up when those cards are re-scraped.

---

## Grouping Logic (Final)

A **master card** is defined by the tuple:

```
(name, hp, type, significant_rules)
```

where `significant_rules` = all rules strings **except** the boilerplate set
defined in `BOILERPLATE_RULES`.

All physical prints (variants) that share this tuple are folded into one master
card; each physical print becomes a separate entry in `card_variants.json` that
references the master via `master_id`.
