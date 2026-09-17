#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'ark cheats', espWallhack: 'ark cheats wallhack', aimbotCombat: 'ark cheats aimbot', squadFight: 'ark cheats', playerEsp: 'ark cheats esp', headerArt: 'ark cheats aimbot', cheatsPackage: 'ark cheats radar', rebootFight: 'ark cheats aimbot', battleRoyale: 'ark cheats', battleRoyaleIsland: 'ark cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Tarkov ESP player tags hack'", "imageAlt: 'ark cheats esp'"],
	["imageAlt: 'Tarkov ESP radar hack'", "imageAlt: 'ark cheats radar'"],
	["imageAlt: 'Tarkov aimbot sniper kill'", "imageAlt: 'ark cheats aimbot'"],
	["imageAlt: 'Tarkov aimbot skeleton targeting'", "imageAlt: 'ark cheats aimbot'"],
	["imageAlt: 'Ark cheats ADS combat'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats setup PC activation'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats FAQ ESP aimbot'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats support license help'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Undetected ark cheats ESP wallhack'", "imageAlt: 'undetected ark cheats'"],
	["imageAlt: 'Tarkov wallhack skeleton ESP'", "imageAlt: 'ark cheats wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass tarkov ESP aimbot'", "imageAlt: 'ark cheats eac'"],
	["imageAlt: 'Ark cheats 2026 ESP aimbot'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats combat aimbot'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheat download ESP aimbot'", "imageAlt: 'ark cheats download'"],
	["imageAlt: 'Tarkov mod menu ESP aimbot'", "imageAlt: 'ark cheats mod menu'"],
	["imageAlt: 'Tarkov soft aim aimbot settings'", "imageAlt: 'ark cheats soft aim'"],
	["imageAlt: 'Best ark cheats 2026 ESP'", "imageAlt: 'best ark cheats'"],
	["imageAlt: 'Tarkov aimbot hack combat'", "imageAlt: 'ark cheats aimbot'"],
	["imageAlt: 'Tarkov ESP hack wallhack'", "imageAlt: 'ark cheats esp'"],
	["imageAlt: 'Tarkov unlock all ESP aimbot guide'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats privacy policy'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats refund policy'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Ark cheats terms of use'", "imageAlt: 'ark cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Tarkov ${meta.altKeyword}`")
	.join("imageAlt: 'ark cheats'")
	.split("galleryTitle: `Ark Cheats ${topicName}`")
	.join("galleryTitle: 'ark cheats'")
	.split("imageAlt: `Ark cheats ${kind} policy`")
	.join("imageAlt: 'ark cheats'")
	.split("galleryTitle: `Ark Cheats ${kind} resources`")
	.join("galleryTitle: 'ark cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
