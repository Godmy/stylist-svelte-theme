import ThemeSurface from '$stylist/theme/component/molecule/theme-surface/index.svelte';
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
		class: { type: 'text', label: 'Class', description: 'Extra class on the root element.' },
		headerClass: { type: 'text', label: 'Header Class', description: 'Extra class on the header.' },
		contentClass: {
			type: 'text',
			label: 'Content Class',
			description: 'Extra class on the content area.'
		},
		footerClass: { type: 'text', label: 'Footer Class', description: 'Extra class on the footer.' }
	},
	presets: {
		Dark: { themeMode: 'dark' },
		Ocean: { themeScheme: 'ocean' }
	}
	// themeMode/themeScheme drive the wrapping ThemeProvider of the render.
} satisfies ContractStory<
	RecipeThemeSurface & Pick<RecipeThemeProvider, 'themeMode' | 'themeScheme'>
>;
