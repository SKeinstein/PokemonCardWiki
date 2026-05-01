/**
 * build_rule_type_index.mjs
 * Reads data/master_cards.json and generates data/card_rule_type_index.json.
 *
 * For each master_id, detects which official rule types apply:
 *   "ex"      — rules[] contains both "ポケモンex" and "サイドを2枚"
 *   "terastal" — rules[] contains "テラスタル"
 *   "acespec"  — rules[] contains "ACE SPEC"
 *
 * Output: { "<master_id>": ["ex"], ... }
 * Only master_ids with at least one matching type are included.
 *
 * Run from project root: node scripts/build_rule_type_index.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const masterCards = JSON.parse(
    readFileSync(join(ROOT, 'data', 'master_cards.json'), 'utf8')
);

const index = {};
const counts = { ex: 0, terastal: 0, acespec: 0 };

for (const card of masterCards) {
    const rules = card.rules ?? [];
    const types = [];

    if (rules.some(r => r.includes('ポケモンex') && r.includes('サイドを2枚'))) {
        types.push('ex');
        counts.ex++;
    }
    if (rules.some(r => r.includes('テラスタル'))) {
        types.push('terastal');
        counts.terastal++;
    }
    if (rules.some(r => r.includes('ACE SPEC'))) {
        types.push('acespec');
        counts.acespec++;
    }

    if (types.length > 0) {
        index[card.master_id] = types;
    }
}

const outPath = join(ROOT, 'data', 'card_rule_type_index.json');
writeFileSync(outPath, JSON.stringify(index, null, 2), 'utf8');

const total = Object.keys(index).length;
console.log(`Written: ${outPath}`);
console.log(`Total entries: ${total}`);
console.log(`  ex:       ${counts.ex}`);
console.log(`  terastal: ${counts.terastal}`);
console.log(`  acespec:  ${counts.acespec}`);
