import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const features = [
	{ titleKey: 'home.aboutFeature1Title', descKey: 'home.aboutFeature1Desc', icon: 'esp' },
	{ titleKey: 'home.aboutFeature2Title', descKey: 'home.aboutFeature2Desc', icon: 'aim' },
	{ titleKey: 'home.aboutFeature3Title', descKey: 'home.aboutFeature3Desc', icon: 'updates' },
] as const;

const quickLinks = [
	{ href: '/ark-cheats/', labelKey: 'home.aboutPillar' },
	{ href: '/ark-esp/', labelKey: 'home.aboutEsp' },
	{ href: '/ark-aimbot/', labelKey: 'home.aboutAimbot' },
	{ href: '/updates/', labelKey: 'home.aboutUndetected' },
] as const;

function FeatureIcon({ icon }: { icon: string }) {
	if (icon === 'aim') {
		return (
			<path
				d="M12 4.5l1.7 4.8H19l-4 3.1 1.5 4.8L12 14.8 7.5 17.2 9 12.4 5 9.3h5.3L12 4.5z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		);
	}
	if (icon === 'updates') {
		return (
			<>
				<path d="M12 4.2v3.2M12 16.6v3.2M4.2 12h3.2M16.6 12h3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
				<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
			</>
		);
	}
	return (
		<>
			<circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" />
			<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
		</>
	);
}

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutLede')}</p>
			</header>

			<div className="home-about__grid">
				<h3 className="home-about__section-label">{t('home.aboutFeaturesTitle')}</h3>
				<ul className="home-about__cards">
					{features.map((item) => (
						<li key={item.titleKey} className="home-about__card">
							<div className="home-about__card-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<FeatureIcon icon={item.icon} />
								</svg>
							</div>
							<h4>{t(item.titleKey)}</h4>
							<p>{t(item.descKey)}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="home-about__links">
				<h3 className="home-about__section-label">{t('home.aboutLinksTitle')}</h3>
				<nav className="home-about__link-row" aria-label={t('home.aboutLinksTitle')}>
					{quickLinks.map((link) => (
						<a key={link.href} href={link.href}>
							{t(link.labelKey)}
						</a>
					))}
				</nav>
				<p className="home-about__note">{t('home.aboutNote')}</p>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
