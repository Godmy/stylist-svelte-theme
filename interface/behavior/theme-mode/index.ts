import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';

export interface BehaviorThemeMode {
	onThemeModeChange?: (theme: TokenThemeMode) => void;
}
