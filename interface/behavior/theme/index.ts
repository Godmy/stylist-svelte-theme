import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface BehaviorTheme {
	setMode?: (mode: TokenThemeMode) => void;
	setScheme?: (scheme: TokenThemeScheme) => void;
	getEffectiveTheme?: () => 'light' | 'dark';
}
