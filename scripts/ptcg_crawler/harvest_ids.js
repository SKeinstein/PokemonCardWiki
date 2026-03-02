/**
 * harvest_ids.js
 * Crawls all Standard-regulation cards from the official PTCG Japan search API
 * and saves unique cardIDs to data/card_ids.json.
 *
 * Usage: node scripts/ptcg_crawler/harvest_ids.js
 *
 * API reference:
 *   GET https://www.pokemon-card.com/card-search/resultAPI.php
 *   Params:
 *     keyword               - search keyword (empty = all)
 *     regulation_sidebar_form - "XY" for Standard, "BW" for Extra, "all" for all
 *     page                  - 1-based page number
 *   Response:
 *     { thisPage, maxPage, hitCnt, cardList: [{ cardID, ... }] }
 */

import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const BASE_URL = "https://www.pokemon-card.com/card-search/resultAPI.php";
const REGULATIONS = ["G", "H", "I", "J"]; // Target regulations
const DELAY_MS = 500;    // polite delay between requests
const OUTPUT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../data/card_ids.json"
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchPage(page, regulation) {
  const url = new URL(BASE_URL);
  url.searchParams.set("keyword", "");
  url.searchParams.set("regulation_sidebar_form", regulation);
  url.searchParams.set("page", String(page));

  const res = await fetch(url.toString(), {
    headers: {
      // Identify ourselves politely
      "User-Agent": "PokemonCardWikiCrawler/1.0 (educational data harvesting)",
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} on page ${page}`);
  }

  const json = await res.json();

  if (json.result !== 1) {
    throw new Error(`API error on page ${page}: ${json.errMsg ?? "unknown"}`);
  }

  return json; // { thisPage, maxPage, hitCnt, cardList }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log(`Starting harvest — regulations: ${REGULATIONS.join(", ")}`);

  const idSet = new Set();

  for (const reg of REGULATIONS) {
    console.log(`\n--- Fetching Regulation ${reg} ---`);
    let page = 1;
    let maxPage = null;

    do {
      let data;
      try {
        data = await fetchPage(page, reg);
      } catch (err) {
        console.error(`  Error fetching page ${page}: ${err.message}`);
        console.error("  Stopping early. Partial results will be saved.");
        break;
      }

      if (maxPage === null) {
        maxPage = data.maxPage;
        console.log(`  Total cards for ${reg}: ${data.hitCnt}, pages: ${maxPage}`);
      }

      const cards = data.cardList ?? [];
      const before = idSet.size;
      for (const card of cards) {
        if (card.cardID) {
          idSet.add(JSON.stringify({
            id: card.cardID,
            name: card.cardNameViewText,
            thumb: card.cardThumbFile,
            regulation: reg
          }));
        }
      }

      console.log(
        `  [Reg ${reg}] Page ${page}/${maxPage} — +${idSet.size - before} new records (total: ${idSet.size})`
      );

      page++;
      if (page <= maxPage) await sleep(DELAY_MS);
    } while (page <= maxPage);
  }

  // Deserialize and sort numerically
  const cardList = [...idSet]
    .map(s => JSON.parse(s))
    .sort((a, b) => Number(a.id) - Number(b.id));

  const output = {
    harvestedAt: new Date().toISOString(),
    regulations: REGULATIONS,
    count: cardList.length,
    cards: cardList,
  };

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");
  console.log(`\nDone. ${cardList.length} unique cards saved to:\n  ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
