import { RECORD_THEME_SCHEME } from '$stylist/theme/const/record/theme-scheme';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/enum/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/enum/theme-scheme';
import { applyThemeToDOM } from '$stylist/theme/function/script/css/apply-theme-to-dom';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import type { Theme } from '$stylist/theme/type/struct/theme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ManagerThemeResolver {
	/**
	 * Разрешает тему по схеме и режиму
	 */
	static resolve(scheme: TokenThemeScheme, mode: 'light' | 'dark'): Theme {
		return RECORD_THEME_SCHEME[scheme][mode];
	}

	/**
	 * Применяет тему по режиму и схеме к DOM элементу
	 */
	static applyByMode(
		mode: TokenThemeMode,
		scheme: TokenThemeScheme = 'minimal',
		element?: HTMLElement
	): Theme {
		const resolvedMode = resolveThemeMode(mode);
		const theme = this.resolve(scheme, resolvedMode);
		applyThemeToDOM(theme, element);
		return theme;
	}

	/**
	 * Применяет сохранённую схему темы
	 */
	static applyStoredScheme(
		scheme?: TokenThemeScheme,
		element?: HTMLElement
	): void {
		const themeScheme = scheme || 'minimal';
		if (element || typeof document !== 'undefined') {
			const target = element || document.documentElement;
			target.setAttribute('data-scheme', themeScheme);
		}
	}

	/**
	 * Проверяет, является ли значение допустимым режимом темы
	 */
	static supportsMode(theme: string): theme is TokenThemeMode {
		return TOKEN_THEME_MODE.includes(theme as TokenThemeMode);
	}

	/**
	 * Проверяет, является ли значение допустимой схемой темы
	 */
	static supportsScheme(theme: string): theme is TokenThemeScheme {
		return TOKEN_THEME_SCHEME.includes(theme as TokenThemeScheme);
	}
}
