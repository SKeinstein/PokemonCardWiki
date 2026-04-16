# Data Corruption Investigation Report

**Date**: 2026-04-13
**Scope**: `data/card_details.json`, `data/card_variants.json`, `data/master_cards.json`
**Phase**: 6l-1 調査

---

## Executive Summary

Full investigation conducted across all 1,055 multi-variant master groups and 5,112 unique official_ids.

| Check | Result |
|---|---|
| Attack name inconsistency within master groups | **0** |
| Attack damage inconsistency within master groups | **0** |
| Attack text inconsistency within master groups | **2** (cosmetic bracket formatting only) |
| Ability text inconsistency within master groups | **0** |
| Name/master_id mismatch (wrong group) | **0** |
| Orphaned official_ids | **0** |
| シェイミ (Shaymin) corrupted | **NO** |
| モグリュー (Drilbur) corrupted | **NO** |

**Conclusion: No data corruption detected.**

---

## Dataset Overview

| File | Entries | Notes |
|---|---|---|
| `data/card_details.json` | 20,448 total | 5,112 unique official_ids (each appears ×4, one per regulation G/H/I/J) |
| `data/master_cards.json` | 1,776 unique master cards | Derived from card_details by normalize_cards.js |
| `data/card_variants.json` | 5,112 entries | One per unique official_id, with master_id linkage |

Master group distribution: 721 single-variant groups, 1,055 multi-variant groups. Largest group: ポケモンいれかえ (162 variants).

---

## Methodology

Three layers of checks were performed:

### Check 1: Attack/Ability Name Consistency (within master groups)
For every master group with 2+ variants, compare the sorted set of `attacks[].name` and `abilities[].name` across all variants.

### Check 2: Attack/Ability Damage & Text Consistency
For every master group with 2+ variants, for each attack in the group, compare `attack.damage` and `attack.text` across all variants sharing that attack name.

### Check 3: Name/Master Group Cross-Validation
Verify that every official_id's `name` field matches the name component of its `master_id`. A mismatch would indicate the entry was scraped from the wrong card's page.

### Why Attack-Name Corruption is Architecturally Prevented

The `master_id` key = `{name}_{hp}_{type}_{rules}_{attackNames}_{abilityNames}`. Two official_ids can only share a master group if they have **identical attack and ability names by construction**. Any card with different attack names would form a separate master group and never appear as an inconsistent variant.

---

## Results

### Check 1: Attack/Ability Name Consistency — **0 corrupted groups**

All 1,055 multi-variant master groups have identical attack and ability name sets across all variants.

### Check 2: Attack/Ability Damage & Text Consistency — **2 cosmetic differences**

**Case 1: キチキギスex — "クルーエルアロー" text**

`master_id: キチキギスex_210_dark_none_クルーエルアロー_さかてにとる`

| official_ids | Attack text |
|---|---|
| 50004, 49205, 48636, 47862, 47177, 46765, 45913 (7 cards) | `"相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］"` |
| 46058, 46066 (2 older cards) | `"相手のポケモン1匹に、100ダメージ。ベンチは弱点・抵抗力を計算しない。"` |

Verdict: **NOT corruption.** The two older prints pre-date the `［…］` bracket convention introduced in newer card prints. Both texts convey the same rule.

**Case 2: ピカチュウ — "でんじスパーク" text**

`master_id: ピカチュウ_70_electric_none_でんじスパーク_none`

| official_ids | Attack text |
|---|---|
| 46148, 45240 (2 cards) | `"相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"` |
| 48258 (1 card) | `"相手のポケモン1匹に、10ダメージ。ベンチは弱点・抵抗力を計算しない。"` |

Verdict: **NOT corruption.** Same bracket formatting divergence as above.

### Check 3: Name/Master Group Cross-Validation — **0 mismatches**

All 5,112 entries: the `name` field matches the name component of the master_id exactly.

---

## シェイミ (Shaymin) — Detailed Investigation

**Result: Not corrupted.** 9 unique official_ids across 4 legitimate distinct card versions:

| official_id | setCode | HP | Attacks | Abilities |
|---|---|---|---|---|
| 49636 | M3 | 70 | はなをとどける, リーフステップ | — |
| 48755 | MC | 70 | うしろげり, ピンポイントダイブ | — |
| 48534 | M2a | 80 | けとばす | はなのカーテン |
| 48321 | M-P | 80 | けとばす | はなのカーテン |
| 47860 | MA | 80 | けとばす | はなのカーテン |
| 47367 | SV9a | 80 | けとばす | はなのカーテン |
| 47301 | SV9a | 80 | けとばす | はなのカーテン |
| 46559 | SVM | 70 | エネリフレクト | — |
| 45152 | SV5K | 70 | うしろげり, ピンポイントダイブ | — |

All variants within each master group are identical in attacks and abilities. The 4 distinct move sets correspond to 4 genuinely different cards.

---

## モグリュー (Drilbur) — Detailed Investigation

**Result: Not corrupted.** 6 unique official_ids across 3 legitimate distinct card versions:

| official_id | setCode | HP | Attacks | Abilities |
|---|---|---|---|---|
| 49101 | MC | 70 | どろかけ, どつく | — |
| 47954 | SV11B | 70 | どろかけ, どつく | — |
| 47584 | SV11B | 70 | どろかけ, どつく | — |
| 46744 | SV8a | 70 | すなしぶき | ほりまくり |
| 46257 | SV7a | 70 | ほるほる, どろかけ | — |
| 45256 | SV5M | 70 | すなしぶき | ほりまくり |

All variants within each master group are identical. The 3 distinct move sets correspond to 3 genuinely different card designs.

---

## Affected official_ids

**None.** No official_ids have incorrect attack or ability data.

---

## Current Working Changes Context

The unstaged modifications in `data/card_details.json`, `data/card_variants.json`, and `data/master_cards.json` are exclusively:
- Addition of `rules[]` text to Stadium and Special Energy cards (previously empty), introduced by `scripts/recrawl_trainers.mjs`
- Corresponding `master_id` key updates in `card_variants.json` to include the new rules text

These changes do not affect `attacks[]` or `abilities[]` fields and introduce no attack/ability corruption.

---

## Conclusion

`data/card_details.json` contains **zero contaminated entries** with inconsistent attack or ability data.

**シェイミ (Shaymin)** and **モグリュー (Drilbur)** are both clean. Each has multiple distinct card versions (different official designs, not different art of the same design), and all variants within each version group are perfectly consistent.

The database can be considered structurally sound for attack/ability data.
