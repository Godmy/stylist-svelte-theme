import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { ThemeSwitcherRecipe } from '$stylist/theme/interface/recipe/theme-switcher';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import type { StructThemeScheme } from '$stylist/theme/type/struct/theme-scheme';

export interface ThemeSettingsContract {
	themeMode: TokenThemeMode;
	themeScheme: TokenThemeScheme;
	themes: readonly StructThemeScheme[];
	modeSection: {
		show: boolean;
		title: string;
		description: string;
		toggleProps: Partial<ThemeModeToggleRecipe>;
	};
	schemeSection: {
		show: boolean;
		title: string;
		description: string;
		switcherProps: Partial<ThemeSwitcherRecipe>;
	};
	onThemeModeChange?: (theme: TokenThemeMode) => void;
	onThemeSchemeChange?: (theme: TokenThemeScheme) => void;
}

export type ThemeSettingsContractInput = Partial<ThemeSettingsContract>;
