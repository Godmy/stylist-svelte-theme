import { afterEach, describe, expect, it, vi } from 'vitest';
import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { TOKEN_THEME_MODE_STORAGE } from '$stylist/theme/const/map/theme-mode';
import { TOKEN_THEME_SCHEME_STORAGE } from '$stylist/theme/const/map/theme-scheme';
import { ManagerThemeResolver } from '$stylist/theme/class/manager/theme-resolver';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';
import { applyThemeMode } from '$stylist/theme/function/script/dom/apply-theme-mode';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
import { applyThemeToDOM } from '$stylist/theme/function/script/css/apply-theme-to-dom';

describe('theme runtime helpers', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
		document.documentElement.className = '';
		document.documentElement.removeAttribute('data-theme');
		document.documentElement.removeAttribute('data-scheme');
		document.documentElement.removeAttribute('style');
		localStorage.clear();
	});

	it('stays safe when browser globals are unavailable', () => {
		vi.stubGlobal('document', undefined);
		vi.stubGlobal('window', undefined);
		vi.stubGlobal('localStorage', undefined);

		expect(() => applyThemeToDOM(THEME_MODE_DARK)).not.toThrow();
		expect(() => applyThemeModeAndScheme('light', 'minimal')).not.toThrow();
		expect(() => ManagerThemeResolver.applyByMode('dark')).not.toThrow();
		expect(() => applyThemeMode('dark')).not.toThrow();
		expect(() => ManagerThemeResolver.applyStoredScheme('minimal')).not.toThrow();
	});

	it('applies mode and scheme to the browser target element', () => {
		applyThemeModeAndScheme('dark', 'forest');

		expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
		expect(document.documentElement.getAttribute('data-scheme')).toBe('forest');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(document.documentElement.style.getPropertyValue('--color-background-primary')).not.toBe('');
		expect(document.documentElement.style.getPropertyValue('--opacity-80')).toBe('0.8');
	});

	it('applies stored scheme attribute to the target element', () => {
		ManagerThemeResolver.applyStoredScheme('sunset');

		expect(document.documentElement.getAttribute('data-scheme')).toBe('sunset');
	});

	it('normalizes legacy mode values', () => {
		expect(ManagerThemeStorage.normalizeMode('system')).toBe('default');
		expect(ManagerThemeStorage.normalizeMode('lighter')).toBe('light');
		expect(ManagerThemeStorage.normalizeMode('darker')).toBe('dark');
	});

	it('persists and clears theme settings through the shared storage API', () => {
		ManagerThemeStorage.persistSettings({
			themeMode: 'dark',
			themeScheme: 'ocean'
		});

		expect(localStorage.getItem(TOKEN_THEME_MODE_STORAGE)).toBe('dark');
		expect(localStorage.getItem(TOKEN_THEME_SCHEME_STORAGE)).toBe('ocean');
		expect(ManagerThemeStorage.getStoredSettings()).toEqual({
			themeMode: 'dark',
			themeScheme: 'ocean'
		});

		ManagerThemeStorage.clearSettings();

		expect(ManagerThemeStorage.getStoredSettings()).toEqual({
			themeMode: 'default',
			themeScheme: 'minimal'
		});
	});
});
