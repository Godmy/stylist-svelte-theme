import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';

export interface RecipeThemeProvider
	extends ComputeIntersectAll<
		[
			SlotChildren,
			SlotClass,
			SlotTheme,
			Partial<SlotThemeSettings>,
			Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'class'>
		]
	> {}
