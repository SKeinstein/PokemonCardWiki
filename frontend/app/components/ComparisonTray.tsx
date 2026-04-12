"use client";

import Image from "next/image";
import { MasterCard, CardVariant } from "../../lib/data";

interface ComparisonTrayProps {
    cards: MasterCard[];
    variantsMap: Map<string, CardVariant[]>;
    onRemoveCard: (masterId: string) => void;
    onCompare: () => void;
    onClear: () => void;
}

export default function ComparisonTray({ cards, variantsMap, onRemoveCard, onCompare, onClear }: ComparisonTrayProps) {
    if (cards.length === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[150] bg-gray-900/95 backdrop-blur-md border-t border-gray-600 shadow-2xl" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <div className="max-w-7xl mx-auto px-3 py-2 flex items-center gap-3">
                {/* Label */}
                <div className="flex-shrink-0 hidden sm:flex flex-col items-center leading-tight">
                    <span className="text-xs font-bold text-gray-400">比較</span>
                    <span className="text-xs font-bold text-gray-400">{cards.length}/4</span>
                </div>

                {/* Card thumbnails */}
                <div className="flex gap-2 flex-1 overflow-x-auto py-0.5">
                    {cards.map((card) => {
                        const displayVariant = (variantsMap.get(card.master_id) || [])[0];
                        return (
                            <div key={card.master_id} className="relative flex-shrink-0 group">
                                <div className="w-12 aspect-[63/88] relative rounded overflow-hidden border border-blue-500/60 shadow-md">
                                    {displayVariant?.image_url ? (
                                        <Image
                                            src={`https://www.pokemon-card.com${displayVariant.image_url}`}
                                            alt={card.name}
                                            fill
                                            className="object-contain"
                                            sizes="48px"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                            <span className="text-gray-500 text-[8px] text-center leading-tight px-0.5">{card.name}</span>
                                        </div>
                                    )}
                                </div>
                                {/* Remove button — 36px on mobile (closest to 44px that fits on a 48px card), 28px on desktop */}
                                <button
                                    onClick={() => onRemoveCard(card.master_id)}
                                    className="absolute -top-3 -right-3 w-9 h-9 sm:-top-2 sm:-right-2 sm:w-7 sm:h-7 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow transition-colors touch-manipulation"
                                    title={`${card.name}を外す`}
                                    aria-label={`${card.name}を比較から外す`}
                                >
                                    ✕
                                </button>
                            </div>
                        );
                    })}

                    {/* Empty slots */}
                    {Array.from({ length: 4 - cards.length }).map((_, i) => (
                        <div
                            key={`empty-${i}`}
                            className="flex-shrink-0 w-12 aspect-[63/88] rounded border border-dashed border-gray-600 bg-gray-800/40 flex items-center justify-center"
                        >
                            <span className="text-gray-600 text-lg font-thin">+</span>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex-shrink-0 flex items-center gap-2">
                    <button
                        onClick={onClear}
                        className="text-xs text-gray-400 hover:text-gray-200 transition underline min-h-[44px] px-2 touch-manipulation"
                    >
                        クリア
                    </button>
                    <button
                        onClick={onCompare}
                        disabled={cards.length < 2}
                        className="px-4 min-h-[44px] bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-colors shadow touch-manipulation whitespace-nowrap"
                    >
                        比較する
                    </button>
                </div>
            </div>
        </div>
    );
}
