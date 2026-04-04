import type { Theme } from '$stylist/theme/type/struct/theme/theme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeContextValue {
	theme: Theme;
	themeMode: TokenThemeMode;
	themeScheme: TokenThemeScheme;
	setMode?: (mode: TokenThemeMode) => void;
	setScheme?: (scheme: TokenThemeScheme) => void;
	getEffectiveTheme?: () => 'light' | 'dark';
}

export type ThemeContext = ThemeContextValue;
