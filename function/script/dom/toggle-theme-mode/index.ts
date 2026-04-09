import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/enum/theme-scheme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
import { resolveTargetElement } from '$stylist/theme/function/script/resolve-target-element';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';

export function toggleThemeMode(): TokenThemeMode {
	const current = ManagerThemeStorage.getStoredMode();
	const next: TokenThemeMode = current === 'dark' ? 'light' : 'dark';

	const target = resolveTargetElement();
	if (target) {
		const rawScheme = target.getAttribute('data-scheme');
		const scheme: TokenThemeScheme =
			rawScheme && TOKEN_THEME_SCHEME.includes(rawScheme as TokenThemeScheme)
				? (rawScheme as TokenThemeScheme)
				: 'minimal';
		applyThemeModeAndScheme(next, scheme, target);
		ManagerThemeStorage.persistMode(next);
	}

	return next;
}
