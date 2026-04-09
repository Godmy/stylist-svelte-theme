import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { ThemeColors } from '$stylist/theme/type/struct/theme-colors';
import type { ThemeDomainColors } from '$stylist/theme/type/struct/theme-domain-colors';
import type { StructThemeTypography } from '$stylist/typography/type/struct/theme-typography';

export type Theme = {
	mode: TokenThemeMode;
	colors: ThemeColors;
	typography: StructThemeTypography;
	domain?: ThemeDomainColors;
};
