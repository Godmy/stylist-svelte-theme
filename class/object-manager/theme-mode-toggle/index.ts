import { TOKEN_THEME_MODE_STORAGE } from '$stylist/theme/const/map/theme-mode';
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

	static getNextTheme(theme: TokenThemeMode): TokenThemeMode {
		const currentIndex = ObjectManagerThemeModeToggle.modes.indexOf(theme);
		const nextIndex = (currentIndex + 1) % ObjectManagerThemeModeToggle.modes.length;
		return ObjectManagerThemeModeToggle.modes[nextIndex];
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
