import { THEME_MODE_DARK } from '$stylist/theme/const/struct/theme-mode-dark';
import { THEME_MODE_DEFAULT } from '$stylist/theme/const/struct/theme-mode-default';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/struct/theme-mode-light';
import type { Theme } from '$stylist/theme/type/struct/theme/theme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';

export const RECORD_THEME_MODE: Record<TokenThemeMode, Theme> = {
	default: THEME_MODE_DEFAULT,
	light: THEME_MODE_LIGHT,
	dark: THEME_MODE_DARK
};
