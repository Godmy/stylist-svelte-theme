import { RECORD_THEME_SCHEME } from '$stylist/theme/const/record/theme-scheme';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';
import { applyThemeToDOM } from '$stylist/theme/function/script/css/apply-theme-to-dom';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import type { Theme } from '$stylist/theme/type/object/theme';
import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';

export class ManagerThemeResolver {
	/**
	 * Р Р°Р·СЂРµС€Р°РµС‚ С‚РµРјСѓ РїРѕ СЃС…РµРјРµ Рё СЂРµР¶РёРјСѓ
	 */
	static resolve(scheme: TokenThemeScheme, mode: 'light' | 'dark'): Theme {
		const definition = RECORD_THEME_SCHEME[scheme];
		const theme = definition[mode];
		// Schemes may share dark surfaces; keep their own icon hues in both modes.
		const palette = definition.light.colors;
		const shade = mode === 'dark' ? 400 : 600;
		return {
			...theme,
			colors: {
				...theme.colors,
				icon: {
					primary: (scheme === 'minimal' ? palette.neutral : palette.primary)[shade],
					secondary: (scheme === 'minimal'
						? palette.neutral
						: (palette.tertiary ?? palette.secondary))[mode === 'dark' ? 300 : 500],
					tertiary: palette.secondary[mode === 'dark' ? 200 : 700]
				}
			}
		};
	}

	/**
	 * РџСЂРёРјРµРЅСЏРµС‚ С‚РµРјСѓ РїРѕ СЂРµР¶РёРјСѓ Рё СЃС…РµРјРµ Рє DOM СЌР»РµРјРµРЅС‚Сѓ
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
	 * РџСЂРёРјРµРЅСЏРµС‚ СЃРѕС…СЂР°РЅС‘РЅРЅСѓСЋ СЃС…РµРјСѓ С‚РµРјС‹
	 */
	static applyStoredScheme(scheme?: TokenThemeScheme, element?: HTMLElement): void {
		const themeScheme = scheme || 'minimal';
		if (element || typeof document !== 'undefined') {
			const target = element || document.documentElement;
			target.setAttribute('theme-scheme', themeScheme);
		}
	}

	/**
	 * РџСЂРѕРІРµСЂСЏРµС‚, СЏРІР»СЏРµС‚СЃСЏ Р»Рё Р·РЅР°С‡РµРЅРёРµ РґРѕРїСѓСЃС‚РёРјС‹Рј СЂРµР¶РёРјРѕРј С‚РµРјС‹
	 */
	static supportsMode(theme: string): theme is TokenThemeMode {
		return TOKEN_THEME_MODE.includes(theme as TokenThemeMode);
	}

	/**
	 * РџСЂРѕРІРµСЂСЏРµС‚, СЏРІР»СЏРµС‚СЃСЏ Р»Рё Р·РЅР°С‡РµРЅРёРµ РґРѕРїСѓСЃС‚РёРјРѕР№ СЃС…РµРјРѕР№ С‚РµРјС‹
	 */
	static supportsScheme(theme: string): theme is TokenThemeScheme {
		return TOKEN_THEME_SCHEME.includes(theme as TokenThemeScheme);
	}
}
