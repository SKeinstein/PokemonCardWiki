/**
 * Fetch Standard & Standard JP deck lists from limitlesstcg.com (2025-2026)
 *
 * Output: ../data/deck_lists_raw.json
 * Format: [{ id, archetype, tournament, date, format, cards: [{name, setCode, number, count}] }]
 *
 * Checkpoint: saves progress after each list page and each detail page batch.
 * Resume: restarts from last checkpoint if interrupted.
 *
 * List page structure:
 *   <th class="sub-heading"><a href="/tournaments/N">DATE - TOURNAMENT</a></th>
 *   <tr><td>1st</td><td>image link</td><td><a href="/decks/list/ID">ARCHETYPE <span class="annotation">...</span></a></td></tr>
 *
 * Detail page card structure:
 *   <div class="decklist-card" data-set="SV1" data-number="001">
 *     <span class="card-count">4</span>
 *     <span class="card-name">Pikachu ex</span>
 *   </div>
 */

import { fetch } from 'undici';
import * as cheerio from 'cheerio';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH      = join(__dirname, '../data/deck_lists_raw.json');
const CHECKPOINT_IDS   = join(__dirname, '../data/_ck_deck_ids.json');
const CHECKPOINT_DONE  = join(__dirname, '../data/_ck_deck_done.json');

const BASE_URL = 'https://limitlesstcg.com';
const DELAY_MS = 1100;
const FORMATS = [
  { format: 'standard',    label: 'Standard' },
  { format: 'standard-jp', label: 'Standard JP' },
];
const TIME = '2025-2026';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8',
};

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchHtml(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      console.error(`  [retry ${i+1}/${retries}] ${url} → ${err.message}`);
      if (i < retries - 1) await sleep(DELAY_MS * (i + 2));
    }
  }
  return null;
}

/** "25th April 2026" or "April 25, 2026" → "2026-04-25" */
function parseDate(text) {
  // e.g. "25th April 2026" or "25 April 2026"
  const m1 = text.match(/(\d{1,2})(?:st|nd|rd|th)?\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i);
  if (m1) {
    const months = { january:'01',february:'02',march:'03',april:'04',may:'05',june:'06',july:'07',august:'08',september:'09',october:'10',november:'11',december:'12' };
    const mm = months[m1[2].toLowerCase()];
    const dd = m1[1].padStart(2,'0');
    return `${m1[3]}-${mm}-${dd}`;
  }
  // e.g. "2026-04-25"
  const m2 = text.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m2) return `${m2[1]}-${m2[2]}-${m2[3]}`;
  return '';
}

/**
 * Parse one page of /decks/lists
 * Returns: { entries: [{id, archetype, tournament, date, format}], maxPage }
 */
function parseListPage(html, format) {
  const $ = cheerio.load(html);
  const entries = [];

  // Pagination max
  const maxPage = parseInt($('ul.pagination').attr('data-max') || '1', 10);

  // Track current sub-heading (tournament/date)
  let currentTournament = '';
  let currentDate = '';

  $('table tr').each((_, row) => {
    const $row = $(row);

    // Sub-heading row
    const $subHeading = $row.find('th.sub-heading');
    if ($subHeading.length) {
      const headingText = $subHeading.text().replace(/\s+/g, ' ').trim();
      // Example: "25th April 2026 - Regional Prague"
      const dashIdx = headingText.indexOf(' - ');
      if (dashIdx > 0) {
        currentDate = parseDate(headingText.substring(0, dashIdx));
        currentTournament = headingText.substring(dashIdx + 3).trim();
      } else {
        currentDate = parseDate(headingText);
        currentTournament = headingText;
      }
      return;
    }

    // Deck row: find the text link (has archetype name)
    const $link = $row.find('td a[href*="/decks/list/"]').filter((_, a) => {
      // The text link (not image-only link)
      return $(a).text().trim().length > 0;
    }).first();

    if (!$link.length) return;

    const href = $link.attr('href') || '';
    const idMatch = href.match(/\/decks\/list\/([^/?#]+)/);
    if (!idMatch) return;

    const id = idMatch[1];
    // Archetype: text without the annotation span
    $link.find('.annotation').remove();
    const archetype = $link.text().replace(/\s+/g, ' ').trim();

    entries.push({ id, archetype, tournament: currentTournament, date: currentDate, format });
  });

  return { entries, maxPage };
}

/**
 * Parse /decks/list/{id} detail page → cards array
 */
function parseDeckDetail(html) {
  const $ = cheerio.load(html);
  const cards = [];

  $('.decklist-card[data-set]').each((_, el) => {
    const $el = $(el);
    const setCode = $el.attr('data-set') || '';
    const number  = $el.attr('data-number') || '';
    const count   = parseInt($el.find('.card-count').text().trim(), 10);
    const name    = $el.find('.card-name').text().trim();

    if (name && setCode && !isNaN(count) && count > 0) {
      cards.push({ name, setCode, number, count });
    }
  });

  return cards;
}

/**
 * Phase 1: collect all deck stubs from list pages.
 * Checkpointed to CHECKPOINT_IDS.
 */
async function collectIds() {
  // Resume support
  if (existsSync(CHECKPOINT_IDS)) {
    const saved = JSON.parse(readFileSync(CHECKPOINT_IDS, 'utf8'));
    if (saved.complete) {
      console.log(`[resume] ID collection already done (${saved.entries.length} entries)`);
      return saved.entries;
    }
    console.log(`[resume] Resuming ID collection from format=${saved.format} page=${saved.page}`);
  }

  const allEntries = [];
  const seen = new Set();

  for (const { format } of FORMATS) {
    console.log(`\n── Format: ${format} ──`);

    // Check if we have partial progress for this format
    let startPage = 1;
    let maxPage = 9999;
    if (existsSync(CHECKPOINT_IDS)) {
      const saved = JSON.parse(readFileSync(CHECKPOINT_IDS, 'utf8'));
      if (saved.format === format) {
        saved.entries.forEach(e => { allEntries.push(e); seen.add(e.id); });
        startPage = saved.page + 1;
        maxPage = saved.maxPage || 9999;
        console.log(`  [resume] from page ${startPage}/${maxPage}, ${allEntries.length} entries so far`);
      }
    }

    for (let page = startPage; page <= maxPage; page++) {
      const url = `${BASE_URL}/decks/lists?format=${format}&time=${TIME}&page=${page}`;
      process.stdout.write(`  Page ${page}/${maxPage === 9999 ? '?' : maxPage} ...`);
      await sleep(DELAY_MS);

      const html = await fetchHtml(url);
      if (!html) { console.log(' SKIP'); break; }

      const { entries, maxPage: mp } = parseListPage(html, format);
      if (mp > 0) maxPage = mp;

      const newEntries = entries.filter(e => !seen.has(e.id));
      newEntries.forEach(e => { seen.add(e.id); allEntries.push(e); });

      process.stdout.write(` ${entries.length} rows (${newEntries.length} new) — total ${allEntries.length}\n`);

      if (entries.length === 0) {
        console.log('  No entries, stopping format.');
        break;
      }

      // Checkpoint every 10 pages
      if (page % 10 === 0 || page === maxPage) {
        writeFileSync(CHECKPOINT_IDS, JSON.stringify({
          complete: false, format, page, maxPage, entries: allEntries
        }), 'utf8');
      }
    }
  }

  writeFileSync(CHECKPOINT_IDS, JSON.stringify({ complete: true, entries: allEntries }), 'utf8');
  return allEntries;
}

/**
 * Phase 2: fetch detail pages.
 * Checkpointed to CHECKPOINT_DONE (appended in batches).
 */
async function fetchDetails(stubs) {
  // Load already-done IDs
  let done = [];
  if (existsSync(CHECKPOINT_DONE)) {
    done = JSON.parse(readFileSync(CHECKPOINT_DONE, 'utf8'));
    console.log(`[resume] ${done.length} detail pages already done`);
  }
  const doneIds = new Set(done.map(d => d.id));

  const pending = stubs.filter(s => !doneIds.has(s.id));
  console.log(`\nPending detail fetches: ${pending.length} / ${stubs.length}`);

  const BATCH = 50; // checkpoint frequency
  for (let i = 0; i < pending.length; i++) {
    const stub = pending[i];
    const url = `${BASE_URL}/decks/list/${stub.id}`;
    process.stdout.write(`  [${done.length+1}/${stubs.length}] ${stub.id} ${stub.archetype} ...`);

    await sleep(DELAY_MS);
    const html = await fetchHtml(url);
    if (!html) { console.log(' SKIP'); continue; }

    const cards = parseDeckDetail(html);
    process.stdout.write(` ${cards.length} cards\n`);

    done.push({ id: stub.id, archetype: stub.archetype, tournament: stub.tournament, date: stub.date, format: stub.format, cards });

    if ((i + 1) % BATCH === 0) {
      writeFileSync(CHECKPOINT_DONE, JSON.stringify(done, null, 2), 'utf8');
      console.log(`  [checkpoint] ${done.length} done`);
    }
  }

  writeFileSync(CHECKPOINT_DONE, JSON.stringify(done, null, 2), 'utf8');
  return done;
}

async function main() {
  console.log('=== fetch_deck_lists.mjs ===');
  console.log(`Time filter : ${TIME}`);
  console.log(`Formats     : ${FORMATS.map(f => f.format).join(', ')}`);
  console.log(`Output      : ${OUTPUT_PATH}`);
  console.log('');

  // Phase 1: collect list page stubs
  console.log('=== Phase 1: Collecting deck IDs from list pages ===');
  const stubs = await collectIds();
  console.log(`\nTotal unique stubs: ${stubs.length}`);

  // Phase 2: fetch detail pages
  console.log('\n=== Phase 2: Fetching deck detail pages ===');
  const results = await fetchDetails(stubs);

  // Write final output
  writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2), 'utf8');

  // Summary
  const uniqueArchetypes = new Set(results.map(r => r.archetype).filter(Boolean));
  console.log('\n=== Summary ===');
  console.log(`Total decks fetched : ${results.length}`);
  console.log(`Unique archetypes   : ${uniqueArchetypes.size}`);
  console.log(`Output              : ${OUTPUT_PATH}`);

  const archetypeCounts = {};
  for (const r of results) {
    const a = r.archetype || '(unknown)';
    archetypeCounts[a] = (archetypeCounts[a] || 0) + 1;
  }
  const sorted = Object.entries(archetypeCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
  console.log('\nTop archetypes by deck count:');
  for (const [name, count] of sorted) {
    console.log(`  ${count.toString().padStart(5)}  ${name}`);
  }
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
