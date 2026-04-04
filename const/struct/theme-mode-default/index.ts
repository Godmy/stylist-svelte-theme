import { COLORS_SCALES_AMBER } from '$stylist/color/const/record/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/color/const/record/colors-scales/blue';
import { COLORS_SCALES_NEUTRAL } from '$stylist/color/const/record/colors-scales/neutral';
import { COLORS_SCALES_RED } from '$stylist/color/const/record/colors-scales/red';
import { COLORS_SCALES_SLATE } from '$stylist/color/const/record/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '$stylist/color/const/record/colors-scales/teal';
import { RECORD_ELEVATION } from '$stylist/layout/const/record/elevation';
import { TOKEN_COLOR } from '$stylist/color/const/map/color';
import { GRADIENT_DIRECTIONAL } from '$stylist/layout/const/map/gradient-linear';
import { GRADIENT_RADIAL } from '$stylist/layout/const/map/gradient-radial';
import { GRADIENT_CUSTOM } from '$stylist/layout/const/map/gradient-custom';
import { SCENE_CONTENT } from '$stylist/architecture/const/struct/scene/content';
import { TOKEN_ANIMATION } from '$stylist/interaction/const/map/animation';
import { TOKEN_DURATION } from '$stylist/interaction/const/map/duration';
import { TOKEN_TRANSITION } from '$stylist/interaction/const/record/transition';
import { TOKEN_EASING } from '$stylist/architecture/const/map/easing';
import { TOKEN_OPACITY } from '$stylist/architecture/const/map/opacity';
import { TOKEN_Z_INDEX } from '$stylist/layout/const/map/z-index';
import { THEME_SIZE } from '$stylist/theme/const/enum/theme-size';
import type { Theme } from '$stylist/theme/type/struct/theme/theme';
import { THEME_TYPOGRAPHY } from '$stylist/typography/const/struct/theme-typography';

export const THEME_MODE_DEFAULT: Theme = {
	scheme: 'light',
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
		backdrop: 'rgba(0, 0, 0, 0.6)',
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
	},
	typography: THEME_TYPOGRAPHY,
	elevation: {
		none: RECORD_ELEVATION.none,
		level1: RECORD_ELEVATION.sm,
		level2: RECORD_ELEVATION.base,
		level3: RECORD_ELEVATION.md,
		level4: RECORD_ELEVATION.lg,
		level5: RECORD_ELEVATION.xl,
		focus: RECORD_ELEVATION.custom14,
		focusStrong: RECORD_ELEVATION.custom15,
		accent: RECORD_ELEVATION.custom23,
		accentStrong: RECORD_ELEVATION.custom31,
		overlay: RECORD_ELEVATION.custom22,
		modal: RECORD_ELEVATION.custom33,
		star: RECORD_ELEVATION.none,
		icon: RECORD_ELEVATION.custom26,
		pill: RECORD_ELEVATION.custom35,
		card: RECORD_ELEVATION.custom21,
		cardHover: RECORD_ELEVATION.custom24,
		detail: RECORD_ELEVATION.custom25,
		focusNode: RECORD_ELEVATION.custom14,
		fullscreen: RECORD_ELEVATION.none
	},
	size: THEME_SIZE,
	opacity: TOKEN_OPACITY,
	zIndex: TOKEN_Z_INDEX,
	motion: {
		duration: TOKEN_DURATION,
		easing: TOKEN_EASING,
		transitions: TOKEN_TRANSITION,
		animations: TOKEN_ANIMATION
	},
	gradients: {
		types: GRADIENT_CUSTOM,
		directional: GRADIENT_DIRECTIONAL,
		radial: GRADIENT_RADIAL
	},
	scene: SCENE_CONTENT
};
