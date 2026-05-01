"use client";

import { useCallback } from "react";

export type HpRange = { min: number; max: number };

type Props = {
    value: HpRange;
    onChange: (range: HpRange) => void;
    min?: number;
    max?: number;
    step?: number;
};

const DEFAULT_MIN = 30;
const DEFAULT_MAX = 380;
const DEFAULT_STEP = 10;

export default function HpRangeSlider({
    value,
    onChange,
    min = DEFAULT_MIN,
    max = DEFAULT_MAX,
    step = DEFAULT_STEP,
}: Props) {
    const span = max - min;
    const clampMin = Math.max(min, Math.min(value.min, value.max));
    const clampMax = Math.min(max, Math.max(value.max, value.min));
    const minPct = ((clampMin - min) / span) * 100;
    const maxPct = ((clampMax - min) / span) * 100;

    const handleMinChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const next = parseInt(e.target.value, 10);
            const safeMin = Math.min(next, value.max);
            if (safeMin === value.min) return;
            onChange({ min: safeMin, max: value.max });
        },
        [value.min, value.max, onChange]
    );

    const handleMaxChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const next = parseInt(e.target.value, 10);
            const safeMax = Math.max(next, value.min);
            if (safeMax === value.max) return;
            onChange({ min: value.min, max: safeMax });
        },
        [value.min, value.max, onChange]
    );

    // When the min thumb moves into the upper half of the track, lift it above
    // the max thumb so users can still grab it when the two values are close.
    const minThumbOnTop = clampMin > min + span / 2;

    return (
        <div className="flex flex-col gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-600">
            <div className="flex items-center justify-between">
                <label className="text-xs text-gray-400 font-bold">HP</label>
                <span className="text-sm text-white font-mono tabular-nums">
                    {clampMin} 〜 {clampMax}
                </span>
            </div>
            <div className="relative h-6 select-none">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-gray-700 rounded-full" />
                <div
                    className="absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded-full"
                    style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={clampMin}
                    onChange={handleMinChange}
                    aria-label="HP最小値"
                    className="hp-range-input absolute inset-0 w-full"
                    style={{ zIndex: minThumbOnTop ? 4 : 3 }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={clampMax}
                    onChange={handleMaxChange}
                    aria-label="HP最大値"
                    className="hp-range-input absolute inset-0 w-full"
                    style={{ zIndex: minThumbOnTop ? 3 : 4 }}
                />
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>{min}</span>
                <span>{max}</span>
            </div>
        </div>
    );
}
