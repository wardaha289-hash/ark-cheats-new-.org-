#!/usr/bin/env node
/**
 * One-time migration: Warzone Hacks → Ark Cheats (ARK: Survival Ascended).
 * Domain: arkcheats.org
 * Run from project root: node scripts/adapt-ark.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['warzone-aimbot', 'ark-aimbot'],
	['warzone-esp', 'ark-esp'],
	['warzone-wallhack', 'ark-wallhack'],
	['warzone-radar-hack', 'ark-radar-hack'],
	['undetected-warzone-cheats', 'undetected-ark-cheats'],
	['warzone-cheats-2026', 'ark-cheats-2026'],
	['ricochet-bypass', 'eac-bypass'],
	['warzone-hacks', 'ark-cheats'],
	['warzone-cheat-download', 'ark-cheat-download'],
	['warzone-mod-menu', 'ark-mod-menu'],
	['warzone-soft-aim', 'ark-soft-aim'],
	['best-warzone-cheats', 'best-ark-cheats'],
	['warzone-aimbot-hack', 'ark-aimbot-hack'],
	['warzone-esp-hack', 'ark-esp-hack'],
	['warzone-unlock-all', 'ark-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://warzonehacks.net', 'https://arkcheats.org'],
	['https://www.warzonehacks.net', 'https://www.arkcheats.org'],
	['www.warzonehacks.net', 'www.arkcheats.org'],
	['warzonehacks.net', 'arkcheats.org'],
	['support@warzonehacks.net', 'support@arkcheats.org'],
	['support@warzonescheats.net', 'support@arkcheats.org'],
	['warzonescheats.net', 'arkcheats.org'],
	['warzonescheats.com', 'arkcheats.org'],
	['warzonescheats.xyz', 'arkcheats.org'],
	['/products/warzone', '/products/tarkov'],
	['project-name=warzonehacks', 'project-name=arkcheats'],
	['project-name=warzonescheats', 'project-name=arkcheats'],
	['name = "warzonehacks"', 'name = "arkcheats"'],
	['name = "warzonescheats"', 'name = "arkcheats"'],
	['"name": "warzone-hacks"', '"name": "ark-cheats"'],
	['warzone-esp-player-tags', 'ark-esp-player-tags'],
	['warzone-wallhack-skeleton', 'ark-wallhack-skeleton'],
	['warzone-aimbot-sniper', 'ark-aimbot-sniper'],
	['warzone-aimbot-skeleton', 'ark-aimbot-skeleton'],
	['warzone-esp-radar', 'ark-esp-radar'],
	['warzone-cheats-combat', 'ark-cheats-combat'],
	['warzone-hacks-logo', 'ark-cheats-logo'],
	['warzone-hero-banner', 'tarkov-hero-banner'],
	['warzone-hero-ghost', 'tarkov-hero-ghost'],
	['warzone-hero-source', 'tarkov-hero-source'],
	['undetected-warzone-cheats', 'undetected-ark-cheats'],
	['best-warzone-cheats', 'best-ark-cheats'],
	['warzone-cheat-download', 'ark-cheat-download'],
	['warzone-cheats-2026', 'ark-cheats-2026'],
	['warzone-radar-hack', 'ark-radar-hack'],
	['warzone-aimbot-hack', 'ark-aimbot-hack'],
	['warzone-esp-hack', 'ark-esp-hack'],
	['warzone-unlock-all', 'ark-unlock-all'],
	['warzone-soft-aim', 'ark-soft-aim'],
	['warzone-mod-menu', 'ark-mod-menu'],
	['warzone-wallhack', 'ark-wallhack'],
	['warzone-hacks', 'ark-cheats'],
	['warzone-aimbot', 'ark-aimbot'],
	['warzone-esp', 'ark-esp'],
	['ricochet-bypass', 'eac-bypass'],
	["'ricochet'", "'eac'"],
	['| ricochet', '| eac'],
	['pageId="ricochet"', 'pageId="eac"'],
	['pageId: \'ricochet\'', "pageId: 'eac'"],
	['"ricochet"', '"eac"'],
	['call-of-duty-warzone-cheats', 'escape-from-ark-cheats'],
	['Call of Duty: Warzone', 'ARK: Survival Ascended'],
	['Call of Duty Warzone', 'ARK: Survival Ascended'],
	['Warzone Hacks', 'Ark Cheats'],
	['Warzone Cheats', 'Ark Cheats'],
	['Warzone cheats', 'Ark cheats'],
	['Warzone cheat', 'Ark cheat'],
	['Warzone hacks', 'Ark cheats'],
	['Warzone hack', 'Ark cheat'],
	['WarzoneCheatsSite', 'ArkCheatsSite'],
	['Warzone Intel', 'Ark Intel'],
	['Ricochet anti-cheat', 'Easy Anti-Cheat'],
	['Ricochet maintenance', 'Easy Anti-Cheat maintenance'],
	['Ricochet bypass', 'Easy Anti-Cheat bypass'],
	['Ricochet Bypass', 'Easy Anti-Cheat Bypass'],
	['Ricochet patches', 'Easy Anti-Cheat patches'],
	['Ricochet patch', 'Easy Anti-Cheat patch'],
	['Ricochet updates', 'Easy Anti-Cheat updates'],
	['Ricochet update', 'Easy Anti-Cheat update'],
	['after Ricochet', 'after Easy Anti-Cheat'],
	['RICOCHET', 'Easy Anti-Cheat'],
	['Ricochet', 'Easy Anti-Cheat'],
	['ricochet', 'eac'],
	['warzone hacks', 'ark cheats'],
	['warzone cheats', 'ark cheats'],
	['warzone hack', 'ark cheat'],
	['warzone cheat', 'ark cheat'],
	['Verdansk, Urzikstan, and Rebirth Island', 'The Island, Scorched Earth, and Aberration'],
	['Verdansk, Urzikstan and Rebirth Island', 'The Island, Scorched Earth and Aberration'],
	['Verdansk, Urzikstan et Rebirth Island', 'Customs, Woods et Streets of Tarkov'],
	['Verdansk, Urzikstan e Rebirth Island', 'Customs, Woods e Streets of Tarkov'],
	['Verdansk, Urzikstan und Rebirth Island', 'Customs, Woods und Streets of Tarkov'],
	['gulag fights', 'tribe fights'],
	['gulag fight', 'tribe fight'],
	['gulag rounds', 'server sessions'],
	['gulag', 'tribe base'],
	['BR and Resurgence-style modes', 'PvP servers and PvE maps'],
	['BR and Resurgence', 'PvP servers and PvE maps'],
	['BR & Resurgence', 'PvP & PvE'],
	['Resurgence and Battle Royale', 'PvP servers and PvE maps'],
	['Battle Royale', 'session'],
	['Resurgence', 'PvE map'],
	['resurgence', 'PvE map'],
	['contract markers', 'tribe base and loot markers'],
	['loadout drops', 'rare drops'],
	['loadout drop', 'rare drops'],
	['Operators', 'players'],
	['operators', 'players'],
	['UAV', 'tribe base timer'],
	['warzoneImages', 'arkImages'],
	["from './warzone'", "from './ark'"],
	["from '../data/warzone'", "from '../data/ark'"],
	["from '../../data/warzone'", "from '../../data/ark'"],
	['fetch-warzone-images', 'fetch-ark-images'],
	['warzone-hack-overlays', 'tarkov-hack-overlays'],
	['trucos-warzone', 'trucos-ark'],
	['triche-warzone', 'triche-ark'],
	['cheats-warzone', 'cheats-ark'],
	['trucchi-warzone', 'trucchi-ark'],
	['cheaty-warzone', 'cheaty-ark'],
	['chity-warzone', 'chity-ark'],
	['chitov-warzone', 'chitov-ark'],
	['chitiv-warzone', 'chitiv-ark'],
	['cheatow-warzone', 'cheatow-ark'],
	['hile-warzone', 'hile-ark'],
	['warzone-hile', 'ark-hile'],
	['warzone-esp-chity', 'ark-esp-chity'],
	['warzone-aimbot-chity', 'ark-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-ark-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-ark-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-ark-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-ark'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-ark'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-ark-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-ark'],
	['cheats-warzone-nedetectabile', 'cheats-ark-nedetectabile'],
	['basta-warzone-cheats', 'basta-ark-cheats'],
	['warzone-cheats-funktionen', 'ark-cheats-funktionen'],
	['warzone-cheats-functies', 'ark-cheats-functies'],
	['caracteristicas-trucos-warzone', 'caracteristicas-trucos-ark'],
	['fonctionnalites-triche-warzone', 'fonctionnalites-triche-ark'],
	['recursos-cheats-warzone', 'recursos-cheats-ark'],
	['call-of-duty-warzone', 'escape-from-tarkov'],
	['Buy Warzone Hacks', 'Buy Ark Cheats'],
	['Warzone', 'Tarkov'],
	['warzone', 'tarkov'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-ark.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameWarzoneTs() {
	const from = path.join(ROOT, 'src', 'data', 'warzone.ts');
	const to = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	try {
		await rename(from, to);
		console.log('Renamed warzone.ts → tarkov.ts');
	} catch (e) {
		console.warn(`warzone.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-warzone-images.mjs', 'fetch-ark-images.mjs'],
		['warzone-hack-overlays.mjs', 'tarkov-hack-overlays.mjs'],
		['fix-warzone-copy.mjs', 'fix-tarkov-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'ark-aimbot': 'ark-aimbot',
		'ark-esp': 'ark-esp',
		'ark-wallhack': 'wallhack',
		'ark-radar-hack': 'radar',
		'undetected-ark-cheats': 'undetected',
		'ark-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'ark-cheats': 'hacks',
		'ark-cheat-download': 'cheat-download',
		'ark-mod-menu': 'mod-menu',
		'ark-soft-aim': 'soft-aim',
		'best-ark-cheats': 'best-cheats',
		'ark-aimbot-hack': 'aimbot-hack',
		'ark-esp-hack': 'esp-hack',
		'ark-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('warzone')) continue;
		const newName = file.replace(/warzone/g, 'tarkov').replace(/tarkov-hacks-logo/g, 'ark-cheats-logo');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Warzone Hacks → Ark Cheats (arkcheats.org)...\n');
	await renamePageDirs();
	await renameWarzoneTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
