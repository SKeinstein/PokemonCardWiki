/**
 * build_cost_index.mjs
 * Reads data/master_cards.json and generates data/cost_index.json.
 *
 * Each entry:
 *   { masterId, minTotal, types }
 *
 *   minTotal — smallest total energy cost across all attacks (0 if the card
 *              has a 0-cost attack; void in the cost array means 0-cost)
 *   types    — sorted union of distinct energy types required by any attack
 *              (excludes "void", which signals a 0-cost attack)
 *
 * Run from project root: node scripts/build_cost_index.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const masterCards = JSON.parse(
    readFileSync(join(ROOT, 'data', 'master_cards.json'), 'utf8')
);

const index = [];

for (const card of masterCards) {
    const attacks = card.attacks;
    if (!attacks || attacks.length === 0) continue;

    let minTotal = Infinity;
    const types = new Set();

    for (const atk of attacks) {
        const cost = atk.cost ?? [];
        // 'void' signals a 0-cost attack — exclude from energy type set
        const real = cost.filter(c => c !== 'void');
        const total = real.length;
        if (total < minTotal) minTotal = total;
        for (const c of real) types.add(c);
    }

    index.push({
        masterId: card.master_id,
        minTotal: minTotal === Infinity ? 0 : minTotal,
        types: Array.from(types).sort(),
    });
}

const outPath = join(ROOT, 'data', 'cost_index.json');
writeFileSync(outPath, JSON.stringify(index, null, 2), 'utf8');

console.log(`cost_index.json: ${index.length} entries → ${outPath}`);
