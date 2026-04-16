/**
 * recrawl_trainers.mjs
 * Re-crawls Stadium and Special Energy cards that have empty rules[] to populate
 * their effect text (which the original scraper missed because it only handled
 * 特性/ワザ/特別なルール sections).
 *
 * Scope: cardKind in { スタジアム, 特殊エネルギー } AND rules.length === 0
 *
 * Run from project root: node scripts/recrawl_trainers.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import * as cheerio from 'cheerio';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DETAILS_PATH = join(ROOT, 'data', 'card_details.json');
const DELAY_MS = 1200;

const TRAINER_SECTIONS = new Set(['グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ', '特殊エネルギー']);
const TARGET_KINDS = new Set(['スタジアム', '特殊エネルギー']);

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchPage(cardID) {
    const url = `https://www.pokemon-card.com/card-search/details.php/card/${cardID}`;
    const res = await fetch(url, {
        headers: { 'User-Agent': 'PokemonCardWikiCrawler/1.0 (educational data harvesting)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for cardID ${cardID}`);
    return res.text();
}

/**
 * Extract trainer/energy effect text from the RightBox section of a card page.
 * Returns an array of text strings found under the trainer-kind h2 heading.
 */
function extractTrainerRules(html) {
    const $ = cheerio.load(html);
    const rules = [];
    let currentSection = '';

    $('.RightBox-inner h2, .RightBox-inner h4, .RightBox-inner p').each((_, el) => {
        const tag = el.name ? el.name.toLowerCase() : '';
        if (tag === 'h2') {
            currentSection = $(el).text().trim();
        } else if (currentSection === '特別なルール' && tag === 'p') {
            const t = $(el).text().trim();
            if (t && !rules.includes(t)) rules.push(t);
        } else if (TRAINER_SECTIONS.has(currentSection) && tag === 'p') {
            const t = $(el).text().trim();
            if (t && !rules.includes(t)) rules.push(t);
        }
    });

    return rules;
}

async function main() {
    const data = JSON.parse(readFileSync(DETAILS_PATH, 'utf-8'));

    // Find unique cardIDs that need re-crawl
    const needsRecrawl = data.filter(
        c => TARGET_KINDS.has(c.cardKind) && (!c.rules || c.rules.length === 0)
    );
    const uniqueIds = [...new Set(needsRecrawl.map(c => c.cardID))];
    console.log(`Found ${needsRecrawl.length} entries across ${uniqueIds.length} unique cardIDs to re-crawl`);

    // Map: cardID → extracted rules
    const rulesMap = {};
    let done = 0;
    let errors = 0;

    for (const cardID of uniqueIds) {
        done++;
        process.stdout.write(`[${done}/${uniqueIds.length}] cardID ${cardID} ... `);
        try {
            const html = await fetchPage(cardID);
            const rules = extractTrainerRules(html);
            rulesMap[cardID] = rules;
            console.log(`${rules.length} rule(s): ${rules[0] ? rules[0].slice(0, 40) : '(none)'}`);
        } catch (err) {
            console.log(`ERROR: ${err.message}`);
            errors++;
        }
        await sleep(DELAY_MS);
    }

    // Update all matching entries in card_details.json
    let updated = 0;
    for (const entry of data) {
        if (TARGET_KINDS.has(entry.cardKind) && (!entry.rules || entry.rules.length === 0)) {
            const rules = rulesMap[entry.cardID];
            if (rules && rules.length > 0) {
                entry.rules = rules;
                updated++;
            }
        }
    }

    writeFileSync(DETAILS_PATH, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`\nDone. Updated ${updated} entries (${errors} fetch errors). Saved to ${DETAILS_PATH}`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
