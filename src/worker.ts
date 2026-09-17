/**
 * Cloudflare Worker — host canonicalization + cannibal 301s before static assets.
 * Canonical site: https://arkcheats.org (matches brand.url)
 *
 * Locale cannibal redirects live in functions/cannibal-redirects.json (not public/_redirects)
 * because Cloudflare limits _redirects to 100 rules.
 */
import cannibalRedirects from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_ORIGIN = 'https://arkcheats.org';
const CANONICAL_HOST = 'arkcheats.org';

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set(['besttarkovcheats.com', 'www.besttarkovcheats.com']);

const CANNIBAL_REDIRECTS = cannibalRedirects as Record<string, string>;

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const hostTarget = canonicalUrl(request);
		if (hostTarget) {
			return Response.redirect(hostTarget.toString(), 301);
		}

		const url = new URL(request.url);
		const pathRedirect = CANNIBAL_REDIRECTS[url.pathname];
		if (pathRedirect) {
			const target = new URL(pathRedirect + url.search, CANONICAL_ORIGIN);
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
