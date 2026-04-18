import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import { getPreviewTheme } from '$stylist/theme/function/script/theme-switcher';

export function getSurfaceStyle(item: ThemeSchemeDefinition, themeMode: TokenThemeMode) {
	const previewTheme = getPreviewTheme(item, themeMode);
	return [
		`background:${previewTheme.colors.background.primary};`,
		`border-color:${previewTheme.colors.border.primary};`,
		`color:${previewTheme.colors.text.primary};`
	].join('');
}
