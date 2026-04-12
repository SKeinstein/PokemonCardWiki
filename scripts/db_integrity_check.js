#!/usr/bin/env node
/**
 * DB Integrity Check Script
 * Checks data/master_cards.json, data/card_variants.json, data/card_details.json
 * for various data integrity issues.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const masterCardsPath = path.join(ROOT, 'data', 'master_cards.json');
const cardVariantsPath = path.join(ROOT, 'data', 'card_variants.json');
const cardDetailsPath = path.join(ROOT, 'data', 'card_details.json');

console.log('Loading data files...');
const masterCards = JSON.parse(fs.readFileSync(masterCardsPath, 'utf8'));
const cardVariants = JSON.parse(fs.readFileSync(cardVariantsPath, 'utf8'));
const cardDetails = JSON.parse(fs.readFileSync(cardDetailsPath, 'utf8'));
console.log(`Loaded: ${masterCards.length} masters, ${cardVariants.length} variants, ${cardDetails.length} details`);

// --- Build lookup maps ---
// master_id -> master card
const masterMap = new Map();
for (const mc of masterCards) {
  masterMap.set(mc.master_id, mc);
}

// master_id -> [variants]
const variantsByMaster = new Map();
for (const v of cardVariants) {
  if (!variantsByMaster.has(v.master_id)) {
    variantsByMaster.set(v.master_id, []);
  }
  variantsByMaster.get(v.master_id).push(v);
}

// official_id (cardID in card_details) -> card_detail
const detailByOfficialId = new Map();
for (const d of cardDetails) {
  // card_details uses 'cardID' field
  if (d.cardID) detailByOfficialId.set(d.cardID, d);
}

// --- Helper: normalize attacks/abilities for comparison ---
function normalizeAttacks(attacks) {
  if (!attacks || !Array.isArray(attacks)) return '[]';
  return JSON.stringify(
    attacks.map(a => ({
      name: (a.name || '').trim(),
      damage: (a.damage || '').toString().trim(),
      effect: (a.effect || '').trim(),
    })).sort((a, b) => a.name.localeCompare(b.name))
  );
}

function normalizeAbilities(abilities) {
  if (!abilities || !Array.isArray(abilities)) return '[]';
  return JSON.stringify(
    abilities.map(a => ({
      name: (a.name || '').trim(),
      effect: (a.effect || '').trim(),
    })).sort((a, b) => a.name.localeCompare(b.name))
  );
}

// ============================================================
// CHECK 1: Master cards that group variants with different attacks/abilities
// ============================================================
console.log('\n--- Check 1: Variants with mismatched attacks/abilities ---');
const check1_issues = [];

for (const [masterId, variants] of variantsByMaster.entries()) {
  if (variants.length < 2) continue;

  const masterCard = masterMap.get(masterId);
  if (!masterCard) continue;

  // Skip energy/trainer cards that have no attacks by design
  // We still check them but note they're expected to have none

  // Collect attack/ability signatures from card_details for each variant
  const sigSet = new Map(); // signature -> [official_ids]

  for (const v of variants) {
    const detail = detailByOfficialId.get(v.official_id);
    if (!detail) continue; // will be caught in check 3

    const attackSig = normalizeAttacks(detail.attacks);
    const abilitySig = normalizeAbilities(detail.abilities);
    const sig = `ATK:${attackSig}|ABL:${abilitySig}`;

    if (!sigSet.has(sig)) sigSet.set(sig, []);
    sigSet.get(sig).push(v.official_id);
  }

  if (sigSet.size > 1) {
    // Multiple distinct attack/ability sets under same master
    const groups = Array.from(sigSet.entries()).map(([sig, ids]) => {
      // Parse for display
      const atkMatch = sig.match(/^ATK:(.*)\|ABL:/);
      const ablMatch = sig.match(/\|ABL:(.*)$/);
      const attacks = atkMatch ? JSON.parse(atkMatch[1]) : [];
      const abilities = ablMatch ? JSON.parse(ablMatch[1]) : [];
      const atkNames = attacks.map(a => a.name).join(', ') || '(none)';
      const ablNames = abilities.map(a => a.name).join(', ') || '(none)';
      return { ids, atkNames, ablNames };
    });

    check1_issues.push({
      master_id: masterId,
      name: masterCard.name,
      card_kind: masterCard.card_kind,
      variantCount: variants.length,
      groups,
    });
  }
}

console.log(`Found ${check1_issues.length} masters with mismatched variants`);

// ============================================================
// CHECK 2: Master cards with zero variants
// ============================================================
console.log('\n--- Check 2: Masters with zero variants ---');
const check2_issues = [];

for (const mc of masterCards) {
  const variants = variantsByMaster.get(mc.master_id);
  if (!variants || variants.length === 0) {
    check2_issues.push({ master_id: mc.master_id, name: mc.name, card_kind: mc.card_kind });
  }
}

console.log(`Found ${check2_issues.length} masters with no variants`);

// ============================================================
// CHECK 3: Variants whose official_id has no entry in card_details
// ============================================================
console.log('\n--- Check 3: Variants with missing card_details entry ---');
const check3_issues = [];

for (const v of cardVariants) {
  if (!detailByOfficialId.has(v.official_id)) {
    const master = masterMap.get(v.master_id);
    check3_issues.push({
      official_id: v.official_id,
      master_id: v.master_id,
      name: master ? master.name : '(unknown master)',
      set_name: v.set_name || v.sets,
    });
  }
}

console.log(`Found ${check3_issues.length} variants with no card_details entry`);

// ============================================================
// CHECK 4: Suspicious missing data
//   4a: null HP on pokemon cards
//   4b: no attacks AND no abilities on non-trainer, non-energy cards
// ============================================================
console.log('\n--- Check 4: Suspicious missing data ---');
const check4a_issues = []; // null HP on pokemon
const check4b_issues = []; // no attacks + no abilities on non-trainer/non-energy

const trainerKinds = new Set([
  'サポート', 'グッズ', 'スタジアム', 'ポケモンのどうぐ',
  'Supporter', 'Item', 'Stadium', 'Pokemon Tool',
  'サポーター', 'ポケモンツール',
]);
const energyKinds = new Set([
  '基本エネルギー', '特殊エネルギー', 'Basic Energy', 'Special Energy',
]);

function isTrainerOrEnergy(card) {
  if (!card.card_kind) return false;
  const k = card.card_kind;
  return trainerKinds.has(k) || energyKinds.has(k) ||
    k.includes('エネルギー') || k.includes('Energy') ||
    k.includes('サポート') || k.includes('グッズ') ||
    k.includes('スタジアム') || k.includes('ツール') ||
    k.includes('Trainer') || k.includes('Supporter') ||
    k.includes('Item') || k.includes('Stadium');
}

for (const mc of masterCards) {
  const isTE = isTrainerOrEnergy(mc);

  // 4a: null HP on pokemon
  // A card is pokemon if it's not trainer/energy and has a pokedexNo or card_kind contains ポケモン/Pokemon
  const isPokemon = !isTE && (
    mc.pokedexNo ||
    (mc.card_kind && (mc.card_kind.includes('ポケモン') || mc.card_kind.includes('Pokemon') || mc.card_kind === 'ポケモン')) ||
    mc.hp !== null
  );

  if (isPokemon && (mc.hp === null || mc.hp === undefined)) {
    check4a_issues.push({ master_id: mc.master_id, name: mc.name, card_kind: mc.card_kind });
  }

  // 4b: no attacks AND no abilities on non-trainer/energy
  if (!isTE) {
    const hasAttacks = mc.attacks && mc.attacks.length > 0;
    const hasAbilities = mc.abilities && mc.abilities.length > 0;
    if (!hasAttacks && !hasAbilities) {
      check4b_issues.push({ master_id: mc.master_id, name: mc.name, card_kind: mc.card_kind, hp: mc.hp });
    }
  }
}

console.log(`Found ${check4a_issues.length} pokemon cards with null HP`);
console.log(`Found ${check4b_issues.length} non-trainer/energy cards with no attacks AND no abilities`);

// ============================================================
// BUILD REPORT
// ============================================================
const now = new Date().toISOString().replace('T', ' ').slice(0, 19);
const reportLines = [];

reportLines.push(`# DB Integrity Report`);
reportLines.push(`\nGenerated: ${now}\n`);
reportLines.push(`**Data summary:**`);
reportLines.push(`- master_cards.json: ${masterCards.length} records`);
reportLines.push(`- card_variants.json: ${cardVariants.length} records`);
reportLines.push(`- card_details.json: ${cardDetails.length} records\n`);
reportLines.push(`---\n`);

// --- Summary table ---
reportLines.push(`## Summary\n`);
reportLines.push(`| # | Check | Severity | Issues Found |`);
reportLines.push(`|---|-------|----------|-------------|`);
reportLines.push(`| 1 | Variants with mismatched attacks/abilities (wrong grouping) | CRITICAL | ${check1_issues.length} |`);
reportLines.push(`| 2 | Master cards with zero variants | CRITICAL | ${check2_issues.length} |`);
reportLines.push(`| 3 | Variants with no matching card_details entry | WARNING | ${check3_issues.length} |`);
reportLines.push(`| 4a | Pokémon cards with null HP | WARNING | ${check4a_issues.length} |`);
reportLines.push(`| 4b | Non-trainer/energy cards with no attacks AND no abilities | WARNING | ${check4b_issues.length} |`);
reportLines.push(``);

// ============================================================
// CHECK 1 DETAILS
// ============================================================
if (check1_issues.length > 0) {
  reportLines.push(`---\n`);
  reportLines.push(`## ⚠️ CRITICAL — Check 1: Variants with Mismatched Attacks/Abilities\n`);
  reportLines.push(`These master cards group variants that have different attack or ability sets. This is the same class of bug as the モグリュー issue — different cards incorrectly merged under one master.\n`);
  reportLines.push(`**Total affected masters: ${check1_issues.length}**\n`);

  for (const issue of check1_issues) {
    reportLines.push(`### ${issue.name} (\`${issue.master_id}\`)`);
    reportLines.push(`- card_kind: ${issue.card_kind || '(none)'}`);
    reportLines.push(`- Total variants: ${issue.variantCount}`);
    reportLines.push(`- Distinct attack/ability groups: ${issue.groups.length}\n`);
    issue.groups.forEach((g, i) => {
      reportLines.push(`  **Group ${i + 1}** (${g.ids.length} variant${g.ids.length > 1 ? 's' : ''}): ${g.ids.join(', ')}`);
      reportLines.push(`  - Attacks: ${g.atkNames}`);
      reportLines.push(`  - Abilities: ${g.ablNames}`);
    });
    reportLines.push(``);
  }
} else {
  reportLines.push(`---\n`);
  reportLines.push(`## Check 1: Variants with Mismatched Attacks/Abilities\n`);
  reportLines.push(`No issues found.\n`);
}

// ============================================================
// CHECK 2 DETAILS
// ============================================================
if (check2_issues.length > 0) {
  reportLines.push(`---\n`);
  reportLines.push(`## ⚠️ CRITICAL — Check 2: Master Cards with Zero Variants\n`);
  reportLines.push(`These master cards exist in master_cards.json but have no entries in card_variants.json. They are orphaned masters.\n`);
  reportLines.push(`**Total affected: ${check2_issues.length}**\n`);
  reportLines.push(`| master_id | name | card_kind |`);
  reportLines.push(`|-----------|------|-----------|`);
  for (const issue of check2_issues) {
    reportLines.push(`| \`${issue.master_id}\` | ${issue.name} | ${issue.card_kind || '-'} |`);
  }
  reportLines.push(``);
} else {
  reportLines.push(`---\n`);
  reportLines.push(`## Check 2: Master Cards with Zero Variants\n`);
  reportLines.push(`No issues found.\n`);
}

// ============================================================
// CHECK 3 DETAILS
// ============================================================
if (check3_issues.length > 0) {
  reportLines.push(`---\n`);
  reportLines.push(`## ⚠️ WARNING — Check 3: Variants with No Matching card_details Entry\n`);
  reportLines.push(`These variants have an \`official_id\` that doesn't match any \`cardID\` in card_details.json.\n`);
  reportLines.push(`**Total affected: ${check3_issues.length}**\n`);

  // Show first 50 to avoid overly long report, note if truncated
  const display3 = check3_issues.slice(0, 50);
  reportLines.push(`| official_id | name | set_name |`);
  reportLines.push(`|-------------|------|----------|`);
  for (const issue of display3) {
    reportLines.push(`| \`${issue.official_id}\` | ${issue.name} | ${issue.set_name || '-'} |`);
  }
  if (check3_issues.length > 50) {
    reportLines.push(`\n*(Showing first 50 of ${check3_issues.length} — see full list in JSON output)*`);
  }
  reportLines.push(``);
} else {
  reportLines.push(`---\n`);
  reportLines.push(`## Check 3: Variants with No Matching card_details Entry\n`);
  reportLines.push(`No issues found.\n`);
}

// ============================================================
// CHECK 4 DETAILS
// ============================================================
reportLines.push(`---\n`);
reportLines.push(`## Check 4: Suspicious Missing Data\n`);

reportLines.push(`### 4a: Pokémon Cards with Null HP\n`);
if (check4a_issues.length > 0) {
  reportLines.push(`**Total affected: ${check4a_issues.length}**\n`);
  reportLines.push(`| master_id | name | card_kind |`);
  reportLines.push(`|-----------|------|-----------|`);
  for (const issue of check4a_issues) {
    reportLines.push(`| \`${issue.master_id}\` | ${issue.name} | ${issue.card_kind || '-'} |`);
  }
} else {
  reportLines.push(`No issues found.`);
}

reportLines.push(``);
reportLines.push(`### 4b: Non-Trainer/Energy Cards with No Attacks AND No Abilities\n`);
if (check4b_issues.length > 0) {
  reportLines.push(`**Total affected: ${check4b_issues.length}**\n`);
  const display4b = check4b_issues.slice(0, 100);
  reportLines.push(`| master_id | name | card_kind | hp |`);
  reportLines.push(`|-----------|------|-----------|-----|`);
  for (const issue of display4b) {
    reportLines.push(`| \`${issue.master_id}\` | ${issue.name} | ${issue.card_kind || '-'} | ${issue.hp ?? 'null'} |`);
  }
  if (check4b_issues.length > 100) {
    reportLines.push(`\n*(Showing first 100 of ${check4b_issues.length})*`);
  }
} else {
  reportLines.push(`No issues found.`);
}

reportLines.push(``);
reportLines.push(`---\n`);
reportLines.push(`*End of report*`);

// ============================================================
// WRITE REPORT
// ============================================================
const reportPath = path.join(ROOT, 'docs', 'db_integrity_report.md');
fs.writeFileSync(reportPath, reportLines.join('\n'), 'utf8');
console.log(`\nReport written to: ${reportPath}`);

// Also write full JSON for check 3 if truncated
if (check3_issues.length > 50) {
  const jsonPath = path.join(ROOT, 'docs', 'db_integrity_check3_full.json');
  fs.writeFileSync(jsonPath, JSON.stringify(check3_issues, null, 2), 'utf8');
  console.log(`Full check 3 results written to: ${jsonPath}`);
}

// Print summary to stdout
console.log('\n=== FINAL SUMMARY ===');
console.log(`Check 1 (mismatch): ${check1_issues.length} CRITICAL`);
console.log(`Check 2 (no variants): ${check2_issues.length} CRITICAL`);
console.log(`Check 3 (missing details): ${check3_issues.length} WARNING`);
console.log(`Check 4a (null HP): ${check4a_issues.length} WARNING`);
console.log(`Check 4b (no attacks/abilities): ${check4b_issues.length} WARNING`);
