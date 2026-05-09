import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'data');

const cards = JSON.parse(readFileSync(join(dataDir, 'master_cards.json'), 'utf-8'));
const variants = JSON.parse(readFileSync(join(dataDir, 'card_variants.json'), 'utf-8'));
const config = JSON.parse(readFileSync(join(dataDir, 'official_classifications.json'), 'utf-8'));

// master_id → Set<official_id>
const masterToOids = new Map();
for (const v of variants) {
  if (!masterToOids.has(v.master_id)) masterToOids.set(v.master_id, new Set());
  masterToOids.get(v.master_id).add(v.official_id);
}

// 結果: { official_id -> Set<tag> }
const result = new Map();
const addTag = (official_id, tag) => {
  if (!result.has(official_id)) result.set(official_id, new Set());
  result.get(official_id).add(tag);
};
const addTagsForMaster = (master_id, tag) => {
  for (const oid of masterToOids.get(master_id) ?? []) addTag(oid, tag);
};

// name -> [card, ...] for hardcoded lookups
const byName = new Map();
for (const c of cards) {
  if (!byName.has(c.name)) byName.set(c.name, []);
  byName.get(c.name).push(c);
}

// ── 0. officialIds (確定ID直接指定) ────────────────────
for (const [tag, ids] of Object.entries(config.officialIds ?? {})) {
  for (const id of ids) addTag(String(id), tag);
}

// ── 1. ハードコードリスト ──────────────────────────────
for (const [tag, spec] of Object.entries(config.hardcoded)) {
  for (const name of spec.names) {
    const matched = byName.get(name);
    if (matched) {
      for (const c of matched) addTagsForMaster(c.master_id, tag);
    } else {
      console.warn(`[hardcoded] 未発見: "${name}" (tag: ${tag})`);
    }
  }
  for (const { name, firstAttack } of (spec.nameWithAttack ?? [])) {
    const candidates = byName.get(name);
    if (!candidates) {
      console.warn(`[nameWithAttack] 未発見: "${name}" (tag: ${tag})`);
      continue;
    }
    const matched = candidates.find(c => (c.attacks ?? [])[0]?.name === firstAttack);
    if (matched) {
      addTagsForMaster(matched.master_id, tag);
    } else {
      console.warn(`[nameWithAttack] firstAttack不一致: "${name}" 期待="${firstAttack}" (tag: ${tag})`);
    }
  }
}

// ── 2. プレフィックス ──────────────────────────────────
for (const { tag, prefix, cardKindFilter } of config.prefix) {
  for (const card of cards) {
    if (card.name.startsWith(prefix) && (!cardKindFilter || cardKindFilter.includes(card.card_kind))) {
      addTagsForMaster(card.master_id, tag);
    }
  }
}

// ── 3. cardKind ────────────────────────────────────────
for (const { tag, kind } of config.cardKind) {
  for (const card of cards) {
    if (card.card_kind === kind) addTagsForMaster(card.master_id, tag);
  }
}

// ── 4. rulesContain ────────────────────────────────────
for (const { tag, text } of config.rulesContain) {
  for (const card of cards) {
    if ((card.rules ?? []).some(r => r.includes(text))) addTagsForMaster(card.master_id, tag);
  }
}

// ── 5. rulesNonEmpty ───────────────────────────────────
for (const { tag, cardKindFilter } of config.rulesNonEmpty) {
  for (const card of cards) {
    if (cardKindFilter.includes(card.card_kind) && (card.rules ?? []).length > 0) {
      addTagsForMaster(card.master_id, tag);
    }
  }
}

// ── 6. cardKindAndRules ────────────────────────────────
for (const { tag, kind, rulesContain } of config.cardKindAndRules) {
  for (const card of cards) {
    if (card.card_kind === kind && (card.rules ?? []).some(r => r.includes(rulesContain))) {
      addTagsForMaster(card.master_id, tag);
    }
  }
}

// ── 出力 ───────────────────────────────────────────────
const output = {};
for (const [oid, tags] of [...result.entries()].sort((a, b) => a[0].localeCompare(b[0], undefined, { numeric: true }))) {
  output[oid] = [...tags].sort();
}

const outPath = join(dataDir, 'official_class_index.json');
writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');

// サマリー
const tagCounts = new Map();
for (const tags of Object.values(output)) {
  for (const t of tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
}
console.log('\n=== 生成完了 ===');
console.log(`バリアント数: ${Object.keys(output).length}`);
console.log('\nタグ別件数:');
for (const [tag, count] of [...tagCounts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${count}\t${tag}`);
}
console.log(`\n出力: ${outPath}`);
