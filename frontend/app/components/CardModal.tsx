import React, { useEffect } from 'react';
import Image from 'next/image';
import { MasterCard, CardVariant } from '../../lib/data';

interface CardModalProps {
    card: MasterCard;
    variants: CardVariant[];
    isOpen: boolean;
    onClose: () => void;
    onEvolutionsClick?: (evoName: string) => void;
}

export default function CardModal({ card, variants, isOpen, onClose, onEvolutionsClick }: CardModalProps) {
    const [selectedVariant, setSelectedVariant] = React.useState<CardVariant | null>(null);

    useEffect(() => {
        if (variants && variants.length > 0) {
            setSelectedVariant(variants[0]);
        }
    }, [variants, isOpen]);

    // Handle escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen || !card) return null;

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

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

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={onClose}></div>

            <div className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 border border-emerald-500/50 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-red-500/80 text-gray-300 hover:text-white rounded-full transition-colors"
                >
                    ✕
                </button>

                {/* Left Area: Visuals (Image + Variants) */}
                <div className="w-full md:w-5/12 bg-gray-950 flex flex-col border-b md:border-b-0 md:border-r border-gray-800">
                    {/* Main Image (Fixed Top Area) */}
                    <div className="p-3 flex-shrink-0 flex justify-center border-b border-gray-800/50 bg-gray-900/20">
                        <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-gray-800/50 drop-shadow-2xl" style={{ width: '140px' }}>
                            {selectedVariant?.image_url ? (
                                <Image
                                    src={`https://www.pokemon-card.com${selectedVariant.image_url}`}
                                    alt={card.name}
                                    width={140}
                                    height={195}
                                    style={{ width: '140px', height: 'auto' }}
                                    className="object-contain block"
                                    priority
                                />
                            ) : (
                                <div className="w-full aspect-[63/88] flex items-center justify-center text-gray-500">
                                    No Image Available
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Variant Thumbnails (Scrollable Bottom Area) */}
                    {variants.length > 1 && (
                        <div className="p-4 overflow-y-auto custom-scrollbar flex-grow bg-gray-950">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Other Variants</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {variants.map((v) => (
                                    <button
                                        key={v.official_id}
                                        onClick={() => setSelectedVariant(v)}
                                        className={`relative flex-shrink-0 w-14 aspect-[63/88] rounded-md overflow-hidden border-2 transition-all ${selectedVariant?.official_id === v.official_id ? 'border-emerald-500 scale-110 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                                        title={`${v.set_name} / ${v.rarity || 'No Rarity'}`}
                                    >
                                        {v.image_url && (
                                            <Image
                                                src={`https://www.pokemon-card.com${v.image_url}`}
                                                alt={v.set_name}
                                                fill
                                                className="object-cover"
                                                sizes="60px"
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

                {/* Right Area: Data */}
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col bg-gray-900 overflow-y-auto custom-scrollbar text-sm text-gray-300">

                    {/* Header: Name, HP, Type */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-4 border-b border-gray-800">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-gray-400 text-xs font-bold px-2 py-0.5 bg-gray-800 rounded">{card.card_kind || 'Unknown'}</span>
                                {card.pokedexNo && <span className="text-gray-500 text-xs">No.{card.pokedexNo}</span>}
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{card.name}</h2>
                            {card.pokedexCategory && (
                                <p className="text-gray-400 text-xs mt-1">{card.pokedexCategory} / 高さ: {card.height} / 重さ: {card.weight}</p>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            {card.hp && <span className="text-xl font-bold text-red-400">HP {card.hp}</span>}
                            {card.type && (
                                <div className={`w-8 h-8 rounded-full shadow-inner flex items-center justify-center border border-white/20 ${getTypeColor(card.type)}`} title={card.type}>
                                    {/* Icon placeholder if we don't have SVGs */}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Meta section (Variant info) */}
                    <div className="bg-gray-950 rounded-lg p-4 mb-6 border border-gray-800 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                        {selectedVariant && (
                            <>
                                <div className="flex flex-col">
                                    <span className="text-gray-500">収録</span>
                                    <span className="text-white font-medium">{selectedVariant.set_name} {selectedVariant.set_number && `(${selectedVariant.set_number})`}</span>
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
                        <div className="mb-6">
                            <h3 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">進化ツリー</h3>
                            <div className="flex flex-wrap gap-2">
                                {card.evolutions.map(evo => (
                                    <button
                                        key={evo}
                                        onClick={() => onEvolutionsClick && onEvolutionsClick(evo)}
                                        className={`px-3 py-1 text-xs rounded-full border transition-colors ${evo === card.name ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold' : 'border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                    >
                                        {evo}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Abilities, Attacks, Rules */}
                    <div className="space-y-5 mb-8">
                        {card.abilities.map((ability, i) => (
                            <div key={`ab-${i}`} className="bg-emerald-950/30 border border-emerald-900/50 rounded-lg p-4">
                                <h3 className="font-bold text-emerald-400 flex items-center gap-2 mb-2 text-base">
                                    <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 rounded tracking-wider">特性</span>
                                    {ability.name}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">{ability.text}</p>
                            </div>
                        ))}

                        {card.attacks.map((attack, i) => (
                            <div key={`at-${i}`} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-0.5">
                                            {attack.cost.length > 0 ? attack.cost.map((c, j) => (
                                                <div key={j} className={`w-5 h-5 rounded-full border border-white/20 shadow-inner ${getTypeColor(c)}`} title={c}></div>
                                            )) : (
                                                <div className="w-5 h-5 rounded-full border border-gray-600 border-dashed"></div>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-blue-300 text-base">{attack.name}</h3>
                                    </div>
                                    <span className="font-black text-xl text-white">{attack.damage}</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{attack.text}</p>
                            </div>
                        ))}

                        {card.rules.map((rule, i) => (
                            <div key={`ru-${i}`} className="bg-purple-950/20 border border-purple-900/50 rounded-lg p-3">
                                <p className="text-purple-300 text-xs leading-relaxed font-medium">{rule}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats table (Weakness, Resistance, Retreat) */}
                    {(card.weakness?.type || card.resistance?.type || card.retreatCost > 0) && (
                        <div className="grid grid-cols-3 gap-2 mb-6 border-t border-gray-800 pt-6">
                            <div className="flex flex-col items-center p-3 bg-gray-950 rounded-lg border border-gray-800">
                                <span className="text-[10px] text-gray-500 font-bold mb-2">弱点</span>
                                <div className="flex items-center gap-2">
                                    {card.weakness?.type ? (
                                        <>
                                            <div className={`w-5 h-5 rounded-full ${getTypeColor(card.weakness.type)}`}></div>
                                            <span className="font-bold">{card.weakness.value}</span>
                                        </>
                                    ) : <span className="text-gray-600">-</span>}
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-950 rounded-lg border border-gray-800">
                                <span className="text-[10px] text-gray-500 font-bold mb-2">抵抗力</span>
                                <div className="flex items-center gap-2">
                                    {card.resistance?.type ? (
                                        <>
                                            <div className={`w-5 h-5 rounded-full ${getTypeColor(card.resistance.type)}`}></div>
                                            <span className="font-bold">{card.resistance.value}</span>
                                        </>
                                    ) : <span className="text-gray-600">-</span>}
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-3 bg-gray-950 rounded-lg border border-gray-800">
                                <span className="text-[10px] text-gray-500 font-bold mb-2">にげる</span>
                                <div className="flex gap-0.5 mt-1">
                                    {card.retreatCost > 0 ? (
                                        [...Array(card.retreatCost)].map((_, i) => (
                                            <div key={i} className="w-5 h-5 rounded-full bg-gray-400 border border-white/20"></div>
                                        ))
                                    ) : <span className="text-gray-600">-</span>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Flavor Text */}
                    {card.flavor_text && (
                        <div className="mt-auto italic text-gray-500 bg-gray-950 p-4 rounded-lg border-l-4 border-gray-800">
                            {card.flavor_text}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
