import { TOKEN_THEME_SCHEME_STORAGE } from '$stylist/theme/const/value/theme-scheme-storage';
import { THEME_SCHEMES } from '$stylist/theme/const/record/theme-schemes';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ObjectManagerThemeSwitcher {
	static readonly storageKey = TOKEN_THEME_SCHEME_STORAGE;

	static resolveThemes(themes?: ThemeSchemeDefinition[]): ThemeSchemeDefinition[] {
		return themes && themes.length > 0 ? themes : THEME_SCHEMES;
	}

	static findTheme(themes: ThemeSchemeDefinition[], themeId: TokenThemeScheme): ThemeSchemeDefinition | undefined {
		return themes.find((item) => item.id === themeId);
	}

	static resolveCurrentScheme(
		currentScheme: TokenThemeScheme,
		themes?: ThemeSchemeDefinition[]
	): TokenThemeScheme {
		const resolvedThemes = ObjectManagerThemeSwitcher.resolveThemes(themes);
		return (
			ObjectManagerThemeSwitcher.findTheme(resolvedThemes, currentScheme)?.id ??
			resolvedThemes[0]?.id ??
			currentScheme
		);
	}
}



