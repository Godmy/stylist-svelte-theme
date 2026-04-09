import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import type { Theme } from '$stylist/theme/type/struct/theme';

export type ThemeSchemeDefinition = {
	id: TokenThemeScheme;
	label: string;
	description: string;
	light: Theme;
	dark: Theme;
};
