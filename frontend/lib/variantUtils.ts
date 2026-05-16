import { CardVariant } from "./data";

const NORMAL_RARITY = new Set(["C", "U", "R"]);

function rarityRank(rarity: string): number {
    return NORMAL_RARITY.has(rarity) ? 0 : 1;
}

function eraRank(code: string): number {
    if (code.startsWith('SV')) return 0;
    if (code.startsWith('MP')) return 1;
    if (code.startsWith('M')) return 2;
    return 99;
}

export function pickDefaultVariant(variants: CardVariant[]): CardVariant | null {
    if (!variants || variants.length === 0) return null;
    if (variants.length === 1) return variants[0];

    return [...variants].sort((a, b) => {
        const eraDiff = eraRank(a.set_code) - eraRank(b.set_code);
        if (eraDiff !== 0) return eraDiff;
        const setDiff = b.set_code.localeCompare(a.set_code, undefined, { numeric: true });
        if (setDiff !== 0) return setDiff;
        return rarityRank(a.rarity) - rarityRank(b.rarity);
    })[0];
}
