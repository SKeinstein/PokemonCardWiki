import { fetch } from 'undici';
import * as cheerio from 'cheerio';

async function testScraping() {
    console.log("--- Extracting Details for Card 45145 (Ogerpon ex) ---");
    const detailHtml = await fetch('https://www.pokemon-card.com/card-search/details.php/card/45145').then(r => r.text());
    const $ = cheerio.load(detailHtml);

    const cardName = $('.cardMainInfo h1').text().trim();
    console.log("Name:", cardName);

    // Extracting abilities and attacks
    $('.card_data h4, .SectionTit').each((i, el) => {
        const isAbility = $(el).hasClass('SectionTit');
        if (isAbility) {
            const abilityName = $(el).text().trim();
            const abilityDesc = $(el).next('p').text().trim();
            console.log(`\nAbility: [${abilityName}]\nEffect: ${abilityDesc}`);
        } else {
            // It's an attack
            const parent = $(el).closest('.waza_data, .card_data');
            if ($(el).closest('.waza_data').length) {
                const wazaData = $(el).closest('.waza_data');
                const wazaName = wazaData.find('h4').text().trim();
                const wazaDmg = wazaData.find('span').text().trim();
                const energies = [];
                wazaData.find('img').each((j, img) => {
                    energies.push($(img).attr('alt') || $(img).attr('src'));
                });
                const wazaDesc = wazaData.next('.waza_text').text().trim();
                console.log(`\nAttack: [${wazaName}] Dmg: [${wazaDmg}] Energy: [${energies.join(',')}]\nEffect: ${wazaDesc}`);
            }
        }
    });

    // Extract Regulation Mark
    const regImg = $('.cardIcon_data img[src*="mark_regu"]').attr('src');
    if (regImg) {
        console.log("Regulation Mark:", regImg); // usually something like /assets/images/card_images/ico_mark_regu_g.png => 'g'
    }
}

testScraping().catch(console.error);
