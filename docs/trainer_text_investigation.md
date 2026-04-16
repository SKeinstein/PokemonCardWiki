# Trainer Text Investigation

**Date**: 2026-04-13
**Scope**: Why Stadium / Special Energy card effect text is missing from `data/card_details.json`

---

## 1. Data Audit — Specific Cards

| Card | cardID | cardKind | abilities | attacks | rules |
|---|---|---|---|---|---|
| バトルコロシアム | 48419 | スタジアム | `[]` | `[]` | `[]` ← **empty** |
| バトルコロシアム (SR) | 48514 | スタジアム | `[]` | `[]` | (field absent) |
| めまいの谷 | 48420 | スタジアム | `[]` | `[]` | `[]` ← **empty** |
| ロック闘エネルギー | 49713 | 特殊エネルギー | `[]` | `[]` | `[]` ← **empty** |
| ダブルターボエネルギー | — | — | — | — | **card not in dataset** (S regulation, not yet crawled) |
| プリズムエネルギー | 27552 | 特殊エネルギー | — | — | `["このカードは…"]` ← **has text** |

**Note on field name**: The correct field is `cardKind` (not `kind`). The MEMORY.md note "Card kinds" referred to `kind` values but the JSON field is `cardKind`.

---

## 2. Overall Population

```
スタジアム:    228 entries (by cardKind) — rules[] empty in almost all cases
特殊エネルギー: 128 entries, 12 unique names — rules[] populated only for プリズムエネルギー
```

---

## 3. Root Cause — Scraper Logic

### 3a. The RightBox Parser (`scrape_details.js` lines 182–231)

The section parser iterates `.RightBox-inner h2, .RightBox-inner h4, .RightBox-inner p` and acts on three hard-coded section names:

```javascript
if (tag === 'h2') {
    currentSection = $(el).text().trim();     // stores section name but only 3 are handled
}
else if (currentSection === '特性' && tag === 'h4')   { /* → abilities */ }
else if (currentSection === 'ワザ' && tag === 'h4')    { /* → attacks  */ }
else if (currentSection === '特別なルール' && tag === 'p') { /* → rules   */ }
// ALL OTHER sections: silently dropped
```

### 3b. What the PTCG Japan HTML looks like for Trainer/Energy cards

The `cardKind` fallback logic (lines 136–143) confirms the structure:

```javascript
const firstH2 = $('.RightBox-inner h2').first().text().trim();
// → "スタジアム", "特殊エネルギー", "グッズ", "サポート", etc.
```

So the actual page structure for e.g. バトルコロシアム is:

```html
<div class="RightBox-inner">
  <h2>スタジアム</h2>          ← currentSection becomes "スタジアム"
  <p>両プレイヤーは…</p>       ← effect text — NO matching condition → DROPPED
  <h2>特別なルール</h2>         ← only present on ex/V/VSTAR cards
  <p>…</p>
</div>
```

When `currentSection === "スタジアム"` and `tag === "p"`, **none of the three conditions match**, so the effect text is silently discarded.

### 3c. Why プリズムエネルギー Has Text

プリズムエネルギー's effect happens to be printed in a `特別なルール` section on the website (it's treated as a reminder rule on the card), so it gets captured by the third condition. `normalize_cards.js` even hard-codes it in `BOILERPLATE_RULES` to exclude it from the master-card dedup key.

All other special energies use the `特殊エネルギー` h2 section, which is unhandled.

---

## 4. Summary

| Issue | Detail |
|---|---|
| **Root cause** | `scrape_details.js` section parser only handles `特性`, `ワザ`, `特別なルール`. All trainer/energy effect `<p>` tags fall under their card-kind h2 (`スタジアム`, `特殊エネルギー`, `グッズ`, `サポート`, `ポケモンのどうぐ`) which has no handler. |
| **Affected kinds** | スタジアム, 特殊エネルギー, グッズ, サポート, ポケモンのどうぐ (= all trainer types + special energy) |
| **Not affected** | 基本エネルギー (no effect text), Pokémon cards (use `特性`/`ワザ` sections) |
| **Exception** | プリズムエネルギー — effect is in `特別なルール` section, so it is captured |
| **Not yet crawled** | ダブルターボエネルギー (S regulation) is absent from `card_details.json` entirely |

---

## 5. Fix Strategy

### Option A — Store in `rules[]` (minimal schema change)

Add a handler for trainer-type sections inside the existing `.each()` loop in `scrape_details.js`:

```javascript
const TRAINER_SECTIONS = new Set([
    'グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ', '特殊エネルギー'
]);

// inside the .each() callback, after the existing else-if chain:
else if (TRAINER_SECTIONS.has(currentSection) && tag === 'p') {
    const effectText = $(el).text().trim();
    if (effectText && !details.rules.includes(effectText)) {
        details.rules.push(effectText);
    }
}
```

- Pro: No schema change. `rules[]` already exists on all cards.
- Con: `rules[]` was semantically for "special rule" reminders (ex/V/VSTAR), mixing it with effect text is ambiguous.

### Option B — Add `effect` field (cleaner semantics)

Add `effect: ""` to the initial `details` object and populate it from trainer sections:

```javascript
// in parseDetail initial object:
effect: "",

// in the .each() handler:
else if (TRAINER_SECTIONS.has(currentSection) && tag === 'p') {
    const text = $(el).text().trim();
    if (text) details.effect = details.effect ? details.effect + '\n' + text : text;
}
```

- Pro: Clear separation between "card effect" and "special rules reminder text".
- Con: Requires frontend and tag-engine updates to read the new field.

### Option C — Re-crawl only trainer/energy cards (incremental fix)

After implementing Option A or B in the scraper, re-crawl only cards where `cardKind` is in `TRAINER_SECTIONS` and `rules.length === 0` (for Option A) or `effect === ""` (for Option B). This avoids re-fetching the full ~5,000 card dataset.

---

## 6. Recommended Fix Plan

1. **Implement Option A** in `scrape_details.js` (store trainer effect text in `rules[]`) — lowest friction.
2. **Re-crawl** only the affected cards:
   - Filter `card_details.json` for `cardKind` in trainer set AND `rules.length === 0`
   - Add a targeted re-crawl mode to `scrape_details.js` (or write a one-off script)
3. **Re-run** `normalize_cards.js` to propagate to `master_cards.json`
4. **Update tag engine** (`tag_cards` rules in `frontend/`) to use `rules[0]` for trainer effect matching — currently trainer tags rely on card-name lookup which will remain valid as a fallback.

**Estimated scope**: ~57 スタジアム unique cards + ~31 特殊エネルギー unique cards + グッズ/サポート (~1,339 unique cards) = significant portion of non-Pokémon cards. Note that グッズ/サポート may or may not have parseable text depending on whether they use the `グッズ` / `サポート` h2 or just `特別なルール`.

---

## 7. Open Questions

1. Do グッズ/サポート cards actually use `グッズ`/`サポート` as h2 for their text, or do they render differently? → **Needs live HTML inspection** of one グッズ page (e.g. cardID for ポケモン博士の研究).
2. Does the `特別なルール` section still appear alongside the trainer-section text on ex-Trainer cards (e.g. ACE SPEC trainer cards)? → If yes, Option A may create duplicate text if the same effect appears in both sections.
3. Are there multi-paragraph trainer effects (multiple `<p>` tags under one h2)? → Need to verify whether newline-joining or array-appending is more appropriate.
