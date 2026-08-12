import type { RecipeThemeColorPicker as IColorPickerProps } from '$stylist/theme/interface/recipe/color-picker';

export const createColorPickerState = (props: IColorPickerProps) => {
	let selectedColor = $state(props.value ?? 'var(--color-text-primary)');

	$effect(() => {
		selectedColor = props.value ?? 'var(--color-text-primary)';
	});

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		selectedColor = target.value;
		props.onValueInput?.(selectedColor, event);
		props.onValueChange?.(selectedColor, event);
		props.onInput?.(selectedColor, event);
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		selectedColor = target.value;
		props.onValueChange?.(selectedColor, event);
		props.onChange?.(selectedColor, event);
	}

	return {
		get selectedColor() {
			return selectedColor;
		},
		set selectedColor(value: string) {
			selectedColor = value;
		},
		get containerClass() {
			return `color-picker-container ${props.class ?? ''}`.trim();
		},
		get label() {
			return props.label ?? 'Color';
		},
		get inputClass() {
			return props.inputClass ?? '';
		},
		get pickerClass() {
			return props.pickerClass ?? '';
		},
		get helperText() {
			return props.helperText;
		},
		get error() {
			return props.error;
		},
		handleInput,
		handleChange
	};
};

export default createColorPickerState;
