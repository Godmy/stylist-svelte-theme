import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';

export interface BehaviorThemeScheme {
	onThemeSchemeChange?: (theme: TokenThemeScheme) => void;
}
