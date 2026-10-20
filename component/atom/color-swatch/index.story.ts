import ColorSwatch from './index.svelte';
import type { RecipeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE_REM } from '$stylist/design-token/const/array/size-rem';

/** Color swatch with a customizable size. */
export default {
	component: ColorSwatch,
	title: 'ColorSwatch',
	description: 'A component to display a color swatch with customizable size',
	args: { color: '#0ea5e9', size: '2rem' },
	controls: {
		color: { type: 'text' },
		size: { type: 'select', options: TOKEN_SIZE_REM }
	}
} satisfies ContractStory<RecipeColorSwatch>;
