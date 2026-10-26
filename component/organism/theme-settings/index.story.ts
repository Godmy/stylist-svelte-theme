import ThemeSettings from '$stylist/theme/component/organism/theme-settings/index.svelte';
import type { RecipeThemeSettings } from '$stylist/theme/interface/recipe/theme-settings';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Appearance settings: theme mode and scheme. Themes and sections default via the manager. */
export default {
	component: ThemeSettings,
	title: 'ThemeSettings',
	description:
		'A theme settings component for managing theme mode, scheme, and display preferences.',
	args: { themeMode: 'default', themeScheme: 'minimal' },
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
		modeSection: {
			type: 'json',
			label: 'Mode Section',
			example: { show: true, title: 'Mode', description: 'Light, dark or the scheme default' }
		},
		schemeSection: {
			type: 'json',
			label: 'Scheme Section',
			example: { show: true, title: 'UI palette', description: 'Minimal, Ocean, Forest, Sunset' }
		},
		modeToggleProps: {
			type: 'json',
			label: 'Mode Toggle Props',
			description: 'Props passed to the inner ThemeModeToggle.',
			example: { showLabels: true, size: 'lg' }
		},
		switcherProps: {
			type: 'json',
			label: 'Switcher Props',
			description: 'Props passed to the inner ThemeSwitcher.',
			example: { compact: true, showLabels: false }
		},
		class: { type: 'text', label: 'Class', description: 'Extra class on the root element.' }
		// themes: full light/dark Theme objects per scheme; the manager supplies the built-in ones.
	},
	presets: {
		Dark: { themeMode: 'dark' },
		'Mode only': { schemeSection: { show: false, title: 'UI palette', description: '' } },
		'Compact palette': { switcherProps: { compact: true, showLabels: false } }
	}
} satisfies ContractStory<RecipeThemeSettings>;
