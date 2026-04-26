"use client";

import React, { useEffect } from "react";
import { MasterCard, CardVariant } from "../../lib/data";
import { pickDefaultVariant } from "../../lib/variantUtils";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

interface ComparisonModalProps {
    cards: MasterCard[];
    variantsMap: Map<string, CardVariant[]>;
    onClose: () => void;
    onRemoveCard: (masterId: string) => void;
}

const TYPE_COLORS: Record<string, string> = {
    grass: "bg-green-600",
    fire: "bg-red-500",
    water: "bg-blue-500",
    lightning: "bg-yellow-400",
    psychic: "bg-purple-500",
    fighting: "bg-orange-600",
    dark: "bg-gray-800",
    steel: "bg-slate-400",
    fairy: "bg-pink-400",
    dragon: "bg-yellow-600",
    colorless: "bg-gray-400",
};
const typeColor = (t: string) => TYPE_COLORS[t] || "bg-gray-600";

// A row-spanning section label that sits between content rows in the grid
function SectionRow({ label, cols }: { label: string; cols: number }) {
    return (
        <div
            className="px-3 py-1.5 bg-gray-950 border-y border-gray-700"
            style={{ gridColumn: `1 / span ${cols}` }}
        >
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
        </div>
    );
}

export default function ComparisonModal({ cards, variantsMap, onClose, onRemoveCard }: ComparisonModalProps) {
    const n = cards.length;
    const maxAbilities = Math.max(0, ...cards.map(c => c.abilities.length));
    const maxAttacks = Math.max(0, ...cards.map(c => c.attacks.length));
    const hasStats = cards.some(c => c.weakness?.type || c.resistance?.type || c.retreatCost > 0);
    const hasRules = cards.some(c => c.rules.length > 0);

    useBodyScrollLock();

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, [onClose]);

    if (n === 0) return null;

    // Cell class shared by all data cells; right border on all except last column
    const cell = (cardIdx: number, extra = "") =>
        `p-3 border-b border-gray-800 bg-gray-900 ${cardIdx < n - 1 ? "border-r border-gray-800" : ""} ${extra}`;

    return (
        <div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex flex-col"
            onClick={onClose}
        >
            {/* ── Header bar ── */}
            <div
                className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-700 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3">
                    <h2 className="text-base sm:text-lg font-black text-white">カード比較</h2>
                    <span className="text-sm text-gray-400">{n}枚選択中</span>
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-500/80 text-gray-300 hover:text-white rounded-full transition-colors touch-manipulation"
                    aria-label="閉じる"
                >
                    ✕
                </button>
            </div>

            {/* ── Row-aligned comparison grid ── */}
            <div
                className="flex-1 overflow-auto overscroll-contain"
                style={{ WebkitOverflowScrolling: "touch" }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: `repeat(${n}, minmax(210px, 1fr))`,
                        minWidth: `${Math.max(n * 210, 320)}px`,
                    }}
                >
                    {/* ── Row: Card image + remove button ── */}
                    {cards.map((card, ci) => {
                        const dv = pickDefaultVariant(variantsMap.get(card.master_id) || []);
                        return (
                            <div
                                key={`img-${card.master_id}`}
                                className={`relative bg-gray-950 p-3 flex flex-col items-center gap-2 border-b border-gray-800 ${ci < n - 1 ? "border-r border-gray-800" : ""}`}
                            >
                                <button
                                    onClick={() => onRemoveCard(card.master_id)}
                                    className="self-end w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-red-500/80 text-gray-400 hover:text-white rounded-full transition-colors text-xs touch-manipulation"
                                    title="比較から外す"
                                    aria-label={`${card.name}を比較から外す`}
                                >
                                    ✕
                                </button>
                                <div className="w-28 sm:w-32 aspect-[63/88] relative rounded-lg overflow-hidden shadow-xl">
                                    {dv?.image_url ? (
                                        <img
                                            src={`https://www.pokemon-card.com${dv.image_url}`}
                                            alt={card.name}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                            <span className="text-gray-500 text-xs text-center px-2">{card.name}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* ── Section: 基本情報 ── */}
                    <SectionRow label="基本情報" cols={n} />
                    {cards.map((card, ci) => {
                        const dv = pickDefaultVariant(variantsMap.get(card.master_id) || []);
                        return (
                            <div key={`info-${card.master_id}`} className={cell(ci, "space-y-1.5")}>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-gray-400 text-xs bg-gray-800 px-1.5 py-0.5 rounded">
                                        {card.card_kind || "?"}
                                    </span>
                                    {card.pokedexNo && (
                                        <span className="text-gray-500 text-xs">No.{card.pokedexNo}</span>
                                    )}
                                </div>
                                <h3 className="font-black text-white text-sm leading-tight">{card.name}</h3>
                                <div className="flex items-center gap-2">
                                    {card.hp && (
                                        <span className="text-red-400 font-bold text-sm">HP {card.hp}</span>
                                    )}
                                    {card.type && (
                                        <div className="flex items-center gap-1">
                                            <div className={`w-4 h-4 rounded-full ${typeColor(card.type)}`} />
                                            <span className="text-gray-300 text-xs">{card.type}</span>
                                        </div>
                                    )}
                                </div>
                                {dv && (
                                    <div className="text-xs text-gray-500 space-y-0.5">
                                        <div className="truncate">
                                            {dv.set_name}{dv.set_number ? ` (${dv.set_number})` : ""}
                                        </div>
                                        {dv.regulation && (
                                            <span className="inline-block bg-gray-800 text-gray-300 px-1.5 rounded font-mono">
                                                [{dv.regulation}]
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* ── Section: 弱点 / 抵抗 / にげる ── */}
                    {hasStats && (
                        <>
                            <SectionRow label="弱点 / 抵抗 / にげる" cols={n} />
                            {cards.map((card, ci) => (
                                <div
                                    key={`stats-${card.master_id}`}
                                    className={cell(ci, "grid grid-cols-3 gap-1.5")}
                                >
                                    <div className="flex flex-col items-center bg-gray-950 rounded p-1.5 gap-1">
                                        <span className="text-[10px] text-gray-500">弱点</span>
                                        {card.weakness?.type ? (
                                            <div className="flex items-center gap-1">
                                                <div className={`w-4 h-4 rounded-full ${typeColor(card.weakness.type)}`} />
                                                <span className="text-xs font-bold text-white">{card.weakness.value}</span>
                                            </div>
                                        ) : <span className="text-gray-600 text-xs">-</span>}
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-950 rounded p-1.5 gap-1">
                                        <span className="text-[10px] text-gray-500">抵抗</span>
                                        {card.resistance?.type ? (
                                            <div className="flex items-center gap-1">
                                                <div className={`w-4 h-4 rounded-full ${typeColor(card.resistance.type)}`} />
                                                <span className="text-xs font-bold text-white">{card.resistance.value}</span>
                                            </div>
                                        ) : <span className="text-gray-600 text-xs">-</span>}
                                    </div>
                                    <div className="flex flex-col items-center bg-gray-950 rounded p-1.5 gap-1">
                                        <span className="text-[10px] text-gray-500">にげる</span>
                                        {card.retreatCost > 0 ? (
                                            <div className="flex gap-0.5 flex-wrap justify-center mt-0.5">
                                                {[...Array(card.retreatCost)].map((_, i) => (
                                                    <div key={i} className="w-3 h-3 rounded-full bg-gray-400 border border-white/20" />
                                                ))}
                                            </div>
                                        ) : <span className="text-gray-600 text-xs">-</span>}
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {/* ── Section: 特性 (one row per ability slot, aligned across cards) ── */}
                    {maxAbilities > 0 && (
                        <>
                            <SectionRow label="特性" cols={n} />
                            {Array.from({ length: maxAbilities }).flatMap((_, slotIdx) =>
                                cards.map((card, ci) => {
                                    const ab = card.abilities[slotIdx];
                                    return (
                                        <div key={`ab-${slotIdx}-${card.master_id}`} className={cell(ci)}>
                                            {ab ? (
                                                <div className="bg-emerald-950/30 border border-emerald-900/50 rounded p-2">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <span className="bg-emerald-600 text-white text-[10px] px-1 py-0.5 rounded font-bold">
                                                            特性
                                                        </span>
                                                        <span className="font-bold text-emerald-400 text-xs">{ab.name}</span>
                                                    </div>
                                                    <p className="text-gray-300 text-xs leading-relaxed">{ab.text}</p>
                                                </div>
                                            ) : (
                                                <span className="text-gray-700 text-xs flex justify-center py-2">—</span>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </>
                    )}

                    {/* ── Section: ワザ (one row per attack slot, aligned across cards) ── */}
                    {maxAttacks > 0 && (
                        <>
                            <SectionRow label="ワザ" cols={n} />
                            {Array.from({ length: maxAttacks }).flatMap((_, slotIdx) =>
                                cards.map((card, ci) => {
                                    const atk = card.attacks[slotIdx];
                                    return (
                                        <div key={`atk-${slotIdx}-${card.master_id}`} className={cell(ci)}>
                                            {atk ? (
                                                <>
                                                    <div className="flex items-center justify-between gap-1 mb-1">
                                                        <div className="flex items-center gap-1.5 min-w-0">
                                                            <div className="flex gap-0.5 shrink-0">
                                                                {atk.cost.length > 0 ? (
                                                                    atk.cost.map((c, j) => (
                                                                        <div
                                                                            key={j}
                                                                            className={`w-4 h-4 rounded-full border border-white/20 ${typeColor(c)}`}
                                                                        />
                                                                    ))
                                                                ) : (
                                                                    <div className="w-4 h-4 rounded-full border border-dashed border-gray-600" />
                                                                )}
                                                            </div>
                                                            <span className="font-bold text-blue-300 text-xs truncate">{atk.name}</span>
                                                        </div>
                                                        <span className="font-black text-white text-sm shrink-0">{atk.damage}</span>
                                                    </div>
                                                    {atk.text && (
                                                        <p className="text-gray-400 text-xs leading-relaxed">{atk.text}</p>
                                                    )}
                                                </>
                                            ) : (
                                                <span className="text-gray-700 text-xs flex justify-center py-2">—</span>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </>
                    )}

                    {/* ── Section: ルール ── */}
                    {hasRules && (
                        <>
                            <SectionRow label="ルール" cols={n} />
                            {cards.map((card, ci) => (
                                <div key={`rules-${card.master_id}`} className={cell(ci, "space-y-1.5")}>
                                    {card.rules.length > 0 ? (
                                        card.rules.map((rule, i) => (
                                            <div
                                                key={i}
                                                className="bg-purple-950/20 border border-purple-900/50 rounded p-2"
                                            >
                                                <p className="text-purple-300 text-xs leading-relaxed">{rule}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <span className="text-gray-700 text-xs flex justify-center py-2">—</span>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
