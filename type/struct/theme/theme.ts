import type { ArchitectureScene } from '$stylist/architecture/type/struct/scene/architecture-scene';
import { TOKEN_EASING } from '$stylist/architecture/const/map/easing';
import { TOKEN_ANIMATION } from '$stylist/interaction/const/map/animation';
import { TOKEN_DURATION } from '$stylist/interaction/const/map/duration';
import { TOKEN_TRANSITION } from '$stylist/interaction/const/record/transition';
import type { StructThemeTypography } from '$stylist/typography/type/struct/theme-typography';

export type ColorScale = Record<number, string>;
type StringMap = Record<string, string>;
type UnknownMap = Record<string, unknown>;

type ThemeColorGraph = {
	portDataType?: StringMap;
	portState?: StringMap;
};

type ThemeColors = {
	primary: ColorScale;
	secondary: ColorScale;
	tertiary?: ColorScale;
	neutral: ColorScale;
	success: ColorScale;
	info: ColorScale;
	warning: ColorScale;
	error: ColorScale;
	danger: ColorScale;
	background: StringMap;
	text: StringMap;
	border: StringMap;
	surfaceTint?: StringMap;
	onPrimary?: string;
	onSecondary?: string;
	onTertiary?: string;
	onSuccess?: string;
	onInfo?: string;
	onWarning?: string;
	onError?: string;
	onBackground?: string;
	onSurface?: string;
	onSurfaceContainer?: string;
	primaryContainer?: string;
	onPrimaryContainer?: string;
	secondaryContainer?: string;
	onSecondaryContainer?: string;
	tertiaryContainer?: string;
	onTertiaryContainer?: string;
	errorContainer?: string;
	onErrorContainer?: string;
	successContainer?: string;
	onSuccessContainer?: string;
	warningContainer?: string;
	onWarningContainer?: string;
	outline?: string;
	outlineVariant?: string;
	outlineDefault?: string;
	outlineSubtle?: string;
	outlineStrong?: string;
	shadow?: string;
	scrim?: string;
	backdrop?: string;
	scene?: StringMap;
	graph?: ThemeColorGraph;
};

export type Theme = {
	scheme: 'light' | 'dark';
	colors: ThemeColors;
	typography: StructThemeTypography;
	motion: {
		duration: typeof TOKEN_DURATION;
		easing: typeof TOKEN_EASING;
		transitions: typeof TOKEN_TRANSITION;
		animations: typeof TOKEN_ANIMATION;
	};
	gradients?: {
		types?: StringMap;
		directional?: StringMap;
		radial?: StringMap;
	};
	size?: StringMap | readonly string[];
	elevation?: UnknownMap;
	opacity?: StringMap;
	zIndex?: StringMap;
	scene?: ArchitectureScene;
	spacing?: StringMap;
	borderRadius?: StringMap;
	boxShadow?: StringMap;
};
