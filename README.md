# Pokemon Card Wiki & DB (Advanced Search)

## Overview
A project to build an advanced search database for Pokemon Card Game (PTCG), enabling complex queries (e.g., status effects, energy acceleration) that are difficult to perform on the official site.

## Architecture
- **Frontend**: Next.js
- **Backend/DB**: PostgreSQL (Supabase) + Prisma ORM
- **Automation**: Node.js scripts in `scripts/ptcg_crawler/`

## Context
Initial phase involves harvesting `cardID`s from the official Pokemon Card Game site using `resultAPI.php`.

## Reference docs for Claude Code
- `PokemonCardWiki.md` (Design Draft)
- `HarvestingTasks.md` (Tasks)
