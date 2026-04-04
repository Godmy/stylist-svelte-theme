import { THEME_SCHEMES } from '$stylist/theme/const/struct/theme-schemes';
import type { StructThemeScheme } from '$stylist/theme/type/struct/theme-scheme';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export const RECORD_THEME_SCHEME: Record<TokenThemeScheme, StructThemeScheme> = THEME_SCHEMES.reduce(
	(result, scheme) => {
		result[scheme.id] = scheme;
		return result;
	},
	{} as Record<TokenThemeScheme, StructThemeScheme>
);



