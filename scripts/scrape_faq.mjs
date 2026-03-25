/**
 * Scraper for official Pokémon Card Game Q&A
 * Source: https://www.pokemon-card.com/rules/faq/
 * Filter: Standard regulation only (regulation_faq_main_item1=XY)
 *
 * Output: ../data/qa_entries.json
 *
 * Structure per entry:
 * {
 *   question: string,
 *   answer: string,
 *   cards: [{ name: string, cardId: string }]
 * }
 */

import { fetch } from 'undici';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://www.pokemon-card.com/rules/faq/search.php';
const REGULATION = 'XY'; // Standard regulation
const DELAY_MS = 800;    // Polite delay between requests
const OUTPUT_PATH = join(__dirname, '../data/qa_entries.json');

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept-Language': 'ja,en;q=0.9',
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Extract card ID from URL like /card-search/details.php/card/45789/regu/all */
function extractCardId(href) {
  const match = href.match(/\/card\/(\d+)\//);
  return match ? match[1] : null;
}

/** Strip <br> tags → newlines, clean whitespace */
function cleanText(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
    .replace(/\r\n/g, '\n')
    .trim();
}

async function fetchPage(page) {
  const url = `${BASE_URL}?regulation_faq_main_item1=${REGULATION}&regulation=${REGULATION}&page=${page}`;
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP ${res.status} for page ${page}`);
  return res.text();
}

function parsePage(html) {
  const $ = cheerio.load(html);
  const entries = [];

  $('li.FAQResultList_item').each((_, el) => {
    const $el = $(el);

    // Question text
    const questionHtml = $el.find('.QAArea.QuestionArea .BodyArea').html() || '';
    const question = cleanText(questionHtml);

    // Answer text
    const answerHtml = $el.find('.QAArea.AnswerArea .BodyArea').html() || '';
    const answer = cleanText(answerHtml);

    // Related cards
    const cards = [];
    $el.find('.CardNames .CardName a').each((_, a) => {
      const $a = $(a);
      const name = $a.text().trim();
      const href = $a.attr('href') || '';
      const cardId = extractCardId(href);
      if (name) cards.push({ name, cardId });
    });

    if (question && answer) {
      entries.push({ question, answer, cards });
    }
  });

  // Extract total pages from pagination
  const totalText = $('span.AllNum').text(); // e.g. "1/85"
  const totalPages = parseInt(totalText.split('/')[1]) || null;

  return { entries, totalPages };
}

async function main() {
  console.log('Fetching page 1 to determine total pages...');
  const firstHtml = await fetchPage(1);
  const { entries: firstEntries, totalPages } = parsePage(firstHtml);

  if (!totalPages) {
    throw new Error('Could not determine total page count');
  }

  console.log(`Total pages: ${totalPages}`);
  const allEntries = [...firstEntries];

  for (let page = 2; page <= totalPages; page++) {
    await sleep(DELAY_MS);
    process.stdout.write(`\rFetching page ${page}/${totalPages}...`);

    const html = await fetchPage(page);
    const { entries } = parsePage(html);
    allEntries.push(...entries);
  }

  process.stdout.write('\n');
  console.log(`Total Q&A entries: ${allEntries.length}`);

  writeFileSync(OUTPUT_PATH, JSON.stringify(allEntries, null, 2), 'utf-8');
  console.log(`Saved to: ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
