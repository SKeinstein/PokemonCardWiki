import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type DeckEntry = {
    archetype: string;
    count: number;
    total: number;
    share: number;
    url: string;
};

type DeckIndex = Record<string, DeckEntry[]>;

let deckIndexCache: DeckIndex | null = null;

async function getDeckIndex(): Promise<DeckIndex> {
    if (deckIndexCache) return deckIndexCache;
    const data = await fs.readFile(
        path.join(process.cwd(), "data", "deck_index.json"),
        "utf8"
    );
    deckIndexCache = JSON.parse(data) as DeckIndex;
    return deckIndexCache;
}

export async function POST(req: NextRequest) {
    const { masterId } = (await req.json()) as { masterId: string };
    if (!masterId) return NextResponse.json([]);

    const index = await getDeckIndex();
    const entries = index[masterId];
    if (!entries || entries.length === 0) return NextResponse.json([]);

    const top5 = [...entries]
        .sort((a, b) => b.share - a.share)
        .slice(0, 5);

    return NextResponse.json(top5);
}
