import { ManagerThemePalette } from '$stylist/theme/class/manager/theme-palette';
import type { RecipeThemePalette } from '$stylist/theme/interface/recipe/theme-palette';
import type { SlotThemePaletteColor } from '$stylist/theme/interface/slot/theme-palette-color';

export function createThemePaletteState(props: RecipeThemePalette) {
	const colors = $derived(ManagerThemePalette.resolveColors(props));
	const title = $derived(ManagerThemePalette.resolveTitle(props));
	const showLabels = $derived(ManagerThemePalette.resolveShowLabels(props));
	const showValues = $derived(ManagerThemePalette.resolveShowValues(props));
	const columns = $derived(ManagerThemePalette.resolveColumns(props));

	const containerClasses = $derived(['c-theme-palette', props.class].filter(Boolean).join(' '));
	const headerClasses = $derived(
		['c-theme-palette__header', props.headerClass].filter(Boolean).join(' ')
	);
	const gridClasses = $derived('c-theme-palette__grid');
	const gridStyle = $derived(`--palette-cols: ${columns}`);
	const itemClasses = $derived(
		['c-theme-palette__item', props.itemClass].filter(Boolean).join(' ')
	);
	const colorSwatchClasses = $derived('c-theme-palette__swatch');
	const labelClasses = $derived('c-theme-palette__label');
	const valueClasses = $derived('c-theme-palette__value');

	const restProps = $derived.by(() => {
		const {
			class: _class,
			headerClass: _headerClass,
			itemClass: _itemClass,
			colors: _colors,
			title: _title,
			showLabels: _showLabels,
			showValues: _showValues,
			columns: _columns,
			onValueInput: _onValueInput,
			onValueChange: _onValueChange,
			...rest
		} = props;
		return rest;
	});

	function handleColorClick(color: SlotThemePaletteColor) {
		props.onValueInput?.(color);
		props.onValueChange?.(color);
	}

	return {
		get colors() {
			return colors;
		},
		get title() {
			return title;
		},
		get showLabels() {
			return showLabels;
		},
		get showValues() {
			return showValues;
		},
		get columns() {
			return columns;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get gridStyle() {
			return gridStyle;
		},
		get itemClasses() {
			return itemClasses;
		},
		get colorSwatchClasses() {
			return colorSwatchClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get valueClasses() {
			return valueClasses;
		},
		get restProps() {
			return restProps;
		},
		handleColorClick
	};
}

export default createThemePaletteState;
