import { TOKEN_THEME_STORAGE_SCHEME } from '$stylist/theme/const/struct/theme-storage';
import { THEME_SCHEMES } from '$stylist/theme/const/struct/theme-schemes';
import type { StructThemeScheme } from '$stylist/theme/type/struct/theme-scheme';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export class ObjectManagerThemeSwitcher {
	static readonly storageKey = TOKEN_THEME_STORAGE_SCHEME;

	static resolveThemes(themes?: StructThemeScheme[]): StructThemeScheme[] {
		return themes && themes.length > 0 ? themes : THEME_SCHEMES;
	}

	static findTheme(themes: StructThemeScheme[], themeId: TokenThemeScheme): StructThemeScheme | undefined {
		return themes.find((item) => item.id === themeId);
	}

	static resolveCurrentScheme(
		currentScheme: TokenThemeScheme,
		themes?: StructThemeScheme[]
	): TokenThemeScheme {
		const resolvedThemes = ObjectManagerThemeSwitcher.resolveThemes(themes);
		return (
			ObjectManagerThemeSwitcher.findTheme(resolvedThemes, currentScheme)?.id ??
			resolvedThemes[0]?.id ??
			currentScheme
		);
	}
}



