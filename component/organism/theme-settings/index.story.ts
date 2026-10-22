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
		themeMode: { type: 'select', options: TOKEN_THEME_MODE },
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME }
	}
} satisfies ContractStory<RecipeThemeSettings>;
