import ThemeProvider from '$stylist/theme/component/atom/theme-provider/index.svelte';
import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Provides theme mode and scheme; index.story.svelte shows a nested consumer. */
export default {
	component: ThemeProvider,
	title: 'ThemeProvider',
	description: 'Provides theme mode and scheme to nested consumers.',
	args: { themeMode: 'light', themeScheme: 'minimal' },
	controls: {
		themeMode: { type: 'select', options: TOKEN_THEME_MODE },
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME }
	}
} satisfies ContractStory<RecipeThemeProvider>;
