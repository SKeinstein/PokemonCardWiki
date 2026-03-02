import fs from "fs/promises";
import path from "path";

// Types based on the normalized JSON schema
export type Ability = {
    name: string;
    text: string;
};

export type Attack = {
    name: string;
    damage: string;
    cost: string[];
    text: string;
};

export type WeaknessResistance = {
    type: string;  // e.g. "fire", "grass", "" for none
    value: string; // e.g. "×2", "－30", "" for none
};

export type MasterCard = {
    master_id: string;
    name: string;
    hp: number | null;
    type: string;
    card_kind: string;
    abilities: Ability[];
    attacks: Attack[];
    rules: string[];
    weakness: WeaknessResistance;
    resistance: WeaknessResistance;
    retreatCost: number;
    // Pokemon-specific
    pokedexNo: string;
    pokedexCategory: string;
    height: string;
    weight: string;
    flavor_text: string;
    evolutions: string[];
};

export type CardVariant = {
    official_id: string;
    master_id: string;
    regulation: string;
    illustrator: string;
    set_name: string;
    sets: string[];
    set_code: string;
    set_number: string;
    rarity: string;
    image_url: string;
};


// Singleton-like cache to avoid parsing JSON constantly during SSR
let masterCardsCache: MasterCard[] | null = null;
let variantsCache: CardVariant[] | null = null;

export async function getMasterCards(): Promise<MasterCard[]> {
    if (process.env.NODE_ENV === 'production' && masterCardsCache) {
        return masterCardsCache;
    }

    const dataPath = path.join(process.cwd(), "data", "master_cards.json");
    const fileContents = await fs.readFile(dataPath, "utf8");
    masterCardsCache = JSON.parse(fileContents) as MasterCard[];
    return masterCardsCache;
}

export async function getCardVariants(): Promise<CardVariant[]> {
    if (process.env.NODE_ENV === 'production' && variantsCache) {
        return variantsCache;
    }

    const dataPath = path.join(process.cwd(), "data", "card_variants.json");
    const fileContents = await fs.readFile(dataPath, "utf8");
    variantsCache = JSON.parse(fileContents) as CardVariant[];
    return variantsCache;
}
