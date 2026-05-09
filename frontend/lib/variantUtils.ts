import { CardVariant } from "./data";

const RARITY_RANK: Record<string, number> = {
    SAR: 0,
    AR: 1,
};

function rarityRank(rarity: string): number {
    return rarity in RARITY_RANK ? RARITY_RANK[rarity] : 99;
}

export function pickDefaultVariant(variants: CardVariant[]): CardVariant | null {
    if (!variants || variants.length === 0) return null;
    if (variants.length === 1) return variants[0];

    return [...variants].sort((a, b) => {
        const rd = rarityRank(a.rarity) - rarityRank(b.rarity);
        if (rd !== 0) return rd;
        return b.set_code.localeCompare(a.set_code, undefined, { numeric: true });
    })[0];
}
