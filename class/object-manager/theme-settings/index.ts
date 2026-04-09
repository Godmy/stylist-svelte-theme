import { THEME_SCHEMES } from '$stylist/theme/const/struct/theme-schemes';
import type { ThemeSettingsViewModel } from '$stylist/theme/interface/contract/theme-settings-view-model';
import type { ThemeSettingsInput } from '$stylist/theme/type/contract/theme-settings-input';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ObjectManagerThemeSettings {
	static createContract(input: ThemeSettingsInput = {}): ThemeSettingsViewModel {
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
				description:
					input.schemeSection?.description ?? 'Minimal, Ocean, Forest, Sunset'
			},
			onThemeModeChange: input.onThemeModeChange,
			onThemeSchemeChange: input.onThemeSchemeChange
		};
	}

	static withThemeMode(
		contract: ThemeSettingsViewModel,
		themeMode: TokenThemeMode
	): ThemeSettingsViewModel {
		return {
			...contract,
			themeMode
		};
	}

	static withThemeScheme(
		contract: ThemeSettingsViewModel,
		themeScheme: TokenThemeScheme
	): ThemeSettingsViewModel {
		return {
			...contract,
			themeScheme
		};
	}
}
