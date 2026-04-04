import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeToDOM } from '$stylist/theme/function/script/css/apply-theme-to-dom';
import { ThemeResolver } from '$stylist/theme/class/object-manager/theme-resolver';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';

function resolveTargetElement(element?: HTMLElement): HTMLElement | null {
	if (element) return element;
	if (typeof document === 'undefined') return null;
	return document.documentElement;
}

export function applyThemeModeAndScheme(
	mode: TokenThemeMode,
	scheme: TokenThemeScheme,
	element?: HTMLElement
): 'light' | 'dark' {
	const resolvedMode = resolveThemeMode(mode);
	const target = resolveTargetElement(element);
	if (!target) return resolvedMode;

	const theme = ThemeResolver.resolve(scheme, resolvedMode);
	applyThemeToDOM(theme, target);
	target.classList.remove('light', 'dark', 'default');
	target.classList.add(resolvedMode);
	target.setAttribute('data-theme', resolvedMode);
	target.setAttribute('data-scheme', scheme);

	return resolvedMode;
}
