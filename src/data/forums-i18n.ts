import type { ForumThread } from './forums';
import type { LocaleCode } from './i18n/locales';

export const forumCategoryLabelsI18n: Partial<
	Record<LocaleCode, Record<'features' | 'setup' | 'instructions', string>>
> = {
	es: {
		features: 'Funciones',
		setup: 'Instalación',
		instructions: 'Instrucciones',
	},
};

export const forumThreadsI18n: Partial<Record<LocaleCode, ForumThread[]>> = {
	es: [
		{
			slug: 'save-load-profiles',
			category: 'setup',
			title: 'Configuración de Ark Cheats: guardar, cargar y perfiles',
			excerpt:
				'Aprende a guardar, cargar y cambiar perfiles de Ark Cheats para servidores PvP y mapas PvE. Mantén presets de ESP, aimbot y filtros de dinosaurios listos.',
			sections: [
				{
					h2: 'Por qué importan los perfiles',
					paragraphs: [
						'Un preset para raids PvP y otro para tameo ahorra tiempo en cada sesión. Guarda distancia ESP, filtros de dinosaurios y FOV del aimbot una vez — luego carga el perfil correcto antes de unirte.',
					],
				},
				{
					h2: 'Pasos para guardar y cargar',
					paragraphs: [
						'Abre el menú de Ark Cheats en el juego, ajusta la configuración y usa Guardar perfil. Nombra cada archivo por mapa o rol para cargarlo rápido.',
					],
					list: [
						'Guarda después de configurar ESP de jugadores, dinosaurios y objetos',
						'Carga un perfil PvP antes de servidores oficiales PvP',
						'Carga un perfil PvE antes de tameo o preparación de jefes',
					],
				},
			],
		},
		{
			slug: 'player-esp-dino-esp',
			category: 'features',
			title: 'Funciones de ESP de jugadores y dinosaurios',
			excerpt:
				'Resumen de ESP de jugadores, dinosaurios y objetos en Ark Cheats — cajas, distancias, filtros de dinosaurios y marcadores de botín.',
			sections: [
				{
					h2: 'Qué muestra el ESP',
					paragraphs: [
						'El ESP de jugadores resalta enemigos con distancia y nombres. El ESP de dinosaurios rastrea criaturas salvajes y domesticadas a través del terreno. El ESP de objetos marca botín, recursos y suministros.',
					],
				},
				{
					h2: 'Filtros recomendados',
					paragraphs: ['Usa filtros de dinosaurios para ocultar criaturas pequeñas y mantener la pantalla limpia en mapas concurridos.'],
					list: [
						'Filtra por nivel de dinosaurio para objetivos de tameo',
						'Muestra solo jugadores hostiles en PvP',
						'Resalta recursos raros y cajas de suministros',
					],
				},
			],
		},
		{
			slug: 'aimbot-recoil-config',
			category: 'features',
			title: 'Configuración de aimbot y retroceso',
			excerpt:
				'Configura FOV, suavizado y hueso del aimbot más sin retroceso, sin dispersión y fuego rápido para combates PvP en ARK.',
			sections: [
				{
					h2: 'Conceptos básicos del aimbot',
					paragraphs: [
						'Empieza con un FOV amplio y suavizado moderado para que la asistencia se sienta natural en combate en tercera persona.',
					],
				},
				{
					h2: 'Retroceso y dispersión',
					paragraphs: [
						'Sin retroceso y sin dispersión mantienen los rifles estables en peleas de tribu. Usa fuego rápido solo si tu FPS se mantiene estable.',
					],
				},
			],
		},
		{
			slug: 'fps-performance',
			category: 'instructions',
			title: 'Ajustes de FPS y rendimiento',
			excerpt:
				'Optimiza los FPS de ARK: Survival Ascended con Ark Cheats — gráficos, carga del overlay y tiempos de frame estables para PvP.',
			sections: [
				{
					h2: 'Mantén FPS estables',
					paragraphs: [
						'Reduce primero la distancia de dibujo del ESP. Limita el rango del ESP de objetos en mapas grandes. Cierra apps en segundo plano antes de sesiones PvP largas.',
					],
					list: [
						'Limita entidades ESP en servidores concurridos',
						'Usa gráficos medios si los FPS bajan de 60',
						'Consulta Estado después de parches antes de retocar',
					],
				},
			],
		},
		{
			slug: 'esp-visual-customization',
			category: 'instructions',
			title: 'Personalización visual del ESP',
			excerpt:
				'Personaliza cajas, colores y etiquetas de distancia del ESP para que jugadores, dinosaurios y botín se lean bien de día y de noche.',
			sections: [
				{
					h2: 'Overlays legibles',
					paragraphs: [
						'Usa colores de alto contraste para jugadores y tonos más suaves para dinosaurios. Mantén el texto lo bastante grande para leer a 100 m sin saturar la pantalla.',
					],
				},
			],
		},
		{
			slug: 'aimbot-setup',
			category: 'instructions',
			title: 'Configuración del aimbot',
			excerpt:
				'Configuración paso a paso del aimbot — anillo FOV, hueso objetivo, suavizado y alineación de mira para combate en ARK.',
			sections: [
				{
					h2: 'Primera configuración',
					paragraphs: [
						'Activa el aimbot después de que el ESP funcione. Ajusta el FOV a tu monitor y estilo. Prueba en sesión privada antes de PvP oficial.',
					],
					list: [
						'Asigna una tecla para activar/desactivar aimbot',
						'Ajusta la mira al tipo de arma',
						'Reduce el suavizado si el seguimiento se siente lento',
					],
				},
			],
		},
		{
			slug: 'save-load-settings',
			category: 'setup',
			title: 'Guardar y cargar ajustes',
			excerpt:
				'Copia de seguridad y restauración de ajustes de Ark Cheats entre PCs o tras reinstalar — mantén tus presets de ESP y aimbot seguros.',
			sections: [
				{
					h2: 'Copia de seguridad de la config',
					paragraphs: [
						'Exporta ajustes después de cada cambio importante. Guarda los perfiles fuera de la carpeta del juego para que las actualizaciones no los borren.',
					],
				},
			],
		},
		{
			slug: 'general-setup',
			category: 'setup',
			title: 'Instrucciones generales de instalación',
			excerpt:
				'Lista de verificación del primer lanzamiento en Windows PC — licencia, loader, menú en juego y notas de Easy Anti-Cheat.',
			sections: [
				{
					h2: 'Antes de la primera sesión',
					paragraphs: [
						'Compra un plan, instala desde el email de licencia y sigue la guía de instalación en orden. Consulta Estado después de cada parche de ARK o Easy Anti-Cheat.',
					],
					list: [
						'Ejecuta como administrador si el loader lo pide',
						'Desactiva overlays conflictivos',
						'Únete a un servidor con poca población para la primera prueba de ESP',
					],
				},
			],
		},
		{
			slug: 'launcher-eac-setup',
			category: 'setup',
			title: 'Configuración del juego y launcher',
			excerpt:
				'Inicia ARK: Survival Ascended con Ark Cheats — rutas de Steam, timing de Easy Anti-Cheat y notas tras parches.',
			sections: [
				{
					h2: 'Orden del launcher',
					paragraphs: [
						'Inicia el loader de Ark Cheats primero, luego ARK desde Steam cuando se indique. Tras una actualización, espera a que Estado muestre indetectable antes de jugar.',
					],
				},
			],
		},
	],
};
