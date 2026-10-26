import type { RecipeColorPicker } from '$stylist/theme/interface/recipe/color-picker';

export const createColorPickerState = (getProps: () => RecipeColorPicker) => {
	const props = $derived(getProps());
	let selectedColor = $derived(props.value ?? 'var(--color-text-primary)');

	// Native input attributes only: own props, callbacks and the class hooks stay with the picker.
	const restProps = $derived.by(() => {
		const {
			value: _value,
			class: _class,
			inputClass: _inputClass,
			pickerClass: _pickerClass,
			label: _label,
			helperText: _helperText,
			error: _error,
			onValueInput: _onValueInput,
			onValueChange: _onValueChange,
			onInput: _onInput,
			onChange: _onChange,
			...rest
		} = props;
		return rest;
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
		get restProps() {
			return restProps;
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
