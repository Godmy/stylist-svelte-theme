import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';

export type ThemeStorageContract = {
	modeStorageKey: string;
	schemeStorageKey: string;
	defaultThemeMode: TokenThemeMode;
	defaultThemeScheme: TokenThemeScheme;
};
