# Regulation Scope

## What are regulation marks?

Pokemon cards in the Scarlet & Violet era carry a **regulation mark** (A–J+) printed at the bottom-right of the card. The Standard format permits only cards within a specific range of marks at any given time.

## DB scope: H, I, J only

`data/master_cards.json` contains **only cards with regulation marks H, I, J** — the Standard-legal set as of 2026.

Marks A–G are intentionally absent. This is not a data gap; it is a design decision to keep the DB focused on competitively-legal cards.

## Notable absent cards

Cards players commonly ask about that are NOT in the DB:

| Card | Mark | Reason absent |
|---|---|---|
| マリィ (Marnie) | D | Rotated out ~late 2025 |
| ナンジャモ (Iono) | G | Recently rotated |
| クロバット V | D | Rotated |

**Important**: マリィのポケモン, ナンジャモのポケモン, etc. (the SV-era Pokémon cards with trainer names) ARE in scope — these are different cards from the supporter cards above.

## Diagnosing a missing card

1. Check the regulation mark (bottom-right of physical card)
2. Mark A–G → expected absence, not a bug
3. Mark H–J → potential crawl gap or normalization issue — investigate

## Future rotation handling

When a new rotation occurs, update the crawl target in `scripts/ptcg_crawler/` to add new marks and drop out-of-scope ones.
