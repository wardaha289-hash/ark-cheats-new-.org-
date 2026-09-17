#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'ARK: Survival Ascended Support'],
	['Activision Tarkov', 'ARK: Survival Ascended'],
	['Activision Support', 'ARK: Survival Ascended Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromtarkov.com/support'],
	['www.epicgames.com/tarkov', 'www.escapefromtarkov.com'],
	['www.tarkov.com/competitive', 'www.escapefromtarkov.com'],
	['https://www.tarkov.com/', 'https://www.escapefromtarkov.com/'],
	['Tarkov.com', 'ARK: Survival Ascended'],
	['Tarkov Competitive', 'ARK: Survival Ascended'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
