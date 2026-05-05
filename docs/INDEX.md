# PokemonCardWiki — Domain Knowledge Index

Accumulated knowledge about data structure, design decisions, and known issues.
Read the relevant doc **before** starting a task in the corresponding area.

## When to read what

| Area | Doc | Read when... |
|---|---|---|
| Card DB scope / regulation marks | `regulations.md` | Before assuming a card should exist in the DB |
| Tag system architecture & official/custom tag design | `tag_classification_design.md` | Any work touching `tag_cards.mjs`, `official_classifications.json`, or tag categories |
| Tag classification logic & game rules basis (detailed) | `group_categories_proposal.md` | Deep-dive into card mechanics and subgroup rationale |
| Why trainer & energy text is missing | `trainer_text_investigation.md` | Working on the scraper, tag rules for trainers, or when missing text looks like a bug |
| Q&A matching — coverage & known gaps | `qa_coverage_analysis.md` | Working on `build_qa_index.mjs`, `tag_qa_entries.mjs`, or any Q&A feature |
| FAQ scraping — endpoints, pagination, schema | `faq_scraping_findings.md` | Re-scraping FAQ, adding Q&A data, modifying `scrape_faq.mjs` |
| Tag coverage statistics (2026-05-01 baseline) | `tagging_stats.md` | Verifying tag counts or assessing coverage changes after a tagging run |
| Competitive positioning & feature scope | `pnote_comparison.md` | Feature design decisions or UI direction |

## How to maintain this index

When a task produces a significant finding — root cause investigation, data analysis, design decision — save it as a `.md` in `docs/` and add a row to the table above. Include a date in the document header.

If a doc's findings have been superseded or resolved, note the resolution date at the top of the file rather than deleting it.
