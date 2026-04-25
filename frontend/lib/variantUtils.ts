import { CardVariant } from "./data";

const RARITY_RANK: Record<string, number> = {
    C: 0,
    U: 1,
    R: 2,
    RR: 3,
    TR: 4,
    SR: 5,
    SAR: 6,
    AR: 7,
    UR: 8,
    MUR: 9,
    BWR: 10,
    MA: 11,
};

function rarityRank(rarity: string): number {
    return rarity in RARITY_RANK ? RARITY_RANK[rarity] : 99;
}

// Pick the default display variant: lowest rarity first, newest set_code first on ties.
// Empty/promo rarity (rank 99) is always last.
export function pickDefaultVariant(variants: CardVariant[]): CardVariant | null {
    if (!variants || variants.length === 0) return null;
    if (variants.length === 1) return variants[0];
    return [...variants].sort((a, b) => {
        const rd = rarityRank(a.rarity) - rarityRank(b.rarity);
        if (rd !== 0) return rd;
        return b.set_code.localeCompare(a.set_code, undefined, { numeric: true });
    })[0];
}
