import { setContext, getContext, hasContext } from 'svelte';
import { TOKEN_THEME_CONTEXT } from '$stylist/theme/const/value/theme-context';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import type { ContractThemeContext } from '$stylist/theme/interface/contract/theme-context';
import type { Theme } from '$stylist/theme/type/struct/theme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ManagerThemeContext {
	/**
	 * Устанавливает контекст темы в Svelte контекст
	 */
	static set(
		getTheme: () => Theme,
		getThemeMode: () => TokenThemeMode,
		getThemeScheme: () => TokenThemeScheme,
		setModeFn: (mode: TokenThemeMode) => void,
		setSchemeFn: (scheme: TokenThemeScheme) => void
	): ContractThemeContext {
		const context: ContractThemeContext = {
			get theme() {
				return getTheme();
			},
			get themeMode() {
				return getThemeMode();
			},
			get themeScheme() {
				return getThemeScheme();
			},
			setMode: setModeFn,
			setScheme: setSchemeFn,
			getEffectiveTheme: () => resolveThemeMode(getThemeMode())
		};

		setContext(TOKEN_THEME_CONTEXT, context);
		return context;
	}

	/**
	 * Получает контекст темы (обязательный)
	 * Бросает ошибку, если контекст не найден
	 */
	static get(): ContractThemeContext {
		return getContext<ContractThemeContext>(TOKEN_THEME_CONTEXT);
	}

	/**
	 * Получает контекст темы (опциональный)
	 * Возвращает undefined, если контекст не найден
	 */
	static getOptional(): ContractThemeContext | undefined {
		return hasContext(TOKEN_THEME_CONTEXT)
			? getContext<ContractThemeContext>(TOKEN_THEME_CONTEXT)
			: undefined;
	}

	/**
	 * Проверяет наличие контекста темы
	 */
	static has(): boolean {
		return hasContext(TOKEN_THEME_CONTEXT);
	}
}
