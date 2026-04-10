import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';

export function getPreviewTheme(item: ThemeSchemeDefinition, themeMode: TokenThemeMode) {
	return themeMode === 'dark' ? item.dark : item.light;
}

export function getSurfaceStyle(item: ThemeSchemeDefinition, themeMode: TokenThemeMode) {
	const previewTheme = getPreviewTheme(item, themeMode);
	return [
		`background:${previewTheme.colors.background.primary};`,
		`border-color:${previewTheme.colors.border.primary};`,
		`color:${previewTheme.colors.text.primary};`
	].join('');
}

export function getSwatchStyle(color?: string) {
	return `background:${color ?? 'transparent'};`;
}
