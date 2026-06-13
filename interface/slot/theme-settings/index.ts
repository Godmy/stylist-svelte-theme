import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface SlotThemeSettings {
	themeMode: TokenThemeMode;
	themeScheme: TokenThemeScheme;
}
