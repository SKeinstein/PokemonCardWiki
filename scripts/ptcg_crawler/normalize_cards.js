import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const DATA_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../data");
const INPUT_PATH = path.join(DATA_DIR, "card_details.json");
const OUTPUT_CARDS_PATH = path.join(DATA_DIR, "master_cards.json");
const OUTPUT_VARIANTS_PATH = path.join(DATA_DIR, "card_variants.json");

/**
 * Rules that are printed as game-mechanic reminders on certain card types.
 * Their presence varies between print runs of the same card (older prints often
 * omit them while newer prints include them), so they must not influence the
 * master-card key.
 */
const BOILERPLATE_RULES = new Set([
    // Standard ex reminder
    "ポケモンexがきぜつしたとき、相手はサイドを2枚とる。",
    // Standard Mega-ex reminder
    "メガシンカexがきぜつしたとき、相手はサイドを3枚とる。",
    // Standard Pokémon Tool reminder
    "ポケモンのどうぐは、自分のポケモンにつけて使う。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
    // Prism Energy effect text (omitted on later reprints of the same card)
    "このカードは、エネルギー1個ぶんとしてはたらく。\nたねポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。",
]);

/**
 * Normalizes scraped cards into Unique Master Cards and Variations.
 * We group by "Card Name", "HP", "Type" and significant Rules to define a
 * Master Card.  Boilerplate reminder rules are excluded from the key so that
 * prints which omit them still map to the same master card.
 */
function createMasterKey(card) {
    const hpStr = card.hp !== null ? String(card.hp) : "none";
    const typeStr = card.type || "none";
    let rulesStr = "none";
    const significantRules = (card.rules || []).filter(r => !BOILERPLATE_RULES.has(r));
    if (significantRules.length > 0) {
        rulesStr = significantRules.join("|");
    }
    const attackNames = (card.attacks || [])
        .map(a => a.name || "")
        .sort()
        .join("|") || "none";
    const abilityNames = (card.abilities || [])
        .map(a => a.name || "")
        .sort()
        .join("|") || "none";
    return `${card.name}_${hpStr}_${typeStr}_${rulesStr}_${attackNames}_${abilityNames}`;
}

function getRarityScore(rarity) {
    if (!rarity) return 90; // Default Promos/No-rarity drop below standard C/U/R cards but before unknowns
    const r = rarity.toUpperCase();
    switch (r) {
        case 'C': return 1;
        case 'U': return 2;
        case 'R': return 3;
        case 'RR': return 4;
        case 'RRR': return 5;
        case 'AR': return 10;
        case 'CHR': return 11;
        case 'CSR': return 12;
        case 'SR': return 20;
        case 'SAR': return 21;
        case 'HR': return 22;
        case 'UR': return 23;
        case 'S': return 30; // Shiny variations
        case 'SSR': return 31;
        case 'TR': return 40;
        case 'PR': return 41;
        case 'A': return 50; // Amazing rare
        case 'K': return 51; // Radiant
        default: return 99; // unknown or promo
    }
}

async function main() {
    if (!existsSync(INPUT_PATH)) {
        console.error(`Input file not found: ${INPUT_PATH}`);
        process.exit(1);
    }

    const rawCards = JSON.parse(await readFile(INPUT_PATH, "utf8"));
    console.log(`Loaded ${rawCards.length} raw cards.`);

    const masterCards = new Map(); // key -> masterCard
    const variantsMap = new Map(); // key -> official_id

    for (const card of rawCards) {
        if (!card.name || card.name.trim() === "") continue;

        const masterKey = createMasterKey(card);

        // If master card does not exist, create it
        if (!masterCards.has(masterKey)) {
            masterCards.set(masterKey, {
                master_id: masterKey,
                name: card.name,
                hp: card.hp,
                type: card.type || "",
                card_kind: card.cardKind || "",
                abilities: card.abilities || [],
                attacks: card.attacks || [],
                rules: card.rules || [],
                // weakness/resistance: { type, value } objects (new scraper) or legacy string
                weakness: card.weakness && typeof card.weakness === 'object'
                    ? card.weakness
                    : { type: "", value: card.weakness || "" },
                resistance: card.resistance && typeof card.resistance === 'object'
                    ? card.resistance
                    : { type: "", value: card.resistance || "" },
                retreatCost: card.retreatCost || 0,
                // Pokemon-specific
                pokedexNo: card.pokedexNo || "",
                pokedexCategory: card.pokedexCategory || "",
                height: card.height || "",
                weight: card.weight || "",
                flavor_text: card.flavorText || "",
                evolutions: card.evolutions || [],
            });
        } else {
            // If this master already exists, merge data from this print
            const existing = masterCards.get(masterKey);
            // Prefer the richer rules list (some prints omit boilerplate that others include)
            if ((card.rules || []).length > existing.rules.length) {
                existing.rules = card.rules;
            }
            if (card.evolutions && card.evolutions.length > 0) {
                for (const evo of card.evolutions) {
                    if (!existing.evolutions.includes(evo)) existing.evolutions.push(evo);
                }
            }
        }

        // Add variant (a physical card manifestation)
        // Deduplicate by official_id using the map
        variantsMap.set(card.id, {
            official_id: card.id,
            master_id: masterKey,
            regulation: card.regulation || "",
            illustrator: card.illustrator || "",
            set_name: card.setName || (card.sets && card.sets[0]) || "",
            sets: card.sets || [],
            set_code: card.setCode || "",
            set_number: card.setNumber || "",
            rarity: card.rarity || "",
            image_url: card.thumb || ""
        });

    }

    const masterList = Array.from(masterCards.values());
    const variants = Array.from(variantsMap.values());

    // Sort variants to ensure:
    // 1. If variants belong to the same set, position the lowest rarity first.
    // 2. Otherwise, position the newest card (higher official_id) first.
    variants.sort((a, b) => {
        if (a.set_name && b.set_name && a.set_name === b.set_name) {
            const scoreA = getRarityScore(a.rarity);
            const scoreB = getRarityScore(b.rarity);
            if (scoreA !== scoreB) {
                return scoreA - scoreB;
            }
        }

        const idA = parseInt(a.official_id) || 0;
        const idB = parseInt(b.official_id) || 0;
        return idB - idA;
    });

    await writeFile(OUTPUT_CARDS_PATH, JSON.stringify(masterList, null, 2), "utf8");
    await writeFile(OUTPUT_VARIANTS_PATH, JSON.stringify(variants, null, 2), "utf8");

    console.log(`Normalization complete.`);
    console.log(`- Unique Master Cards: ${masterList.length}`);
    console.log(`- Total Card Variants: ${variants.length}`);
}

main().catch(console.error);
