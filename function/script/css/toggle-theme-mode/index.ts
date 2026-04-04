import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/enum/theme-scheme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/css/apply-theme-mode-and-scheme';
import { ThemeStorageManager } from '$stylist/theme/class/object-manager/theme-storage-manager';

export function toggleThemeMode(): TokenThemeMode {
	const current = ThemeStorageManager.getStoredMode();
	const next: TokenThemeMode = current === 'dark' ? 'light' : 'dark';

	if (typeof window !== 'undefined') {
		const rawScheme = document.documentElement.getAttribute('data-scheme');
		const scheme: TokenThemeScheme =
			rawScheme && TOKEN_THEME_SCHEME.includes(rawScheme as TokenThemeScheme)
				? (rawScheme as TokenThemeScheme)
				: 'minimal';
		applyThemeModeAndScheme(next, scheme);
		ThemeStorageManager.persistMode(next);
	}

	return next;
}
