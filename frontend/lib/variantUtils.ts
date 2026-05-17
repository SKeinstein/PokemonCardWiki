import { CardVariant } from "./data";

const SPECIAL_RARITY = new Set(["AR", "SR", "SAR", "UR", "MA", "MUR", "TR", "BWR"]);

export function pickDisplayVariant(variants: CardVariant[]): CardVariant | null {
    if (!variants || variants.length === 0) return null;
    return variants.find(v => !SPECIAL_RARITY.has(v.rarity)) ?? variants[0];
}
