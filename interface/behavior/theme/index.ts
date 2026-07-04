import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';

export interface BehaviorTheme {
	setMode?: (mode: TokenThemeMode) => void;
	setScheme?: (scheme: TokenThemeScheme) => void;
	getEffectiveTheme?: () => 'light' | 'dark';
}
