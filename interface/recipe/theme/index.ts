import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorTheme } from '$stylist/theme/interface/behavior/theme';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';
import type { Theme } from '$stylist/theme/type/object/theme';

export interface RecipeTheme extends ComputeIntersectAll<[SlotThemeSettings, BehaviorTheme]> {
	theme: Theme;
}
