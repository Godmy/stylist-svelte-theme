import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { COLORS_SCALES_SLATE } from '$stylist/design-token/const/record/colors-scales/slate';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';

/** Hero banner: deep sea blue, daylight blue and warm sunrise gold. */
export const SCHEME_PAVARENKIN: ThemeSchemeDefinition = {
	id: 'pavarenkin',
	label: 'Паваренкин — синий и золото',
	description: 'Глубокий синий моря и костюма, свет неба и золото рассвета из hero.webp',
	light: {
		...THEME_MODE_LIGHT,
		colors: {
			...THEME_MODE_LIGHT.colors,
			primary: {
				50: '#edf5fc',
				100: '#d6e8f8',
				200: '#afd2ee',
				300: '#7ab3df',
				400: '#498dca',
				500: '#286eaf',
				600: '#20598f',
				700: '#1c4974',
				800: '#1a3c5f',
				900: '#18334f',
				950: '#0b1d32'
			},
			secondary: {
				50: '#fff9eb',
				100: '#fceecb',
				200: '#f8dc99',
				300: '#f2c76b',
				400: '#edbd58',
				500: '#db9e31',
				600: '#ba7b24',
				700: '#955b20',
				800: '#7a491f',
				900: '#653d1e',
				950: '#391e0d'
			},
			tertiary: COLORS_SCALES_SLATE,
			background: {
				...THEME_MODE_LIGHT.colors.background,
				primary: '#f6f9fc',
				secondary: '#e9f0f7',
				tertiary: '#dbe6f1',
				default: '#f6f9fc',
				subtle: '#eff4f9',
				raised: '#ffffff',
				floating: '#ffffff',
				container: '#e9f0f7',
				containerLow: '#eff4f9',
				containerHigh: '#dbe6f1',
				inverse: '#000b20'
			},
			text: {
				...THEME_MODE_LIGHT.colors.text,
				primary: '#0b1f3a',
				secondary: '#3f5570',
				tertiary: '#566b85',
				default: '#0b1f3a',
				link: '#20598f'
			},
			border: {
				...THEME_MODE_LIGHT.colors.border,
				primary: '#ccdae8',
				secondary: '#a9bdd2',
				tertiary: '#dfe8f1',
				default: '#ccdae8',
				accent: '#2f6a95'
			},
			onPrimary: '#ffffff',
			onSecondary: '#0b1d32',
			onBackground: '#0b1f3a',
			onSurface: '#0b1f3a',
			onSurfaceContainer: '#0b1f3a',
			primaryContainer: '#cfe3f2',
			onPrimaryContainer: '#1b3850',
			secondaryContainer: '#fceecb',
			onSecondaryContainer: '#653d1e'
		}
	},
	dark: {
		...THEME_MODE_DARK,
		colors: {
			...THEME_MODE_DARK.colors,
			primary: {
				50: '#edf5fc',
				100: '#d6e8f8',
				200: '#afd2ee',
				300: '#7ab3df',
				400: '#498dca',
				500: '#286eaf',
				600: '#20598f',
				700: '#1c4974',
				800: '#1a3c5f',
				900: '#18334f',
				950: '#0b1d32'
			},
			secondary: {
				50: '#fff9eb',
				100: '#fceecb',
				200: '#f8dc99',
				300: '#f2c76b',
				400: '#edbd58',
				500: '#db9e31',
				600: '#ba7b24',
				700: '#955b20',
				800: '#7a491f',
				900: '#653d1e',
				950: '#391e0d'
			},
			tertiary: COLORS_SCALES_SLATE,
			background: {
				...THEME_MODE_DARK.colors.background,
				primary: '#000b20',
				secondary: '#051630',
				tertiary: '#0b2140',
				default: '#000b20',
				subtle: '#031126',
				raised: '#071a36',
				floating: '#0b2140',
				container: '#051630',
				containerLow: '#031126',
				containerHigh: '#0b2140',
				inverse: '#f6f9fc'
			},
			text: {
				...THEME_MODE_DARK.colors.text,
				primary: '#eef4fa',
				secondary: '#a9bbd0',
				tertiary: '#8ea3bb',
				default: '#eef4fa',
				link: '#7ab3df'
			},
			border: {
				...THEME_MODE_DARK.colors.border,
				primary: '#1c3556',
				secondary: '#2a4a70',
				tertiary: '#132846',
				default: '#1c3556',
				accent: '#5296c7'
			},
			onPrimary: '#ffffff',
			onSecondary: '#0b1d32',
			onBackground: '#eef4fa',
			onSurface: '#eef4fa',
			onSurfaceContainer: '#eef4fa',
			primaryContainer: '#234a68',
			onPrimaryContainer: '#cfe3f2',
			secondaryContainer: '#653d1e',
			onSecondaryContainer: '#fceecb'
		}
	}
};
