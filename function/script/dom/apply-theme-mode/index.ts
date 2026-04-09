import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
import { resolveThemeScheme } from '$stylist/theme/function/script/dom/resolve-theme-scheme';
import { resolveTargetElement } from '$stylist/theme/function/script/resolve-target-element';

export function applyThemeMode(
	mode: TokenThemeMode,
	element?: HTMLElement,
	defaultScheme?: TokenThemeScheme
): 'light' | 'dark' {
	const resolvedMode = resolveThemeMode(mode);
	const target = resolveTargetElement(element);
	if (!target) return resolvedMode;

	const resolvedScheme = resolveThemeScheme(target, defaultScheme);
	if (resolvedScheme) {
		return applyThemeModeAndScheme(mode, resolvedScheme, target);
	}

	target.classList.remove('light', 'dark', 'default');
	target.classList.add(resolvedMode);
	target.setAttribute('data-theme', resolvedMode);

	return resolvedMode;
}
