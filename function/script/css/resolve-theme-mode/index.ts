import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import { getSystemThemeMode } from '$stylist/theme/function/script/css/get-system-theme-mode';

export function resolveThemeMode(mode: TokenThemeMode): 'light' | 'dark' {
	if (mode !== 'default') return mode;
	return getSystemThemeMode();
}
