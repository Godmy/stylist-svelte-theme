import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeToggleBaseProps as RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { BehaviorThemeMode } from '$stylist/theme/interface/behavior/theme-mode';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';

export interface RecipeThemeModeToggle
	extends ComputeIntersectAll<
		[
			BehaviorThemeMode,
			RecipeToggleBaseProps,
			Partial<SlotThemeSettings>,
			Omit<InteractionHTMLAttributes<HTMLButtonElement>, 'class' | 'size' | 'disabled' | 'checked'>
		]
	> {
	checked?: boolean;
	darkMode?: boolean;
	showLabels?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
}
