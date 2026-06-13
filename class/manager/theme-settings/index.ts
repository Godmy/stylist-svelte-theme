import { THEME_SCHEMES } from '$stylist/theme/const/record/theme-schemes';
import type { RecipeThemeSettings } from '$stylist/theme/interface/recipe/theme-settings';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ManagerThemeSettings {
	static createContract(input: Partial<RecipeThemeSettings> = {}): RecipeThemeSettings {
		return {
			themeMode: input.themeMode ?? 'default',
			themeScheme: input.themeScheme ?? 'minimal',
			themes: input.themes ?? THEME_SCHEMES,
			modeSection: {
				show: input.modeSection?.show ?? true,
				title: input.modeSection?.title ?? 'Mode',
				description: input.modeSection?.description ?? ''
			},
			schemeSection: {
				show: input.schemeSection?.show ?? true,
				title: input.schemeSection?.title ?? 'UI palette',
				description: input.schemeSection?.description ?? 'Minimal, Ocean, Forest, Sunset'
			},
			onThemeModeChange: input.onThemeModeChange,
			onThemeSchemeChange: input.onThemeSchemeChange
		};
	}

	static withThemeMode(
		contract: RecipeThemeSettings,
		themeMode: TokenThemeMode
	): RecipeThemeSettings {
		return {
			...contract,
			themeMode
		};
	}

	static withThemeScheme(
		contract: RecipeThemeSettings,
		themeScheme: TokenThemeScheme
	): RecipeThemeSettings {
		return {
			...contract,
			themeScheme
		};
	}
}
