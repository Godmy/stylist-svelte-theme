import type { Theme } from '$stylist/theme/type/struct/theme';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { resolveTargetElement } from '$stylist/theme/function/script/resolve-target-element';

export function applyThemeToDOM(theme: Theme, element?: HTMLElement): void {
	const target = resolveTargetElement(element);
	if (!target) {
		return;
	}

	const vars = ManagerThemeCSS.convertToCSSVars(theme);
	ManagerThemeCSS.setVars(vars, target);
	target.setAttribute('data-theme', theme.mode);
}
