import { COLORS_SCALES_AMBER } from '$stylist/color/const/record/colors-scales/amber';
import { COLORS_SCALES_SLATE } from '$stylist/color/const/record/colors-scales/slate';
import { TOKEN_COLOR } from '$stylist/color/const/map/color';
import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';

export const SCHEME_SUNSET: ThemeSchemeDefinition = {
	id: 'sunset',
	label: 'Sunset',
	description: 'Warm orange palette',
	light: {
		...THEME_MODE_LIGHT,
		colors: {
			...THEME_MODE_LIGHT.colors,
			primary: COLORS_SCALES_AMBER,
			primaryContainer: COLORS_SCALES_AMBER[100],
			onPrimaryContainer: COLORS_SCALES_AMBER[900],
			warningContainer: COLORS_SCALES_AMBER[100],
			onWarningContainer: COLORS_SCALES_AMBER[900],
			background: {
				primary: '#fdf2ea',
				secondary: '#fef8f2',
				tertiary: '#fce8d3',
				default: '#fdf2ea',
				subtle: '#fef8f2',
				raised: TOKEN_COLOR.white,
				floating: TOKEN_COLOR.white,
				container: '#fce8d3',
				containerLow: '#fef5ed',
				containerHigh: '#f0d9c6',
				transparent: 'transparent',
				inverse: COLORS_SCALES_SLATE[900]
			},
			text: {
				primary: '#402417',
				secondary: '#7f5946',
				tertiary: '#a07060',
				default: '#402417',
				inverse: TOKEN_COLOR.white,
				onAccent: TOKEN_COLOR.white,
				link: COLORS_SCALES_AMBER[700]
			},
			border: {
				primary: '#f0d9c6',
				secondary: '#e8c9b0',
				tertiary: '#fce8d3',
				default: '#f0d9c6',
				inverse: COLORS_SCALES_SLATE[700],
				accent: '#d86a2f'
			},
			surfaceTint: {
				level1: 'rgba(216, 106, 47, 0.05)',
				level2: 'rgba(216, 106, 47, 0.1)',
				level3: 'rgba(216, 106, 47, 0.15)',
				level4: 'rgba(216, 106, 47, 0.2)',
				level5: 'rgba(216, 106, 47, 0.25)'
			}
		},
		domain: {
			...THEME_MODE_LIGHT.domain,
			scene: {
				...THEME_MODE_LIGHT.domain!.scene!,
				star: COLORS_SCALES_AMBER[500],
				icon: COLORS_SCALES_AMBER[600],
				cluster: COLORS_SCALES_AMBER[400],
				selection: COLORS_SCALES_AMBER[500],
				focusGlow: COLORS_SCALES_AMBER[400]
			}
		}
	},
	dark: {
		...THEME_MODE_DARK,
		colors: {
			...THEME_MODE_DARK.colors,
			primary: COLORS_SCALES_AMBER,
			primaryContainer: COLORS_SCALES_AMBER[800],
			onPrimaryContainer: COLORS_SCALES_AMBER[100],
			warningContainer: COLORS_SCALES_AMBER[800],
			onWarningContainer: COLORS_SCALES_AMBER[100],
			border: {
				...THEME_MODE_DARK.colors.border,
				accent: COLORS_SCALES_AMBER[400]
			},
			text: {
				...THEME_MODE_DARK.colors.text,
				link: COLORS_SCALES_AMBER[400]
			}
		},
		domain: {
			...THEME_MODE_DARK.domain,
			scene: {
				...THEME_MODE_DARK.domain!.scene!,
				star: COLORS_SCALES_AMBER[400],
				icon: COLORS_SCALES_AMBER[300],
				cluster: COLORS_SCALES_AMBER[500],
				selection: COLORS_SCALES_AMBER[400],
				focusGlow: COLORS_SCALES_AMBER[500]
			}
		}
	}
};
