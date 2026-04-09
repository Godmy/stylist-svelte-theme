import { THEME_SCHEMES } from '$stylist/theme/const/struct/theme-schemes';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export const RECORD_THEME_SCHEME: Record<TokenThemeScheme, ThemeSchemeDefinition> = THEME_SCHEMES.reduce(
	(result, scheme) => {
		result[scheme.id] = scheme;
		return result;
	},
	{} as Record<TokenThemeScheme, ThemeSchemeDefinition>
);



