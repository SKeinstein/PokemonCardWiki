#!/usr/bin/env node
// Copies the JSON data files the Next.js app reads at runtime from the
// repo-root /data/ directory into /frontend/data/. Runs before `dev` and
// `build` so Vercel (which uses frontend/ as its Root Directory) always
// has a fresh copy.

import { copyFile, mkdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../../data");
const DEST_DIR = path.resolve(__dirname, "../data");

const FILES = [
    "master_cards.json",
    "card_variants.json",
    "card_tags.json",
    "qa_entries.json",
    "qa_index.json",
];

await mkdir(DEST_DIR, { recursive: true });

for (const file of FILES) {
    const src = path.join(SRC_DIR, file);
    const dest = path.join(DEST_DIR, file);
    const { size } = await stat(src);
    await copyFile(src, dest);
    console.log(`  ${file}  (${(size / 1024 / 1024).toFixed(2)} MB)`);
}

console.log(`Synced ${FILES.length} files: ${SRC_DIR} → ${DEST_DIR}`);
