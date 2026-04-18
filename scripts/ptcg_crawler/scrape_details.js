/**
 * scrape_details.js
 * Scrapes detailed card information from official PTCG Japan detail pages.
 *
 * Usage: node scripts/ptcg_crawler/scrape_details.js
 */

import { writeFile, readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const DATA_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../data");
const INPUT_PATH = path.join(DATA_DIR, "card_ids.json");
const OUTPUT_PATH = path.join(DATA_DIR, "card_details.json");
const DELAY_MS = 1000; // Be polite: 1 second between page fetches

// Card kinds whose effect text appears under a card-kind h2 section (not 特性/ワザ/特別なルール)
const TRAINER_SECTIONS = new Set(['グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ', '特殊エネルギー']);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchCardDetail(cardID) {
    const url = `https://www.pokemon-card.com/card-search/details.php/card/${cardID}`;
    const res = await fetch(url, {
        headers: {
            "User-Agent": "PokemonCardWikiCrawler/1.0 (educational data harvesting)",
        },
    });

    if (!res.ok) {
        throw new Error(`HTTP ${res.status} for cardID ${cardID}`);
    }

    const html = await res.text();
    return html;
}

/**
 * Parse HTML using cheerio to extract structured card data
 */
function parseDetail(html, cardID) {
    const $ = cheerio.load(html);

    const details = {
        cardID,
        name: $('h1.Heading1').text().trim(),
        illustrator: "",
        sets: [],           // 全収録パックの配列
        setName: "",        // 後方互換用 (最初のパック名)
        hp: null,
        type: "",
        regulation: "",
        cardKind: "",       // たね, 1進化, グッズ, サポート, etc.
        abilities: [],
        attacks: [],
        rules: [],
        weakness: { type: "", value: "" },
        resistance: { type: "", value: "" },
        retreatCost: 0,
        rarity: "",
        // ポケモン固有
        pokedexNo: "",
        pokedexCategory: "",
        height: "",
        weight: "",
        flavorText: "",
        evolutions: [],     // 進化ツリー上の全関連ポケモン名
        // セット情報
        setNumber: "",
        setCode: ""
    };

    // ── イラストレーター ──
    const illustLink = $('a[href*="illust="]');
    if (illustLink.length) {
        details.illustrator = illustLink.text().trim();
    }

    // ── セットコード ──
    const setCodeImg = $('.subtext img.img-regulation').attr('alt');
    if (setCodeImg) {
        details.setCode = setCodeImg;
    }

    // ── レギュレーション (セットコードと同一の場合も多いが別途保存) ──
    const regImgSrc = $('.subtext .img-regulation').attr('src');
    if (regImgSrc) {
        const regMatch = regImgSrc.match(/logo_1\/([^.]+)\.(gif|png|jpg)/);
        if (regMatch) details.regulation = regMatch[1];
    } else {
        const altReg = $('.subtext img[src*="mark_regu"]').attr('src');
        if (altReg) {
            const match = altReg.match(/mark_regu_([a-z])\.png/);
            if (match) details.regulation = match[1].toUpperCase();
        }
    }

    // ── セット内番号 ──
    const subtextRaw = $('.subtext').text();
    const numMatch = subtextRaw.match(/(\d+\s*\/\s*\d+|[a-zA-Z0-9_-]+\s*\/\s*[a-zA-Z0-9_-]+)/);
    if (numMatch) {
        details.setNumber = numMatch[1].replace(/\s/g, '');
    }

    // ── レアリティ (GIFのファイル名から抽出, なければ空) ──
    const rarityImg = $('.subtext img[src*="/rarity/"]').attr('src');
    if (rarityImg) {
        const rMatch = rarityImg.match(/ic_rare_([a-zA-Z0-9_-]+)\.(gif|png|jpg)/i);
        if (rMatch) {
            let r = rMatch[1].toUpperCase();
            if (r.endsWith('_C')) r = r.substring(0, r.length - 2);
            details.rarity = r;
        }
    }

    // ── 全収録パック (複数対応) ──
    $('.PopupSub .List_item').each((_, el) => {
        const link = $(el).find('a');
        const name = link.length ? link.text().trim() : $(el).text().trim();
        if (name) details.sets.push(name);
    });
    details.setName = details.sets[0] || "";

    // ── カード種別 (TopInfo .type span) ──
    const kindSpan = $('.TopInfo .type').first().text().replace(/\u00a0/g, ' ').trim();
    details.cardKind = kindSpan || "";

    // kindSpanがない場合は RightBox の最初のh2から判別 (グッズ, サポート, 基本エネルギーなど)
    if (!details.cardKind) {
        const firstH2 = $('.RightBox-inner h2').first().text().trim();
        const nonPokemonKinds = ['グッズ', 'サポート', 'スタジアム', 'ポケモンのどうぐ', '基本エネルギー', '特殊エネルギー'];
        if (nonPokemonKinds.includes(firstH2)) {
            details.cardKind = firstH2;
        }
    }

    // ── HP・タイプ ──
    const hpText = $('.TopInfo .hp-num').text().trim();
    if (hpText) {
        details.hp = parseInt(hpText, 10) || null;
    }
    const typeIconClass = $('.TopInfo .hp-type').next('span').attr('class');
    if (typeIconClass) {
        details.type = typeIconClass.replace('icon-', '').replace(' icon', '').trim();
    }

    // ── ポケモン図鑑情報 (LeftBox の div.card.Text-fjalla) ──
    // 構造: <h4>No.376 てつあしポケモン</h4><p>高さ: 1.6m 重さ: 550.0kg</p><hr/><p>フレーバーテキスト</p>
    const pokedexDiv = $('div.card.Text-fjalla');
    if (pokedexDiv.length) {
        // 図鑑No + カテゴリー
        const h4Text = pokedexDiv.find('h4').first().text().trim();
        const noMatch = h4Text.match(/No\.(\d+)\s+(.+)/);
        if (noMatch) {
            details.pokedexNo = noMatch[1];
            details.pokedexCategory = noMatch[2];
        }

        // 高さ・重さ (hrの前の最初のp)
        const firstP = pokedexDiv.find('p').first().text().trim();
        const heightMatch = firstP.match(/高さ：([\d.]+)\s*m/);
        const weightMatch = firstP.match(/重さ：([\d.]+)\s*kg/);
        if (heightMatch) details.height = heightMatch[1] + 'm';
        if (weightMatch) details.weight = weightMatch[1] + 'kg';

        // フレーバーテキスト: <hr> の後の <p> のみが本物
        // hrがある場合のみ取得し、ない場合(メガexなど)は空のまま
        const hr = pokedexDiv.find('hr');
        if (hr.length) {
            const afterHr = hr.nextAll('p').first().text().trim();
            if (afterHr) details.flavorText = afterHr;
        }
    }

    // ── 特性・ワザ・ルール (RightBox のセクション解析) ──
    let currentSection = "";

    $('.RightBox-inner h2, .RightBox-inner h4, .RightBox-inner p').each((i, el) => {
        const tag = el.name ? el.name.toLowerCase() : "";

        if (tag === 'h2') {
            currentSection = $(el).text().trim();
        }
        else if (currentSection === '特性' && tag === 'h4') {
            const abilityName = $(el).text().trim();
            const abilityText = $(el).next('p').text().trim();
            if (abilityName) {
                details.abilities.push({ name: abilityName, text: abilityText });
            }
        }
        else if (currentSection === 'ワザ' && tag === 'h4') {
            const wazaNameContainer = $(el);
            const wazaDmg = wazaNameContainer.find('span.f_right').text().trim();
            // ダメージと末尾の記号を除去してワザ名を取得
            const wazaNameRaw = wazaNameContainer.clone()
                .find('span').remove().end()
                .text().trim();

            const energies = [];
            wazaNameContainer.find('span.icon').each((j, icon) => {
                const cls = $(icon).attr('class');
                if (cls && !cls.includes('f_right')) {
                    energies.push(cls.replace('icon-', '').replace(' icon', '').trim());
                }
            });

            const wazaText = wazaNameContainer.next('p').text().trim();

            if (wazaNameRaw) {
                details.attacks.push({
                    name: wazaNameRaw,
                    damage: wazaDmg || "",
                    cost: energies,
                    text: wazaText
                });
            }
        }
        else if (currentSection === '特別なルール' && tag === 'p') {
            const ruleText = $(el).text().trim();
            if (ruleText && !details.rules.includes(ruleText)) {
                details.rules.push(ruleText);
            }
        }
        else if (TRAINER_SECTIONS.has(currentSection) && tag === 'p') {
            const effectText = $(el).text().trim();
            if (effectText && !details.rules.includes(effectText)) {
                details.rules.push(effectText);
            }
        }
    });

    // ── 弱点・抵抗力・にげる ──
    const tableCells = $('.RightBox-inner table tr:nth-child(2) td');
    if (tableCells.length >= 3) {
        // 弱点: タイプアイコン(spanのclass) + 倍率テキスト
        const weakCell = $(tableCells[0]);
        const weakIcon = weakCell.find('span.icon').attr('class');
        const weakText = weakCell.text().trim(); // e.g. "×2"
        details.weakness = {
            type: weakIcon ? weakIcon.replace('icon-', '').replace(' icon', '').trim() : "",
            value: weakText
        };

        // 抵抗力: タイプアイコン + 数値テキスト
        const resCell = $(tableCells[1]);
        const resIcon = resCell.find('span.icon').attr('class');
        const resText = resCell.text().trim(); // e.g. "－30"
        details.resistance = {
            type: resIcon ? resIcon.replace('icon-', '').replace(' icon', '').trim() : "",
            value: resText
        };

        // にげる: iconのcount
        details.retreatCost = $(tableCells[2]).find('span.icon').length;
    }

    // ── 進化ツリー (全関連ポケモン名を配列に) ──
    $('.RightBox-inner .evolution .in-box a, .RightBox-inner .evolution a').each((_, el) => {
        const name = $(el).text().trim();
        if (name && !details.evolutions.includes(name)) {
            details.evolutions.push(name);
        }
    });

    return details;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
    if (!existsSync(INPUT_PATH)) {
        console.error(`Input file not found: ${INPUT_PATH}`);
        process.exit(1);
    }

    const { cards } = JSON.parse(await readFile(INPUT_PATH, "utf8"));
    const total = cards.length;
    console.log(`Loaded ${total} cards from ${INPUT_PATH}`);

    let results = [];
    if (existsSync(OUTPUT_PATH)) {
        results = JSON.parse(await readFile(OUTPUT_PATH, "utf8"));
        console.log(`Resuming: already processed ${results.length} cards.`);
    }

    const processedIds = new Set(results.map(r => r.cardID));

    for (let i = 0; i < total; i++) {
        const card = cards[i];
        if (processedIds.has(card.id)) continue;

        console.log(`[${i + 1}/${total}] Fetching details for ID ${card.id} (${card.name})...`);

        try {
            const html = await fetchCardDetail(card.id);
            const detail = parseDetail(html, card.id);
            if (!detail.name) {
                delete detail.name;
            }
            results.push({ ...card, ...detail });

            // Periodic save
            if (results.length % 10 === 0) {
                await writeFile(OUTPUT_PATH, JSON.stringify(results, null, 2), "utf8");
            }
        } catch (err) {
            console.error(`  Error processing ID ${card.id}: ${err.message}`);
        }

        await sleep(DELAY_MS);
    }

    await writeFile(OUTPUT_PATH, JSON.stringify(results, null, 2), "utf8");
    console.log(`\nFinished! Total records: ${results.length}`);
}

main().catch(err => {
    console.error("Fatal:", err);
    process.exit(1);
});
