import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { ThemeColors } from '$stylist/theme/type/object/theme-colors';
import type { ObjectThemeTypography } from '$stylist/theme/type/object/typography';

export type Theme = {
	mode: TokenThemeMode;
	colors: ThemeColors;
	typography: ObjectThemeTypography;
};
