import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeToggleBaseProps as RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';
import type { BehaviorThemeMode } from '$stylist/theme/interface/behavior/theme-mode';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';

export interface RecipeThemeModeToggle
	extends ComputeIntersectAll<
		[
			BehaviorThemeMode,
			RecipeToggleBaseProps,
			Partial<SlotThemeSettings>,
			Omit<HTMLAttributes<HTMLButtonElement>, 'class' | 'size' | 'disabled' | 'checked'> & SlotInteraction
		]
	> {
	checked?: boolean;
	darkMode?: boolean;
	showLabels?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
}
