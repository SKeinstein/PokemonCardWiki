# FAQ Scraping Findings

## Source

URL: `https://www.pokemon-card.com/rules/faq/`
Search endpoint: `https://www.pokemon-card.com/rules/faq/search.php`

## Scrapeability

**Method: HTML scraping** (no public API found)

The page renders server-side HTML. Standard HTTP GET requests with a browser User-Agent return full page content — no JavaScript rendering required, no authentication, no rate limiting observed at ~800ms intervals.

## Regulation Filter

The FAQ page groups questions by game regulation era using a radio button parameter:

| URL param value | Label (Japanese) | Meaning |
|---|---|---|
| `XY` | スタンダード | **Standard regulation** (current) |
| `BW` | — | Black & White era |
| `DP` | — | Diamond & Pearl era |
| `all` | — | All regulations |

Query param used: `regulation_faq_main_item1=XY`

## Pagination

- 10 Q&A entries per page
- Total: 85 pages
- Pagination info exposed in `<span class="AllNum">` as `{current}/{total}` (e.g. `1/85`)

## HTML Structure

Each Q&A entry is a `<li class="FAQResultList_item">` containing:

- `.QAArea.QuestionArea .BodyArea` — question text (may contain `<br>` tags for line breaks)
- `.QAArea.AnswerArea .BodyArea` — answer text (may contain `<br>` tags)
- `.CardNames .CardName a` — zero or more card name links; href contains card ID in pattern `/card/(\d+)/`

## Output

**File:** `data/qa_entries.json`

**Total entries:** 845 (84 full pages × 10 + 5 on last page)

**Schema per entry:**
```json
{
  "question": "string (newline-normalized)",
  "answer": "string (newline-normalized)",
  "cards": [
    { "name": "カード名", "cardId": "12345" }
  ]
}
```

**Statistics:**
- Entries with ≥1 card reference: 568 (67%)
- Entries with no card reference: 277 (33%, usually general rules questions)
- Entries with multiple card references: 272 (32%)

## Script

`scripts/scrape_faq.mjs` — runs in `scripts/` directory (requires `undici` and `cheerio` from `scripts/node_modules/`).

Run with: `cd scripts && node scrape_faq.mjs`
