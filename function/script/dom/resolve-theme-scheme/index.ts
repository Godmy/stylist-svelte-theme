import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/enum/theme-scheme';

export function resolveThemeScheme(
	target: HTMLElement,
	defaultScheme?: TokenThemeScheme
): TokenThemeScheme | undefined {
	if (defaultScheme) return defaultScheme;

	const rawScheme = target.getAttribute('data-scheme');
	if (!rawScheme) return undefined;

	return TOKEN_THEME_SCHEME.includes(rawScheme as TokenThemeScheme)
		? (rawScheme as TokenThemeScheme)
		: undefined;
}
