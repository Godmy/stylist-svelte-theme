import { afterEach, describe, expect, it, vi } from 'vitest';
import {
	TOKEN_THEME_STORAGE_SCHEME,
	TOKEN_THEME_STORAGE_SCHEMA_LEGACY
} from '$stylist/theme/const/struct/theme-storage';
import { ThemeResolver } from '$stylist/theme/class/object-manager/theme-resolver';
import { ThemeStorageManager } from '$stylist/theme/class/object-manager/theme-storage-manager';
import { applySchemeToDOM } from '$stylist/theme/function/script/css/apply-scheme-to-dom';
import { applyThemeMode } from '$stylist/theme/function/script/css/apply-theme-mode';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/css/apply-theme-mode-and-scheme';
import { applyThemeToDOM } from '$stylist/theme/function/script/css/apply-theme-to-dom';

// Обёртки для обратной совместимости
const applyThemeByMode = ThemeResolver.applyByMode;
const applyStoredThemeScheme = ThemeResolver.applyStoredScheme;
const clearStoredThemeSettings = ThemeStorageManager.clearSettings;
const getStoredThemeSettings = ThemeStorageManager.getStoredSettings;
const persistThemeSettings = ThemeStorageManager.persistSettings;

describe('theme runtime helpers', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
		document.documentElement.className = '';
		document.documentElement.removeAttribute('data-theme');
		document.documentElement.removeAttribute('data-ui-theme');
		document.documentElement.removeAttribute('style');
		localStorage.clear();
	});

	it('stays safe when browser globals are unavailable', () => {
		vi.stubGlobal('document', undefined);
		vi.stubGlobal('window', undefined);
		vi.stubGlobal('localStorage', undefined);

		expect(() => applyThemeToDOM({ name: 'dark' } as never)).not.toThrow();
		expect(() => applySchemeToDOM('minimal')).not.toThrow();
		expect(() => applyThemeByMode('dark')).not.toThrow();
		expect(() => applyThemeMode('dark')).not.toThrow();
		expect(() => applyThemeModeAndScheme('dark', 'minimal')).not.toThrow();
		expect(() => ThemeResolver.applyStoredScheme('minimal')).not.toThrow();
	});

	it('applies mode and scheme to the browser target element', () => {
		applyThemeModeAndScheme('dark', 'forest');

		expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
		expect(document.documentElement.getAttribute('data-ui-theme')).toBe('forest');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(document.documentElement.style.getPropertyValue('--app-accent')).toBe('#22754b');
	});

	it('persists selected scheme when requested', () => {
		ThemeResolver.applyStoredScheme('sunset');

		expect(localStorage.getItem(TOKEN_THEME_STORAGE_SCHEME)).toBe('sunset');
		expect(document.documentElement.getAttribute('data-theme')).toBe('light');
		expect(document.documentElement.getAttribute('data-ui-theme')).toBe('sunset');
	});

	it('normalizes legacy storage values through the shared contract', () => {
		localStorage.setItem('stylist-theme', 'system');
		localStorage.setItem(TOKEN_THEME_STORAGE_SCHEMA_LEGACY, 'forest');

		expect(getStoredThemeSettings()).toEqual({
			themeMode: 'default',
			themeScheme: 'forest'
		});
	});

	it('persists and clears theme settings through the shared storage API', () => {
		persistThemeSettings({
			themeMode: 'dark',
			themeScheme: 'ocean'
		});

		expect(getStoredThemeSettings()).toEqual({
			themeMode: 'dark',
			themeScheme: 'ocean'
		});

		clearStoredThemeSettings();

		expect(getStoredThemeSettings()).toEqual({
			themeMode: 'default',
			themeScheme: 'minimal'
		});
	});
});

