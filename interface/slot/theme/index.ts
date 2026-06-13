import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import type { TokenThemeTone } from '$stylist/theme/type/enum/theme-tone';

export interface SlotTheme {
	'theme-mode'?: TokenThemeMode;
	'theme-scheme'?: TokenThemeScheme;
	'theme-tone'?: TokenThemeTone;
}
