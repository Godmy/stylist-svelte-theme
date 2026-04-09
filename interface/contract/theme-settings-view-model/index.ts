import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';

export interface ThemeSettingsViewModel {
	themeMode: TokenThemeMode;
	themeScheme: TokenThemeScheme;
	themes: readonly ThemeSchemeDefinition[];
	modeSection: {
		show: boolean;
		title: string;
		description: string;
	};
	schemeSection: {
		show: boolean;
		title: string;
		description: string;
	};
	onThemeModeChange?: (theme: TokenThemeMode) => void;
	onThemeSchemeChange?: (theme: TokenThemeScheme) => void;
}
