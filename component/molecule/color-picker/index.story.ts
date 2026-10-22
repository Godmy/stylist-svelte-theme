import ColorPicker from '$stylist/theme/component/molecule/color-picker/index.svelte';
import type { RecipeColorPicker } from '$stylist/theme/interface/recipe/color-picker';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Color picker: native color input, hex text field, label and helper text. */
export default {
	component: ColorPicker,
	title: 'ColorPicker',
	description: 'Interactive color picker with customizable options',
	args: { value: '#3b82f6', label: 'Select a color', helperText: 'Choose your preferred color' },
	controls: {
		value: { type: 'text', description: 'Selected color value' },
		label: { type: 'text', description: 'Label for the color picker' },
		helperText: { type: 'text', description: 'Helper text for the color picker' },
		error: { type: 'text', description: 'Error message under the picker' }
	},
	presets: { Error: { error: 'Pick a color with enough contrast' } }
} satisfies ContractStory<RecipeColorPicker>;
