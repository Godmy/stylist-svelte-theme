import ThemeConsumer from '$stylist/theme/component/atom/theme-consumer/index.svelte';
import type { RecipeThemeConsumer } from '$stylist/theme/interface/recipe/theme-consumer';
import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Reads the theme context; index.story.svelte wraps it in a ThemeProvider. */
export default {
	component: ThemeConsumer,
	title: 'ThemeConsumer',
	description: 'Reads the current theme context exposed by the provider.',
	args: { themeMode: 'dark', themeScheme: 'minimal' },
	controls: {
		themeMode: { type: 'select', options: TOKEN_THEME_MODE },
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME }
	}
	// themeMode/themeScheme drive the wrapping ThemeProvider of the render.
} satisfies ContractStory<
	RecipeThemeConsumer & Pick<RecipeThemeProvider, 'themeMode' | 'themeScheme'>
>;
