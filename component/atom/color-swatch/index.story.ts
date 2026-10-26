import ColorSwatch from '$stylist/theme/component/atom/color-swatch/index.svelte';
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
		color: { type: 'color', label: 'Color', description: 'Swatch color as any CSS color.' },
		size: {
			type: 'select',
			label: 'Size',
			description: 'Width and height of the swatch.',
			options: TOKEN_SIZE_REM
		},
		class: { type: 'text', label: 'Class', description: 'Extra class on the root element.' }
	},
	presets: {
		Large: { size: '4rem' },
		Accent: { color: '#f97316', size: '3rem' }
	}
} satisfies ContractStory<RecipeColorSwatch>;
