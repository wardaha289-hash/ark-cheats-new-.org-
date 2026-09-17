#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Ark Cheats (ARK: Survival Ascended).
 * Domain: arkcheats.org
 * Run from project root: node scripts/adapt-ark.mjs
 */
import { readFile, writeFile, readdir, rename, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'ark-aimbot'],
	['tarkov-esp', 'ark-esp'],
	['tarkov-wallhack', 'ark-wallhack'],
	['tarkov-radar-hack', 'ark-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-ark-cheats'],
	['tarkov-cheats-2026', 'ark-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'ark-cheats'],
	['tarkov-cheat-download', 'ark-cheat-download'],
	['tarkov-mod-menu', 'ark-mod-menu'],
	['tarkov-soft-aim', 'ark-soft-aim'],
	['best-tarkov-cheats', 'best-ark-cheats'],
	['tarkov-aimbot-hack', 'ark-aimbot-hack'],
	['tarkov-esp-hack', 'ark-esp-hack'],
	['tarkov-unlock-all', 'ark-unlock-all'],
];

const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://arkcheats.org'],
	['https://www.tarkovcheats.org', 'https://www.arkcheats.org'],
	['www.tarkovcheats.org', 'www.arkcheats.org'],
	['tarkovcheats.org', 'arkcheats.org'],
	['support@tarkovcheats.org', 'support@arkcheats.org'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fark-ascended'],
	['/products/escape-from-tarkov', '/products/ark-ascended'],
	['project-name=tarkovcheats', 'project-name=arkcheats'],
	['project-name=besttarkovcheats', 'project-name=arkcheats'],
	['name = "besttarkovcheats"', 'name = "arkcheats"'],
	['"name": "tarkov-cheats"', '"name": "ark-cheats"'],
	['undetected-tarkov-cheats', 'undetected-ark-cheats'],
	['best-tarkov-cheats', 'best-ark-cheats'],
	['tarkov-cheat-download', 'ark-cheat-download'],
	['tarkov-cheats-2026', 'ark-cheats-2026'],
	['tarkov-radar-hack', 'ark-radar-hack'],
	['tarkov-aimbot-hack', 'ark-aimbot-hack'],
	['tarkov-esp-hack', 'ark-esp-hack'],
	['tarkov-unlock-all', 'ark-unlock-all'],
	['tarkov-soft-aim', 'ark-soft-aim'],
	['tarkov-mod-menu', 'ark-mod-menu'],
	['tarkov-wallhack', 'ark-wallhack'],
	['tarkov-cheats', 'ark-cheats'],
	['tarkov-aimbot', 'ark-aimbot'],
	['tarkov-esp', 'ark-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['pageId="battleye"', 'pageId="eac"'],
	['pageId: \'battleye\'', "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'ark-survival-ascended-cheats'],
	['Escape from Tarkov', 'ARK: Survival Ascended'],
	['Tarkov Cheats', 'Ark Cheats'],
	['Tarkov Cheats', 'Ark Cheats'],
	['Tarkov cheats', 'Ark cheats'],
	['Tarkov cheat', 'Ark cheat'],
	['Tarkov hacks', 'Ark cheats'],
	['Tarkov hack', 'Ark cheat'],
	['TarkovCheatsSite', 'ArkCheatsSite'],
	['Tarkov Intel', 'Ark Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov cheats', 'ark cheats'],
	['tarkov cheat', 'ark cheat'],
	['Customs, Woods, and Streets of Tarkov', 'The Island, Scorched Earth, and Aberration'],
	['Customs, Woods and Streets of Tarkov', 'The Island, Scorched Earth and Aberration'],
	['extract fights', 'tribe fights'],
	['extract fight', 'tribe fight'],
	['raid rounds', 'server sessions'],
	['extract', 'tribe base'],
	['PMC raids and Scav runs', 'PvP servers and PvE maps'],
	['PMC & Scav', 'PvP & PvE'],
	['PMC raids and Scav runs', 'PvP servers and PvE maps'],
	['PMC raids', 'PvP servers'],
	['Scav runs', 'PvE maps'],
	['Scav run', 'PvE map'],
	['scav run', 'PvE map'],
	['extract and loot markers', 'dino and loot markers'],
	['high-value loot', 'rare drops'],
	['PMCs', 'players'],
	['PMCs and Scavs', 'players and dinos'],
	['Scavs', 'wild dinos'],
	['Scav', 'dino'],
	['scav', 'dino'],
	['bosses', 'alpha dinos'],
	['boss', 'alpha dino'],
	['raid', 'session'],
	['raids', 'sessions'],
	['raid flow', 'survival flow'],
	['queue a raid', 'join a server'],
	['queue', 'join'],
	['tarkovImages', 'arkImages'],
	["from './tarkov'", "from './ark'"],
	["from '../data/tarkov'", "from '../data/ark'"],
	["from '../../data/tarkov'", "from '../../data/ark'"],
	['fetch-tarkov-images', 'fetch-ark-images'],
	['adapt-tarkov', 'adapt-ark'],
	['tarkov-cheats-logo', 'ark-cheats-logo'],
	['tarkov-cheats-hero', 'ark-cheats-hero'],
	['tarkov-cheats-wallhack', 'ark-cheats-wallhack'],
	['tarkov-cheats-aimbot', 'ark-cheats-aimbot'],
	['tarkov-cheats-aimbot-view', 'ark-cheats-aimbot-view'],
	['tarkov-cheats-esp', 'ark-cheats-esp'],
	['tarkov-cheats-radar', 'ark-cheats-radar'],
	['tarkov-cheats-raid', 'ark-cheats-raid'],
	['trucos-tarkov', 'trucos-ark'],
	['triche-tarkov', 'triche-ark'],
	['cheats-tarkov', 'cheats-ark'],
	['trucchi-tarkov', 'trucchi-ark'],
	['cheaty-tarkov', 'cheaty-ark'],
	['chity-tarkov', 'chity-ark'],
	['chitov-tarkov', 'chitov-ark'],
	['chitiv-tarkov', 'chitiv-ark'],
	['cheatow-tarkov', 'cheatow-ark'],
	['hile-tarkov', 'hile-ark'],
	['tarkov-hile', 'ark-hile'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-ark-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-ark-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-ark-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-ark'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-ark'],
];

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (!SKIP_DIRS.has(entry.name)) files.push(...(await walk(full)));
		} else {
			files.push(full);
		}
	}
	return files;
}

async function renamePageDirs() {
	const pagesDir = path.join(ROOT, 'src', 'pages');
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const fromPath = path.join(pagesDir, from);
		const toPath = path.join(pagesDir, to);
		try {
			await rename(fromPath, toPath);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch {
			// already renamed or missing
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'ark.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → ark.ts');
	} catch {
		// already renamed
	}
}

async function processFiles() {
	const files = await walk(ROOT);
	const textExts = new Set(['.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.md', '.mdc', '.toml', '.txt', '.css', '.html']);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!textExts.has(ext)) continue;
		if (file.includes('adapt-ark.mjs')) continue;
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [from, to] of REPLACEMENTS) {
			content = content.split(from).join(to);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			changed++;
		}
	}
	console.log(`Updated ${changed} files`);
}

async function ensureImagesDir() {
	await mkdir(path.join(ROOT, 'public', 'images'), { recursive: true });
}

async function main() {
	console.log('Adapting template for Ark Cheats…');
	await renamePageDirs();
	await renameDataFile();
	await processFiles();
	await ensureImagesDir();
	console.log('Done. Update brand.ts manually if needed, then run npm run sync:brand');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
