import type { RecipeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';

export class ManagerColorSwatch {
	static resolveColor(props: RecipeColorSwatch): string {
		return String(props.color ?? '#0ea5e9');
	}

	static resolveSize(props: RecipeColorSwatch): number {
		return props.size ?? 32;
	}
}
