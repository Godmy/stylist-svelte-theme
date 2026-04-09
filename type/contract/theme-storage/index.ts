import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export type ThemeStorageContract = {
	modeStorageKey: string;
	schemeStorageKey: string;
	defaultThemeMode: TokenThemeMode;
	defaultThemeScheme: TokenThemeScheme;
};
