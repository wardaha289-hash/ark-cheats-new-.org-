#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Tarkov source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['ark-esp', 'ark-esp'],
	['ark-aimbot', 'ark-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-ark-cheats', 'undetected-ark-cheats'],
	['ark-wallhack', 'ark-wallhack'],
	['ark-radar-hack', 'ark-radar-hack'],
	['ark-cheats-2026', 'ark-cheats-2026'],
	['escape-from-ark-cheats', 'escape-from-ark-cheats'],
	['escape-from-tarkov', 'tarkov'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['Ark Cheats', 'Ark Cheats'],
	['Ark cheats', 'Ark cheats'],
	['Ark cheat', 'Ark cheat'],
	['Tarkov ESP', 'ARK: Survival Ascended ESP'],
	['Tarkov Aimbot', 'ARK: Survival Ascended Aimbot'],
	['Tarkov wallhack', 'ARK: Survival Ascended wallhack'],
	['Tarkov radar', 'ARK: Survival Ascended radar'],
	['Tarkov firefights', 'ARK: Survival Ascended firefights'],
	['Tarkov combat', 'ARK: Survival Ascended combat'],
	['Tarkov patches', 'ARK: Survival Ascended patches'],
	['Tarkov updates', 'ARK: Survival Ascended updates'],
	['Tarkov setup', 'ARK: Survival Ascended setup'],
	['Tarkov license', 'ARK: Survival Ascended license'],
	['Tarkov licenses', 'ARK: Survival Ascended licenses'],
	['Tarkov sessions', 'ARK: Survival Ascended sessions'],
	['in Tarkov', 'in ARK: Survival Ascended'],
	['for Tarkov', 'for ARK: Survival Ascended'],
	['Tarkov on', 'ARK: Survival Ascended on'],
	['Tarkov or', 'ARK: Survival Ascended or'],
	['Tarkov\'s', 'ARK: Survival Ascended\'s'],
	['Tarkov ', 'ARK: Survival Ascended '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@arkcheats.org', 'support@arkcheats.org'],
	['The Island, Scorched Earth, and Aberration', 'The Island, Scorched Earth, and Aberration'],
	['The Island, Scorched Earth and Aberration', 'The Island, Scorched Earth and Aberration'],
	['tribe fights', 'tribe fights'],
	['tribe fight', 'tribe fight'],
	['server sessions', 'server sessions'],
	['tribe base', 'tribe base'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['tribe base timer', 'tribe base timer'],
	['PvP servers and PvE maps', 'PvP servers and PvE maps'],
	['PvP servers and PvE maps', 'PvP servers and PvE maps'],
	['PvP & PvE', 'PvP & PvE'],
	['rare drops', 'rare drops'],
	['rare drops', 'rare drops'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'ARK: Survival Ascended combat pace'],
	['COD', 'ARK: Survival Ascended'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Ark Cheats',
	game: 'ARK: Survival Ascended',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'The Island, Scorched Earth, and Aberration'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
