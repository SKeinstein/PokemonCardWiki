export const TYPE_LABELS: Record<string, string> = {
    grass: 'くさ',
    fire: 'ほのお',
    water: 'みず',
    electric: 'でんき',
    psychic: 'エスパー',
    fighting: 'かくとう',
    dark: 'あく',
    steel: 'はがね',
    dragon: 'ドラゴン',
    none: 'ノーマル',
};

export const typeLabel = (type: string): string => TYPE_LABELS[type] ?? type;
