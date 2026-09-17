#!/usr/bin/env node
/**
 * Syncs locale 301s for cannibal pageIds → pillar pageIds into
 * functions/cannibal-redirects.json (handled by src/worker.ts + Pages middleware).
 * Not written to public/_redirects — Cloudflare limits _redirects to 100 rules.
 * Targets are read from src/data/seo-cannibal-map.ts (single source of truth).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const CANONICAL = path.join(ROOT, 'src/data/seo-cannibal-map.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/cannibal-redirects.json');

const MARKER_START = '# Auto-generated cannibal locale redirects';
const MARKER_NOTE =
	'# Locale cannibal 301s live in functions/cannibal-redirects.json (Worker handles them — Cloudflare _redirects limit is 100)';

function readCannibalTargets() {
	const src = readFileSync(CANONICAL, 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing in seo-cannibal-map.ts');
	/** @type {Record<string, string>} */
	const targets = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		targets[row[1]] = row[2];
	}
	if (!Object.keys(targets).length) throw new Error('No cannibal targets parsed');
	return targets;
}

function extractSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) throw new Error(`Missing localizedSlugs block for ${pageId}`);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']+)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

function stripLegacyRedirectsBlock() {
	let redirects = readFileSync(REDIRECTS, 'utf8');
	const start = redirects.indexOf(MARKER_START);
	if (start >= 0) {
		const lineStart = redirects.lastIndexOf('\n', start);
		redirects = redirects.slice(0, lineStart >= 0 ? lineStart : start).trimEnd();
	}
	if (!redirects.includes(MARKER_NOTE)) {
		redirects = `${redirects.trimEnd()}\n\n${MARKER_NOTE}\n`;
		writeFileSync(REDIRECTS, redirects);
	}
}

const TARGETS = readCannibalTargets();
const routing = readFileSync(ROUTING, 'utf8');
/** @type {Record<string, string>} */
const map = {};

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromSlugs = extractSlugBlock(routing, fromId);
	const toSlugs = extractSlugBlock(routing, toId);
	for (const [locale, fromSlug] of Object.entries(fromSlugs)) {
		if (locale === 'en') continue;
		const toSlug = toSlugs[locale];
		if (!toSlug) continue;
		const toPath = `/${locale}/${toSlug}/`;
		map[`/${locale}/${fromSlug}/`] = toPath;
		map[`/${locale}/${fromSlug}`] = toPath;
	}
}

stripLegacyRedirectsBlock();
writeFileSync(JSON_OUT, `${JSON.stringify(map, null, 2)}\n`);
console.log(
	`Synced ${Object.keys(map).length / 2} cannibal locale redirect pairs (${Object.keys(TARGETS).length} pageIds) → cannibal-redirects.json`,
);
