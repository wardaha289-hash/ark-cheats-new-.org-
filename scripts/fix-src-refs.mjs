#!/usr/bin/env node
/** Final pass: fix remaining Tarkov references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['arkImages', 'arkImages'],
	["from '../data/ark'", "from '../data/ark'"],
	["from './ark'", "from './ark'"],
	['/undetected-ark-cheats/', '/undetected-ark-cheats/'],
	['/ark-wallhack/', '/ark-wallhack/'],
	['/ark-radar-hack/', '/ark-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/ark-cheats-2026/', '/ark-cheats-2026/'],
	['/ark-aimbot/', '/ark-aimbot/'],
	['/ark-esp/', '/ark-esp/'],
	['/ark-cheats/', '/ark-esp/'],
	['Ark Cheats', 'Ark Cheats'],
	['Ark cheats', 'Ark cheats'],
	['Tarkov wallhack', 'ARK: Survival Ascended wallhack'],
	['Tarkov radar', 'ARK: Survival Ascended radar'],
	['Tarkov Aimbot', 'ARK: Survival Ascended Aimbot'],
	['Tarkov ESP', 'ARK: Survival Ascended ESP'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['arkcheats.org', 'arkcheats.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
