import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorThemeScheme } from '$stylist/theme/interface/behavior/theme-scheme';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/struct/theme-scheme-definition';

export interface RecipeThemeSwitcher
	extends ComputeIntersectAll<
		[
			BehaviorThemeScheme,
			SlotClass,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			Partial<SlotThemeSettings>
		]
	> {
	compact?: boolean;
	showHeader?: boolean;
	showLabels?: boolean;
	themes?: ThemeSchemeDefinition[];
}
