import { RECORD_ELEVATION } from '$stylist/theme/const/record/elevation';

export const LAYOUT_ELEVATION_SEMANTIC: Record<
	| 'none'
	| 'level1'
	| 'level2'
	| 'level3'
	| 'level4'
	| 'level5'
	| 'focus'
	| 'focusStrong'
	| 'accent'
	| 'accentStrong'
	| 'overlay'
	| 'modal'
	| 'star'
	| 'icon'
	| 'pill'
	| 'card'
	| 'cardHover'
	| 'detail'
	| 'focusNode'
	| 'fullscreen',
	string
> = {
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
};
