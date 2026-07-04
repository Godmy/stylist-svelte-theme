import { ObjectManagerColorSwatch } from '$stylist/theme/class/object-manager/color-swatch';
import type { RecipeThemeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';

export function createColorSwatchState(props: RecipeThemeColorSwatch) {
	const color = $derived(ObjectManagerColorSwatch.resolveColor(props));
	const size = $derived(ObjectManagerColorSwatch.resolveSize(props));
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
