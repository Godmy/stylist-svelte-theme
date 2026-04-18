import type { Theme } from '$stylist/theme/type/struct/theme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ContractThemeContext {
	theme: Theme;
	themeMode: TokenThemeMode;
	themeScheme: TokenThemeScheme;
	setMode?: (mode: TokenThemeMode) => void;
	setScheme?: (scheme: TokenThemeScheme) => void;
	getEffectiveTheme?: () => 'light' | 'dark';
}
