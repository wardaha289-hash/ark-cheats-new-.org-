import { siteConfig } from './site';

/** Screenshots used across product pages — simple ark cheats keyword alts. */
export const arkImages = {
	hero: '/images/ark-cheats-hero-full.png',
	espWallhack: '/images/ark-cheats-wallhack.webp',
	aimbotCombat: '/images/ark-cheats-aimbot.webp',
	aimbotSkeleton: '/images/ark-cheats-aimbot-view.webp',
	playerEsp: '/images/ark-cheats-radar.webp',
	cheatsCombat: '/images/ark-cheats-session.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/ark-cheats-session.webp',
	loadoutBuilder: '/images/ark-cheats-radar.webp',
	squadFight: '/images/ark-cheats-aimbot-view.webp',
	cheatsPackage: '/images/ark-cheats-radar.webp',
	headerArt: '/images/ark-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/ark-cheats-session.webp',
	extractFight: '/images/ark-cheats-aimbot.webp',
	rebootFight: '/images/ark-cheats-aimbot.webp',
	dinoRunCombat: '/images/ark-cheats-wallhack.webp',
	dinoRunMode: '/images/ark-cheats-esp.webp',
	battleRoyaleIsland: '/images/ark-cheats-esp.webp',
	sessionMap: '/images/ark-cheats-esp.webp',
	product: [
		{ src: '/images/ark-cheats-esp.webp', alt: 'ESP player boxes in an ARK: Survival Ascended session' },
		{ src: '/images/ark-cheats-wallhack.webp', alt: 'Wallhack outlines for players and wild dinos' },
		{ src: '/images/ark-cheats-aimbot.webp', alt: 'Soft aim assist overlay for Tarkov' },
		{ src: '/images/ark-cheats-esp.webp', alt: 'Loot and tribe base ESP markers' },
		{ src: '/images/ark-cheats-wallhack.webp', alt: 'Through-wall visibility during a session' },
		{ src: '/images/ark-cheats-aimbot.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/ark-cheats-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/ark-cheats-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/ark-cheats-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/ark-cheats-esp.webp', alt: 'Container and loot ESP pins' },
		{ src: '/images/ark-cheats-wallhack.webp', alt: 'Boss and player wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/ark-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/ark-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/ark-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/ark-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/ark-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/ark-cheats-session.webp', title: '', caption: '' },
	],
} as const;
