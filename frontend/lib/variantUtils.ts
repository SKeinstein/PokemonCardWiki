import { CardVariant } from "./data";
import releaseDB from "../data/pack_release_order.json";

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
        // 1. Era: SV > MP > M > others
        const eraDiff = eraRank(a.set_code) - eraRank(b.set_code);
        if (eraDiff !== 0) return eraDiff;

        // 2. Within same era: release_date descending; dated beats undated
        const aDate = (releaseDB as Record<string, { release_date?: string }>)[a.set_code]?.release_date;
        const bDate = (releaseDB as Record<string, { release_date?: string }>)[b.set_code]?.release_date;

        if (aDate && bDate) {
            if (aDate !== bDate) return bDate < aDate ? -1 : 1;
        } else if (aDate) {
            return -1;
        } else if (bDate) {
            return 1;
        }

        // 3. set_code localeCompare descending
        const setDiff = b.set_code.localeCompare(a.set_code, undefined, { numeric: true });
        if (setDiff !== 0) return setDiff;

        // 4. Normal rarity first
        return rarityRank(a.rarity) - rarityRank(b.rarity);
    })[0];
}
