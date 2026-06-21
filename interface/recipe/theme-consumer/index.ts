import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeTheme } from '$stylist/theme/interface/recipe/theme';
import type { SlotThemeChildren } from '$stylist/theme/interface/slot/theme-children';

export interface RecipeThemeConsumer 
	extends ComputeIntersectAll<
		[
			SlotThemeChildren<RecipeTheme>
		]
	> {}
