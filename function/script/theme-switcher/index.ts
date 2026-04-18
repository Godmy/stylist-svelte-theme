import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';

export function getPreviewTheme(item: ThemeSchemeDefinition, themeMode: TokenThemeMode) {
	return themeMode === 'dark' ? item.dark : item.light;
}
