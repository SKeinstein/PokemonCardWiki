import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Same resolution strategy as frontend/lib/data.ts reads:
// next dev/start is invoked from repo root locally and from frontend/ on Vercel,
// but data/ is always at the repo root. We try cwd-relative first.
function dataPath(filename: string) {
    return path.join(process.cwd(), "data", filename);
}

type QAEntry = {
    question: string;
    answer: string;
    cards: { name: string; cardId: string }[];
};

type QAIndexEntry = {
    directQA: number[];
    relatedQA: { idx: number; reason: string }[];
};

type QAIndex = Record<string, QAIndexEntry>;

let qaEntriesCache: QAEntry[] | null = null;
let qaIndexCache: QAIndex | null = null;

async function getQAEntries(): Promise<QAEntry[]> {
    if (qaEntriesCache) return qaEntriesCache;
    const data = await fs.readFile(dataPath("qa_entries.json"), "utf8");
    qaEntriesCache = JSON.parse(data) as QAEntry[];
    return qaEntriesCache;
}

async function getQAIndex(): Promise<QAIndex> {
    if (qaIndexCache) return qaIndexCache;
    const data = await fs.readFile(dataPath("qa_index.json"), "utf8");
    qaIndexCache = JSON.parse(data) as QAIndex;
    return qaIndexCache;
}

const RELATED_LIMIT = 30;

export async function POST(req: NextRequest) {
    const { variantIds } = (await req.json()) as { variantIds: string[] };
    if (!Array.isArray(variantIds) || variantIds.length === 0) {
        return NextResponse.json({ directQA: [], relatedQA: [] });
    }

    const [entries, index] = await Promise.all([getQAEntries(), getQAIndex()]);

    const directIdxSet = new Set<number>();
    const relatedMap = new Map<number, string>(); // idx -> reason (first seen)

    for (const vid of variantIds) {
        const rec = index[vid];
        if (!rec) continue;
        for (const idx of rec.directQA) directIdxSet.add(idx);
        for (const { idx, reason } of rec.relatedQA) {
            if (!directIdxSet.has(idx) && !relatedMap.has(idx)) {
                relatedMap.set(idx, reason);
            }
        }
    }

    // Remove direct entries from related map
    for (const idx of directIdxSet) relatedMap.delete(idx);

    const directQA = Array.from(directIdxSet)
        .filter((i) => i >= 0 && i < entries.length)
        .map((i) => entries[i]);

    const relatedQA = Array.from(relatedMap.entries())
        .slice(0, RELATED_LIMIT)
        .filter(([i]) => i >= 0 && i < entries.length)
        .map(([i, reason]) => ({ entry: entries[i], reason }));

    return NextResponse.json({ directQA, relatedQA });
}
