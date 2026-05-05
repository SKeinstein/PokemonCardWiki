import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'data');

const cards = JSON.parse(readFileSync(join(dataDir, 'card_details.json'), 'utf-8'));
const config = JSON.parse(readFileSync(join(dataDir, 'official_classifications.json'), 'utf-8'));

// カード名単位でユニーク化（master_idの代わりにカード名で管理）
const byName = new Map();
for (const c of cards) {
  if (!byName.has(c.name)) byName.set(c.name, c);
}
const uniqueCards = [...byName.values()];

// 結果: { cardName -> Set<tag> }
const result = new Map();
const addTag = (name, tag) => {
  if (!result.has(name)) result.set(name, new Set());
  result.get(name).add(tag);
};

// ── 1. ハードコードリスト ──────────────────────────────
for (const [tag, spec] of Object.entries(config.hardcoded)) {
  for (const name of spec.names) {
    if (byName.has(name)) {
      addTag(name, tag);
    } else {
      console.warn(`[hardcoded] 未発見: "${name}" (tag: ${tag})`);
    }
  }
  for (const { name, firstAttack } of (spec.nameWithAttack ?? [])) {
    const card = byName.get(name);
    if (!card) {
      console.warn(`[nameWithAttack] 未発見: "${name}" (tag: ${tag})`);
      continue;
    }
    const fa = (card.attacks ?? [])[0]?.name;
    if (fa === firstAttack) {
      addTag(name, tag);
    } else {
      // 同名で複数バリアント → 全バリアントを検索
      const allVariants = cards.filter(c => c.name === name);
      const matched = allVariants.find(c => (c.attacks ?? [])[0]?.name === firstAttack);
      if (matched) {
        addTag(name, tag);
      } else {
        console.warn(`[nameWithAttack] firstAttack不一致: "${name}" 期待="${firstAttack}" 実際="${fa}" (tag: ${tag})`);
      }
    }
  }
}

// ── 2. プレフィックス ──────────────────────────────────
for (const { tag, prefix } of config.prefix) {
  for (const card of uniqueCards) {
    if (card.name.startsWith(prefix)) addTag(card.name, tag);
  }
}

// ── 3. cardKind ────────────────────────────────────────
for (const { tag, kind } of config.cardKind) {
  for (const card of uniqueCards) {
    if (card.cardKind === kind) addTag(card.name, tag);
  }
}

// ── 4. rulesContain ────────────────────────────────────
for (const { tag, text } of config.rulesContain) {
  for (const card of uniqueCards) {
    if ((card.rules ?? []).some(r => r.includes(text))) addTag(card.name, tag);
  }
}

// ── 5. rulesNonEmpty ───────────────────────────────────
for (const { tag, cardKindFilter } of config.rulesNonEmpty) {
  for (const card of uniqueCards) {
    if (cardKindFilter.includes(card.cardKind) && (card.rules ?? []).length > 0) {
      addTag(card.name, tag);
    }
  }
}

// ── 6. cardKindAndRules ────────────────────────────────
for (const { tag, kind, rulesContain } of config.cardKindAndRules) {
  for (const card of uniqueCards) {
    if (card.cardKind === kind && (card.rules ?? []).some(r => r.includes(rulesContain))) {
      addTag(card.name, tag);
    }
  }
}

// ── 出力 ───────────────────────────────────────────────
const output = {};
for (const [name, tags] of [...result.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  output[name] = [...tags].sort();
}

const outPath = join(dataDir, 'official_class_index.json');
writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');

// サマリー
const tagCounts = new Map();
for (const tags of Object.values(output)) {
  for (const t of tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
}
console.log('\n=== 生成完了 ===');
console.log(`カード数: ${Object.keys(output).length}`);
console.log('\nタグ別件数:');
for (const [tag, count] of [...tagCounts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${count}\t${tag}`);
}
console.log(`\n出力: ${outPath}`);
