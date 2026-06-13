import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface BehaviorThemeScheme {
	onThemeSchemeChange?: (theme: TokenThemeScheme) => void;
}
