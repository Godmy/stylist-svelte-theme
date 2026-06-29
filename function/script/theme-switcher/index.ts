import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';
import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';

export function getPreviewTheme(item: ThemeSchemeDefinition, themeMode: TokenThemeMode) {
	return themeMode === 'dark' ? item.dark : item.light;
}
