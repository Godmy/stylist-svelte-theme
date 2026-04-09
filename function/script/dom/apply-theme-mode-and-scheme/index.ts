import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeToDOM } from '$stylist/theme/function/script/css/apply-theme-to-dom';
import { resolveTargetElement } from '$stylist/theme/function/script/resolve-target-element';
import { ManagerThemeResolver } from '$stylist/theme/class/manager/theme-resolver';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';

export function applyThemeModeAndScheme(
	mode: TokenThemeMode,
	scheme: TokenThemeScheme,
	element?: HTMLElement
): 'light' | 'dark' {
	const resolvedMode = resolveThemeMode(mode);
	const target = resolveTargetElement(element);
	if (!target) return resolvedMode;

	const theme = ManagerThemeResolver.resolve(scheme, resolvedMode);
	applyThemeToDOM(theme, target);
	target.classList.remove('light', 'dark', 'default');
	target.classList.add(resolvedMode);
	target.setAttribute('data-theme', resolvedMode);
	target.setAttribute('data-scheme', scheme);

	return resolvedMode;
}
