import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Ark Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos ARK: Survival Ascended indetectables para ARK: Survival Ascended en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Ark Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para ARK: Survival Ascended en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galería Ark Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Ark Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y dino-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Ark Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches ARK: Survival Ascended indétectables pour ARK: Survival Ascended sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Ark Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour ARK: Survival Ascended sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galerie Ark Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Ark Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et dino-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Ark Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Ark Cheats für ARK: Survival Ascended auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Ark Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für ARK: Survival Ascended: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Ark Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Ark Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und dino-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Ark Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats ARK: Survival Ascended indetectáveis para ARK: Survival Ascended no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Ark Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para ARK: Survival Ascended no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galeria Ark Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Ark Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e dino-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Ark Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat ARK: Survival Ascended indetectable per ARK: Survival Ascended su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Ark Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per ARK: Survival Ascended su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galleria Ark Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Ark Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e dino-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Ark Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Ark cheats voor ARK: Survival Ascended op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Ark Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor ARK: Survival Ascended: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Ark Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Ark Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en dino-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Ark Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty ARK: Survival Ascended dla ARK: Survival Ascended na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Ark Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla ARK: Survival Ascended na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galeria Ark Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Ark Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i dino-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Ark Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы ARK: Survival Ascended для ARK: Survival Ascended на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Ark Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для ARK: Survival Ascended на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Галерея Ark Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Ark Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и dino-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Ark Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'ARK: Survival Ascended için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Ark Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'ARK: Survival Ascended Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Ark Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Ark Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve dino-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Ark Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش ARK: Survival Ascended undetected لـ ARK: Survival Ascended على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Ark Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ ARK: Survival Ascended على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'معرض Ark Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Ark Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وdino-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Ark Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'ARK: Survival Ascended向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Ark Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'ARK: Survival Ascended Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Ark cheats hero ESP aimbot wallhack', gallery: 'Ark Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にArk Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとdino-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Ark Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'ARK: Survival Ascended undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Ark Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'ARK: Survival Ascended Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Ark cheats hero ESP aimbot wallhack', gallery: 'Ark Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Ark Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 dino-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Ark Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'ARK: Survival Ascended undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Ark Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'ARK: Survival Ascended Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Ark cheats hero ESP aimbot wallhack', gallery: 'Ark Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Ark Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和dino-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Ark Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'ARK: Survival Ascended undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Ark Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'ARK: Survival Ascended Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Ark cheats hero ESP aimbot wallhack', gallery: 'Ark Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Ark Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और dino-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Ark Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat ARK: Survival Ascended undetected untuk ARK: Survival Ascended di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Ark Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected ARK: Survival Ascended di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galeri Ark Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Ark Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan dino-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Ark Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat ARK: Survival Ascended undetected สำหรับ ARK: Survival Ascended บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Ark Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ ARK: Survival Ascended บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Tarkov ESP player tags hack', gallery: 'แกลเลอรี Ark Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Ark Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ dino-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Ark Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat ARK: Survival Ascended undetected cho ARK: Survival Ascended trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Ark Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected ARK: Survival Ascended trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Thư viện Ark Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Ark Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và dino-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Ark Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти ARK: Survival Ascended для ARK: Survival Ascended на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Ark Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для ARK: Survival Ascended на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Галерея Ark Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Ark Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і dino-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Ark Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Ark cheaty pro ARK: Survival Ascended na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Ark Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro ARK: Survival Ascended na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galerie Ark Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Ark Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a dino-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Ark Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats ARK: Survival Ascended undetected pentru ARK: Survival Ascended pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Ark Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected ARK: Survival Ascended pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Galerie Ark Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Ark Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și dino-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Ark Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Ark cheats för ARK: Survival Ascended på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Ark Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för ARK: Survival Ascended på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Tarkov ESP player tags hack', gallery: 'Ark Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Ark Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och dino-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'ark-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'ark-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for ARK: Survival Ascended hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Ark cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the ARK: Survival Ascended hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Ark cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for ARK: Survival Ascended', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'ark-esp': 'Cajas de jugador y wallhack',
		'ark-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'ark-esp': 'Boîtes joueur et wallhack',
		'ark-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'ark-esp': 'Spielerboxen & Wallhack',
		'ark-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'ark-esp': 'Caixas de jogador e wallhack',
		'ark-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'ark-esp': 'Box giocatore e wallhack',
		'ark-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'ark-esp': 'Боксы игроков и wallhack',
		'ark-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Ark Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Ark Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'ark-esp': { en: 'Tarkov ESP', es: 'ESP Tarkov', fr: 'ESP Tarkov', de: 'Tarkov ESP', pt: 'ESP Tarkov', it: 'ESP Tarkov', nl: 'Tarkov ESP', pl: 'ESP Tarkov', ru: 'ESP Tarkov', tr: 'Tarkov ESP', ar: 'ESP Tarkov', ja: 'Tarkov ESP', ko: 'Tarkov ESP', zh: 'Tarkov ESP', hi: 'Tarkov ESP', id: 'ESP Tarkov', th: 'Tarkov ESP', vi: 'ESP Tarkov', uk: 'ESP Tarkov', cs: 'Tarkov ESP', ro: 'ESP Tarkov', sv: 'Tarkov ESP' },
	'ark-aimbot': { en: 'Tarkov Aimbot', es: 'Aimbot Tarkov', fr: 'Aimbot Tarkov', de: 'Tarkov Aimbot', pt: 'Aimbot Tarkov', it: 'Aimbot Tarkov', nl: 'Tarkov Aimbot', pl: 'Aimbot Tarkov', ru: 'Aimbot Tarkov', tr: 'Tarkov Aimbot', ar: 'Aimbot Tarkov', ja: 'Tarkov Aimbot', ko: 'Tarkov Aimbot', zh: 'Tarkov Aimbot', hi: 'Tarkov Aimbot', id: 'Aimbot Tarkov', th: 'Tarkov Aimbot', vi: 'Aimbot Tarkov', uk: 'Aimbot Tarkov', cs: 'Tarkov Aimbot', ro: 'Aimbot Tarkov', sv: 'Tarkov Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Tarkov Wallhack', es: 'Wallhack Tarkov', fr: 'Wallhack Tarkov', de: 'Tarkov Wallhack', pt: 'Wallhack Tarkov', it: 'Wallhack Tarkov', nl: 'Tarkov Wallhack', pl: 'Wallhack Tarkov', ru: 'Wallhack Tarkov', tr: 'Tarkov Wallhack', ar: 'Wallhack Tarkov', ja: 'Tarkov Wallhack', ko: 'Tarkov Wallhack', zh: 'Tarkov Wallhack', hi: 'Tarkov Wallhack', id: 'Wallhack Tarkov', th: 'Tarkov Wallhack', vi: 'Wallhack Tarkov', uk: 'Wallhack Tarkov', cs: 'Tarkov Wallhack', ro: 'Wallhack Tarkov', sv: 'Tarkov Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Ark Cheats 2026', es: 'Trucos Tarkov 2026', fr: 'Triches Tarkov 2026', de: 'Ark Cheats 2026', pt: 'Cheats Tarkov 2026', it: 'Cheat Tarkov 2026', nl: 'Ark Cheats 2026', pl: 'Cheaty Tarkov 2026', ru: 'Читы Tarkov 2026', tr: 'Tarkov Hileleri 2026', ar: 'غش Tarkov 2026', ja: 'Ark Cheats 2026', ko: 'Ark Cheats 2026', zh: 'Tarkov作弊 2026', hi: 'Ark Cheats 2026', id: 'Cheat Tarkov 2026', th: 'Ark Cheats 2026', vi: 'Cheat Tarkov 2026', uk: 'Чіти Tarkov 2026', cs: 'Ark cheaty 2026', ro: 'Cheats Tarkov 2026', sv: 'Ark Cheats 2026' },
	hacks: { en: 'Ark Cheats', es: 'Trucos Tarkov', fr: 'Triches Tarkov', de: 'Ark Cheats', pt: 'Cheats Tarkov', it: 'Cheat Tarkov', nl: 'Ark Cheats', pl: 'Cheaty Tarkov', ru: 'Читы Tarkov', tr: 'Tarkov Hileleri', ar: 'غش Tarkov', ja: 'Ark Cheats', ko: 'Ark Cheats', zh: 'Tarkov作弊', hi: 'Ark Cheats', id: 'Cheat Tarkov', th: 'Ark Cheats', vi: 'Cheat Tarkov', uk: 'Чіти Tarkov', cs: 'Ark cheaty', ro: 'Cheats Tarkov', sv: 'Ark Cheats' },
	'cheat-download': { en: 'Tarkov Cheat Download', es: 'Descarga Ark Cheats', fr: 'Téléchargement Ark Cheats', de: 'Tarkov Cheat Download', pt: 'Download Ark Cheats', it: 'Download Ark Cheats', nl: 'Tarkov Cheat Download', pl: 'Pobieranie Ark Cheats', ru: 'Скачать Ark Cheats', tr: 'Tarkov Hile İndir', ar: 'تحميل Ark Cheats', ja: 'Tarkov Cheat Download', ko: 'Tarkov Cheat Download', zh: 'Tarkov作弊下载', hi: 'Tarkov Cheat Download', id: 'Download Cheat Tarkov', th: 'ดาวน์โหลด Ark Cheats', vi: 'Tải Cheat Tarkov', uk: 'Завантаження Ark Cheats', cs: 'Stáhnout Ark Cheats', ro: 'Descărcare Ark Cheats', sv: 'Tarkov Cheat Download' },
	'mod-menu': { en: 'Tarkov Mod Menu', es: 'Menú mod Tarkov', fr: 'Menu mod Tarkov', de: 'Tarkov Mod-Menü', pt: 'Menu mod Tarkov', it: 'Mod menu Tarkov', nl: 'Tarkov Mod Menu', pl: 'Mod menu Tarkov', ru: 'Мод-меню Tarkov', tr: 'Tarkov Mod Menü', ar: 'قائمة مود Tarkov', ja: 'Tarkov Mod Menu', ko: 'Tarkov 모드 메뉴', zh: 'Tarkov修改菜单', hi: 'Tarkov Mod Menu', id: 'Menu mod Tarkov', th: 'เมนูมอด Tarkov', vi: 'Mod menu Tarkov', uk: 'Мод-меню Tarkov', cs: 'Tarkov mod menu', ro: 'Meniu mod Tarkov', sv: 'Tarkov Mod-meny' },
	'soft-aim': { en: 'Tarkov Soft Aim', es: 'Soft aim Tarkov', fr: 'Soft aim Tarkov', de: 'Tarkov Soft Aim', pt: 'Soft aim Tarkov', it: 'Soft aim Tarkov', nl: 'Tarkov Soft Aim', pl: 'Soft aim Tarkov', ru: 'Soft aim Tarkov', tr: 'Tarkov Soft Aim', ar: 'Soft aim Tarkov', ja: 'Tarkov Soft Aim', ko: 'Tarkov Soft Aim', zh: 'Tarkov Soft Aim', hi: 'Tarkov Soft Aim', id: 'Soft aim Tarkov', th: 'Tarkov Soft Aim', vi: 'Soft aim Tarkov', uk: 'Soft aim Tarkov', cs: 'Tarkov Soft Aim', ro: 'Soft aim Tarkov', sv: 'Tarkov Soft Aim' },
	'best-cheats': { en: 'Best Ark Cheats', es: 'Mejores trucos Tarkov', fr: 'Meilleures triches Tarkov', de: 'Beste Ark Cheats', pt: 'Melhores cheats Tarkov', it: 'Migliori cheat Tarkov', nl: 'Beste Ark Cheats', pl: 'Najlepsze cheaty Tarkov', ru: 'Лучшие читы Tarkov', tr: 'En İyi Tarkov Hileleri', ar: 'أفضل غش Tarkov', ja: '最強Tarkovチート', ko: '최고의 Tarkov 치트', zh: '最佳Tarkov作弊', hi: 'सर्वश्रेष्ठ Ark Cheats', id: 'Cheat Tarkov terbaik', th: 'Cheat Tarkov ที่ดีที่สุด', vi: 'Cheat Tarkov tốt nhất', uk: 'Найкращі чіти Tarkov', cs: 'Nejlepší Ark cheaty', ro: 'Cele mai bune cheats Tarkov', sv: 'Bästa Ark Cheats' },
	'aimbot-hack': { en: 'Tarkov Aimbot Hack', es: 'Hack aimbot Tarkov', fr: 'Hack aimbot Tarkov', de: 'Tarkov Aimbot Hack', pt: 'Hack aimbot Tarkov', it: 'Hack aimbot Tarkov', nl: 'Tarkov Aimbot Hack', pl: 'Hack aimbot Tarkov', ru: 'Хак aimbot Tarkov', tr: 'Tarkov Aimbot Hilesi', ar: 'هاك Aimbot Tarkov', ja: 'Tarkov Aimbot Hack', ko: 'Tarkov 에임봇 핵', zh: 'Tarkov自瞄外挂', hi: 'Tarkov Aimbot Hack', id: 'Hack aimbot Tarkov', th: 'Hack Aimbot Tarkov', vi: 'Hack aimbot Tarkov', uk: 'Хак aimbot Tarkov', cs: 'Tarkov aimbot hack', ro: 'Hack aimbot Tarkov', sv: 'Tarkov Aimbot Hack' },
	'esp-hack': { en: 'Tarkov ESP Hack', es: 'Hack ESP Tarkov', fr: 'Hack ESP Tarkov', de: 'Tarkov ESP Hack', pt: 'Hack ESP Tarkov', it: 'Hack ESP Tarkov', nl: 'Tarkov ESP Hack', pl: 'Hack ESP Tarkov', ru: 'Хак ESP Tarkov', tr: 'Tarkov ESP Hilesi', ar: 'هاك ESP Tarkov', ja: 'Tarkov ESP Hack', ko: 'Tarkov ESP 핵', zh: 'Tarkov ESP外挂', hi: 'Tarkov ESP Hack', id: 'Hack ESP Tarkov', th: 'Hack ESP Tarkov', vi: 'Hack ESP Tarkov', uk: 'Хак ESP Tarkov', cs: 'Tarkov ESP hack', ro: 'Hack ESP Tarkov', sv: 'Tarkov ESP Hack' },
	'unlock-all': { en: 'Tarkov Unlock All', es: 'Unlock all Tarkov', fr: 'Unlock all Tarkov', de: 'Tarkov Unlock All', pt: 'Unlock all Tarkov', it: 'Unlock all Tarkov', nl: 'Tarkov Unlock All', pl: 'Unlock all Tarkov', ru: 'Unlock all Tarkov', tr: 'Tarkov Unlock All', ar: 'Unlock all Tarkov', ja: 'Tarkov Unlock All', ko: 'Tarkov Unlock All', zh: 'Tarkov Unlock All', hi: 'Tarkov Unlock All', id: 'Unlock all Tarkov', th: 'Tarkov Unlock All', vi: 'Unlock all Tarkov', uk: 'Unlock all Tarkov', cs: 'Tarkov Unlock All', ro: 'Unlock all Tarkov', sv: 'Tarkov Unlock All' },
};

const CTA2_HREF = {
	'ark-esp': '/ark-cheats/',
	'ark-aimbot': '/ark-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/ark-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/ark-cheats/',
	wallhack: '/ark-esp/',
	radar: '/ark-esp/',
	eac: '/updates/',
	'cheats-2026': '/ark-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/ark-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/ark-aimbot/',
	'esp-hack': '/ark-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Ark Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Ark Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for arkcheats.org and ARK: Survival Ascended licenses.`),
		imageAlt: 'ark cheats',
		galleryTitle: 'ark cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on arkcheats.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@arkcheats.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
