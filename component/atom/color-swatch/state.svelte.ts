import type { RecipeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';

export default function createColorSwatchState(getProps: () => RecipeColorSwatch) {
	const props = $derived(getProps());
	const color = $derived(String(props.color ?? '#0ea5e9'));
	const size = $derived(props.size ?? '2rem');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(['c-color-swatch', className].filter(Boolean).join(' '));
	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, color: _color, size: _size, ...rest } = props;
			return rest;
		})()
	);

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get restProps() {
			return restProps;
		}
	};
}
