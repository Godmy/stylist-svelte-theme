import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import { ManagerTheme } from '$stylist/theme/class/manager/theme';

export function resolveThemeMode(mode: TokenThemeMode): 'light' | 'dark' {
	if (mode !== 'default') return mode;
	return ManagerTheme.getSystemThemeMode();
}
