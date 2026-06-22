import { TOKEN_THEME_MODE_STORAGE } from '$stylist/theme/const/value/theme-mode-storage';
import type { RecipeTheme } from '$stylist/theme/interface/recipe/theme';
import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ManagerThemeModeToggle {
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

	static getIconName(theme: TokenThemeMode): string {
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

	static resolveDefaultScheme(
		props: RecipeThemeModeToggle,
		themeContext?: RecipeTheme
	): TokenThemeScheme | undefined {
		return props.themeScheme ?? themeContext?.themeScheme;
	}

	static getButtonRestProps(props: RecipeThemeModeToggle) {
		const {
			class: _class,
			disabled: _disabled,
			size: _size,
			checked: _checked,
			darkMode: _darkMode,
			onToggle: _onToggle,
			themeMode: _themeMode,
			showLabels: _showLabels,
			onThemeModeChange: _onThemeModeChange,
			themeScheme: _themeScheme,
			...rest
		} = props;
		return rest;
	}
}
