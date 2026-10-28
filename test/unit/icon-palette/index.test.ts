import { describe, expect, it } from 'vitest';
import { ManagerThemeResolver } from '$stylist/theme/class/manager/theme-resolver';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { THEME_SCHEMES } from '$stylist/theme/const/record/theme-schemes';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';

describe('icon palette', () => {
	it.each(['light', 'dark'] as const)('switches icon hues for every scheme in %s mode', (mode) => {
		const element = document.createElement('div');
		const primaryColors = new Set<string>();
		for (const scheme of THEME_SCHEMES) {
			applyThemeModeAndScheme(mode, scheme.id, element);
			const colors = ManagerThemeResolver.resolve(scheme.id, mode).colors.icon!;
			for (const role of ['primary', 'secondary', 'tertiary'] as const) {
				expect(element.style.getPropertyValue(`--color-icon-${role}`)).toBe(colors[role]);
				expect(colors[role]).toMatch(/^#/);
			}
			expect(new Set(Object.values(colors)).size).toBe(3);
			primaryColors.add(colors.primary);
		}
		expect(primaryColors.size).toBe(THEME_SCHEMES.length);
	});

	it.each(THEME_SCHEMES)(
		'$id uses lighter icon shades in dark mode without mutating presets',
		(scheme) => {
			const light = ManagerThemeResolver.resolve(scheme.id, 'light');
			const dark = ManagerThemeResolver.resolve(scheme.id, 'dark');
			expect(light.colors.icon!.primary).not.toBe(dark.colors.icon!.primary);
			expect(scheme.light.colors.icon).toBeUndefined();
			expect(scheme.dark.colors.icon).toBeUndefined();
			expect(ManagerThemeCSS.convertToCSSVars(light)['--color-icon-primary']).toBe(
				light.colors.icon!.primary
			);
		}
	);
});
