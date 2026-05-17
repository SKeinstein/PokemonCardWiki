import { CardVariant } from "./data";

const SPECIAL_RARITY = new Set(["AR", "SR", "SAR", "UR", "MA", "MUR", "TR", "BWR"]);

// 47716: チェレン SV-P 279/SV-P PROMOキラ → SV11W 084/086 U を優先表示
// 49619: ビクティニ(Vフォース) SV-P 271/SV-P PROMOキラ → MC 107/742 を優先表示
const EXCLUDED_OFFICIAL_IDS = new Set(["47716", "49619"]);

function hasOversizedSetNumber(setNumber: string): boolean {
    const match = setNumber.match(/^(\d+)\/(\d+)$/);
    if (!match) return false;
    const denominator = Number(match[2]);
    if (isNaN(denominator)) return false;
    return Number(match[1]) > denominator;
}

export function pickDisplayVariant(variants: CardVariant[]): CardVariant | null {
    if (!variants || variants.length === 0) return null;
    const filtered = variants.filter(
        v => !EXCLUDED_OFFICIAL_IDS.has(v.official_id) &&
             !SPECIAL_RARITY.has(v.rarity) &&
             !hasOversizedSetNumber(v.set_number)
    );
    if (filtered.length > 0) return filtered[0];
    return variants.find(v => !SPECIAL_RARITY.has(v.rarity)) ?? variants[0];
}
