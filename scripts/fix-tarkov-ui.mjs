#!/usr/bin/env node
/** Fix leftover Tarkov strings in user-facing UI files. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
	'public/locales/en/translation.json',
	'src/data/i18n/content.generated.ts',
	'src/data/i18n/gallery-ui.ts',
	'src/data/inline-edits.json',
	'src/data/site.ts',
];

const REPLACEMENTS = [
	['Tarkov esp, radar & aimbot for PC', 'Player ESP, dino ESP & aimbot for PC'],
	['tarkov esp, radar hack and tarkov aimbot', 'player ESP, dino ESP, and aimbot'],
	['Tarkov esp wallhack, 2D radar, and tarkov aimbot', 'Player ESP, dino ESP, item ESP, and aimbot'],
	['live for Tarkov on Windows PC', 'live for ARK: Survival Ascended on Windows PC'],
	['"gameBadge": "Tarkov"', '"gameBadge": "Ark"'],
	['in a Tarkov session', 'in an ARK session'],
	['controls for Tarkov', 'controls for ARK'],
	['during a Tarkov firefight', 'during an ARK PvP fight'],
	['tribe bases in Tarkov', 'tribe bases in ARK'],
	['tuned for Tarkov sessions', 'tuned for ARK sessions'],
	['Tarkov rewards map awareness', 'ARK rewards map awareness'],
	['Tarkov maps punish', 'ARK maps punish'],
	['Tarkov mixes long-range', 'ARK mixes long-range'],
	['major Tarkov patches', 'major ARK patches'],
	['for Tarkov on Windows PC', 'for ARK: Survival Ascended on Windows PC'],
	['for Tarkov firefights', 'for ARK PvP fights'],
	['play Tarkov regularly', 'play ARK regularly'],
	['launching Tarkov', 'launching ARK'],
	['After Tarkov or Easy Anti-Cheat', 'After ARK or Easy Anti-Cheat'],
	['Tarkov and Easy Anti-Cheat', 'ARK and Easy Anti-Cheat'],
	['Tarkov patch', 'ARK patch'],
	['Tarkov compatibility', 'ARK compatibility'],
	['Tarkov Wallhack', 'Ark Wallhack'],
	['Tarkov ESP', 'Ark ESP'],
	['Tarkov Aimbot', 'Ark Aimbot'],
	['Tarkov Radar', 'Ark Radar'],
	['Tarkov wallhack', 'Ark wallhack'],
	['Tarkov aimbot', 'Ark aimbot'],
	['Tarkov esp', 'Ark ESP'],
	['tarkov esp', 'ark ESP'],
	['tarkov aimbot', 'ark aimbot'],
	[' for Tarkov ', ' for ARK '],
	[' in Tarkov ', ' in ARK '],
	['Tarkov’s', "ARK's"],
	['Tarkov client', 'ARK client'],
	['Tarkov itself', 'ARK itself'],
	['Tarkov update', 'ARK update'],
	['Tarkov updates', 'ARK updates'],
	['Tarkov seasonal', 'ARK seasonal'],
	['Tarkov combat', 'ARK combat'],
	['Tarkov live', 'ARK live'],
	['Undetected EFT cheats for PC', 'Undetected ark cheats for PC'],
	['Battlestate Games', 'Studio Wildcard'],
	['https://www.escapefromtarkov.com/support', 'https://survivetheark.com/'],
	['https://www.escapefromtarkov.com/', 'https://store.steampowered.com/app/2399830/ARK_Survival_Ascended/'],
	['Easy Anti-Cheat Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat bypass Tarkov guide', 'Easy Anti-Cheat bypass ARK guide'],
	['Tarkov Intel', 'Ark Intel'],
	['Soft aim & hotkeys', 'Aimbot & crosshair'],
	['Soft aim', 'Aimbot'],
	['2D radar', 'Item ESP'],
	['ESP / wallhack', 'Player & dino ESP'],
	['ESP, soft aim, and radar', 'Aimbot, player ESP, and dino ESP'],
	['ESP, wallhack, radar & aimbot', 'Aimbot, player ESP, dino ESP & item ESP'],
	['ESP, wallhack, radar, and aimbot', 'Aimbot, player ESP, dino ESP, and item ESP'],
];

async function main() {
	for (const rel of FILES) {
		const file = path.join(ROOT, rel);
		let content = await readFile(file, 'utf8');
		const before = content;
		for (const [from, to] of REPLACEMENTS) {
			content = content.split(from).join(to);
		}
		if (content !== before) {
			await writeFile(file, content, 'utf8');
			console.log('Updated', rel);
		}
	}
	console.log('Done.');
}

main();
