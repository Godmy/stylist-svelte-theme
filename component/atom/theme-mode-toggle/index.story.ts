import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Toggle between default, light and dark theme modes. */
export default {
	component: ThemeModeToggle,
	title: 'ThemeModeToggle',
	description:
		'A toggle for switching between default, light, and dark theme modes. Default mode uses the selected themeScheme.',
	args: { themeMode: 'default', themeScheme: 'minimal', showLabels: true, disabled: false },
	controls: {
		themeMode: {
			type: 'select',
			label: 'Theme Mode',
			description: 'Theme mode: the scheme default, light or dark.',
			options: TOKEN_THEME_MODE
		},
		themeScheme: {
			type: 'select',
			label: 'Theme Scheme',
			description: 'Color scheme of the theme.',
			options: TOKEN_THEME_SCHEME
		},
		showLabels: {
			type: 'boolean',
			label: 'Show Labels',
			description: 'Shows the mode name next to the icon.'
		},
		size: {
			type: 'select',
			label: 'Size',
			description: 'Size step; the button and icon follow it in em.',
			options: TOKEN_SIZE.slice(0, 6)
		},
		darkMode: {
			type: 'boolean',
			label: 'Dark Mode',
			description: 'Forces dark (true) or light (false) mode.'
		},
		checked: { type: 'boolean', label: 'Checked', description: 'Switch-style alias of darkMode.' },
		disabled: { type: 'boolean', label: 'Disabled', description: 'Disables interaction.' },
		class: { type: 'text', label: 'Class', description: 'Extra class on the root element.' }
	},
	presets: {
		Dark: { themeMode: 'dark' },
		'Icon only': { showLabels: false },
		Large: { size: 'xl' },
		Disabled: { disabled: true }
	}
} satisfies ContractStory<RecipeThemeModeToggle>;
