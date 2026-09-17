/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Ark Cheats',
	/** Short product label if needed */
	shortName: 'Ark',
	/** Canonical origin — no trailing slash */
	url: 'https://arkcheats.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@arkcheats.org',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fark-ascended',

	/** Game this template instance targets */
	game: 'ARK: Survival Ascended',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/ark-cheats-logo.webp',
	logoRaster: '/images/ark-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Ark Cheats logo',
	defaultOgImage: '/images/ark-cheats-hero-full.jpg',
	heroImage: '/images/ark-cheats-hero-full.jpg',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#9333ea',
		bg: '#0a0812',
		soft: '#c084fc',
		deep: '#6b21a8',
		hover: '#a855f7',
		panel: '#0c0a14',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'ark cheats',
		list: [
			'ark cheats',
			'ARK console commands',
			'ARK cheat codes',
			'ARK item IDs',
			'ARK GFI codes',
			'ARK creature IDs',
			'ARK admin commands',
			'ARK spawn commands',
			'ARK Survival Ascended cheats',
			'ARK Survival Evolved cheats',
			'ARK PvP tips',
			'ARK FOV settings',
			'ARK crosshair settings',
			'ARK performance optimization',
			'ARK dinosaur guide',
			'ARK taming guide',
			'undetected ark cheats',
			'best ark cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Ark Cheats | Official Windows PC Site',
		homeDescription:
			'Official Ark Cheats site for Windows PC. Compare features, store plans, and live status — then buy aimbot, player ESP, dino ESP, and combat tools in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — aimbot, player ESP, dino ESP, item ESP, FOV changer, no recoil, and patch updates after {antiCheat}.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same aimbot, ESP, and combat features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you join a server on Windows PC today.',
		previewTitle: 'Ark Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected ark cheats for ARK: Survival Ascended on Windows PC. Aimbot, player ESP, dino ESP, item ESP, and Easy Anti-Cheat updates in one license.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order before your first session.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for ARK: Survival Ascended — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, player ESP, dino ESP, and patch updates for ARK: Survival Ascended on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — PvP tips, ESP, aimbot, taming, and {antiCheat} update coverage for Windows PC players.',
		forumsTitle: '{game} Forums | {brand}',
		forumsDescription:
			'Community threads for {brand} — setup, ESP, aimbot, profiles, and {antiCheat} notes for {game} on Windows PC.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, player ESP, dino ESP, and combat tools for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, player ESP, dino ESP, item ESP, and combat tools with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected aimbot, player ESP, dino ESP, and combat tools for ARK: Survival Ascended on Windows PC.',
		blogLabel: 'Ark Intel',
		forumsLabel: 'Forums',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for ARK: Survival Ascended — aimbot, player ESP, dino ESP, item ESP, FOV changer, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, ESP, dino filters, and support.',
		chipEsp: 'Player & dino ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Item ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-18',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/ark-cheats-wallhack.webp',
				title: 'Player ESP in ARK: Survival Ascended',
				caption: 'Player ESP boxes and distance readouts during PvP',
			},
			{
				src: '/images/ark-cheats-wallhack.webp',
				title: 'Dino ESP wallhack for ARK',
				caption: 'Wild dino and player outlines through terrain',
			},
			{
				src: '/images/ark-cheats-aimbot.webp',
				title: 'Aimbot for ARK: Survival Ascended',
				caption: 'Configurable aimbot FOV and target priority',
			},
			{
				src: '/images/ark-cheats-aimbot-view.webp',
				title: 'Aimbot view in Ark Cheats',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/ark-cheats-aimbot.webp',
				title: 'Item ESP overlay',
				caption: 'Item ESP markers for loot and resources',
			},
			{
				src: '/images/ark-cheats-hero-full.jpg',
				title: 'Ark Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
