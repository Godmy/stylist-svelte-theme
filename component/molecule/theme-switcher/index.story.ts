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
		themeScheme: {
			type: 'select',
			label: 'Theme Scheme',
			description: 'Color scheme of the theme.',
			options: TOKEN_THEME_SCHEME
		},
		showLabels: {
			type: 'boolean',
			label: 'Show Labels',
			description: 'Shows the scheme descriptions.'
		},
		showHeader: {
			type: 'boolean',
			label: 'Show Header',
			description: 'Shows the switcher heading.'
		},
		compact: {
			type: 'boolean',
			label: 'Compact',
			description: 'Dense list without previews and descriptions.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra class on the root element.' }
		// themes: full light/dark Theme objects per scheme, too large to edit as JSON; the switcher
		// falls back to every built-in scheme.
	},
	presets: {
		Compact: { compact: true, showLabels: false },
		'No header': { showHeader: false },
		Dark: { themeMode: 'dark' }
	}
} satisfies ContractStory<RecipeThemeSwitcher>;
