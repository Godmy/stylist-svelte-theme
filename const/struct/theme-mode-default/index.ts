import { COLORS_SCALES_AMBER } from '$stylist/color/const/record/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/color/const/record/colors-scales/blue';
import { COLORS_SCALES_NEUTRAL } from '$stylist/color/const/record/colors-scales/neutral';
import { COLORS_SCALES_RED } from '$stylist/color/const/record/colors-scales/red';
import { COLORS_SCALES_SLATE } from '$stylist/color/const/record/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '$stylist/color/const/record/colors-scales/teal';
import { TOKEN_COLOR } from '$stylist/color/const/map/color';
import type { Theme } from '$stylist/theme/type/struct/theme';
import { THEME_TYPOGRAPHY } from '$stylist/typography/const/struct/theme-typography';

export const THEME_MODE_DEFAULT: Theme = {
	mode: 'default',
	colors: {
		primary: COLORS_SCALES_BLUE,
		secondary: COLORS_SCALES_SLATE,
		tertiary: COLORS_SCALES_TEAL,
		neutral: COLORS_SCALES_NEUTRAL,
		success: COLORS_SCALES_TEAL,
		info: COLORS_SCALES_BLUE,
		warning: COLORS_SCALES_AMBER,
		error: COLORS_SCALES_RED,
		danger: COLORS_SCALES_RED,
		background: {
			primary: TOKEN_COLOR.white,
			secondary: COLORS_SCALES_SLATE[50],
			tertiary: COLORS_SCALES_SLATE[100],
			default: TOKEN_COLOR.white,
			subtle: COLORS_SCALES_SLATE[50],
			raised: TOKEN_COLOR.white,
			floating: TOKEN_COLOR.white,
			container: COLORS_SCALES_SLATE[100],
			containerLow: COLORS_SCALES_SLATE[50],
			containerHigh: COLORS_SCALES_SLATE[200],
			transparent: 'transparent',
			inverse: COLORS_SCALES_SLATE[900]
		},
		text: {
			primary: COLORS_SCALES_SLATE[900],
			secondary: COLORS_SCALES_SLATE[600],
			tertiary: COLORS_SCALES_SLATE[500],
			default: COLORS_SCALES_SLATE[900],
			inverse: TOKEN_COLOR.white,
			onAccent: TOKEN_COLOR.white,
			link: COLORS_SCALES_BLUE[600]
		},
		border: {
			primary: COLORS_SCALES_SLATE[300],
			secondary: COLORS_SCALES_SLATE[200],
			tertiary: COLORS_SCALES_SLATE[100],
			default: COLORS_SCALES_SLATE[200],
			inverse: COLORS_SCALES_SLATE[700],
			accent: COLORS_SCALES_BLUE[500]
		},
		surfaceTint: {
			level1: 'rgba(0, 102, 204, 0.05)',
			level2: 'rgba(0, 102, 204, 0.1)',
			level3: 'rgba(0, 102, 204, 0.15)',
			level4: 'rgba(0, 102, 204, 0.2)',
			level5: 'rgba(0, 102, 204, 0.25)'
		},
		onPrimary: TOKEN_COLOR.white,
		onSecondary: TOKEN_COLOR.white,
		onTertiary: TOKEN_COLOR.white,
		onSuccess: TOKEN_COLOR.white,
		onInfo: TOKEN_COLOR.white,
		onWarning: COLORS_SCALES_SLATE[900],
		onError: TOKEN_COLOR.white,
		onBackground: COLORS_SCALES_SLATE[900],
		onSurface: COLORS_SCALES_SLATE[900],
		onSurfaceContainer: COLORS_SCALES_SLATE[900],
		primaryContainer: COLORS_SCALES_BLUE[100],
		onPrimaryContainer: COLORS_SCALES_BLUE[900],
		secondaryContainer: COLORS_SCALES_SLATE[100],
		onSecondaryContainer: COLORS_SCALES_SLATE[900],
		tertiaryContainer: COLORS_SCALES_TEAL[100],
		onTertiaryContainer: COLORS_SCALES_TEAL[900],
		errorContainer: COLORS_SCALES_RED[100],
		onErrorContainer: COLORS_SCALES_RED[900],
		successContainer: COLORS_SCALES_TEAL[100],
		onSuccessContainer: COLORS_SCALES_TEAL[900],
		warningContainer: COLORS_SCALES_AMBER[100],
		onWarningContainer: COLORS_SCALES_AMBER[900],
		outline: COLORS_SCALES_SLATE[400],
		outlineVariant: COLORS_SCALES_SLATE[300],
		outlineDefault: COLORS_SCALES_SLATE[300],
		outlineSubtle: COLORS_SCALES_SLATE[200],
		outlineStrong: COLORS_SCALES_SLATE[500],
		shadow: 'rgba(0, 0, 0, 0.1)',
		scrim: 'rgba(0, 0, 0, 0.5)',
		backdrop: 'rgba(0, 0, 0, 0.6)'
	},
	typography: THEME_TYPOGRAPHY,
	domain: {
		scene: {
			far: COLORS_SCALES_SLATE[50],
			mid: COLORS_SCALES_SLATE[100],
			focus: COLORS_SCALES_SLATE[200],
			grid: COLORS_SCALES_SLATE[300],
			star: COLORS_SCALES_BLUE[500],
			icon: COLORS_SCALES_BLUE[600],
			cluster: COLORS_SCALES_BLUE[400],
			selection: COLORS_SCALES_BLUE[500],
			focusGlow: COLORS_SCALES_BLUE[400]
		},
		graph: {
			portDataType: {
				string: '#2196F3',
				number: '#4CAF50',
				boolean: '#FF9800',
				enum: '#FF9800',
				color: '#E91E63',
				vector2: '#00BCD4',
				vector3: '#00BCD4',
				object: '#9C27B0',
				function: '#9C27B0',
				array: '#00BCD4',
				any: '#9E9E9E',
				event: '#F44336',
				action: '#E91E63'
			},
			portState: {
				default: '#9E9E9E',
				connected: '#4CAF50',
				hovered: '#2196F3',
				active: '#FF9800',
				error: '#F44336',
				selected: '#673AB7'
			}
		}
	}
};
