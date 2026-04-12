# DB Integrity Report

Generated: 2026-04-05 05:14:04

**Data summary:**
- master_cards.json: 1774 records
- card_variants.json: 5112 records
- card_details.json: 20448 records

---

## Summary

| # | Check | Severity | Issues Found |
|---|-------|----------|-------------|
| 1 | Variants with mismatched attacks/abilities (wrong grouping) | CRITICAL | 0 |
| 2 | Master cards with zero variants | CRITICAL | 0 |
| 3 | Variants with no matching card_details entry | WARNING | 0 |
| 4a | Pokémon cards with null HP | WARNING | 0 |
| 4b | Non-trainer/energy cards with no attacks AND no abilities | WARNING | 0 |

---

## Check 1: Variants with Mismatched Attacks/Abilities

No issues found.

---

## Check 2: Master Cards with Zero Variants

No issues found.

---

## Check 3: Variants with No Matching card_details Entry

No issues found.

---

## Check 4: Suspicious Missing Data

### 4a: Pokémon Cards with Null HP

No issues found.

### 4b: Non-Trainer/Energy Cards with No Attacks AND No Abilities

No issues found.

---

*End of report*