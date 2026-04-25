import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MasterCard, CardVariant } from '../../lib/data';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

type QAEntry = {
    question: string;
    answer: string;
    cards: { name: string; cardId: string }[];
};

type QAData = {
    directQA: QAEntry[];
    relatedQA: { entry: QAEntry; reason: string; sharedTags: string[] }[];
};

function QAItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full text-left px-3 py-2.5 flex items-start gap-2 hover:bg-gray-800/60 transition-colors"
            >
                <span className="text-blue-400 font-bold text-xs mt-0.5 flex-shrink-0">Q</span>
                <span className="text-gray-200 text-sm leading-snug flex-1">{q}</span>
                <span className="text-gray-500 text-xs flex-shrink-0 mt-0.5">{open ? '▲' : '▼'}</span>
            </button>
            {open && (
                <div className="px-3 pb-3 pt-1 border-t border-gray-700 bg-gray-950/40 flex gap-2">
                    <span className="text-emerald-400 font-bold text-xs mt-0.5 flex-shrink-0">A</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
                </div>
            )}
        </div>
    );
}

function QASection({ title, count, defaultOpen, children }: {
    title: string;
    count: number;
    defaultOpen: boolean;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-700 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/60 hover:bg-gray-800 transition-colors"
            >
                <span className="font-bold text-sm text-gray-200">{title}</span>
                <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">{count}件</span>
                    <span className="text-gray-400 text-xs">{open ? '▲' : '▼'}</span>
                </div>
            </button>
            {open && <div className="p-3 space-y-2">{children}</div>}
        </div>
    );
}

interface CardModalProps {
    card: MasterCard;
    variants: CardVariant[];
    isOpen: boolean;
    onClose: () => void;
    onEvolutionsClick?: (evoName: string) => void;
}

export default function CardModal({ card, variants, isOpen, onClose, onEvolutionsClick }: CardModalProps) {
    const [selectedVariant, setSelectedVariant] = React.useState<CardVariant | null>(null);
    const [dragOffset, setDragOffset] = React.useState(0);
    const dragStartY = React.useRef(0);
    const [qaData, setQaData] = useState<QAData | null>(null);
    const [qaLoading, setQaLoading] = useState(false);
    const [mainImgError, setMainImgError] = useState(false);
    const [thumbErrors, setThumbErrors] = useState<Set<string>>(new Set());

    useBodyScrollLock();

    useEffect(() => {
        if (variants && variants.length > 0) {
            setSelectedVariant(variants[0]);
            setMainImgError(false);
            setThumbErrors(new Set());
        }
    }, [variants, isOpen]);

    useEffect(() => {
        if (!isOpen || !variants || variants.length === 0) return;
        setQaData(null);
        setQaLoading(true);
        const ids = variants.map(v => v.official_id);
        fetch('/api/qa', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variantIds: ids }),
        })
            .then(r => r.json())
            .then(data => { setQaData(data); setQaLoading(false); })
            .catch(() => setQaLoading(false));
    }, [isOpen, variants]);

    // Handle escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen || !card) return null;

    const getTypeColor = (type: string) => {
        const colors: Record<string, string> = {
            'grass': 'bg-green-600',
            'fire': 'bg-red-500',
            'water': 'bg-blue-500',
            'lightning': 'bg-yellow-400',
            'psychic': 'bg-purple-500',
            'fighting': 'bg-orange-600',
            'dark': 'bg-gray-800',
            'steel': 'bg-slate-400',
            'fairy': 'bg-pink-400',
            'dragon': 'bg-yellow-600',
            'colorless': 'bg-gray-400',
        };
        return colors[type] || 'bg-gray-600';
    };

    const onSwipeStart = (e: React.TouchEvent) => {
        dragStartY.current = e.touches[0].clientY;
    };
    const onSwipeMove = (e: React.TouchEvent) => {
        const dy = e.touches[0].clientY - dragStartY.current;
        if (dy > 4) setDragOffset(dy);
    };
    const onSwipeEnd = () => {
        if (dragOffset > 90) { onClose(); } else { setDragOffset(0); }
    };

    return (
        // Overlay: bottom-sheet on mobile, centered dialog on sm+
        <div
            className="fixed inset-0 z-[100] backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 overscroll-none"
            style={{ backgroundColor: dragOffset > 0 ? `rgba(0,0,0,${Math.max(0, 0.8 - dragOffset / 300)})` : 'rgba(0,0,0,0.8)' }}
            onClick={onClose}
        >
            <div
                className="relative w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-gray-900 border border-emerald-500/50 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden modal-sheet"
                style={{
                    maxHeight: '92svh',
                    minHeight: '65svh',
                    paddingBottom: 'env(safe-area-inset-bottom)',
                    transform: `translateY(${dragOffset}px)`,
                    transition: dragOffset > 0 ? 'none' : 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
                    opacity: dragOffset > 60 ? Math.max(0.3, 1 - (dragOffset - 60) / 200) : 1,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Swipe-to-dismiss zone: drag handle + mobile top bar (mobile only) */}
                <div
                    className="flex-shrink-0 sm:hidden"
                    style={{ touchAction: 'none' }}
                    onTouchStart={onSwipeStart}
                    onTouchMove={onSwipeMove}
                    onTouchEnd={onSwipeEnd}
                >
                    <div className="flex justify-center py-2" aria-hidden="true">
                        <div className={`w-12 h-1.5 rounded-full transition-colors ${dragOffset > 0 ? 'bg-gray-300' : 'bg-gray-500'}`} />
                    </div>
                    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-gray-900">
                        <span className="font-bold text-white text-base truncate" title={card.name}>{card.name}</span>
                        <button
                            onClick={onClose}
                            className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-gray-800 hover:bg-red-500/80 text-gray-300 hover:text-white rounded-full transition-colors ml-2 touch-manipulation"
                            aria-label="閉じる"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Desktop close button — sm+ */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 w-11 h-11 hidden sm:flex items-center justify-center bg-gray-800 hover:bg-red-500/80 text-gray-300 hover:text-white rounded-full transition-colors touch-manipulation"
                    aria-label="閉じる"
                >
                    ✕
                </button>

                {/* Scroll-fade gradient at bottom — hints that content is scrollable (mobile only) */}
                <div
                    aria-hidden="true"
                    className="sm:hidden absolute bottom-0 left-0 right-0 pointer-events-none z-20 flex items-end justify-center pb-4"
                    style={{
                        height: 'calc(3rem + env(safe-area-inset-bottom, 0px))',
                        background: 'linear-gradient(to top, rgb(17,24,39) 50%, transparent 100%)',
                    }}
                >
                    <span className="text-gray-500 text-xs">▼ スクロール</span>
                </div>

                {/* Content area: stacked on mobile, side-by-side on sm+ */}
                <div className="flex flex-col sm:flex-row flex-1 min-h-0 overflow-y-auto overscroll-contain sm:overflow-hidden custom-scrollbar">

                    {/* Left: Image + Variants */}
                    <div className="w-full sm:w-5/12 bg-gray-950 border-b sm:border-b-0 sm:border-r border-gray-800 sm:flex-shrink-0 sm:overflow-hidden sm:flex sm:flex-col sm:min-h-0">

                        {/* Mobile: compact horizontal row (image left, quick meta right) */}
                        {/* SM+: vertically stacked (image centered, then variants) */}
                        <div className="flex flex-row sm:flex-col sm:flex-1 sm:min-h-0">

                            {/* Card image */}
                            <div className="p-2 sm:p-3 flex-shrink-0 flex sm:justify-center sm:border-b sm:border-gray-800/50 sm:bg-gray-900/20">
                                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-gray-800/50 drop-shadow-2xl w-[45vw] max-w-[180px] min-w-[120px] sm:w-full sm:max-w-[180px] md:max-w-[240px]">
                                    {selectedVariant?.image_url && !mainImgError ? (
                                        <Image
                                            src={`https://www.pokemon-card.com${selectedVariant.image_url}`}
                                            alt={card.name}
                                            width={176}
                                            height={246}
                                            style={{ width: '100%', height: 'auto' }}
                                            className="object-contain block"
                                            priority
                                            onError={() => setMainImgError(true)}
                                        />
                                    ) : (
                                        <div className="w-full aspect-[63/88] flex items-center justify-center text-gray-500 text-xs text-center px-2">
                                            No Image Available
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile-only: key meta to the right of image */}
                            <div className="sm:hidden flex-1 min-w-0 px-2 py-2 flex flex-col gap-1.5 justify-center">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-gray-400 text-xs font-bold px-1.5 py-0.5 bg-gray-800 rounded leading-tight">{card.card_kind || 'Unknown'}</span>
                                    {card.pokedexNo && <span className="text-gray-500 text-xs">No.{card.pokedexNo}</span>}
                                </div>
                                <div className="flex items-center gap-2">
                                    {card.hp && <span className="text-red-400 font-bold text-xl leading-none">HP {card.hp}</span>}
                                    {card.type && (
                                        <div className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 ${getTypeColor(card.type)}`} title={card.type} />
                                    )}
                                </div>
                                {selectedVariant && (
                                    <div className="space-y-1">
                                        <p className="text-sm text-gray-300 line-clamp-2 leading-tight">{selectedVariant.set_name}{selectedVariant.set_number && ` (${selectedVariant.set_number})`}</p>
                                        <div className="flex gap-1 flex-wrap items-center">
                                            {selectedVariant.rarity && <span className="text-sm text-yellow-400 font-semibold leading-tight">{selectedVariant.rarity}</span>}
                                            {selectedVariant.regulation && <span className="text-sm font-mono bg-gray-800 px-1 py-0.5 rounded text-gray-300">[{selectedVariant.regulation}]</span>}
                                        </div>
                                        {selectedVariant.illustrator && <p className="text-sm text-emerald-400 truncate">{selectedVariant.illustrator}</p>}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Variant thumbnails: horizontal scroll on mobile, wrap on desktop */}
                        {variants.length > 1 && (
                            <div className="px-2 pb-2 sm:p-4 bg-gray-950 sm:flex-grow sm:overflow-y-auto custom-scrollbar border-t border-gray-800/40 sm:border-t-0">
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider my-1 sm:mb-3 text-center">Other Variants</h4>
                                <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center overscroll-x-contain">
                                    {variants.map((v) => (
                                        <button
                                            key={v.official_id}
                                            onClick={() => { setSelectedVariant(v); setMainImgError(false); }}
                                            className={`relative flex-shrink-0 w-11 sm:w-12 md:w-14 aspect-[63/88] rounded-md overflow-hidden border-2 transition-all touch-manipulation ${selectedVariant?.official_id === v.official_id ? 'border-emerald-500 scale-110 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                                            title={`${v.set_name} / ${v.rarity || 'No Rarity'}`}
                                        >
                                            {v.image_url && !thumbErrors.has(v.official_id) && (
                                                <Image
                                                    src={`https://www.pokemon-card.com${v.image_url}`}
                                                    alt={v.set_name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="60px"
                                                    onError={() => setThumbErrors(prev => new Set(prev).add(v.official_id))}
                                                />
                                            )}
                                            {v.rarity && (
                                                <div className="absolute bottom-0 inset-x-0 bg-black/70 text-[8px] text-center font-bold text-white py-0.5 pointer-events-none">
                                                    {v.rarity}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Card Data — scrolls independently on sm+; flows naturally on mobile */}
                    <div className="flex-1 min-w-0 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col bg-gray-900 sm:overflow-y-auto sm:overscroll-contain custom-scrollbar text-base leading-relaxed text-gray-300" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>

                        {/* Mobile-only: card name shown in scroll area (top bar only has truncated name) */}
                        <div className="sm:hidden mb-3 pb-3 border-b border-gray-800">
                            <h2 className="text-lg font-black text-white leading-tight break-words">{card.name}</h2>
                            {card.pokedexCategory && (
                                <p className="text-gray-500 text-sm mt-0.5">
                                    {card.pokedexCategory}
                                    {(card.height || card.weight) && ` / 高さ: ${card.height} / 重さ: ${card.weight}`}
                                </p>
                            )}
                        </div>

                        {/* Header: Name, HP, Type — shown at sm+ */}
                        {/* pr-14 reserves space for the absolute-positioned close button (right-3 + w-11 = 56px) */}
                        <div className="hidden sm:flex flex-row items-start justify-between gap-4 mb-6 pb-4 border-b border-gray-800 pt-2 sm:pt-4 pr-14">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <span className="text-gray-400 text-xs font-bold px-2 py-0.5 bg-gray-800 rounded">{card.card_kind || 'Unknown'}</span>
                                    {card.pokedexNo && <span className="text-gray-500 text-xs">No.{card.pokedexNo}</span>}
                                </div>
                                <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight break-words">{card.name}</h2>
                                {card.pokedexCategory && (
                                    <p className="text-gray-400 text-xs mt-1 leading-snug">{card.pokedexCategory} / 高さ: {card.height} / 重さ: {card.weight}</p>
                                )}
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                {card.hp && <span className="text-xl font-bold text-red-400">HP {card.hp}</span>}
                                {card.type && (
                                    <div className={`w-8 h-8 rounded-full shadow-inner flex items-center justify-center border border-white/20 ${getTypeColor(card.type)}`} title={card.type}>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Meta: set, rarity, illustrator, regulation — shown at sm+ */}
                        <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-2 bg-gray-950 rounded-lg p-4 mb-6 border border-gray-800 text-xs">
                            {selectedVariant && (
                                <>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-gray-500">収録</span>
                                        <span className="text-white font-medium break-words">{selectedVariant.set_name} {selectedVariant.set_number && `(${selectedVariant.set_number})`}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-500">レアリティ</span>
                                        <span className="text-yellow-400 font-bold">{selectedVariant.rarity || 'N/A'}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-500">イラスト</span>
                                        <span className="text-emerald-400 font-medium">{selectedVariant.illustrator || 'Unknown'}</span>
                                    </div>
                                    {selectedVariant.regulation && (
                                        <div className="flex flex-col">
                                            <span className="text-gray-500">レギュ</span>
                                            <span className="text-white font-bold bg-gray-800 px-2 rounded mt-0.5 w-max">{selectedVariant.regulation}</span>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Evolutions */}
                        {card.evolutions && card.evolutions.length > 0 && (
                            <div className="mb-4 sm:mb-6">
                                <h3 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">進化ツリー</h3>
                                <div className="flex flex-wrap gap-2">
                                    {card.evolutions.map(evo => (
                                        <button
                                            key={evo}
                                            onClick={() => onEvolutionsClick && onEvolutionsClick(evo)}
                                            className={`px-3 py-2 min-h-[44px] text-sm rounded-full border transition-colors touch-manipulation ${evo === card.name ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold' : 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                        >
                                            {evo}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Abilities, Attacks, Rules */}
                        <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                            {card.abilities.map((ability, i) => (
                                <div key={`ab-${i}`} className="bg-emerald-950/30 border border-emerald-900/50 rounded-lg p-4">
                                    <h3 className="font-bold text-emerald-400 flex items-center gap-2 mb-2 text-base">
                                        <span className="bg-emerald-600 text-white text-xs px-1.5 py-0.5 rounded tracking-wider">特性</span>
                                        {ability.name}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-base">{ability.text}</p>
                                </div>
                            ))}

                            {card.attacks.map((attack, i) => (
                                <div key={`at-${i}`} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-start mb-2 gap-2">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="flex gap-0.5 shrink-0">
                                                {attack.cost.length > 0 ? attack.cost.map((c, j) => (
                                                    <div key={j} className={`w-5 h-5 rounded-full border border-white/20 shadow-inner ${getTypeColor(c)}`} title={c}></div>
                                                )) : (
                                                    <div className="w-5 h-5 rounded-full border border-gray-600 border-dashed"></div>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-blue-300 text-base break-words min-w-0">{attack.name}</h3>
                                        </div>
                                        <span className="font-black text-xl text-white shrink-0">{attack.damage}</span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-base">{attack.text}</p>
                                </div>
                            ))}

                            {card.rules.map((rule, i) => (
                                <div key={`ru-${i}`} className="bg-purple-950/20 border border-purple-900/50 rounded-lg p-3">
                                    <p className="text-purple-300 text-base leading-relaxed font-medium">{rule}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats: Weakness, Resistance, Retreat */}
                        {(card.weakness?.type || card.resistance?.type || card.retreatCost > 0) && (
                            <div className="grid grid-cols-3 gap-2 mb-4 sm:mb-6 border-t border-gray-800 pt-4 sm:pt-6">
                                <div className="flex flex-col items-center p-2 sm:p-3 bg-gray-950 rounded-lg border border-gray-800">
                                    <span className="text-xs text-gray-500 font-bold mb-2">弱点</span>
                                    <div className="flex items-center gap-2">
                                        {card.weakness?.type ? (
                                            <>
                                                <div className={`w-5 h-5 rounded-full ${getTypeColor(card.weakness.type)}`}></div>
                                                <span className="font-bold">{card.weakness.value}</span>
                                            </>
                                        ) : <span className="text-gray-600">-</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-2 sm:p-3 bg-gray-950 rounded-lg border border-gray-800">
                                    <span className="text-xs text-gray-500 font-bold mb-2">抵抗力</span>
                                    <div className="flex items-center gap-2">
                                        {card.resistance?.type ? (
                                            <>
                                                <div className={`w-5 h-5 rounded-full ${getTypeColor(card.resistance.type)}`}></div>
                                                <span className="font-bold">{card.resistance.value}</span>
                                            </>
                                        ) : <span className="text-gray-600">-</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-2 sm:p-3 bg-gray-950 rounded-lg border border-gray-800">
                                    <span className="text-xs text-gray-500 font-bold mb-2">にげる</span>
                                    <div className="flex flex-wrap gap-0.5 mt-1 justify-center">
                                        {card.retreatCost > 0 ? (
                                            [...Array(card.retreatCost)].map((_, i) => (
                                                <div key={i} className="w-4 h-4 rounded-full bg-gray-400 border border-white/20"></div>
                                            ))
                                        ) : <span className="text-gray-600">-</span>}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Flavor Text */}
                        {card.flavor_text && (
                            <div className="mt-6 italic text-gray-400 bg-gray-950 p-4 rounded-lg border-l-4 border-gray-800">
                                {card.flavor_text}
                            </div>
                        )}

                        {/* Q&A Section */}
                        {(qaLoading || (qaData && (qaData.directQA.length > 0 || qaData.relatedQA.length > 0))) && (
                            <div className="mt-6 space-y-3">
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">裁定Q&A</h3>
                                {qaLoading && (
                                    <div className="text-gray-500 text-sm py-4 text-center">読み込み中…</div>
                                )}
                                {qaData && qaData.directQA.length > 0 && (
                                    <QASection
                                        title="直接Q&A — このカードを直接参照"
                                        count={qaData.directQA.length}
                                        defaultOpen={true}
                                    >
                                        {qaData.directQA.map((qa, i) => (
                                            <QAItem key={i} q={qa.question} a={qa.answer} />
                                        ))}
                                    </QASection>
                                )}
                                {qaData && qaData.relatedQA.length > 0 && (
                                    <QASection
                                        title="関連Q&A — 同グループのカードに関する裁定"
                                        count={qaData.relatedQA.length}
                                        defaultOpen={false}
                                    >
                                        {qaData.relatedQA.map(({ entry, reason, sharedTags }, i) => (
                                            <div key={i} className="space-y-1">
                                                <p className="text-xs text-amber-600/80 bg-amber-950/20 border border-amber-900/30 rounded px-2 py-1 leading-snug">
                                                    {sharedTags && sharedTags.length > 0
                                                        ? `共通タグ: ${sharedTags.join(' / ')}`
                                                        : reason}
                                                </p>
                                                <QAItem q={entry.question} a={entry.answer} />
                                            </div>
                                        ))}
                                    </QASection>
                                )}
                            </div>
                        )}

                        {/* Mobile scroll spacer — ensures content clears the bottom gradient */}
                        <div
                            className="sm:hidden flex-shrink-0"
                            style={{ height: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))' }}
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
