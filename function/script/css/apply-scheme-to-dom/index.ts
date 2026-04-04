import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/css/apply-theme-mode-and-scheme';

/** @deprecated Use applyThemeModeAndScheme instead */
export function applySchemeToDOM(
	scheme: TokenThemeScheme,
	mode: TokenThemeMode = 'light',
	element?: HTMLElement
): void {
	applyThemeModeAndScheme(mode, scheme, element);
}
