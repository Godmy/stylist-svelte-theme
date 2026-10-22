import ThemeSwitcher from '$stylist/theme/component/molecule/theme-switcher/index.svelte';
import type { RecipeThemeSwitcher } from '$stylist/theme/interface/recipe/theme-switcher';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Switcher between the UI color palettes (theme schemes). */
export default {
	component: ThemeSwitcher,
	title: 'ThemeSwitcher',
	description: 'Switch between multiple UI color palettes.',
	args: { themeScheme: 'minimal', showLabels: true, showHeader: true, compact: false },
	controls: {
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME },
		showLabels: { type: 'boolean' },
		showHeader: { type: 'boolean' },
		compact: { type: 'boolean' }
	},
	presets: { Compact: { compact: true, showLabels: false } }
} satisfies ContractStory<RecipeThemeSwitcher>;
