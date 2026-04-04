import { COLORS_SCALES_AMBER } from '$stylist/color/const/record/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/color/const/record/colors-scales/blue';
import { COLORS_SCALES_NEUTRAL } from '$stylist/color/const/record/colors-scales/neutral';
import { COLORS_SCALES_RED } from '$stylist/color/const/record/colors-scales/red';
import { COLORS_SCALES_SLATE } from '$stylist/color/const/record/colors-scales/slate';
import { COLORS_SCALES_TEAL } from '$stylist/color/const/record/colors-scales/teal';
import { THEME_TYPOGRAPHY } from '$stylist/typography/const/struct/theme-typography';
import { RECORD_ELEVATION } from '$stylist/layout/const/record/elevation';
import { RECORD_BORDER_RADIUS } from '$stylist/layout/const/record/border-radius';
import { RECORD_SPACING } from '$stylist/layout/const/record/spacing';
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

export const THEME_MODE_DARK: Theme = {
	scheme: 'dark',
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
			primary: COLORS_SCALES_SLATE[900],
			secondary: COLORS_SCALES_SLATE[800],
			tertiary: COLORS_SCALES_SLATE[700],
			default: COLORS_SCALES_SLATE[900],
			subtle: COLORS_SCALES_SLATE[800],
			raised: COLORS_SCALES_SLATE[800],
			floating: COLORS_SCALES_SLATE[700],
			container: COLORS_SCALES_SLATE[800],
			containerLow: COLORS_SCALES_SLATE[900],
			containerHigh: COLORS_SCALES_SLATE[700],
			transparent: 'transparent',
			inverse: TOKEN_COLOR.white
		},
		text: {
			primary: COLORS_SCALES_SLATE[50],
			secondary: COLORS_SCALES_SLATE[300],
			tertiary: COLORS_SCALES_SLATE[400],
			default: COLORS_SCALES_SLATE[50],
			inverse: COLORS_SCALES_SLATE[900],
			onAccent: TOKEN_COLOR.white,
			link: COLORS_SCALES_BLUE[400]
		},
		border: {
			primary: COLORS_SCALES_SLATE[600],
			secondary: COLORS_SCALES_SLATE[700],
			tertiary: COLORS_SCALES_SLATE[800],
			default: COLORS_SCALES_SLATE[700],
			inverse: COLORS_SCALES_SLATE[200],
			accent: COLORS_SCALES_BLUE[400]
		},
		surfaceTint: {
			level1: 'rgba(100, 180, 255, 0.05)',
			level2: 'rgba(100, 180, 255, 0.1)',
			level3: 'rgba(100, 180, 255, 0.15)',
			level4: 'rgba(100, 180, 255, 0.2)',
			level5: 'rgba(100, 180, 255, 0.25)'
		},
		onPrimary: TOKEN_COLOR.white,
		onSecondary: TOKEN_COLOR.white,
		onTertiary: TOKEN_COLOR.white,
		onSuccess: TOKEN_COLOR.white,
		onInfo: TOKEN_COLOR.white,
		onWarning: COLORS_SCALES_SLATE[900],
		onError: TOKEN_COLOR.white,
		onBackground: COLORS_SCALES_SLATE[50],
		onSurface: COLORS_SCALES_SLATE[50],
		onSurfaceContainer: COLORS_SCALES_SLATE[50],
		primaryContainer: COLORS_SCALES_BLUE[800],
		onPrimaryContainer: COLORS_SCALES_BLUE[100],
		secondaryContainer: COLORS_SCALES_SLATE[800],
		onSecondaryContainer: COLORS_SCALES_SLATE[100],
		tertiaryContainer: COLORS_SCALES_TEAL[800],
		onTertiaryContainer: COLORS_SCALES_TEAL[100],
		errorContainer: COLORS_SCALES_RED[800],
		onErrorContainer: COLORS_SCALES_RED[100],
		successContainer: COLORS_SCALES_TEAL[800],
		onSuccessContainer: COLORS_SCALES_TEAL[100],
		warningContainer: COLORS_SCALES_AMBER[800],
		onWarningContainer: COLORS_SCALES_AMBER[100],
		outline: COLORS_SCALES_SLATE[500],
		outlineVariant: COLORS_SCALES_SLATE[600],
		outlineDefault: COLORS_SCALES_SLATE[600],
		outlineSubtle: COLORS_SCALES_SLATE[700],
		outlineStrong: COLORS_SCALES_SLATE[400],
		shadow: 'rgba(0, 0, 0, 0.3)',
		scrim: 'rgba(0, 0, 0, 0.7)',
		backdrop: 'rgba(0, 0, 0, 0.8)',
		scene: {
			far: COLORS_SCALES_SLATE[900],
			mid: COLORS_SCALES_SLATE[800],
			focus: COLORS_SCALES_SLATE[700],
			grid: COLORS_SCALES_SLATE[600],
			star: COLORS_SCALES_BLUE[400],
			icon: COLORS_SCALES_BLUE[300],
			cluster: COLORS_SCALES_BLUE[500],
			selection: COLORS_SCALES_BLUE[400],
			focusGlow: COLORS_SCALES_BLUE[500]
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
	scene: SCENE_CONTENT,
	spacing: RECORD_SPACING,
	borderRadius: RECORD_BORDER_RADIUS,
	boxShadow: RECORD_ELEVATION
};
