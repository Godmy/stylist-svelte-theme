import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotThemeChildren } from '$stylist/theme/interface/slot/theme-children';
import type { RecipeTheme } from '$stylist/theme/interface/recipe/theme';

export interface RecipeThemeContext
	extends ComputeIntersectAll<
		[
			SlotTheme,
			SlotClass,
			SlotThemeChildren<RecipeTheme>,
			Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'class'>
		]
	> {}
