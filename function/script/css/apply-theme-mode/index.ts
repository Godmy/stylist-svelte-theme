import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/css/apply-theme-mode-and-scheme';

function resolveTargetElement(element?: HTMLElement): HTMLElement | null {
	if (typeof document === 'undefined') return null;
	return document.documentElement;
}

/**
 * Sets data-theme attribute and CSS class on the element.
 * For 'default' mode, also applies the scheme to determine light/dark.
 */
export function applyThemeMode(
	mode: TokenThemeMode,
	element?: HTMLElement,
	defaultScheme?: TokenThemeScheme
): 'light' | 'dark' {
	const resolvedMode = resolveThemeMode(mode);
	const target = resolveTargetElement(element);
	if (!target) return resolvedMode;

	// Для режима 'default' применяем полную тему с схемой
	if (mode === 'default' && defaultScheme) {
		return applyThemeModeAndScheme(mode, defaultScheme, element);
	}

	target.classList.remove('light', 'dark', 'default');
	target.classList.add(resolvedMode);
	target.setAttribute('data-theme', resolvedMode);

	return resolvedMode;
}
