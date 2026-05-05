# PokemonCardWiki

## Overview
Advanced search database for the Pokemon Card Game (PTCG). Filters by type, energy cost, official classification, custom tags, deck adoption, etc.

## Architecture
- **Frontend**: Next.js in `frontend/`; run `cd frontend && npm run dev` to start locally
- **Data layer**: JSON files in `data/`, loaded at build time via `frontend/lib/data.ts`
- **Scripts**: Node.js ESM modules in `scripts/` — build and update the JSON data files
- No active Supabase/Prisma usage; all runtime data is file-based JSON

## Data pipeline
`scripts/*.mjs` → `data/*.json` → `frontend/lib/data.ts` → `frontend/app/page.tsx` (server) → client components as props

## Key data files
| File | Purpose | Rebuilt by |
|---|---|---|
| `data/master_cards.json` | All cards — source of truth | crawler (`scripts/ptcg_crawler/`) |
| `data/card_variants.json` | Multiple prints of the same card | crawler |
| `data/card_tags.json` | Custom tags per card | `scripts/tag_cards.mjs` |
| `data/official_classifications.json` | Classification config: hardcoded lists, rules, prefixes | manual edit |
| `data/official_class_index.json` | Official classification index (card name → tag array) | `scripts/build_official_class_index.mjs` |
| `data/cost_index.json` | Energy cost index | `scripts/build_cost_index.mjs` |
| `data/deck_index.json` | Deck adoption data (from limitlesstcg) | `scripts/build_deck_index.mjs` |
| `data/en_jp_card_map.json` | EN set code → JP set + number mapping | `scripts/build_en_jp_card_map.mjs` |
| `data/qa_index.json` / `data/qa_card_map.json` | Q&A entries per card | `scripts/build_qa_index.mjs` |

## Frontend structure
- `frontend/lib/data.ts` — all data loading functions and TypeScript types (`MasterCard`, `CardVariant`, etc.)
- `frontend/app/page.tsx` — loads all data, passes as props to `CardSearch`
- `frontend/app/components/CardSearch.tsx` — main search/filter UI
- `frontend/app/components/CardModal.tsx` — card detail: image (left), tags + deck adoption + Q&A (right)

## Domain knowledge
Before starting tasks that involve the scraper, tag system, Q&A features, or data structure, check `docs/INDEX.md` for relevant prior findings. Key topics: regulation scope (`docs/regulations.md`), missing trainer text (`docs/trainer_text_investigation.md`), tag classification rules (`docs/group_categories_proposal.md`).

## Constraints
- IMPORTANT: Only H, I, J regulation mark cards are in the DB. Older cards (A–G) are intentionally absent — treat gaps as by design, not bugs.
- When modifying `data/*.json` structure, update the corresponding TypeScript types in `frontend/lib/data.ts`.
- When adding a new data file, add a loader in `frontend/lib/data.ts` and pass as prop from `page.tsx`.
- `data/` JSON files in `frontend/data/` are synced from repo-root `data/` at build time (prebuild script). Edit only the root `data/`.
