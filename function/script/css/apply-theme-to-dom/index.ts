import type { Theme } from '$stylist/theme/type/struct/theme/theme';
import { ThemeCSSManager } from '$stylist/theme/class/object-manager/theme-css-manager';

function resolveTargetElement(element?: HTMLElement): HTMLElement | null {
	if (element) {
		return element;
	}
	if (typeof document === 'undefined') {
		return null;
	}
	return document.documentElement;
}

export function applyThemeToDOM(theme: Theme, element?: HTMLElement): void {
	const target = resolveTargetElement(element);
	if (!target) {
		return;
	}

	const vars = ThemeCSSManager.convertToCSSVars(theme);
	ThemeCSSManager.setVars(vars, target);
	target.setAttribute('data-theme', theme.scheme);
}
