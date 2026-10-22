import ThemePalette from '$stylist/theme/component/organism/theme-palette/index.svelte';
import type { RecipeThemePalette } from '$stylist/theme/interface/recipe/theme-palette';
import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Color palette grid; index.story.svelte builds `colors` from a theme scheme. */
export default {
	component: ThemePalette,
	title: 'ThemePalette',
	description: 'ThemePalette component for selecting colors.',
	args: {
		scheme: 'minimal',
		mode: 'light',
		colorSource: 'semantic',
		title: 'Theme Palette',
		showLabels: true,
		showValues: false,
		columns: 4
	},
	controls: {
		scheme: { type: 'select', options: TOKEN_THEME_SCHEME, description: 'Theme scheme' },
		// light and dark: a scheme defines one theme per resolved mode.
		mode: { type: 'select', options: TOKEN_THEME_MODE.slice(1), description: 'Theme mode' },
		colorSource: {
			type: 'select',
			options: ['semantic', 'background', 'text', 'border', 'primary', 'secondary', 'neutral'],
			description: 'Theme color source'
		},
		title: { type: 'text', description: 'Title for the color palette' },
		showLabels: { type: 'boolean', description: 'Whether to show color labels' },
		showValues: { type: 'boolean', description: 'Whether to show color values' },
		columns: {
			type: 'select',
			options: [2, 3, 4, 5, 6],
			description: 'Number of columns to display'
		}
	},
	presets: {
		Dark: { mode: 'dark', showValues: true },
		'Background Tokens': {
			colorSource: 'background',
			title: 'Background Tokens',
			showValues: true
		},
		'Text Tokens': { colorSource: 'text', title: 'Text Tokens', showValues: true, columns: 3 }
	}
	// scheme/mode/colorSource only select which theme colors the render passes as `colors`.
} satisfies ContractStory<
	RecipeThemePalette & { scheme?: TokenThemeScheme; mode?: TokenThemeMode; colorSource?: string }
>;
