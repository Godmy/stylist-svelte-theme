import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { ThemeColors } from '$stylist/theme/type/object/theme-colors';
import type { StructThemeTypography } from '$stylist/typography/type/struct/theme-typography';

export type Theme = {
	mode: TokenThemeMode;
	colors: ThemeColors;
	typography: StructThemeTypography;
};
