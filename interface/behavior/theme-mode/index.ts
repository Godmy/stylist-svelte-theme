import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';

export interface BehaviorThemeMode {
	onThemeModeChange?: (theme: TokenThemeMode) => void;
}
