import { THEME_SCHEMES } from '$stylist/theme/const/struct/theme-schemes';
import type { ThemeSettingsContract, ThemeSettingsContractInput } from '$stylist/theme/interface/contract/theme-settings';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ObjectManagerThemeSettings {
	static createContract(input: ThemeSettingsContractInput = {}): ThemeSettingsContract {
		return {
			themeMode: input.themeMode ?? 'default',
			themeScheme: input.themeScheme ?? 'minimal',
			themes: input.themes ?? THEME_SCHEMES,
			modeSection: {
				show: input.modeSection?.show ?? true,
				title: input.modeSection?.title ?? 'Mode',
				description: input.modeSection?.description ?? '',
				toggleProps: input.modeSection?.toggleProps ?? {}
			},
			schemeSection: {
				show: input.schemeSection?.show ?? true,
				title: input.schemeSection?.title ?? 'UI palette',
				description:
					input.schemeSection?.description ?? 'Minimal, Ocean, Forest, Sunset',
				switcherProps: {
					compact: true,
					showHeader: false,
					showLabels: false,
					...(input.schemeSection?.switcherProps ?? {})
				}
			},
			onThemeModeChange: input.onThemeModeChange,
			onThemeSchemeChange: input.onThemeSchemeChange
		};
	}

	static withThemeMode(
		contract: ThemeSettingsContract,
		themeMode: TokenThemeMode
	): ThemeSettingsContract {
		return {
			...contract,
			themeMode
		};
	}

	static withThemeScheme(
		contract: ThemeSettingsContract,
		themeScheme: TokenThemeScheme
	): ThemeSettingsContract {
		return {
			...contract,
			themeScheme
		};
	}
}
