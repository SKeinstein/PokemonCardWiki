/**
 * build_kaggle_pool.mjs
 *
 * Reads PTCGABC (Kaggle) JP_Card_Data.csv and maps each entry to a Wiki
 * master_id via (set_code, set_number) in card_variants.json.
 *
 * Output: data/kaggle_pool.json
 * Format: {
 *   generated_at: ISO8601,
 *   source: 'pokemon-tcg-ai-battle / JP_Card_Data.csv',
 *   csv_card_count: N,
 *   matched_master_ids: ['master_id_1', ...],   // unique, sorted
 *   unmatched: [{ kaggle_id, name, mark, number }, ...]
 * }
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const CSV_PATH = join(DATA_DIR, 'raw', 'JP_Card_Data.csv');
const VARIANTS_PATH = join(DATA_DIR, 'card_variants.json');
const OUTPUT_PATH = join(DATA_DIR, 'kaggle_pool.json');

function parseCsv(text) {
  const rows = [];
  let field = '';
  let row = [];
  let inQuote = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuote) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuote = false; }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') { inQuote = true; }
      else if (ch === ',') { row.push(field); field = ''; }
      else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (ch === '\r') { /* skip */ }
      else { field += ch; }
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

const csvText = readFileSync(CSV_PATH, 'utf-8');
const rows = parseCsv(csvText);
const header = rows[0];
const dataRows = rows.slice(1).filter(r => r.length >= 4 && r[0]);

const COL = {
  id: header.indexOf('カード ID'),
  name: header.indexOf('カード名'),
  mark: header.indexOf('エキスパンションマーク'),
  number: header.indexOf('コレクション番号'),
};

if (COL.id < 0 || COL.name < 0 || COL.mark < 0 || COL.number < 0) {
  throw new Error(`Missing required columns. Got header: ${JSON.stringify(header)}`);
}

const variants = JSON.parse(readFileSync(VARIANTS_PATH, 'utf-8'));

const variantKey = (setCode, setNumber) => `${setCode}__${setNumber}`;
const keyToMasters = new Map();
for (const v of variants) {
  if (!v.set_code || !v.set_number) continue;
  const key = variantKey(v.set_code, v.set_number);
  if (!keyToMasters.has(key)) keyToMasters.set(key, new Set());
  keyToMasters.get(key).add(v.master_id);
}

const matched = new Set();
const unmatched = [];

function resolveSetCode(mark, number) {
  if (mark !== 'PROMO') return mark;
  const slash = number.lastIndexOf('/');
  if (slash < 0) return mark;
  return number.slice(slash + 1);
}

for (const row of dataRows) {
  const kaggleId = row[COL.id];
  const name = row[COL.name];
  const mark = row[COL.mark];
  const number = row[COL.number];

  if (mark === 'n/a') continue;

  const setCode = resolveSetCode(mark, number);
  const key = variantKey(setCode, number);
  const masters = keyToMasters.get(key);
  if (masters && masters.size > 0) {
    for (const m of masters) matched.add(m);
  } else {
    unmatched.push({ kaggle_id: kaggleId, name, mark, number });
  }
}

const BASIC_ENERGY_NAMES = new Set([
  '基本【草】エネルギー', '基本【炎】エネルギー', '基本【水】エネルギー',
  '基本【雷】エネルギー', '基本【超】エネルギー', '基本【闘】エネルギー',
  '基本【悪】エネルギー', '基本【鋼】エネルギー',
  '基本草エネルギー', '基本炎エネルギー', '基本水エネルギー',
  '基本雷エネルギー', '基本超エネルギー', '基本闘エネルギー',
  '基本悪エネルギー', '基本鋼エネルギー',
]);
const nameToMaster = new Map();
for (const v of variants) {
  const m = v.master_id;
  if (!m) continue;
  const nm = m.split('_')[0];
  if (BASIC_ENERGY_NAMES.has(nm) && !nameToMaster.has(nm)) nameToMaster.set(nm, m);
}
for (const row of dataRows) {
  const mark = row[COL.mark];
  const name = row[COL.name];
  if (mark !== 'n/a') continue;
  const normalized = name.replace(/【|】/g, '');
  for (const candidate of [name, normalized]) {
    if (nameToMaster.has(candidate)) { matched.add(nameToMaster.get(candidate)); break; }
  }
}

const output = {
  generated_at: new Date().toISOString(),
  source: 'pokemon-tcg-ai-battle / JP_Card_Data.csv',
  csv_card_count: dataRows.length,
  matched_master_ids: [...matched].sort(),
  matched_master_count: matched.size,
  unmatched_count: unmatched.length,
  unmatched,
};

writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
console.log(`CSV rows: ${dataRows.length}`);
console.log(`Matched master_ids: ${matched.size}`);
console.log(`Unmatched: ${unmatched.length}`);
if (unmatched.length > 0 && unmatched.length <= 30) {
  console.log('Unmatched samples:');
  for (const u of unmatched.slice(0, 30)) {
    console.log(`  - id=${u.kaggle_id} ${u.mark} ${u.number} ${u.name}`);
  }
}
console.log(`Wrote ${OUTPUT_PATH}`);
