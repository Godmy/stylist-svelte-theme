import { COLORS_SCALES_GREEN } from '$stylist/theme/const/record/colors-scales/green';
import { COLORS_SCALES_ORANGE } from '$stylist/theme/const/record/colors-scales/orange';
import { COLORS_SCALES_SLATE } from '$stylist/theme/const/record/colors-scales/slate';
import { TOKEN_COLOR } from '$stylist/theme/const/object/color';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';

export const SCHEME_WEORACLE: ThemeSchemeDefinition & {
	light: typeof THEME_MODE_LIGHT;
	dark: typeof THEME_MODE_DARK;
} = {
	id: 'weoracle',
	label: 'WeOracle',
	description: 'Industrial dispatch-console palette: dark navy surfaces, orange accent',
	light: {
		...THEME_MODE_LIGHT,
		colors: {
			...THEME_MODE_LIGHT.colors,
			primary: COLORS_SCALES_ORANGE,
			success: COLORS_SCALES_GREEN,
			primaryContainer: COLORS_SCALES_ORANGE[100],
			onPrimaryContainer: COLORS_SCALES_ORANGE[900],
			successContainer: COLORS_SCALES_GREEN[100],
			onSuccessContainer: COLORS_SCALES_GREEN[900],
			background: {
				primary: '#fdf1ea',
				secondary: '#fef7f2',
				tertiary: '#fbe2d1',
				default: '#fdf1ea',
				subtle: '#fef7f2',
				raised: TOKEN_COLOR.white,
				floating: TOKEN_COLOR.white,
				container: '#fbe2d1',
				containerLow: '#fef4ed',
				containerHigh: '#f0d2b8',
				transparent: 'transparent',
				inverse: '#07111d'
			},
			text: {
				primary: '#07111d',
				secondary: '#3a4a5c',
				tertiary: '#5a7290',
				default: '#07111d',
				inverse: TOKEN_COLOR.white,
				onAccent: TOKEN_COLOR.white,
				link: COLORS_SCALES_ORANGE[700]
			},
			border: {
				primary: '#f0d2b8',
				secondary: '#e6c1a0',
				tertiary: '#fbe2d1',
				default: '#f0d2b8',
				inverse: COLORS_SCALES_SLATE[700],
				accent: COLORS_SCALES_ORANGE[600]
			},
			surfaceTint: {
				level1: 'rgba(249, 115, 22, 0.05)',
				level2: 'rgba(249, 115, 22, 0.1)',
				level3: 'rgba(249, 115, 22, 0.15)',
				level4: 'rgba(249, 115, 22, 0.2)',
				level5: 'rgba(249, 115, 22, 0.25)'
			}
		},
		domain: {
			...THEME_MODE_LIGHT.domain,
			scene: {
				...THEME_MODE_LIGHT.domain!.scene!,
				star: COLORS_SCALES_ORANGE[500],
				icon: COLORS_SCALES_ORANGE[600],
				cluster: COLORS_SCALES_ORANGE[400],
				selection: COLORS_SCALES_ORANGE[500],
				focusGlow: COLORS_SCALES_ORANGE[400]
			}
		}
	},
	dark: {
		...THEME_MODE_DARK,
		colors: {
			...THEME_MODE_DARK.colors,
			primary: COLORS_SCALES_ORANGE,
			success: COLORS_SCALES_GREEN,
			primaryContainer: COLORS_SCALES_ORANGE[800],
			onPrimaryContainer: COLORS_SCALES_ORANGE[100],
			successContainer: COLORS_SCALES_GREEN[800],
			onSuccessContainer: COLORS_SCALES_GREEN[100],
			background: {
				primary: '#081522',
				secondary: '#0d1c2d',
				tertiary: '#12263a',
				default: '#081522',
				subtle: '#0d1c2d',
				raised: '#0d1c2d',
				floating: '#12263a',
				container: '#0d1c2d',
				containerLow: '#07111d',
				containerHigh: '#12263a',
				transparent: 'transparent',
				inverse: TOKEN_COLOR.white
			},
			text: {
				primary: '#d6dce4',
				secondary: '#8fa4c2',
				tertiary: '#5a7290',
				default: '#d6dce4',
				inverse: '#07111d',
				onAccent: TOKEN_COLOR.white,
				link: COLORS_SCALES_ORANGE[400]
			},
			border: {
				primary: '#24354d',
				secondary: '#12263a',
				tertiary: '#0d1c2d',
				default: '#24354d',
				inverse: COLORS_SCALES_SLATE[200],
				accent: COLORS_SCALES_ORANGE[500]
			},
			surfaceTint: {
				level1: 'rgba(249, 115, 22, 0.05)',
				level2: 'rgba(249, 115, 22, 0.1)',
				level3: 'rgba(249, 115, 22, 0.15)',
				level4: 'rgba(249, 115, 22, 0.2)',
				level5: 'rgba(249, 115, 22, 0.35)'
			}
		},
		domain: {
			...THEME_MODE_DARK.domain,
			scene: {
				...THEME_MODE_DARK.domain!.scene!,
				far: '#081522',
				mid: '#0d1c2d',
				focus: '#12263a',
				grid: '#24354d',
				star: COLORS_SCALES_ORANGE[500],
				icon: COLORS_SCALES_ORANGE[400],
				cluster: COLORS_SCALES_ORANGE[600],
				selection: COLORS_SCALES_ORANGE[500],
				focusGlow: COLORS_SCALES_ORANGE[400]
			}
		}
	}
};
