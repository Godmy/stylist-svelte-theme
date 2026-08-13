import { ManagerColorSwatch } from '$stylist/theme/class/manager/color-swatch';
import type { RecipeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';

export function createColorSwatchState(props: RecipeColorSwatch) {
	const color = $derived(ManagerColorSwatch.resolveColor(props));
	const size = $derived(ManagerColorSwatch.resolveSize(props));
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(['c-color-swatch', className].filter(Boolean).join(' '));

	return {
		get color() {
			return color;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createColorSwatchState;
