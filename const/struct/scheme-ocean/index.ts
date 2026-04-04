import { COLORS_SCALES_BLUE } from '$stylist/color/const/record/colors-scales/blue';
import { COLORS_SCALES_SLATE } from '$stylist/color/const/record/colors-scales/slate';
import { TOKEN_COLOR } from '$stylist/color/const/map/color';
import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { StructThemeScheme } from '$stylist/theme/type/struct/theme-scheme';

export const SCHEME_OCEAN: StructThemeScheme = {
	id: 'ocean',
	label: 'Ocean',
	description: 'Cold blue palette',
	light: {
		...THEME_MODE_LIGHT,
		colors: {
			...THEME_MODE_LIGHT.colors,
			background: {
				primary: '#ecf3fa',
				secondary: '#f5f9fd',
				tertiary: '#daeaf7',
				default: '#ecf3fa',
				subtle: '#f5f9fd',
				raised: TOKEN_COLOR.white,
				floating: TOKEN_COLOR.white,
				container: '#daeaf7',
				containerLow: '#f0f6fb',
				containerHigh: '#c4d9ee',
				transparent: 'transparent',
				inverse: COLORS_SCALES_SLATE[900]
			},
			text: {
				primary: '#0f2942',
				secondary: '#47617a',
				tertiary: '#6b8fa8',
				default: '#0f2942',
				inverse: TOKEN_COLOR.white,
				onAccent: TOKEN_COLOR.white,
				link: COLORS_SCALES_BLUE[600]
			},
			border: {
				primary: '#c4d9ee',
				secondary: '#a8c8e4',
				tertiary: '#daeaf7',
				default: '#c4d9ee',
				inverse: COLORS_SCALES_SLATE[700],
				accent: COLORS_SCALES_BLUE[500]
			},
			surfaceTint: {
				level1: 'rgba(15, 122, 216, 0.05)',
				level2: 'rgba(15, 122, 216, 0.1)',
				level3: 'rgba(15, 122, 216, 0.15)',
				level4: 'rgba(15, 122, 216, 0.2)',
				level5: 'rgba(15, 122, 216, 0.25)'
			}
		}
	},
	dark: THEME_MODE_DARK
};
