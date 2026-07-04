import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorThemeMode } from '$stylist/theme/interface/behavior/theme-mode';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface RecipeThemeModeToggle
	extends ComputeIntersectAll<
		[
			BehaviorThemeMode,
			SlotClass,
			Partial<SlotThemeSettings>,
			Omit<HTMLAttributes<HTMLButtonElement>, 'class' | 'size' | 'disabled' | 'checked'>
		]
	> {
	disabled?: boolean;
	size?: TokenSize;
	checked?: boolean;
	darkMode?: boolean;
	showLabels?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
}
