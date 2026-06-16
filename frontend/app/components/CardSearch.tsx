"use client";

import { useState, useEffect, useMemo, useDeferredValue, useRef } from "react";
import { MasterCard, CardVariant, MasterCardTag, CostEntry, OfficialClassIndex, KagglePool } from "../../lib/data";
import { pickDisplayVariant } from "../../lib/variantUtils";
import { typeLabel } from "../../lib/typeUtils";
import {
    OFFICIAL_CLASS_GROUPS,
    CUSTOM_TAG_GROUPS,
    OTHER_CUSTOM_TAG_GROUP_LABEL,
    ATTACK_FACET_COLUMNS,
    ATTACK_FACET_TAGS,
    DEFENSE_FACET_COLUMNS,
    DEFENSE_FACET_TAGS,
    RULE_TERMS_TAGS,
    getCustomTagToken,
    officialTagLabel,
    type CustomTagToken,
} from "../../lib/tagColors";
import CardModal from "./CardModal";
import ComparisonTray from "./ComparisonTray";
import ComparisonModal from "./ComparisonModal";
import HpRangeSlider, { HpRange } from "./HpRangeSlider";

type Props = {
    masterCards: MasterCard[];
    variants: CardVariant[];
    cardTags: MasterCardTag[];
    costIndex: CostEntry[];
    officialClassIndex: OfficialClassIndex;
    kagglePool: KagglePool;
};

const HP_MIN = 30;
const HP_MAX = 380;

const GENERIC_RULES = new Set([
    "グッズは、自分の番に何枚でも使える。",
    "サポートは、自分の番に1枚しか使えない。",
    "ポケモンのどうぐは、自分の番に何枚でも、自分のポケモンにつけられる。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
    "スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
    "ACE SPECのカードは、デッキに1枚しか入れられない。",
    "ポケモンのどうぐは、自分のポケモンにつけて使う。ポケモン1匹につき1枚だけつけられ、つけたままにする。",
    "サポーターは、自分の番に1枚だけ使える。使ったら、自分のバトル場の横におき、自分の番の終わりにトラッシュ。",
    "スタジアムは、自分の番に1枚だけ、バトル場の横に出せる。別の名前のスタジアムが場に出たなら、このカードをトラッシュする。",
]);

type CardKindOption =
    | { kind: 'category'; value: string; label: string }
    | { kind: 'final_evo'; label: string }
    | { kind: 'kaggle_pool'; mode: 'in' | 'out'; label: string }
    | { kind: 'official_tag'; tag: string; label: string };

const CARD_KIND_OPTIONS: CardKindOption[] = [
    { kind: 'category', value: 'pokemon', label: 'ポケモン' },
    { kind: 'final_evo', label: '最終進化のみ' },
    { kind: 'kaggle_pool', mode: 'in', label: 'Kaggle ABC' },
    { kind: 'kaggle_pool', mode: 'out', label: '非Kaggle ABC' },
    { kind: 'official_tag', tag: 'たねポケモン', label: 'たねポケモン' },
    { kind: 'official_tag', tag: '1進化ポケモン', label: '1進化ポケモン' },
    { kind: 'official_tag', tag: '2進化ポケモン', label: '2進化ポケモン' },
    { kind: 'official_tag', tag: 'ルールを持つポケモン', label: 'ルールを持つポケモン' },
    { kind: 'official_tag', tag: 'ワザマシン', label: 'ワザマシン' },
    { kind: 'category', value: 'グッズ', label: 'グッズ' },
    { kind: 'category', value: 'サポート', label: 'サポート' },
    { kind: 'category', value: 'スタジアム', label: 'スタジアム' },
    { kind: 'category', value: 'ポケモンのどうぐ', label: 'ポケモンのどうぐ' },
    { kind: 'category', value: 'energy', label: 'エネルギー' },
];


export default function CardSearch({ masterCards, variants, cardTags, costIndex, officialClassIndex, kagglePool }: Props) {
    const [query, setQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [effectQuery, setEffectQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [gridCols, setGridCols] = useState(4); // mobile-first default (375px); hydration sets correct value per breakpoint
    const [maxGridCols, setMaxGridCols] = useState(15);
    const [isMobile, setIsMobile] = useState(false);
    const facetGridRef = useRef<HTMLDivElement | null>(null);
    const [facetTemplate, setFacetTemplate] = useState<string | null>(null);
    const defenseFacetGridRef = useRef<HTMLDivElement | null>(null);
    const [defenseFacetTemplate, setDefenseFacetTemplate] = useState<string | null>(null);
    const [isOrSearch, setIsOrSearch] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [selectedCard, setSelectedCard] = useState<MasterCard | null>(null);
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

    const [hpRange, setHpRange] = useState<HpRange>({ min: HP_MIN, max: HP_MAX });
    const [weaknessFilter, setWeaknessFilter] = useState("");
    const [resistanceFilter, setResistanceFilter] = useState("");
    const [retreatFilter, setRetreatFilter] = useState("");
    const [costTypeFilter, setCostTypeFilter] = useState("");
    const [costCountFilters, setCostCountFilters] = useState<Set<number>>(new Set());
    const [displayLimit, setDisplayLimit] = useState(100);
    const [filtersExpanded, setFiltersExpanded] = useState(false);
    const [finalEvoOnly, setFinalEvoOnly] = useState(false);
    const [kagglePoolFilter, setKagglePoolFilter] = useState<'off' | 'in' | 'out'>('off');

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
    const [isTagOrSearch, setIsTagOrSearch] = useState(false);

    // Official classification filter state
    const [selectedOfficialTags, setSelectedOfficialTags] = useState<Set<string>>(new Set());

    // Set grid columns based on viewport on mount and update on resize
    useEffect(() => {
        const getDefaultCols = (w: number) => w < 640 ? 4 : w < 1024 ? 5 : 4;
        const getMaxCols = (w: number) => w < 640 ? 6 : w < 1024 ? 10 : 15;

        setGridCols(getDefaultCols(window.innerWidth));
        setMaxGridCols(getMaxCols(window.innerWidth));
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            const max = getMaxCols(window.innerWidth);
            setMaxGridCols(max);
            setGridCols(prev => Math.min(prev, max));
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ファセット枠の列幅最適化 (攻撃・防御 共通): 全列の最大段数 k を最小化する。
    // 各列について「k段以内に収まる最小幅 m_i(k)」を実測チップ幅から二分探索で求め、
    // Σm_i(k) がコンテナに入る最小の k を採用。余り幅は m_i 比例で分配 (minmax の fr)。
    useEffect(() => {
        const grids: [HTMLDivElement | null, (t: string | null) => void][] = [
            [facetGridRef.current, setFacetTemplate],
            [defenseFacetGridRef.current, setDefenseFacetTemplate],
        ];
        const CHIP_GAP = 6;   // gap-1.5
        const PANEL_PAD = 18; // p-2 ×2 + border ×2
        const COL_GAP = 8;    // gap-2

        const rowsAt = (ws: number[], width: number) => {
            let rows = 1, cur = 0;
            for (const w of ws) {
                if (cur === 0) cur = w;
                else if (cur + CHIP_GAP + w <= width) cur += CHIP_GAP + w;
                else { rows++; cur = w; }
            }
            return rows;
        };
        const minWidthFor = (ws: number[], k: number) => {
            let lo = Math.max(...ws);
            let hi = ws.reduce((a, b) => a + b + CHIP_GAP, -CHIP_GAP);
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (rowsAt(ws, mid) <= k) hi = mid; else lo = mid + 1;
            }
            return lo;
        };

        const observers: ResizeObserver[] = [];
        for (const [el, setTemplate] of grids) {
            if (!el || isMobile) { setTemplate(null); continue; }
            const chipWidths = (Array.from(el.children) as HTMLElement[]).map(panel =>
                Array.from(panel.querySelectorAll('button')).map(b => Math.ceil(b.getBoundingClientRect().width))
            );
            if (chipWidths.some(ws => ws.length === 0)) continue;

            const compute = () => {
                const W = el.clientWidth - COL_GAP * (chipWidths.length - 1);
                for (let k = 1; k <= 6; k++) {
                    const mins = chipWidths.map(ws => minWidthFor(ws, k) + PANEL_PAD);
                    if (mins.reduce((a, b) => a + b, 0) <= W || k === 6) {
                        setTemplate(mins.map(m => `minmax(${m}px, ${m}fr)`).join(' '));
                        return;
                    }
                }
            };
            compute();
            const ro = new ResizeObserver(compute);
            ro.observe(el);
            observers.push(ro);
        }
        return () => observers.forEach(o => o.disconnect());
        // showTagPanel: 枠はパネルを開くまで DOM に無いため、開いたときに再計測する
    }, [isMobile, showTagPanel]);

    // Reset pagination when search parameters change
    useEffect(() => {
        setDisplayLimit(100);
    }, [query, effectQuery, typeFilter, categoryFilter, isOrSearch, weaknessFilter, resistanceFilter, retreatFilter, costTypeFilter, costCountFilters, selectedTags, isTagOrSearch, hpRange, selectedOfficialTags, finalEvoOnly, kagglePoolFilter]);

    // Deferred values for expensive filter inputs — keeps input field responsive during rapid typing
    const deferredQuery = useDeferredValue(query);
    const deferredEffectQuery = useDeferredValue(effectQuery);
    const isFilterStale = deferredQuery !== query || deferredEffectQuery !== effectQuery;

    // Normalize katakana→hiragana so kana search is script-agnostic
    const normalizeKana = (str: string) =>
        str.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));

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

    // Map masterId → per-attack cost list for energy cost filtering (built from pre-computed cost_index.json)
    const costMap = useMemo(() => {
        const map = new Map<string, { total: number; types: Set<string> }[]>();
        for (const entry of costIndex) {
            map.set(entry.masterId, entry.attacks.map(a => ({ total: a.total, types: new Set(a.types) })));
        }
        return map;
    }, [costIndex]);

    const kagglePoolSet = useMemo(() => new Set(kagglePool.matched_master_ids), [kagglePool]);

    const finalEvoSet = useMemo(() => {
        const stageOf = (kind: string) => kind === '2 進化' ? 2 : kind === '1 進化' ? 1 : kind === 'たね' ? 0 : -1;
        const nameToMaxStage = new Map<string, number>();
        for (const card of masterCards) {
            const s = stageOf(card.card_kind);
            if (s < 0) continue;
            for (const evoName of card.evolutions) {
                const cur = nameToMaxStage.get(evoName) ?? -1;
                if (s > cur) nameToMaxStage.set(evoName, s);
            }
        }
        const result = new Set<string>();
        for (const card of masterCards) {
            const s = stageOf(card.card_kind);
            if (s < 0) continue;
            const maxS = nameToMaxStage.get(card.name) ?? s;
            if (s >= maxS) result.add(card.master_id);
        }
        return result;
    }, [masterCards]);

    const officialClassMap = useMemo(() => {
        const map = new Map<string, Set<string>>();
        for (const card of masterCards) {
            const cardVariants = variantsMap.get(card.master_id) ?? [];
            const tagSet = new Set<string>();
            for (const v of cardVariants) {
                const tags = officialClassIndex[v.official_id];
                if (tags) for (const t of tags) tagSet.add(t);
            }
            if (tagSet.size > 0) map.set(card.master_id, tagSet);
        }
        return map;
    }, [masterCards, variantsMap, officialClassIndex]);

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

    const customTagParents = useMemo(
        () => Array.from(tagHierarchy.keys()).sort((a, b) => a.localeCompare(b, 'ja')),
        [tagHierarchy]
    );

    // Group parents by axis (Phase 33 視覚グループ化): defined groups first in declaration
    // order, then "その他" with everything else. Empty groups (no usable parents) are skipped.
    const customTagSections = useMemo(() => {
        const parentSet = new Set(customTagParents);
        const claimed = new Set<string>();
        const sections: { label: string; parents: string[] }[] = [];
        for (const group of CUSTOM_TAG_GROUPS) {
            const matched = group.parents.filter(p => parentSet.has(p));
            if (matched.length === 0) continue;
            matched.forEach(p => claimed.add(p));
            sections.push({ label: group.label, parents: matched });
        }
        // attack/defense facet tags live in the dedicated frames, not the generic panel.
        // rule-term tags are link-only (Phase 33-AC) — never shown as a filter chip.
        const others = customTagParents.filter(p => !claimed.has(p) && !ATTACK_FACET_TAGS.has(p) && !DEFENSE_FACET_TAGS.has(p) && !RULE_TERMS_TAGS.has(p));
        if (others.length > 0) sections.push({ label: OTHER_CUSTOM_TAG_GROUP_LABEL, parents: others });
        return sections;
    }, [customTagParents]);

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

    // 攻撃ファセット: 列内は単一選択（同列の他ボタンを外してから付ける、再タップで解除）
    const selectFacetTag = (columnParents: string[], tag: string) => {
        setSelectedTags(prev => {
            const next = new Set(prev);
            const had = next.has(tag);
            for (const p of columnParents) next.delete(p);
            if (!had) next.add(tag);
            return next;
        });
    };

    const selectedFacetTags = useMemo(
        () => ATTACK_FACET_COLUMNS
            .map(col => col.parents.find(p => selectedTags.has(p)))
            .filter((p): p is string => !!p),
        [selectedTags]
    );

    const clearFacetTags = () => {
        setSelectedTags(prev => {
            const next = new Set(prev);
            for (const p of ATTACK_FACET_TAGS) next.delete(p);
            return next;
        });
    };

    const selectedDefenseFacetTags = useMemo(
        () => DEFENSE_FACET_COLUMNS
            .map(col => col.parents.find(p => selectedTags.has(p)))
            .filter((p): p is string => !!p),
        [selectedTags]
    );

    const clearDefenseFacetTags = () => {
        setSelectedTags(prev => {
            const next = new Set(prev);
            for (const p of DEFENSE_FACET_TAGS) next.delete(p);
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

    const toggleOfficialTag = (tag: string) => {
        setSelectedOfficialTags(prev => {
            const next = new Set(prev);
            if (next.has(tag)) next.delete(tag);
            else next.add(tag);
            return next;
        });
    };

    const hpFilterActive = hpRange.min > HP_MIN || hpRange.max < HP_MAX;

    const anyFilterActive = !!(
        query || deferredQuery || effectQuery || deferredEffectQuery || typeFilter || categoryFilter ||
        weaknessFilter || resistanceFilter || retreatFilter || costTypeFilter ||
        costCountFilters.size > 0 || hpFilterActive || selectedOfficialTags.size > 0 || selectedTags.size > 0 ||
        isOrSearch || finalEvoOnly
    );

    const resetAllFilters = () => {
        setQuery('');
        setEffectQuery('');
        setTypeFilter('');
        setCategoryFilter('');
        setWeaknessFilter('');
        setResistanceFilter('');
        setRetreatFilter('');
        setCostTypeFilter('');
        setCostCountFilters(new Set());
        setHpRange({ min: HP_MIN, max: HP_MAX });
        setSelectedTags(new Set());
        setSelectedOfficialTags(new Set());
        setIsOrSearch(false);
        setIsTagOrSearch(false);
        setFinalEvoOnly(false);
    };

    const filteredCards = useMemo(() => {
        return masterCards.filter((card) => {
            // 1. Text Query (Name)
            if (deferredQuery && !evaluateQuery(card.name, deferredQuery, isOrSearch)) {
                return false;
            }

            // 2. Type Filter
            if (typeFilter && card.type !== typeFilter) {
                return false;
            }

            // 3. Category Filter (uses card_kind from official HTML)
            if (categoryFilter) {
                const kind = card.card_kind || '';
                const trainerKinds = ['グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ'];
                const energyKinds = ['基本エネルギー', '特殊エネルギー'];
                const pokemonKinds = ['たね', '1 進化', '2 進化'];

                if (categoryFilter === 'pokemon') {
                    if (!pokemonKinds.includes(kind)) return false;
                } else if (categoryFilter === 'energy') {
                    if (!energyKinds.includes(kind)) return false;
                } else if (trainerKinds.includes(categoryFilter)) {
                    // Specific trainer kind selected (グッズ/サポート/スタジアム/ポケモンのどうぐ)
                    if (kind !== categoryFilter) return false;
                }
            }

            // 4. HP Filter (only when slider moved off defaults; null-HP cards excluded)
            if (hpFilterActive) {
                if (card.hp === null) return false;
                if (card.hp < hpRange.min || card.hp > hpRange.max) return false;
            }

            // Weakness Filter
            if (weaknessFilter && card.weakness?.type !== weaknessFilter) return false;

            // Resistance Filter
            if (resistanceFilter && card.resistance?.type !== resistanceFilter) return false;

            // Retreat Cost Filter
            if (retreatFilter) {
                if (retreatFilter === '4+') { if ((card.retreatCost ?? 0) < 4) return false; }
                else if (card.retreatCost !== parseInt(retreatFilter)) return false;
            }

            // Energy Cost Filter — at least one attack must satisfy ALL active constraints simultaneously
            if (costTypeFilter || costCountFilters.size > 0) {
                const atkList = costMap.get(card.master_id);
                if (!atkList || atkList.length === 0) return false;
                const hasMatch = atkList.some(atk => {
                    if (costTypeFilter && !atk.types.has(costTypeFilter)) return false;
                    if (costCountFilters.size > 0 && !costCountFilters.has(Math.min(atk.total, 5))) return false;
                    return true;
                });
                if (!hasMatch) return false;
            }

            // 6. Effect Text Query — 特性名/ワザ名/テキスト全結合
            if (deferredEffectQuery) {
                const effectText = [
                    ...card.abilities.map(a => `${a.name} ${a.text}`),
                    ...card.attacks.map(a => `${a.name} ${a.text}`),
                    ...(card.rules || []).filter(r => !GENERIC_RULES.has(r)),
                ].join(' ');
                if (!evaluateQuery(effectText, deferredEffectQuery, isOrSearch)) return false;
            }

            // 7. Tag Filter — all tags share the same selectedTags set.
            //    AND/OR is governed by isTagOrSearch.
            if (selectedTags.size > 0) {
                if (isTagOrSearch) {
                    let anyMatch = false;
                    for (const tag of selectedTags) {
                        if (cardMatchesTag(card.master_id, tag)) { anyMatch = true; break; }
                    }
                    if (!anyMatch) return false;
                } else {
                    for (const tag of selectedTags) {
                        if (!cardMatchesTag(card.master_id, tag)) return false;
                    }
                }
            }

            // 8. Official Classification Filter — OR across selected tags
            if (selectedOfficialTags.size > 0) {
                const tags = officialClassMap.get(card.master_id);
                let match = false;
                for (const t of selectedOfficialTags) {
                    if (tags?.has(t)) { match = true; break; }
                }
                if (!match) return false;
            }

            // 9. Final Evolution Filter
            if (finalEvoOnly && !finalEvoSet.has(card.master_id)) return false;

            // 10. Kaggle ABC Pool Filter
            if (kagglePoolFilter === 'in' && !kagglePoolSet.has(card.master_id)) return false;
            if (kagglePoolFilter === 'out' && kagglePoolSet.has(card.master_id)) return false;

            return true;
        });
    }, [masterCards, deferredQuery, deferredEffectQuery, typeFilter, categoryFilter, isOrSearch, weaknessFilter, resistanceFilter, retreatFilter, costTypeFilter, costCountFilters, costMap, selectedTags, tagCardMap, isTagOrSearch, hpFilterActive, hpRange.min, hpRange.max, selectedOfficialTags, officialClassMap, finalEvoOnly, finalEvoSet, kagglePoolFilter, kagglePoolSet]);

    // Unique types for filter
    const allTypes = useMemo(() => {
        const types = new Set<string>();
        masterCards.forEach(c => c.type && types.add(c.type));
        return Array.from(types).sort();
    }, [masterCards]);

    // Render a parent tag chip + expand button (parent name click = toggle expand, never filter)
    const renderParentChip = (parent: string, token: CustomTagToken) => {
        const children = tagHierarchy.get(parent) || [];
        const isSelected = selectedTags.has(parent);
        const isExpanded = expandedParents.has(parent);
        const hasChildren = children.length > 0;

        return (
            <div
                key={parent}
                className={`inline-flex rounded-full overflow-hidden transition ${isExpanded ? token.ring : ''}`}
            >
                <button
                    onClick={() => hasChildren ? toggleExpand(parent) : toggleTag(parent)}
                    className={`inline-flex items-center justify-center px-2.5 min-h-[44px] min-w-[44px] text-sm sm:text-xs font-medium border-y border-l transition touch-manipulation ${
                        hasChildren ? 'rounded-l-full' : 'rounded-full border-r'
                    } ${
                        isSelected && !hasChildren
                            ? token.chipSelected
                            : isExpanded
                                ? token.chipExpanded
                                : token.chipDefault
                    }`}
                >
                    {parent}
                </button>
                {hasChildren && (
                    <button
                        onClick={() => toggleExpand(parent)}
                        aria-label={isExpanded ? `${parent} を閉じる` : `${parent} を開く`}
                        className={`min-w-[44px] min-h-[44px] flex items-center justify-center text-xs border-y border-r rounded-r-full transition touch-manipulation ${
                            isSelected
                                ? token.expandSelected
                                : isExpanded
                                    ? token.expandExpanded
                                    : token.expandDefault
                        }`}
                    >
                        {isExpanded ? '▲' : '▶'}
                    </button>
                )}
            </div>
        );
    };

    const renderSubtagRow = (parent: string, token: CustomTagToken) => {
        const children = tagHierarchy.get(parent);
        if (!children || children.length === 0) return null;
        if (!expandedParents.has(parent)) return null;
        return (
            <div key={parent} className={`pl-3 border-l-2 ${token.subtagBorder}`}>
                <div className="flex flex-wrap items-center gap-1.5">
                    <span className={`text-sm sm:text-xs font-bold whitespace-nowrap ${token.subtagLabel}`}>{parent}:</span>
                    {[...children].sort((a, b) => a.localeCompare(b, 'ja')).map(child => {
                        const childLabel = child.substring(parent.length + 1);
                        const isChildSelected = selectedTags.has(child);
                        return (
                            <button
                                key={child}
                                onClick={() => toggleTag(child)}
                                className={`px-2.5 py-2 min-h-[44px] min-w-[44px] text-sm sm:text-xs rounded-full border transition touch-manipulation ${
                                    isChildSelected ? token.subtagSelected : token.subtagDefault
                                }`}
                            >
                                {childLabel}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const officialFilterCount = [
        categoryFilter, typeFilter,
        weaknessFilter, resistanceFilter, retreatFilter, costTypeFilter,
        costCountFilters.size > 0 ? 'x' : '',
        hpFilterActive ? 'x' : '',
        selectedOfficialTags.size > 0 ? 'x' : '',
        finalEvoOnly ? 'x' : '',
        kagglePoolFilter !== 'off' ? 'x' : '',
    ].filter(Boolean).length;

    const customTagSelectedCount = selectedTags.size;

    return (
        <div
            className="w-full px-2 py-2 sm:py-4 space-y-4"
            style={comparisonCards.length > 0 ? { paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))' } : undefined}
        >
            {/* Search Header */}
            <div className="sticky top-0 z-40 bg-gray-900/95 p-3 sm:p-4 rounded-xl shadow-2xl backdrop-blur-md border border-gray-700/80 mb-4 transition-all max-h-[60svh] overflow-y-auto overscroll-contain sm:max-h-none sm:overflow-y-visible custom-scrollbar">
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <h1 className="text-lg sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        Pokémon Card Advanced Search
                    </h1>
                    <button
                        type="button"
                        onClick={resetAllFilters}
                        className={`text-xs font-bold text-red-400 hover:text-red-200 bg-red-900/30 hover:bg-red-900/50 border border-red-800/60 px-3 py-1.5 min-h-[36px] rounded-lg transition touch-manipulation whitespace-nowrap${anyFilterActive ? '' : ' invisible pointer-events-none'}`}
                    >
                        ✕ リセット
                    </button>
                </div>

                {/* Top filter grid:
                     mobile  (< 640px)  — 2 cols: inputs span both cols; selects/slider 1 col each
                     sm      (640–1024) — 4 cols: inputs share row, selects + slider on next row
                     lg      (1024px+)  — 6 cols: all controls on a single row                   */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                    <input
                        type="text"
                        inputMode="search"
                        enterKeyHint="search"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        placeholder="カード名で検索..."
                        className={`col-span-2 sm:col-span-2 lg:col-span-2 px-3 py-2 min-h-[44px] text-base sm:text-sm border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition touch-manipulation ${query ? 'border-blue-400 bg-blue-900/20' : 'border-gray-600 bg-gray-800'}`}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <input
                        type="text"
                        inputMode="search"
                        enterKeyHint="search"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck={false}
                        placeholder="特性名・ワザ名・テキスト検索..."
                        className={`col-span-2 sm:col-span-2 lg:col-span-2 px-3 py-2 min-h-[44px] text-base sm:text-sm border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition placeholder-emerald-400/70 touch-manipulation ${effectQuery ? 'border-emerald-400 bg-emerald-900/30' : 'border-emerald-600 bg-gray-800'}`}
                        value={effectQuery}
                        onChange={(e) => setEffectQuery(e.target.value)}
                    />

                    {/* Grid columns slider: hidden on mobile until filter toggle is expanded; always visible on sm+ */}
                    <div className={`col-span-2 sm:col-span-2 lg:col-span-2 items-center gap-2 bg-gray-800 px-3 py-2 min-h-[44px] rounded-lg border border-gray-600 ${filtersExpanded ? 'flex' : 'hidden sm:flex'}`}>
                        <label className="text-gray-300 text-sm font-bold whitespace-nowrap">列:</label>
                        <input
                            type="range"
                            min="2"
                            max={maxGridCols}
                            value={Math.min(gridCols, maxGridCols)}
                            onChange={(e) => setGridCols(parseInt(e.target.value))}
                            className="grid-col-slider w-full accent-blue-500 touch-manipulation cursor-pointer"
                        />
                        <span className="text-gray-400 text-sm w-8 text-right font-mono">{gridCols}</span>
                    </div>
                </div>

                {/* Mobile: filter expand/collapse toggle */}
                <button
                    onClick={() => setFiltersExpanded(prev => !prev)}
                    className="sm:hidden w-full flex items-center justify-center gap-2 mt-2 py-2 min-h-[44px] text-sm font-medium text-gray-400 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700 transition touch-manipulation"
                >
                    <span>{filtersExpanded ? '▲ 列数スライダー' : '▼ 列数スライダー'}</span>
                </button>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-3">
                    <div className="flex flex-row flex-wrap gap-2">
                        <button
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className={`text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-2 transition px-3 py-2 min-h-[44px] rounded-lg border flex-1 sm:flex-none sm:w-auto touch-manipulation ${officialFilterCount > 0 ? 'bg-emerald-900/50 border-emerald-500/70' : 'bg-emerald-900/30 border-emerald-800/50'}`}
                        >
                            {showAdvanced ? "▼ 公式フィルター" : "▶ 公式フィルター"}
                            {officialFilterCount > 0 && (
                                <span className="bg-emerald-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                    {officialFilterCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setShowTagPanel(!showTagPanel)}
                            className={`text-sm font-medium text-violet-400 hover:text-violet-300 flex items-center justify-center gap-2 transition px-3 py-2 min-h-[44px] rounded-lg border flex-1 sm:flex-none sm:w-auto touch-manipulation ${customTagSelectedCount > 0 ? 'bg-violet-900/50 border-violet-500/70' : 'bg-violet-900/30 border-violet-800/50'}`}
                        >
                            {showTagPanel ? "▼ 独自タグ" : "▶ 独自タグ"}
                            {customTagSelectedCount > 0 && (
                                <span className="bg-violet-600 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                    {customTagSelectedCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* AND / OR Toggle */}
                    <div className={`flex items-center space-x-2 px-3 rounded-lg border w-full sm:w-auto min-h-[44px] transition ${isOrSearch ? 'bg-violet-900/20 border-violet-600/60' : 'bg-gray-800/80 border-gray-700'}`}>
                        <span className="text-sm font-bold text-gray-400 whitespace-nowrap">検索モード:</span>
                        <label className="flex items-center space-x-1.5 cursor-pointer min-h-[44px] px-2 touch-manipulation">
                            <input type="radio" checked={!isOrSearch} onChange={() => setIsOrSearch(false)} className="accent-blue-500 w-4 h-4" />
                            <span className={`text-sm ${!isOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>AND</span>
                        </label>
                        <label className="flex items-center space-x-1.5 cursor-pointer min-h-[44px] px-2 touch-manipulation">
                            <input type="radio" checked={isOrSearch} onChange={() => setIsOrSearch(true)} className="accent-blue-500 w-4 h-4" />
                            <span className={`text-sm ${isOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>OR</span>
                        </label>
                    </div>
                </div>

                {/* 公式フィルター Panel (HP / ルール種別 / 弱点 / 抵抗力 / にげる / コスト / 〜のポケモン / 特殊連動) */}
                {showAdvanced && (
                    <div className="mt-4 p-3 sm:p-4 bg-gray-900/60 border border-emerald-800/40 rounded-lg text-sm text-gray-300 space-y-4 animate-in duration-200">
                        {officialFilterCount > 0 && (
                            <div className="flex justify-end -mt-1">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setCategoryFilter('');
                                        setTypeFilter('');
                                        setWeaknessFilter('');
                                        setResistanceFilter('');
                                        setRetreatFilter('');
                                        setCostTypeFilter('');
                                        setCostCountFilters(new Set());
                                        setHpRange({ min: HP_MIN, max: HP_MAX });
                                        setSelectedOfficialTags(new Set());
                                        setFinalEvoOnly(false);
                                        setKagglePoolFilter('off');
                                    }}
                                    className="text-xs text-emerald-400 hover:text-emerald-200 underline py-1"
                                >
                                    全解除
                                </button>
                            </div>
                        )}

                        {/* カード種別 + タイプ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-bold">カード種別</label>
                                <div className="flex flex-wrap gap-1.5">
                                    {CARD_KIND_OPTIONS.map(o => {
                                        const isSelected =
                                            o.kind === 'category' ? categoryFilter === o.value
                                            : o.kind === 'final_evo' ? finalEvoOnly
                                            : o.kind === 'kaggle_pool' ? kagglePoolFilter === o.mode
                                            : selectedOfficialTags.has(o.tag);
                                        const handleClick = () => {
                                            if (o.kind === 'category') {
                                                setCategoryFilter(categoryFilter === o.value ? '' : o.value);
                                            } else if (o.kind === 'final_evo') {
                                                setFinalEvoOnly(prev => !prev);
                                            } else if (o.kind === 'kaggle_pool') {
                                                setKagglePoolFilter(prev => prev === o.mode ? 'off' : o.mode);
                                            } else {
                                                toggleOfficialTag(o.tag);
                                            }
                                        };
                                        return (
                                            <button
                                                key={o.kind === 'category' ? o.value : o.kind === 'official_tag' ? o.tag : o.kind === 'kaggle_pool' ? `kaggle_pool_${o.mode}` : 'final_evo'}
                                                type="button"
                                                onClick={handleClick}
                                                className={`px-2.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition touch-manipulation ${
                                                    isSelected
                                                        ? 'bg-sky-600 border-sky-500 text-white'
                                                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-sky-500 hover:text-sky-300'
                                                }`}
                                            >
                                                {o.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-bold">タイプ</label>
                                <div className="flex flex-wrap gap-1.5">
                                    {allTypes.map(t => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setTypeFilter(typeFilter === t ? '' : t)}
                                            className={`px-2.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition touch-manipulation ${
                                                typeFilter === t
                                                    ? 'bg-emerald-600 border-emerald-500 text-white'
                                                    : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-300'
                                            }`}
                                        >
                                            {typeLabel(t)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 特別なカード・キャラクター */}
                        <div className="space-y-3">
                            {OFFICIAL_CLASS_GROUPS.filter(group => group.label !== 'カード種別').map(group => (
                                <div key={group.label} className="space-y-1.5">
                                    <label className="text-xs text-gray-400 font-bold">{group.label}</label>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.tags.map(tag => {
                                            const isSelected = selectedOfficialTags.has(tag);
                                            return (
                                                <button
                                                    key={tag}
                                                    type="button"
                                                    onClick={() => toggleOfficialTag(tag)}
                                                    className={`px-2.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition touch-manipulation ${
                                                        isSelected ? group.token.active : group.token.inactive
                                                    }`}
                                                >
                                                    {officialTagLabel(tag)}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* HP slider */}
                        <div className={`max-w-sm transition ${hpFilterActive ? 'rounded-lg p-1 border border-violet-500/60 bg-violet-900/10' : ''}`}>
                            <HpRangeSlider value={hpRange} onChange={setHpRange} />
                        </div>

                        {/* ワザのエネルギー + ワザコスト数 横並び */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-bold">ワザのエネルギー</label>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {['grass','fire','water','electric','psychic','fighting','dark','steel','none'].map(t => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setCostTypeFilter(costTypeFilter === t ? '' : t)}
                                            className={`px-2.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition touch-manipulation ${
                                                costTypeFilter === t
                                                    ? 'bg-emerald-600 border-emerald-500 text-white'
                                                    : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-300'
                                            }`}
                                        >
                                            {typeLabel(t)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs text-gray-400 font-bold">ワザコスト数</label>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {[0, 1, 2, 3, 4, 5].map(n => {
                                        const checked = costCountFilters.has(n);
                                        return (
                                            <button
                                                key={n}
                                                type="button"
                                                onClick={() => setCostCountFilters(prev => {
                                                    const next = new Set(prev);
                                                    if (next.has(n)) next.delete(n);
                                                    else next.add(n);
                                                    return next;
                                                })}
                                                className={`px-2.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition touch-manipulation ${
                                                    checked
                                                        ? 'bg-emerald-600 border-emerald-500 text-white'
                                                        : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-300'
                                                }`}
                                            >
                                                {n === 5 ? '5+' : `${n}`}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* にげる */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400 font-bold">にげる</label>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {(['0','1','2','3','4+'] as const).map(v => (
                                    <button
                                        key={v}
                                        type="button"
                                        onClick={() => setRetreatFilter(retreatFilter === v ? '' : v)}
                                        className={`px-2.5 py-1.5 min-h-[36px] text-xs font-medium rounded-full border transition touch-manipulation ${
                                            retreatFilter === v
                                                ? 'bg-emerald-600 border-emerald-500 text-white'
                                                : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-300'
                                        }`}
                                    >
                                        {v}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                )}

                {/* 独自タグ Panel */}
                {showTagPanel && (
                    <div className="mt-3 p-3 bg-gray-900/60 border border-violet-800/40 rounded-lg space-y-3 animate-in duration-200">

                        {/* Tag AND/OR toggle — always visible in tag panel */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 font-bold whitespace-nowrap">タグ結合:</span>
                            <label className="flex items-center gap-1 cursor-pointer min-h-[36px] px-2 touch-manipulation">
                                <input type="radio" checked={!isTagOrSearch} onChange={() => setIsTagOrSearch(false)} className="accent-violet-500 w-3.5 h-3.5" />
                                <span className={`text-xs ${!isTagOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>AND</span>
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer min-h-[36px] px-2 touch-manipulation">
                                <input type="radio" checked={isTagOrSearch} onChange={() => setIsTagOrSearch(true)} className="accent-violet-500 w-3.5 h-3.5" />
                                <span className={`text-xs ${isTagOrSearch ? 'text-white font-bold' : 'text-gray-400'}`}>OR</span>
                            </label>
                        </div>

                        {/* Selected tag chips */}
                        {selectedTags.size > 0 && (
                            <div className="flex flex-wrap gap-1.5 items-center pb-2 border-b border-violet-900/50">
                                <span className="text-xs text-gray-400 font-bold whitespace-nowrap">選択中:</span>
                                {Array.from(selectedTags).map(tag => {
                                    const parent = tag.indexOf('>') >= 0 ? tag.substring(0, tag.indexOf('>')) : tag;
                                    const token = getCustomTagToken(parent);
                                    return (
                                        <button
                                            key={tag}
                                            onClick={() => toggleTag(tag)}
                                            className={`flex items-center gap-1 px-2.5 py-2 min-h-[44px] min-w-[44px] border text-sm sm:text-xs rounded-full transition touch-manipulation ${token.chipSelected}`}
                                        >
                                            <span>{tag.includes('>') ? tag.replace('>', ' › ') : tag}</span>
                                            <span className="font-bold opacity-80">×</span>
                                        </button>
                                    );
                                })}
                                <button
                                    onClick={() => setSelectedTags(new Set())}
                                    className="text-xs text-violet-400 hover:text-violet-200 underline ml-1 py-2 min-h-[44px] px-3"
                                >
                                    全解除
                                </button>
                            </div>
                        )}

                        {/* 攻撃ファセット枠 — Phase 33-M: 4軸×列内単一選択 */}
                        <div className="space-y-2">
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider pb-1 border-b border-gray-800/70">
                                攻撃ダメージで絞り込む
                                <span className="ml-2 normal-case font-normal text-gray-500">各列から1つまで選択 — 選ばない列は絞り込まない</span>
                            </div>
                            {/* 全体の高さ最小化: 各列の幅を中身の文字量に比例配分 (①19字 ②12字 ③33字 ④12字 ≈ 5:4:10:4)。
                                どの列も同程度の段数で折り返す。チップ内改行は禁止 (whitespace-nowrap)。
                                PC では常に4枠横並び。inline style なのは Turbopack が arbitrary class を
                                HMR で拾い損ねるため (grid-cols-4 で実績あり) */}
                            <div
                                ref={facetGridRef}
                                className="grid gap-2 items-start"
                                style={{
                                    // モバイルは4軸を縦4段 (各軸全幅)、PCは段数最小化の実測最適分配
                                    gridTemplateColumns: isMobile
                                        ? '1fr'
                                        : facetTemplate ?? '5fr 4fr 10fr 4fr',
                                }}
                            >
                                {ATTACK_FACET_COLUMNS.map(col => (
                                    <div
                                        key={col.key}
                                        className="rounded-lg border border-gray-700/60 bg-gray-900/40 p-2 space-y-1.5 min-w-0"
                                    >
                                        <div className={`text-xs font-bold ${col.questionClass}`}>{col.question}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {col.parents.map(tag => {
                                                const isSelected = selectedTags.has(tag);
                                                return (
                                                    <button
                                                        key={tag}
                                                        onClick={() => selectFacetTag(col.parents, tag)}
                                                        className={`inline-flex items-center justify-center px-2.5 min-h-[44px] min-w-[44px] text-sm sm:text-xs font-medium whitespace-nowrap rounded-full border transition touch-manipulation ${
                                                            isSelected ? col.token.chipSelected : col.token.chipDefault
                                                        }`}
                                                    >
                                                        {tag}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {selectedFacetTags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-xs text-gray-300 px-1">
                                    <span className="text-gray-400 font-bold">選択中:</span>
                                    <span className="font-medium">{selectedFacetTags.join(' × ')}</span>
                                    <span className="text-gray-400">→ 該当 <span className="font-bold text-white">{filteredCards.length.toLocaleString()}</span> 枚</span>
                                    <button
                                        onClick={clearFacetTags}
                                        className="text-xs text-rose-400 hover:text-rose-200 underline py-1 px-2 touch-manipulation"
                                    >
                                        クリア
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* 防御ファセット枠 — Phase 33-N: 3軸×列内単一選択 */}
                        <div className="space-y-2">
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider pb-1 border-b border-gray-800/70">
                                防御・耐性で絞り込む
                                <span className="ml-2 normal-case font-normal text-gray-500">各列から1つまで選択 — 選ばない列は絞り込まない</span>
                            </div>
                            <div
                                ref={defenseFacetGridRef}
                                className="grid gap-2 items-start"
                                style={{
                                    gridTemplateColumns: isMobile
                                        ? '1fr'
                                        : defenseFacetTemplate ?? '8fr 6fr 5fr',
                                }}
                            >
                                {DEFENSE_FACET_COLUMNS.map(col => (
                                    <div
                                        key={col.key}
                                        className="rounded-lg border border-gray-700/60 bg-gray-900/40 p-2 space-y-1.5 min-w-0"
                                    >
                                        <div className={`text-xs font-bold ${col.questionClass}`}>{col.question}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {col.parents.map(tag => {
                                                const isSelected = selectedTags.has(tag);
                                                return (
                                                    <button
                                                        key={tag}
                                                        onClick={() => selectFacetTag(col.parents, tag)}
                                                        className={`inline-flex items-center justify-center px-2.5 min-h-[44px] min-w-[44px] text-sm sm:text-xs font-medium whitespace-nowrap rounded-full border transition touch-manipulation ${
                                                            isSelected ? col.token.chipSelected : col.token.chipDefault
                                                        }`}
                                                    >
                                                        {tag}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {selectedDefenseFacetTags.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-xs text-gray-300 px-1">
                                    <span className="text-gray-400 font-bold">選択中:</span>
                                    <span className="font-medium">{selectedDefenseFacetTags.join(' × ')}</span>
                                    <span className="text-gray-400">→ 該当 <span className="font-bold text-white">{filteredCards.length.toLocaleString()}</span> 枚</span>
                                    <button
                                        onClick={clearDefenseFacetTags}
                                        className="text-xs text-blue-400 hover:text-blue-200 underline py-1 px-2 touch-manipulation"
                                    >
                                        クリア
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Tag list — Phase 33 視覚グループ化: section per axis */}
                        <div className="space-y-4 pr-0.5">
                            {customTagSections.map(section => (
                                <div key={section.label} className="space-y-2">
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider pb-1 border-b border-gray-800/70">
                                        {section.label}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {section.parents.map(parent => renderParentChip(parent, getCustomTagToken(parent)))}
                                    </div>
                                    {section.parents.map(parent => renderSubtagRow(parent, getCustomTagToken(parent)))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            {/* Result count — outside the scrollable header so it's always visible on mobile */}
            <p className="text-sm text-gray-400 px-1 -mt-2">
                {filteredCards.length.toLocaleString()} / {masterCards.length.toLocaleString()} 件
            </p>

            {/* Grid */}
            <div
                className="grid gap-1 sm:gap-2 transition-opacity duration-150"
                style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`, opacity: isFilterStale ? 0.6 : 1 }}
            >
                {filteredCards.slice(0, displayLimit).map((card) => {
                    const cardVariants = variantsMap.get(card.master_id) || [];
                    const displayVariant = pickDisplayVariant(cardVariants);
                    const inComparison = comparisonCards.some(c => c.master_id === card.master_id);
                    const comparisonFull = comparisonCards.length >= 4 && !inComparison;

                    return (
                        <div
                            key={card.master_id}
                            onClick={() => setSelectedCard(card)}
                            className="relative group transition duration-300 hover:scale-[1.03] hover:z-20 cursor-pointer touch-manipulation select-none"
                        >
                            {/* Image */}
                            <div className={`w-full aspect-[63/88] rounded-md flex items-center justify-center overflow-hidden bg-transparent drop-shadow-lg relative ${inComparison ? "ring-2 ring-blue-500 ring-offset-1 ring-offset-gray-900" : ""}`}>
                                {displayVariant?.image_url && !failedImages.has(card.master_id) ? (
                                    <img
                                        src={`https://www.pokemon-card.com${displayVariant.image_url}`}
                                        alt={card.name}
                                        className="w-full h-full object-contain"
                                        onError={() => setFailedImages(prev => new Set(prev).add(card.master_id))}
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
                                    className={`absolute top-1 right-1 w-11 h-11 sm:w-7 sm:h-7 rounded-full text-xs font-black flex items-center justify-center shadow-lg transition-all touch-manipulation
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
                            {/* Card name label — mobile only, helps identify cards at a glance */}
                            <p className="sm:hidden mt-0.5 text-center text-sm text-gray-400 leading-tight truncate px-0.5 select-none">{card.name}</p>
                        </div>
                    );
                })}
            </div>

            {filteredCards.length > displayLimit && (
                <div className="pt-8 pb-12 flex justify-center px-4">
                    <button
                        onClick={() => setDisplayLimit(prev => prev + 100)}
                        className="w-full sm:w-auto px-8 py-3 min-h-[44px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 touch-manipulation"
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
                    tags={[...(tagCardMap.get(selectedCard.master_id) || [])]}
                    officialClassIndex={officialClassIndex}
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
