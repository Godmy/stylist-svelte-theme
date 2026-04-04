import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { StructThemeScheme } from '$stylist/theme/type/struct/theme-scheme';

export const SCHEME_MINIMAL: StructThemeScheme = {
	id: 'minimal',
	label: 'Minimal',
	description: 'Neutral palette',
	light: THEME_MODE_LIGHT,
	dark: THEME_MODE_DARK
};
