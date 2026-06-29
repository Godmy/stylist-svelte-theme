import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';

export function supportsThemeMode(theme: TokenThemeMode): theme is TokenThemeMode {
	return TOKEN_THEME_MODE.includes(theme);
}
