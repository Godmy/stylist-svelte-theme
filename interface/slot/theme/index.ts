import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';
import type { TokenThemeTone } from '$stylist/theme/type/alias/theme-tone';

export interface SlotTheme {
	'theme-mode'?: TokenThemeMode;
	'theme-scheme'?: TokenThemeScheme;
	'theme-tone'?: TokenThemeTone;
}
