/**
 * rescrape_trainers.mjs
 * Re-scrapes trainer cards missing effect text and patches card_details.json in-place.
 * Uses parseDetail logic from scrape_details.js (inlined here to be standalone).
 *
 * Usage: node scripts/ptcg_crawler/rescrape_trainers.mjs
 */

import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const DATA_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../data");
const OUTPUT_PATH = path.join(DATA_DIR, "card_details.json");
const MISSING_IDS_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), "trainer_missing_ids.json");
const PROGRESS_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), "rescrape_progress.json");

const DELAY_MS = 1000;
const SAVE_EVERY = 20;

const TRAINER_SECTIONS = new Set(['グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ', '特殊エネルギー']);

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function fetchHtml(cardID) {
    const url = `https://www.pokemon-card.com/card-search/details.php/card/${cardID}`;
    const res = await fetch(url, {
        headers: { "User-Agent": "PokemonCardWikiCrawler/1.0 (educational data harvesting)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for cardID ${cardID}`);
    return res.text();
}

function extractRules(html) {
    const $ = cheerio.load(html);
    const rules = [];
    let currentSection = "";

    $(".RightBox-inner h2, .RightBox-inner h4, .RightBox-inner p").each((_, el) => {
        const tag = el.name ? el.name.toLowerCase() : "";
        if (tag === "h2") {
            currentSection = $(el).text().trim();
        } else if (currentSection === "特別なルール" && tag === "p") {
            const t = $(el).text().trim();
            if (t && !rules.includes(t)) rules.push(t);
        } else if (TRAINER_SECTIONS.has(currentSection) && tag === "p") {
            const t = $(el).text().trim();
            if (t && !rules.includes(t)) rules.push(t);
        }
    });
    return rules;
}

async function main() {
    const missingIds = JSON.parse(await readFile(MISSING_IDS_PATH, "utf8"));
    console.log(`Total cards to re-scrape: ${missingIds.length}`);

    // Load progress (already done IDs)
    let done = new Set();
    if (existsSync(PROGRESS_PATH)) {
        done = new Set(JSON.parse(await readFile(PROGRESS_PATH, "utf8")));
        console.log(`Resuming: ${done.size} already done`);
    }

    // Load current data
    const data = JSON.parse(await readFile(OUTPUT_PATH, "utf8"));

    // Build index: cardID → array of indices in data[]
    const indexMap = {};
    data.forEach((c, i) => {
        if (!indexMap[c.cardID]) indexMap[c.cardID] = [];
        indexMap[c.cardID].push(i);
    });

    let processed = 0;
    let successCount = 0;
    const errors = [];

    for (const cardID of missingIds) {
        if (done.has(cardID)) continue;

        processed++;
        const pct = Math.round((processed / missingIds.length) * 100);
        process.stdout.write(`\r[${processed}/${missingIds.length} ${pct}%] cardID=${cardID}   `);

        try {
            const html = await fetchHtml(cardID);
            const rules = extractRules(html);

            // Update all entries with this cardID
            const indices = indexMap[cardID] || [];
            for (const idx of indices) {
                data[idx].rules = rules;
            }

            done.add(cardID);
            successCount++;
        } catch (err) {
            errors.push({ cardID, error: err.message });
            process.stdout.write(`\n  Error ${cardID}: ${err.message}\n`);
        }

        // Periodic save
        if (successCount % SAVE_EVERY === 0 && successCount > 0) {
            await writeFile(OUTPUT_PATH, JSON.stringify(data, null, 2), "utf8");
            await writeFile(PROGRESS_PATH, JSON.stringify([...done], null, 2), "utf8");
        }

        await sleep(DELAY_MS);
    }

    // Final save
    await writeFile(OUTPUT_PATH, JSON.stringify(data, null, 2), "utf8");
    await writeFile(PROGRESS_PATH, JSON.stringify([...done], null, 2), "utf8");

    console.log(`\n\nDone! Processed: ${processed}, Success: ${successCount}, Errors: ${errors.length}`);
    if (errors.length > 0) {
        console.log("Errors:", errors);
    }
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
