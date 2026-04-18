import { TOKEN_THEME_MODE_STORAGE } from '$stylist/theme/const/value/theme-mode-storage';
import type { TokenThemeIcon } from '$stylist/theme/type/enum/icon';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';

export class ObjectManagerThemeModeToggle {
	static readonly modes: TokenThemeMode[] = ['default', 'light', 'dark'];
	static readonly storageKey = TOKEN_THEME_MODE_STORAGE;

	static resolveTheme(currentScheme?: TokenThemeMode, darkMode?: boolean): TokenThemeMode {
		if (currentScheme) return currentScheme;
		if (typeof darkMode === 'boolean') return darkMode ? 'dark' : 'light';
		return 'default';
	}

	static getNextTheme(
		theme: TokenThemeMode,
		effectiveTheme: 'light' | 'dark' = 'light'
	): TokenThemeMode {
		if (theme === 'default') {
			return effectiveTheme === 'dark' ? 'light' : 'dark';
		}

		return theme === 'dark' ? 'light' : 'dark';
	}

	static getIconName(theme: TokenThemeMode): TokenThemeIcon | 'sparkles' {
		if (theme === 'default') return 'sparkles';
		if (theme === 'light') return 'light-mode';
		return 'dark-mode';
	}

	static getLabel(theme: TokenThemeMode): string {
		if (theme === 'default') return 'Default';
		if (theme === 'light') return 'Light';
		return 'Dark';
	}

	static getAriaLabel(label: string): string {
		return `Theme mode: ${label}. Click to switch`;
	}
}
