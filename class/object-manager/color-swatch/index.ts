import type { RecipeThemeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';

export class ObjectManagerColorSwatch {
	static resolveColor(props: RecipeThemeColorSwatch): string {
		return String(props.color ?? '#0ea5e9');
	}

	static resolveSize(props: RecipeThemeColorSwatch): number {
		return props.size ?? 32;
	}
}
