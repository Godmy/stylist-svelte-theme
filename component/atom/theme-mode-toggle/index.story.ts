import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Toggle between default, light and dark theme modes. */
export default {
	component: ThemeModeToggle,
	title: 'ThemeModeToggle',
	description:
		'A toggle for switching between default, light, and dark theme modes. Default mode uses the selected themeScheme.',
	args: { themeMode: 'default', themeScheme: 'minimal', showLabels: true, disabled: false },
	controls: {
		themeMode: { type: 'select', options: TOKEN_THEME_MODE },
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME },
		showLabels: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	presets: { Dark: { themeMode: 'dark' }, Disabled: { disabled: true } }
} satisfies ContractStory<RecipeThemeModeToggle>;
