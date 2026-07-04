import type { RecipeThemePalette } from '$stylist/theme/interface/recipe/theme-palette';

export class ObjectManagerThemePalette {
	static resolveColors(props: RecipeThemePalette) {
		return props.colors ?? [];
	}

	static resolveTitle(props: RecipeThemePalette): string {
		return props.title ?? 'Theme Palette';
	}

	static resolveShowLabels(props: RecipeThemePalette): boolean {
		return props.showLabels ?? true;
	}

	static resolveShowValues(props: RecipeThemePalette): boolean {
		return props.showValues ?? false;
	}

	static resolveColumns(props: RecipeThemePalette): number {
		return Math.max(1, Math.min(props.columns ?? 5, 6));
	}
}
