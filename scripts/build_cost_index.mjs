/**
 * build_cost_index.mjs
 * Reads data/master_cards.json and generates data/cost_index.json.
 *
 * Each entry:
 *   { masterId, attacks: [{ total, types }] }
 *
 *   attacks — per-attack cost breakdown, enabling AND filters that require a
 *             single attack to satisfy both type and count constraints simultaneously.
 *   total   — number of non-void energy costs for that attack
 *   types   — sorted distinct energy types for that attack (excludes "void")
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

    const atkList = [];
    for (const atk of attacks) {
        const cost = atk.cost ?? [];
        // 'void' signals a 0-cost attack — exclude from energy type set
        const real = cost.filter(c => c !== 'void');
        atkList.push({
            total: real.length,
            types: Array.from(new Set(real)).sort(),
        });
    }

    index.push({
        masterId: card.master_id,
        attacks: atkList,
    });
}

const outPath = join(ROOT, 'data', 'cost_index.json');
writeFileSync(outPath, JSON.stringify(index, null, 2), 'utf8');

console.log(`cost_index.json: ${index.length} entries → ${outPath}`);
