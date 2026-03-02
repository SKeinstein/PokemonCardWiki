import { existsSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const basePath = process.cwd();
const detailsFile = path.join(basePath, 'data', 'card_details.json');
const masterFile = path.join(basePath, 'data', 'master_cards.json');
const variantFile = path.join(basePath, 'data', 'card_variants.json');

const frontMaster = path.join(basePath, 'frontend', 'data', 'master_cards.json');
const frontVariant = path.join(basePath, 'frontend', 'data', 'card_variants.json');

console.log('Starting Auto-Normalizer...');

setInterval(() => {
    if (existsSync(detailsFile)) {
        try {
            console.log('Normalizing latest data...');
            execSync('node scripts/ptcg_crawler/normalize_cards.js', { stdio: 'pipe' });

            if (existsSync(masterFile)) {
                copyFileSync(masterFile, frontMaster);
                copyFileSync(variantFile, frontVariant);
                console.log('UI Data updated.');
            }
        } catch (err) {
            console.error('Normalization error:', err.message);
        }
    }
}, 60000); // 1 minute
