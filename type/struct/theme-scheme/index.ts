import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import type { Theme } from '$stylist/theme/type/struct/theme/theme';

export type StructThemeScheme = {
	id: TokenThemeScheme;
	label: string;
	description: string;
	light: Theme;
	dark: Theme;
};
