import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { BehaviorThemeScheme } from '$stylist/theme/interface/behavior/theme-scheme';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';

export interface RecipeThemeSwitcher
	extends ComputeIntersectAll<
		[
			BehaviorThemeScheme,
			SlotClass,
			Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>,
			Partial<SlotThemeSettings>
		]
	> {
	compact?: boolean;
	showHeader?: boolean;
	showLabels?: boolean;
	themes?: ThemeSchemeDefinition[];
}
