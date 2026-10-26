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
		value: { type: 'text', label: 'Value', description: 'Selected color value' },
		label: { type: 'text', description: 'Label for the color picker' },
		helperText: {
			type: 'text',
			label: 'Helper Text',
			description: 'Helper text for the color picker'
		},
		error: { type: 'text', label: 'Error', description: 'Error message under the picker' },
		class: { type: 'text', label: 'Class', description: 'Class of the picker container' },
		inputClass: { type: 'text', label: 'Input Class', description: 'Class of both inputs' },
		pickerClass: {
			type: 'text',
			label: 'Picker Class',
			description: 'Class of the swatch around the native input'
		}
	},
	presets: {
		Error: { error: 'Pick a color with enough contrast' },
		'No helper': { helperText: '' },
		Accent: { value: '#f97316', label: 'Accent color' }
	}
} satisfies ContractStory<RecipeColorPicker>;
