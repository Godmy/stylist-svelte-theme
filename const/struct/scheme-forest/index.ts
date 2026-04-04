import { COLORS_SCALES_GREEN } from '$stylist/color/const/record/colors-scales/green';
import { COLORS_SCALES_SLATE } from '$stylist/color/const/record/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '$stylist/color/const/record/colors-scales/teal';
import { TOKEN_COLOR } from '$stylist/color/const/map/color';
import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { StructThemeScheme } from '$stylist/theme/type/struct/theme-scheme';

export const SCHEME_FOREST: StructThemeScheme = {
	id: 'forest',
	label: 'Forest',
	description: 'Natural green palette',
	light: {
		...THEME_MODE_LIGHT,
		colors: {
			...THEME_MODE_LIGHT.colors,
			primary: COLORS_SCALES_GREEN,
			tertiary: COLORS_SCALES_TEAL,
			success: COLORS_SCALES_GREEN,
			primaryContainer: COLORS_SCALES_GREEN[100],
			onPrimaryContainer: COLORS_SCALES_GREEN[900],
			tertiaryContainer: COLORS_SCALES_TEAL[100],
			onTertiaryContainer: COLORS_SCALES_TEAL[900],
			successContainer: COLORS_SCALES_GREEN[100],
			onSuccessContainer: COLORS_SCALES_GREEN[900],
			background: {
				primary: '#eff6f1',
				secondary: '#f6faf7',
				tertiary: '#dceee2',
				default: '#eff6f1',
				subtle: '#f6faf7',
				raised: TOKEN_COLOR.white,
				floating: TOKEN_COLOR.white,
				container: '#dceee2',
				containerLow: '#f2f8f4',
				containerHigh: '#cadece',
				transparent: 'transparent',
				inverse: COLORS_SCALES_SLATE[900]
			},
			text: {
				primary: '#193126',
				secondary: '#496355',
				tertiary: '#6b8a78',
				default: '#193126',
				inverse: TOKEN_COLOR.white,
				onAccent: TOKEN_COLOR.white,
				link: COLORS_SCALES_GREEN[700]
			},
			border: {
				primary: '#cadece',
				secondary: '#b5d0bc',
				tertiary: '#dceee2',
				default: '#cadece',
				inverse: COLORS_SCALES_SLATE[700],
				accent: COLORS_SCALES_GREEN[600]
			},
			surfaceTint: {
				level1: 'rgba(34, 117, 75, 0.05)',
				level2: 'rgba(34, 117, 75, 0.1)',
				level3: 'rgba(34, 117, 75, 0.15)',
				level4: 'rgba(34, 117, 75, 0.2)',
				level5: 'rgba(34, 117, 75, 0.25)'
			},
			scene: {
				...THEME_MODE_LIGHT.colors.scene,
				star: COLORS_SCALES_GREEN[500],
				icon: COLORS_SCALES_GREEN[600],
				cluster: COLORS_SCALES_GREEN[400],
				selection: COLORS_SCALES_GREEN[500],
				focusGlow: COLORS_SCALES_GREEN[400]
			}
		}
	},
	dark: {
		...THEME_MODE_DARK,
		colors: {
			...THEME_MODE_DARK.colors,
			primary: COLORS_SCALES_GREEN,
			tertiary: COLORS_SCALES_TEAL,
			success: COLORS_SCALES_GREEN,
			primaryContainer: COLORS_SCALES_GREEN[800],
			onPrimaryContainer: COLORS_SCALES_GREEN[100],
			tertiaryContainer: COLORS_SCALES_TEAL[800],
			onTertiaryContainer: COLORS_SCALES_TEAL[100],
			successContainer: COLORS_SCALES_GREEN[800],
			onSuccessContainer: COLORS_SCALES_GREEN[100],
			border: {
				...THEME_MODE_DARK.colors.border,
				accent: COLORS_SCALES_GREEN[400]
			},
			text: {
				...THEME_MODE_DARK.colors.text,
				link: COLORS_SCALES_GREEN[400]
			},
			scene: {
				...THEME_MODE_DARK.colors.scene,
				star: COLORS_SCALES_GREEN[400],
				icon: COLORS_SCALES_GREEN[300],
				cluster: COLORS_SCALES_GREEN[500],
				selection: COLORS_SCALES_GREEN[400],
				focusGlow: COLORS_SCALES_GREEN[500]
			}
		}
	}
};
