/** Community forum threads — setup, features, and configuration guides for Ark Cheats. */

import { defaultLocale, type LocaleCode } from './i18n/locales';
import { forumCategoryLabelsI18n, forumThreadsI18n } from './forums-i18n';

export type ForumCategory = 'features' | 'setup' | 'instructions';

export type ForumThread = {
	slug: string;
	category: ForumCategory;
	title: string;
	excerpt: string;
	sections: ReadonlyArray<{
		h2: string;
		paragraphs: readonly string[];
		list?: readonly string[];
	}>;
};

export const forumCategoryLabels: Record<ForumCategory, string> = {
	features: 'Features',
	setup: 'Setup',
	instructions: 'Instructions',
};

export const forumThreads: ForumThread[] = [
	{
		slug: 'save-load-profiles',
		category: 'setup',
		title: 'Ark Cheats Configuration: Save, Load and Profile Tuning',
		excerpt:
			'Learn how to save, load, and switch Ark Cheats profiles for PvP servers and PvE maps. Keep ESP, aimbot, and dino filter presets ready for each play style.',
		sections: [
			{
				h2: 'Why profiles matter',
				paragraphs: [
					'One preset for PvP tribe raids and another for taming runs saves time every session. Save your ESP distance, dino filters, and aimbot FOV once — then load the right profile before you join a server.',
				],
			},
			{
				h2: 'Save and load steps',
				paragraphs: ['Open the Ark Cheats menu in-game, tune your settings, then use Save profile. Name each file by map or role so you can load it fast next time.'],
				list: [
					'Save after you set player ESP, dino ESP, and item ESP filters',
					'Load a PvP profile before official PvP servers',
					'Load a PvE profile before taming or boss prep',
				],
			},
		],
	},
	{
		slug: 'player-esp-dino-esp',
		category: 'features',
		title: 'Player ESP & Dino ESP Features',
		excerpt:
			'Overview of player ESP, dino ESP, and item ESP in Ark Cheats — boxes, distance readouts, dino filters, and loot markers for ARK: Survival Ascended.',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Player ESP highlights enemy survivors with distance and name tags. Dino ESP tracks wild and tamed creatures through terrain. Item ESP marks loot, resources, and supply drops worth the trip.',
				],
			},
			{
				h2: 'Recommended filters',
				paragraphs: ['Use dino filters to hide small critters and keep the overlay clean on busy maps.'],
				list: ['Filter by dino level for taming targets', 'Show only hostile players in PvP', 'Highlight rare resources and supply crates'],
			},
		],
	},
	{
		slug: 'aimbot-recoil-config',
		category: 'features',
		title: 'Aimbot & Recoil Configuration',
		excerpt:
			'Configure aimbot FOV, smoothing, and bone selection plus no recoil, no spread, and rapid fire for ARK PvP fights.',
		sections: [
			{
				h2: 'Aimbot basics',
				paragraphs: [
					'Start with a wide FOV and moderate smoothing so aim assist feels natural in third-person combat. Pick head or chest bones based on weapon type and server rules.',
				],
			},
			{
				h2: 'Recoil and spread',
				paragraphs: ['No recoil and no spread keep rifles stable during tribe fights. Use rapid fire only when your FPS stays stable.'],
			},
		],
	},
	{
		slug: 'fps-performance',
		category: 'instructions',
		title: 'FPS and Performance Settings',
		excerpt:
			'Optimize ARK: Survival Ascended FPS while running Ark Cheats — graphics tweaks, overlay load, and stable frame times for PvP.',
		sections: [
			{
				h2: 'Keep FPS stable',
				paragraphs: [
					'Lower unnecessary ESP draw distance first. Trim item ESP range on large maps. Close background apps before long PvP sessions.',
				],
				list: ['Cap ESP entity count on crowded servers', 'Use medium ARK graphics if FPS drops below 60', 'Check Status after game patches before tuning again'],
			},
		],
	},
	{
		slug: 'esp-visual-customization',
		category: 'instructions',
		title: 'ESP Visual Customization',
		excerpt:
			'Customize ESP boxes, colors, and distance labels so players, dinos, and loot stay readable in day and night sessions.',
		sections: [
			{
				h2: 'Readable overlays',
				paragraphs: [
					'Use high-contrast box colors for players and softer tones for dinos. Keep text size large enough to read at 100m without cluttering the screen.',
				],
			},
		],
	},
	{
		slug: 'aimbot-setup',
		category: 'instructions',
		title: 'Aimbot Setup',
		excerpt:
			'Step-by-step aimbot setup for Ark Cheats — FOV ring, target bone, smoothing, and crosshair alignment for ARK combat.',
		sections: [
			{
				h2: 'First-time setup',
				paragraphs: [
					'Enable aimbot after ESP is working. Set FOV to match your monitor and playstyle. Test in a private session before official PvP.',
				],
				list: ['Bind a toggle key for aimbot on/off', 'Match crosshair style to your weapon view', 'Lower smoothing if tracking feels slow'],
			},
		],
	},
	{
		slug: 'save-load-settings',
		category: 'setup',
		title: 'Save & Load Settings',
		excerpt:
			'Backup and restore Ark Cheats settings between PCs or after reinstall — keep your ESP and aimbot presets safe.',
		sections: [
			{
				h2: 'Backup your config',
				paragraphs: [
					'Export settings after every major tune. Store profile files outside the game folder so updates do not wipe them.',
				],
			},
		],
	},
	{
		slug: 'general-setup',
		category: 'setup',
		title: 'General Setup Instructions',
		excerpt:
			'First launch checklist for Ark Cheats on Windows PC — license, loader, in-game menu, and Easy Anti-Cheat notes.',
		sections: [
			{
				h2: 'Before first session',
				paragraphs: [
					'Buy a plan, install from your license email, and follow the setup guide in order. Check Status after every ARK or Easy Anti-Cheat patch.',
				],
				list: ['Run as administrator if the loader asks', 'Disable conflicting overlays', 'Join a low-pop server for first ESP test'],
			},
		],
	},
	{
		slug: 'launcher-eac-setup',
		category: 'setup',
		title: 'Game and Launcher Setup',
		excerpt:
			'Launch ARK: Survival Ascended with Ark Cheats — Steam paths, Easy Anti-Cheat timing, and post-patch rebuild notes.',
		sections: [
			{
				h2: 'Launcher order',
				paragraphs: [
					'Start the Ark Cheats loader first, then launch ARK from Steam when prompted. After a game update, wait for Status to show undetected before you play.',
				],
			},
		],
	},
];

export const forumsBasePath = '/forums/';

export function getForumsBasePath(locale: LocaleCode = defaultLocale): string {
	return locale === defaultLocale ? forumsBasePath : `/${locale}/forums/`;
}

export function getForumThreads(locale: LocaleCode = defaultLocale): ForumThread[] {
	return forumThreadsI18n[locale] ?? forumThreads;
}

export function getForumThread(slug: string, locale: LocaleCode = defaultLocale): ForumThread | undefined {
	return getForumThreads(locale).find((thread) => thread.slug === slug);
}

export function getForumCategoryLabel(category: ForumCategory, locale: LocaleCode = defaultLocale): string {
	return forumCategoryLabelsI18n[locale]?.[category] ?? forumCategoryLabels[category];
}

export function getForumThreadPath(slug: string, locale: LocaleCode = defaultLocale): string {
	return `${getForumsBasePath(locale)}${slug}/`;
}
