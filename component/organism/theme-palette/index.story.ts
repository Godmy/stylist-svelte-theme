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
		scheme: {
			type: 'select',
			label: 'Scheme',
			options: TOKEN_THEME_SCHEME,
			description: 'Theme scheme'
		},
		// light and dark: a scheme defines one theme per resolved mode.
		mode: {
			type: 'select',
			label: 'Mode',
			options: TOKEN_THEME_MODE.slice(1),
			description: 'Theme mode'
		},
		colorSource: {
			type: 'select',
			label: 'Color Source',
			options: ['semantic', 'background', 'text', 'border', 'primary', 'secondary', 'neutral'],
			description: 'Theme color source'
		},
		title: { type: 'text', label: 'Title', description: 'Title for the color palette' },
		showLabels: {
			type: 'boolean',
			label: 'Show Labels',
			description: 'Whether to show color labels'
		},
		showValues: {
			type: 'boolean',
			label: 'Show Values',
			description: 'Whether to show color values'
		},
		columns: {
			type: 'select',
			label: 'Columns',
			options: [2, 3, 4, 5, 6],
			description: 'Number of columns to display'
		},
		class: { type: 'text', label: 'Class', description: 'Class of the palette root' },
		itemClass: { type: 'text', label: 'Item Class', description: 'Class of every color item' },
		headerClass: { type: 'text', label: 'Header Class', description: 'Class of the palette header' }
		// colors: built from scheme, mode and colorSource by index.story.svelte.
	},
	presets: {
		'????????? ???????': { scheme: 'spanish', mode: 'light', title: '????????? ???????', showValues: true },
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
