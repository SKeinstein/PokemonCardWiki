"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { MasterCard, CardVariant, MasterCardTag } from "../../lib/data";
import CardModal from "./CardModal";
import ComparisonTray from "./ComparisonTray";
import ComparisonModal from "./ComparisonModal";

type Props = {
    masterCards: MasterCard[];
    variants: CardVariant[];
    cardTags: MasterCardTag[];
};

export default function CardSearch({ masterCards, variants, cardTags }: Props) {
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

    // Comparison state
    const [comparisonCards, setComparisonCards] = useState<MasterCard[]>([]);
    const [showComparison, setShowComparison] = useState(false);

    const toggleComparison = (card: MasterCard, e: React.MouseEvent) => {
        e.stopPropagation();
        setComparisonCards(prev => {
            const exists = prev.some(c => c.master_id === card.master_id);
            if (exists) return prev.filter(c => c.master_id !== card.master_id);
            if (prev.length >= 4) return prev;
            return [...prev, card];
        });
    };

    // Tag filter state
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
    const [expandedParents, setExpandedParents] = useState<Set<string>>(new Set());
    const [showTagPanel, setShowTagPanel] = useState(false);

    // Set initial grid columns based on screen width for mobile-friendly defaults
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) setGridCols(3);
            else if (window.innerWidth < 1024) setGridCols(5);
        }
    }, []);

    // Reset pagination when search parameters change
    useEffect(() => {
        setDisplayLimit(100);
    }, [query, typeFilter, effectQuery, categoryFilter, regFilter, isOrSearch, weaknessFilter, resistanceFilter, retreatFilter, selectedTags]);

    // Normalize katakana→hiragana so kana search is script-agnostic
    const normalizeKana = (str: string) =>
        str.replace(/[\u30A1-\u30F6]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));

    // Helper to evaluate AND / OR / NOT search logic
    const evaluateQuery = (text: string, query: string, isOr: boolean) => {
        if (!query.trim()) return true;

        const terms = query.trim().split(/\s+/);
        const normalizedText = normalizeKana(text.toLowerCase());

        const requiredTerms = terms.filter((t) => !t.startsWith('-'));
        const minusTerms = terms.filter((t) => t.startsWith('-') && t.length > 1).map((t) => t.substring(1));

        // Fail immediately if any minus term matches
        for (const mt of minusTerms) {
            if (normalizedText.includes(normalizeKana(mt.toLowerCase()))) return false;
        }

        if (requiredTerms.length === 0) return true; // Only minus terms requested

        if (isOr) {
            return requiredTerms.some((rt) => normalizedText.includes(normalizeKana(rt.toLowerCase())));
        } else {
            return requiredTerms.every((rt) => normalizedText.includes(normalizeKana(rt.toLowerCase())));
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

    // Map masterId → Set of tags for O(1) lookup
    const tagCardMap = useMemo(() => {
        const map = new Map<string, Set<string>>();
        for (const entry of cardTags) {
            map.set(entry.masterId, new Set(entry.tags));
        }
        return map;
    }, [cardTags]);

    // Build tag hierarchy: parentTag → [child full tag strings]
    const tagHierarchy = useMemo(() => {
        const hierarchy = new Map<string, string[]>();
        for (const entry of cardTags) {
            for (const tag of entry.tags) {
                const gtIdx = tag.indexOf('>');
                const parent = gtIdx >= 0 ? tag.substring(0, gtIdx) : tag;
                if (!hierarchy.has(parent)) hierarchy.set(parent, []);
                if (gtIdx >= 0) {
                    const children = hierarchy.get(parent)!;
                    if (!children.includes(tag)) children.push(tag);
                }
            }
        }
        return hierarchy;
    }, [cardTags]);

    // Sorted parent tag keys
    const sortedParents = useMemo(() => Array.from(tagHierarchy.keys()).sort(), [tagHierarchy]);

    // Check if a card matches a given tag (parent = prefix match, subtag = exact)
    const cardMatchesTag = (masterId: string, tag: string): boolean => {
        const tags = tagCardMap.get(masterId);
        if (!tags || tags.size === 0) return false;
        if (!tag.includes('>')) {
            // Parent tag: match cards with this exact tag OR any subtag
            for (const t of tags) {
                if (t === tag || t.startsWith(tag + '>')) return true;
            }
            return false;
        }
        return tags.has(tag);
    };

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => {
            const next = new Set(prev);
            if (next.has(tag)) next.delete(tag);
            else next.add(tag);
            return next;
        });
    };

    const toggleExpand = (parent: string) => {
        setExpandedParents(prev => {
            const next = new Set(prev);
            if (next.has(parent)) next.delete(parent);
            else next.add(parent);
            return next;
        });
    };

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

            // 6. Tag Filter (AND: card must match every selected tag)
            if (selectedTags.size > 0) {
                for (const tag of selectedTags) {
                    if (!cardMatchesTag(card.master_id, tag)) return false;
                }
            }

            return true;
        });
    }, [masterCards, query, typeFilter, categoryFilter, regFilter, effectQuery, isOrSearch, weaknessFilter, resistanceFilter, retreatFilter, variantsMap, selectedTags, tagCardMap]);

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
        <div className={`w-full px-2 py-2 sm:py-4 space-y-4 ${comparisonCards.length > 0 ? "pb-24" : ""}`}>
            {/* Search Header */}
            <div className="sticky top-2 z-40 bg-gray-900/95 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-700/80 mb-4 transition-all max-h-[90svh] overflow-y-auto sm:max-h-none sm:overflow-y-visible custom-scrollbar">
                <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-2 sm:mb-4">
                    Pokémon Card Advanced Search
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                    <input
                        type="text"
                        placeholder="カード名で検索..."
                        className="col-span-2 sm:col-span-1 px-3 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition touch-manipulation"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="テキスト・ワザ検索..."
                        className="px-3 py-2 min-h-[44px] text-base sm:text-sm border border-emerald-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-emerald-400/70 touch-manipulation"
                        value={effectQuery}
                        onChange={(e) => setEffectQuery(e.target.value)}
                    />

                    <select
                        className="px-3 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition touch-manipulation"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="">すべてのカード</option>
                        <option value="pokemon">ポケモン</option>
                        <option value="trainer">トレーナーズ</option>
                        <option value="energy">エネルギー</option>
                    </select>

                    <select
                        className="px-3 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition touch-manipulation"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option value="">すべてのタイプ</option>
                        {allTypes.map(t => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>

                    <select
                        className="px-3 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition touch-manipulation"
                        value={regFilter}
                        onChange={(e) => setRegFilter(e.target.value)}
                    >
                        <option value="">全レギュ</option>
                        {allRegulations.map(r => (
                            <option key={r} value={r}>[{r}] マーク</option>
                        ))}
                    </select>

                    <div className="col-span-2 sm:col-span-1 flex items-center space-x-2 bg-gray-800 px-3 py-2 min-h-[44px] rounded-lg border border-gray-600">
                        <label className="text-gray-300 text-xs font-bold whitespace-nowrap hidden sm:inline">サイズ:</label>
                        <input
                            type="range"
                            min="2"
                            max="15"
                            value={gridCols}
                            onChange={(e) => setGridCols(parseInt(e.target.value))}
                            className="w-full accent-blue-500 touch-manipulation"
                        />
                        <span className="text-gray-400 text-xs w-6 text-right">{gridCols}列</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-3">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition bg-emerald-900/30 px-3 py-2 min-h-[44px] rounded-lg border border-emerald-800/50 flex-1 sm:flex-none touch-manipulation"
                        >
                            {showAdvanced ? "▼ 検索ヘルプを閉じる" : "▶ 高度な検索のコツを見る"}
                        </button>

                        <button
                            onClick={() => setShowTagPanel(!showTagPanel)}
                            className="text-sm font-medium text-violet-400 hover:text-violet-300 flex items-center justify-center gap-2 transition bg-violet-900/30 px-3 py-2 min-h-[44px] rounded-lg border border-violet-800/50 flex-1 sm:flex-none touch-manipulation"
                        >
                            {showTagPanel ? "▼ タグ絞り込みを閉じる" : "▶ タグで絞り込む"}
                            {selectedTags.size > 0 && (
                                <span className="bg-violet-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                    {selectedTags.size}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* AND / OR Toggle */}
                    <div className="flex items-center space-x-2 bg-gray-800/80 px-3 rounded-lg border border-gray-700 w-full sm:w-auto min-h-[44px]">
                        <span className="text-xs font-bold text-gray-400 whitespace-nowrap">検索モード:</span>
                        <label className="flex items-center space-x-1.5 cursor-pointer min-h-[44px] px-2 touch-manipulation">
                            <input type="radio" checked={!isOrSearch} onChange={() => setIsOrSearch(false)} className="accent-blue-500 w-4 h-4" />
                            <span className={`text-xs ${!isOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>AND</span>
                        </label>
                        <label className="flex items-center space-x-1.5 cursor-pointer min-h-[44px] px-2 touch-manipulation">
                            <input type="radio" checked={isOrSearch} onChange={() => setIsOrSearch(true)} className="accent-blue-500 w-4 h-4" />
                            <span className={`text-xs ${isOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>OR</span>
                        </label>
                    </div>
                </div>

                {/* Advanced Panel */}
                {showAdvanced && (
                    <div className="mt-4 p-3 sm:p-4 bg-gray-900/60 border border-gray-700 rounded-lg text-sm text-gray-300 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[50vh] overflow-y-auto md:max-h-none">
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
                                        className="px-2 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                                        className="px-2 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
                                        className="px-2 py-2 min-h-[44px] text-base sm:text-sm border border-gray-600 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
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

                {/* Tag Filter Panel */}
                {showTagPanel && (
                    <div className="mt-3 p-3 bg-gray-900/60 border border-violet-800/40 rounded-lg space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[50vh] overflow-y-auto md:max-h-none">

                        {/* Selected tag chips */}
                        {selectedTags.size > 0 && (
                            <div className="flex flex-wrap gap-1.5 items-center pb-2 border-b border-violet-900/50">
                                <span className="text-xs text-gray-400 font-bold whitespace-nowrap">選択中:</span>
                                {Array.from(selectedTags).map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className="flex items-center gap-1 px-2.5 py-2 min-h-[44px] bg-violet-600 border border-violet-500 text-white text-xs rounded-full hover:bg-violet-700 transition touch-manipulation"
                                    >
                                        <span>{tag.includes('>') ? tag.replace('>', ' › ') : tag}</span>
                                        <span className="text-violet-200 font-bold">×</span>
                                    </button>
                                ))}
                                <button
                                    onClick={() => setSelectedTags(new Set())}
                                    className="text-xs text-violet-400 hover:text-violet-200 underline ml-1 py-2 min-h-[44px] px-1"
                                >
                                    全解除
                                </button>
                            </div>
                        )}

                        {/* Parent category chips */}
                        <div className="flex flex-wrap gap-1.5">
                            {sortedParents.map(parent => {
                                const children = tagHierarchy.get(parent)!;
                                const isSelected = selectedTags.has(parent);
                                const isExpanded = expandedParents.has(parent);
                                const hasChildren = children.length > 0;

                                return (
                                    <div key={parent} className="inline-flex rounded-full overflow-hidden">
                                        <button
                                            onClick={() => toggleTag(parent)}
                                            className={`px-2.5 min-h-[44px] text-xs font-medium border-y border-l transition touch-manipulation ${
                                                hasChildren ? 'rounded-l-full' : 'rounded-full border-r'
                                            } ${
                                                isSelected
                                                    ? 'bg-violet-600 border-violet-500 text-white'
                                                    : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-violet-500 hover:text-violet-300'
                                            }`}
                                        >
                                            {parent}
                                        </button>
                                        {hasChildren && (
                                            <button
                                                onClick={() => toggleExpand(parent)}
                                                className={`px-2 min-h-[44px] text-xs border-y border-r rounded-r-full transition touch-manipulation ${
                                                    isSelected
                                                        ? 'bg-violet-700 border-violet-500 text-violet-200'
                                                        : 'bg-gray-700 border-gray-600 text-gray-400 hover:border-violet-500 hover:text-violet-300'
                                                } ${isExpanded ? 'text-violet-300' : ''}`}
                                            >
                                                {isExpanded ? '▲' : '▼'}
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Sub-tag rows for expanded parents */}
                        {Array.from(expandedParents).map(parent => {
                            const children = tagHierarchy.get(parent);
                            if (!children || children.length === 0) return null;
                            return (
                                <div key={parent} className="pl-3 border-l-2 border-violet-700/50">
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        <span className="text-xs text-violet-400/80 font-bold whitespace-nowrap">{parent}:</span>
                                        {[...children].sort().map(child => {
                                            const childLabel = child.substring(parent.length + 1);
                                            const isChildSelected = selectedTags.has(child);
                                            return (
                                                <button
                                                    key={child}
                                                    onClick={() => toggleTag(child)}
                                                    className={`px-2.5 py-2 min-h-[44px] text-xs rounded-full border transition touch-manipulation ${
                                                        isChildSelected
                                                            ? 'bg-violet-600 border-violet-500 text-white'
                                                            : 'bg-gray-800/80 border-violet-900/50 text-gray-300 hover:border-violet-500 hover:text-violet-300'
                                                    }`}
                                                >
                                                    {childLabel}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
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
                    const inComparison = comparisonCards.some(c => c.master_id === card.master_id);
                    const comparisonFull = comparisonCards.length >= 4 && !inComparison;

                    return (
                        <div
                            key={card.master_id}
                            onClick={() => setSelectedCard(card)}
                            className="relative group transition duration-300 hover:scale-[1.03] hover:z-20 cursor-pointer"
                        >
                            {/* Image */}
                            <div className={`w-full aspect-[63/88] rounded-md flex items-center justify-center overflow-hidden bg-transparent drop-shadow-lg relative ${inComparison ? "ring-2 ring-blue-500 ring-offset-1 ring-offset-gray-900" : ""}`}>
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

                                {/* Compare toggle button — always visible on mobile, hover-only on desktop */}
                                <button
                                    onClick={(e) => toggleComparison(card, e)}
                                    disabled={comparisonFull}
                                    className={`absolute top-1 right-1 w-9 h-9 sm:w-7 sm:h-7 rounded-full text-xs font-black flex items-center justify-center shadow-lg transition-all touch-manipulation
                                        ${inComparison
                                            ? "bg-blue-600 text-white opacity-100"
                                            : comparisonFull
                                                ? "bg-gray-700 text-gray-500 opacity-40 sm:opacity-0 sm:group-hover:opacity-60 cursor-not-allowed"
                                                : "bg-gray-900/80 text-gray-300 hover:bg-blue-600 hover:text-white opacity-60 sm:opacity-0 sm:group-hover:opacity-100"
                                        }`}
                                    title={inComparison ? "比較から外す" : comparisonFull ? "最大4枚まで" : "比較に追加"}
                                    aria-label={inComparison ? "比較から外す" : "比較に追加"}
                                >
                                    {inComparison ? "✓" : "+"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredCards.length > displayLimit && (
                <div className="pt-8 pb-12 flex justify-center px-4">
                    <button
                        onClick={() => setDisplayLimit(prev => prev + 100)}
                        className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 touch-manipulation"
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

            {/* Comparison tray */}
            <ComparisonTray
                cards={comparisonCards}
                variantsMap={variantsMap}
                onRemoveCard={(id) => setComparisonCards(prev => prev.filter(c => c.master_id !== id))}
                onCompare={() => setShowComparison(true)}
                onClear={() => setComparisonCards([])}
            />

            {/* Comparison modal */}
            {showComparison && (
                <ComparisonModal
                    cards={comparisonCards}
                    variantsMap={variantsMap}
                    onClose={() => setShowComparison(false)}
                    onRemoveCard={(id) => {
                        const next = comparisonCards.filter(c => c.master_id !== id);
                        setComparisonCards(next);
                        if (next.length < 2) setShowComparison(false);
                    }}
                />
            )}
        </div>
    );
}
