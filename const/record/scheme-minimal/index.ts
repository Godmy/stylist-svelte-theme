import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';

export const SCHEME_MINIMAL: ThemeSchemeDefinition & {
	light: typeof THEME_MODE_LIGHT;
	dark: typeof THEME_MODE_DARK;
} = {
	id: 'minimal',
	label: 'Minimal',
	description: 'Neutral palette',
	light: THEME_MODE_LIGHT,
	dark: THEME_MODE_DARK
};
