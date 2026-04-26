import { CardVariant } from "./data";

const RARITY_RANK: Record<string, number> = {
    C: 0,
    U: 1,
    R: 2,
    RR: 3,
    AR: 4,
    TR: 5,
};

function rarityRank(rarity: string): number {
    return rarity in RARITY_RANK ? RARITY_RANK[rarity] : 99;
}

function genRank(setCode: string): number {
    if (/^SV/.test(setCode)) return 6;  // Scarlet & Violet
    if (/^S\d/.test(setCode)) return 5; // Sword & Shield (S1a, S2, …)
    if (/^SM/.test(setCode)) return 4;  // Sun & Moon
    if (/^XY/.test(setCode)) return 3;  // XY
    if (/^BW/.test(setCode)) return 2;  // Black & White
    return 1;
}

const MAIN_RARITY = new Set(["C", "U", "R", "RR", "AR", "TR"]);

// Pick the default display variant.
// Priority: (1) newest generation, (2) main-pack × low rarity,
//           (3) rarity ascending, (4) set_code descending.
// Promos (set_code contains "-P") are excluded; falls back to full list if all are promos.
export function pickDefaultVariant(variants: CardVariant[]): CardVariant | null {
    if (!variants || variants.length === 0) return null;

    const nonPromo = variants.filter((v) => !v.set_code.includes("-P"));
    const pool = nonPromo.length > 0 ? nonPromo : variants;

    if (pool.length === 1) return pool[0];

    return [...pool].sort((a, b) => {
        // (1) Generation: newer first
        const gd = genRank(b.set_code) - genRank(a.set_code);
        if (gd !== 0) return gd;

        // (2) Main pack × low rarity first
        const aMain =
            /^[A-Z]+\d/.test(a.set_code) &&
            !a.set_code.includes("-P") &&
            MAIN_RARITY.has(a.rarity);
        const bMain =
            /^[A-Z]+\d/.test(b.set_code) &&
            !b.set_code.includes("-P") &&
            MAIN_RARITY.has(b.rarity);
        if (aMain !== bMain) return aMain ? -1 : 1;

        // (3) Rarity ascending
        const rd = rarityRank(a.rarity) - rarityRank(b.rarity);
        if (rd !== 0) return rd;

        // (4) set_code descending
        return b.set_code.localeCompare(a.set_code, undefined, { numeric: true });
    })[0];
}
