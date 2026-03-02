"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { MasterCard, CardVariant } from "../../lib/data";
import CardModal from "./CardModal";

type Props = {
    masterCards: MasterCard[];
    variants: CardVariant[];
};

export default function CardSearch({ masterCards, variants }: Props) {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [effectQuery, setEffectQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [regFilter, setRegFilter] = useState("");
    const [gridCols, setGridCols] = useState(8);
    const [isOrSearch, setIsOrSearch] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [selectedCard, setSelectedCard] = useState<MasterCard | null>(null);

    const [weaknessFilter, setWeaknessFilter] = useState("");
    const [resistanceFilter, setResistanceFilter] = useState("");
    const [retreatFilter, setRetreatFilter] = useState("");
    const [displayLimit, setDisplayLimit] = useState(100);

    // Reset pagination when search parameters change
    useEffect(() => {
        setDisplayLimit(100);
    }, [query, typeFilter, effectQuery, categoryFilter, regFilter, isOrSearch, weaknessFilter, resistanceFilter, retreatFilter]);

    // Helper to evaluate AND / OR / NOT search logic
    const evaluateQuery = (text: string, query: string, isOr: boolean) => {
        if (!query.trim()) return true;

        const terms = query.trim().split(/\s+/);
        const textLower = text.toLowerCase();

        const requiredTerms = terms.filter((t) => !t.startsWith('-'));
        const minusTerms = terms.filter((t) => t.startsWith('-') && t.length > 1).map((t) => t.substring(1));

        // Fail immediately if any minus term matches
        for (const mt of minusTerms) {
            if (textLower.includes(mt.toLowerCase())) return false;
        }

        if (requiredTerms.length === 0) return true; // Only minus terms requested

        if (isOr) {
            return requiredTerms.some((rt) => textLower.includes(rt.toLowerCase()));
        } else {
            return requiredTerms.every((rt) => textLower.includes(rt.toLowerCase()));
        }
    };

    // Map variants by master_id for quick lookup
    const variantsMap = useMemo(() => {
        const map = new Map<string, CardVariant[]>();
        for (const v of variants) {
            const list = map.get(v.master_id) || [];
            list.push(v);
            map.set(v.master_id, list);
        }
        return map;
    }, [variants]);

    const filteredCards = useMemo(() => {
        return masterCards.filter((card) => {
            // 1. Text Query (Name)
            if (query && !evaluateQuery(card.name, query, isOrSearch)) {
                return false;
            }

            // 2. Type Filter
            if (typeFilter && card.type !== typeFilter) {
                return false;
            }

            // 3. Category Filter (uses card_kind from official HTML)
            if (categoryFilter) {
                const trainerKinds = ['グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ'];
                const energyKinds = ['エネルギー'];
                const pokemonKinds = ['たね', '1進化', '2進化', 'たたかう', 'VSTAR', 'VMAX', 'ex', 'GX', 'EX'];

                const kind = card.card_kind || '';
                const isTrainer = trainerKinds.includes(kind);
                const isEnergy = energyKinds.includes(kind) || (!kind && card.hp === null && card.attacks.length === 0 && card.abilities.length === 0 && card.name.includes('エネルギー'));
                const isPokemon = pokemonKinds.some(k => kind.includes(k)) || (!isTrainer && !isEnergy && card.hp !== null);

                if (categoryFilter === 'pokemon' && !isPokemon) return false;
                if (categoryFilter === 'trainer' && !isTrainer) return false;
                if (categoryFilter === 'energy' && !isEnergy) return false;
            }


            // 4. Regulation Filter
            if (regFilter) {
                const cardVariants = variantsMap.get(card.master_id) || [];
                if (!cardVariants.some((v) => v.regulation === regFilter)) return false;
            }

            // Weakness Filter
            if (weaknessFilter && card.weakness?.type !== weaknessFilter) return false;

            // Resistance Filter
            if (resistanceFilter && card.resistance?.type !== resistanceFilter) return false;

            // Retreat Cost Filter
            if (retreatFilter && card.retreatCost !== parseInt(retreatFilter)) return false;

            // 5. Effect Text Query (Abilities, Attacks, Rules)
            if (effectQuery) {
                // Combine all searchable text on the card into one block
                const searchableTextChunks = [
                    ...card.rules,
                    ...card.abilities.map(a => `${a.name} ${a.text}`),
                    ...card.attacks.map(a => `${a.name} ${a.text}`)
                ];
                const fullText = searchableTextChunks.join(" ");

                if (!evaluateQuery(fullText, effectQuery, isOrSearch)) {
                    return false;
                }
            }

            return true;
        });
    }, [masterCards, query, typeFilter, categoryFilter, regFilter, effectQuery, isOrSearch, weaknessFilter, resistanceFilter, retreatFilter, variantsMap]);

    // Unique types for filter
    const allTypes = useMemo(() => {
        const types = new Set<string>();
        masterCards.forEach(c => c.type && types.add(c.type));
        return Array.from(types).sort();
    }, [masterCards]);

    // Unique regulation marks
    const allRegulations = useMemo(() => {
        const regSet = new Set<string>();
        variants.forEach(v => {
            if (v.regulation && v.regulation.match(/^[A-Z]$/i)) { // Only A-Z regulations
                regSet.add(v.regulation.toUpperCase());
            }
        });
        return Array.from(regSet).sort();
    }, [variants]);

    return (
        <div className="w-full px-2 py-4 space-y-4">
            {/* Search Header */}
            <div className="sticky top-2 z-40 bg-gray-900/95 p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-700/80 mb-4 transition-all">
                <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
                    Pokémon Card Advanced Search
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    <input
                        type="text"
                        placeholder="カード名で検索..."
                        className="px-3 py-2 text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="テキスト・ワザ検索 (例: ダメカン)..."
                        className="px-3 py-2 text-sm border border-emerald-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-emerald-400/70"
                        value={effectQuery}
                        onChange={(e) => setEffectQuery(e.target.value)}
                    />

                    <select
                        className="px-3 py-2 text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="">すべてのカード</option>
                        <option value="pokemon">ポケモン</option>
                        <option value="trainer">トレーナーズ</option>
                        <option value="energy">エネルギー</option>
                    </select>

                    <select
                        className="px-3 py-2 text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="">すべてのタイプ</option>
                        {allTypes.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>

                    <select
                        className="px-3 py-2 text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={regFilter}
                        onChange={(e) => setRegFilter(e.target.value)}
                    >
                        <option value="">全レギュ</option>
                        {allRegulations.map(r => (
                            <option key={r} value={r}>[{r}] マーク</option>
                        ))}
                    </select>

                    <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-600 col-span-1 md:col-span-1">
                        <label className="text-gray-300 text-xs font-bold whitespace-nowrap">サイズ:</label>
                        <input
                            type="range"
                            min="2"
                            max="15"
                            value={gridCols}
                            onChange={(e) => setGridCols(parseInt(e.target.value))}
                            className="w-full accent-blue-500"
                        />
                        <span className="text-gray-400 text-xs w-6 text-right">{gridCols}列</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-3">
                    <button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center transition bg-emerald-900/30 px-3 py-1.5 rounded-lg border border-emerald-800/50"
                    >
                        {showAdvanced ? "▼ 検索ヘルプを閉じる" : "▶ 高度な検索のコツを見る"}
                    </button>

                    {/* AND / OR Toggle */}
                    <div className="flex items-center space-x-3 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                        <span className="text-xs font-bold text-gray-400">テキスト検索モード:</span>
                        <label className="flex items-center space-x-1 cursor-pointer">
                            <input type="radio" checked={!isOrSearch} onChange={() => setIsOrSearch(false)} className="accent-blue-500" />
                            <span className={`text-xs ${!isOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>すべて(AND)</span>
                        </label>
                        <label className="flex items-center space-x-1 cursor-pointer">
                            <input type="radio" checked={isOrSearch} onChange={() => setIsOrSearch(true)} className="accent-blue-500" />
                            <span className={`text-xs ${isOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>いずれか(OR)</span>
                        </label>
                    </div>
                </div>

                {/* Advanced Panel */}
                {showAdvanced && (
                    <div className="mt-4 p-4 bg-gray-900/60 border border-gray-700 rounded-lg text-sm text-gray-300 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div>
                            <h3 className="font-bold text-emerald-400 mb-2 border-b border-gray-700 pb-1">🔍 検索テクニック (Googleスタイル)</h3>
                            <ul className="list-disc leading-relaxed pl-5 space-y-1.5 text-xs text-gray-300">
                                <li><strong className="text-white">スペース区切り:</strong> 複数の単語を入れると、右上のモードに従って掛け合わせ検索されます。</li>
                                <li><strong className="text-white">AND検索:</strong> 「ベンチ ダメカン」で両方の言葉を含むカードを探します。（デフォルト）</li>
                                <li><strong className="text-white">OR検索:</strong> モードをORにして「テツノ トドロク」と入れると、どちらかを含むカードを探します。</li>
                                <li><strong className="text-white text-red-300">マイナス検索 (除外):</strong> 単語の先頭に半角ハイフン「-」をつけると、その言葉を含むカードを<strong className="text-white">除外</strong>します。<br /><span className="text-gray-400 mt-1 block bg-black/30 p-1.5 rounded border border-gray-800">例: 「ダメカン -ベンチ」 (ダメカンを含むが、ベンチとは書いていないカード)</span></li>
                            </ul>

                            {/* Additional specialized filters */}
                            <div className="mt-4 pt-4 border-t border-gray-700 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-400 font-bold">弱点</label>
                                    <select
                                        className="px-2 py-1.5 text-sm border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        value={weaknessFilter}
                                        onChange={e => setWeaknessFilter(e.target.value)}
                                    >
                                        <option value="">すべて</option>
                                        {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-400 font-bold">抵抗力</label>
                                    <select
                                        className="px-2 py-1.5 text-sm border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        value={resistanceFilter}
                                        onChange={e => setResistanceFilter(e.target.value)}
                                    >
                                        <option value="">すべて</option>
                                        {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs text-gray-400 font-bold">にげる</label>
                                    <select
                                        className="px-2 py-1.5 text-sm border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                        value={retreatFilter}
                                        onChange={e => setRetreatFilter(e.target.value)}
                                    >
                                        <option value="">すべて</option>
                                        {[0, 1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}個</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <p className="mt-3 text-xs text-gray-400 border-t border-gray-700/50 pt-3">
                    Showing {filteredCards.length} {filteredCards.length === 1 ? 'result' : 'results'} out of {masterCards.length} unique cards.
                </p>
            </div>

            {/* Grid */}
            <div
                className="grid gap-2"
                style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
            >
                {filteredCards.slice(0, displayLimit).map((card) => {
                    const cardVariants = variantsMap.get(card.master_id) || [];
                    const displayVariant = cardVariants[0];

                    return (
                        <div
                            key={card.master_id}
                            onClick={() => setSelectedCard(card)}
                            className="relative group transition duration-300 hover:scale-[1.03] hover:z-20 cursor-pointer"
                        >
                            {/* Image only */}
                            <div className="w-full aspect-[63/88] rounded-md flex items-center justify-center overflow-hidden bg-transparent drop-shadow-lg relative">
                                {displayVariant?.image_url ? (
                                    <Image
                                        src={`https://www.pokemon-card.com${displayVariant.image_url}`}
                                        alt={card.name}
                                        fill
                                        className="object-contain"
                                        sizes={`(max-width: 768px) ${Math.floor(100 / 3)}vw, (max-width: 1200px) ${Math.floor(100 / 6)}vw, ${Math.floor(100 / gridCols)}vw`}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-800 border border-gray-600 flex items-center justify-center">
                                        <span className="text-gray-400 text-xs italic text-center px-1">{card.name}<br />(No Image)</span>
                                    </div>
                                )}
                            </div>

                        </div>
                    );
                })}
            </div>

            {filteredCards.length > displayLimit && (
                <div className="pt-8 pb-12 flex justify-center">
                    <button
                        onClick={() => setDisplayLimit(prev => prev + 100)}
                        className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                    >
                        <span>もっと見る</span>
                        <span className="bg-emerald-800/50 px-2 py-0.5 rounded text-xs">({displayLimit} / {filteredCards.length})</span>
                    </button>
                </div>
            )}

            {/* Modal */}
            {selectedCard && (
                <CardModal
                    card={selectedCard}
                    variants={variantsMap.get(selectedCard.master_id) || []}
                    isOpen={!!selectedCard}
                    onClose={() => setSelectedCard(null)}
                    onEvolutionsClick={(evoName) => {
                        setQuery(evoName);
                        setSelectedCard(null);
                    }}
                />
            )}
        </div>
    );
}
