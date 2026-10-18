import ThemeSurface from './index.svelte';
import type { RecipeThemeSurface } from '$stylist/theme/interface/recipe/theme-surface';
import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_THEME_MODE } from '$stylist/theme/const/array/theme-mode';
import { TOKEN_THEME_SCHEME } from '$stylist/theme/const/array/theme-scheme';

/** Themed header/content/footer surface; index.story.svelte supplies the snippets. */
export default {
	component: ThemeSurface,
	title: 'ThemeSurface',
	description: 'Content-oriented molecule that renders themed header, content and footer snippets.',
	args: { themeMode: 'light', themeScheme: 'minimal' },
	controls: {
		themeMode: { type: 'select', options: TOKEN_THEME_MODE },
		themeScheme: { type: 'select', options: TOKEN_THEME_SCHEME }
	}
	// themeMode/themeScheme drive the wrapping ThemeProvider of the render.
} satisfies ContractStory<
	RecipeThemeSurface & Pick<RecipeThemeProvider, 'themeMode' | 'themeScheme'>
>;
