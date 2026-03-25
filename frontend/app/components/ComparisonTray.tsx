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
        <div className="fixed bottom-0 left-0 right-0 z-[150] bg-gray-900/95 backdrop-blur-md border-t border-gray-600 shadow-2xl">
            <div className="max-w-7xl mx-auto px-3 py-2.5 flex items-center gap-3">
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
                                {/* Remove button */}
                                <button
                                    onClick={() => onRemoveCard(card.master_id)}
                                    className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow transition-colors touch-manipulation opacity-80 hover:opacity-100"
                                    title={`${card.name}を外す`}
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
                        className="text-xs text-gray-400 hover:text-gray-200 transition underline px-1 py-1 touch-manipulation hidden sm:block"
                    >
                        クリア
                    </button>
                    <button
                        onClick={onCompare}
                        disabled={cards.length < 2}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-colors shadow touch-manipulation whitespace-nowrap"
                    >
                        比較する
                    </button>
                </div>
            </div>
        </div>
    );
}
