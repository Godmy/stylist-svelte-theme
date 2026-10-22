import ThemeContext from '$stylist/theme/component/molecule/theme-context/index.svelte';
import type { RecipeThemeContext } from '$stylist/theme/interface/recipe/theme-context';
import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Reads the theme context via a snippet; index.story.svelte wraps it in a ThemeProvider. */
export default {
	component: ThemeContext,
	title: 'ThemeContext',
	description: 'Composable molecule for reading theme context via snippets.',
	args: { themeMode: 'dark', themeScheme: 'ocean' },
	controls: {
		themeMode: { type: 'select', options: TOKEN_THEME_MODE },
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME }
	}
	// themeMode/themeScheme drive the wrapping ThemeProvider of the render.
} satisfies ContractStory<
	RecipeThemeContext & Pick<RecipeThemeProvider, 'themeMode' | 'themeScheme'>
>;
