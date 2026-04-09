import { TOKEN_THEME_MODE } from '$stylist/theme/const/enum/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/enum/theme-scheme';
import { THEME_STORAGE_CONTRACT } from '$stylist/theme/const/struct/theme-storage-contract';
import type { ThemeStorageContract } from '$stylist/theme/type/contract/theme-storage';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import type { StoredThemeSettings } from '$stylist/theme/type/struct/stored-theme-settings';

export class ManagerThemeStorage {
	/**
	 * Получает сохранённый режим темы из localStorage
	 */
	static getStoredMode(
		storageKey = THEME_STORAGE_CONTRACT.modeStorageKey
	): TokenThemeMode {
		if (typeof localStorage === 'undefined') {
			return THEME_STORAGE_CONTRACT.defaultThemeMode;
		}
		return this.normalizeMode(localStorage.getItem(storageKey));
	}

	/**
	 * Получает сохранённую схему темы из localStorage
	 */
	static getStoredScheme(
		storageKey = THEME_STORAGE_CONTRACT.schemeStorageKey
	): TokenThemeScheme {
		if (typeof localStorage === 'undefined') {
			return THEME_STORAGE_CONTRACT.defaultThemeScheme;
		}
		return this.normalizeScheme(localStorage.getItem(storageKey));
	}

	/**
	 * Получает все сохранённые настройки темы
	 */
	static getStoredSettings(
		contract: ThemeStorageContract = THEME_STORAGE_CONTRACT
	): StoredThemeSettings {
		return {
			themeMode: this.getStoredMode(contract.modeStorageKey),
			themeScheme: this.getStoredScheme(contract.schemeStorageKey)
		};
	}

	/**
	 * Сохраняет режим темы в localStorage
	 */
	static persistMode(
		themeMode: TokenThemeMode,
		storageKey = THEME_STORAGE_CONTRACT.modeStorageKey
	): void {
		if (typeof localStorage === 'undefined') return;
		localStorage.setItem(storageKey, themeMode);
	}

	/**
	 * Сохраняет схему темы в localStorage
	 */
	static persistScheme(
		themeScheme: TokenThemeScheme,
		storageKey = THEME_STORAGE_CONTRACT.schemeStorageKey
	): void {
		if (typeof localStorage === 'undefined') return;
		localStorage.setItem(storageKey, themeScheme);
	}

	/**
	 * Сохраняет все настройки темы
	 */
	static persistSettings(
		settings: StoredThemeSettings,
		contract: ThemeStorageContract = THEME_STORAGE_CONTRACT
	): void {
		this.persistMode(settings.themeMode, contract.modeStorageKey);
		this.persistScheme(settings.themeScheme, contract.schemeStorageKey);
	}

	/**
	 * Очищает сохранённые настройки темы
	 */
	static clearSettings(
		contract: ThemeStorageContract = THEME_STORAGE_CONTRACT
	): void {
		if (typeof localStorage === 'undefined') return;
		localStorage.removeItem(contract.modeStorageKey);
		localStorage.removeItem(contract.schemeStorageKey);
	}

	/**
	 * Нормализует сохранённое значение режима темы
	 */
	static normalizeMode(
		value: string | null | undefined,
		fallback: TokenThemeMode = THEME_STORAGE_CONTRACT.defaultThemeMode
	): TokenThemeMode {
		if (value === 'lighter') return 'light';
		if (value === 'darker') return 'dark';
		if (value === 'system') return 'default';

		return TOKEN_THEME_MODE.includes(value as TokenThemeMode)
			? (value as TokenThemeMode)
			: fallback;
	}

	/**
	 * Нормализует сохранённое значение схемы темы
	 */
	static normalizeScheme(
		value: string | null | undefined,
		fallback: TokenThemeScheme = THEME_STORAGE_CONTRACT.defaultThemeScheme
	): TokenThemeScheme {
		return TOKEN_THEME_SCHEME.includes(value as TokenThemeScheme)
			? (value as TokenThemeScheme)
			: fallback;
	}
}
