// Standalone test for new scraper fields
import * as cheerio from "cheerio";

async function fetchHtml(id) {
    const res = await fetch(`https://www.pokemon-card.com/card-search/details.php/card/${id}`);
    return res.text();
}

function parseCard(html) {
    const $ = cheerio.load(html);
    const result = {};

    result.name = $('h1.Heading1').text().trim();

    // Weakness / resistance with type
    const tableCells = $('.RightBox-inner table tr:nth-child(2) td');
    if (tableCells.length >= 3) {
        const weakCell = $(tableCells[0]);
        const resCell = $(tableCells[1]);
        const weakIcon = weakCell.find('span.icon').attr('class') || '';
        const resIcon = resCell.find('span.icon').attr('class') || '';
        result.weakness = {
            type: weakIcon.replace('icon-', '').replace(' icon', '').trim(),
            value: weakCell.text().trim()
        };
        result.resistance = {
            type: resIcon.replace('icon-', '').replace(' icon', '').trim(),
            value: resCell.text().trim()
        };
        result.retreatCost = $(tableCells[2]).find('span.icon').length;
    }

    // Evolution tree — all names
    result.evolutions = [];
    $('.RightBox-inner .evolution .in-box a').each((_, el) => {
        const name = $(el).text().trim();
        if (name && !result.evolutions.includes(name)) result.evolutions.push(name);
    });

    // Pokedex info
    const pdDiv = $('div.card.Text-fjalla');
    result.pokedexNo = '';
    result.pokedexCategory = '';
    result.height = '';
    result.weight = '';
    result.flavorText = '';
    if (pdDiv.length) {
        const h4 = pdDiv.find('h4').first().text().trim();
        const noMatch = h4.match(/No\.(\d+)\s+(.+)/);
        if (noMatch) { result.pokedexNo = noMatch[1]; result.pokedexCategory = noMatch[2]; }
        const firstP = pdDiv.find('p').first().text().trim();
        const hm = firstP.match(/高さ：([\d.]+)\s*m/);
        const wm = firstP.match(/重さ：([\d.]+)\s*kg/);
        if (hm) result.height = hm[1] + 'm';
        if (wm) result.weight = wm[1] + 'kg';
        const hr = pdDiv.find('hr');
        if (hr.length) result.flavorText = hr.nextAll('p').first().text().trim();
    }

    // All sets
    result.sets = [];
    $('.PopupSub .List_item').each((_, el) => {
        const link = $(el).find('a');
        const name = link.length ? link.text().trim() : $(el).text().trim();
        if (name) result.sets.push(name);
    });

    return result;
}

const tests = [
    { id: 45265, label: "メタグロス (2進化ポケモン)" },
    { id: 50036, label: "メガヤドランex (特別ルール, フレーバーなし)" },
    { id: 1108, label: "エネルギーつけかえ (グッズ)" },
];

for (const { id, label } of tests) {
    console.log(`\n=== ${label} ===`);
    const html = await fetchHtml(id);
    const r = parseCard(html);
    console.log("name:", r.name);
    console.log("weakness:", JSON.stringify(r.weakness));
    console.log("resistance:", JSON.stringify(r.resistance));
    console.log("retreatCost:", r.retreatCost);
    console.log("evolutions:", r.evolutions);
    console.log("pokedexNo:", r.pokedexNo, "| category:", r.pokedexCategory);
    console.log("height:", r.height, "weight:", r.weight);
    console.log("flavorText:", r.flavorText.substring(0, 60));
    console.log("sets (", r.sets.length, "):", r.sets.slice(0, 3));
}
