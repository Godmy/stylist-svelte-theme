import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorThemeMode } from '$stylist/theme/interface/behavior/theme-mode';
import type { BehaviorThemeScheme } from '$stylist/theme/interface/behavior/theme-scheme';
import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { RecipeThemeSwitcher } from '$stylist/theme/interface/recipe/theme-switcher';
import type { SlotClass } from '$stylist/theme/interface/slot/class';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';

export interface RecipeThemeSettings
	extends ComputeIntersectAll<
		[
			SlotClass,
			SlotThemeSettings,
			BehaviorThemeMode,
			BehaviorThemeScheme,
			Omit<HTMLAttributes<HTMLFormElement>, 'class'> & SlotInteraction
		]
	> {
	themes: readonly ThemeSchemeDefinition[];
	modeSection: {
		show: boolean;
		title: string;
		description: string;
	};
	schemeSection: {
		show: boolean;
		title: string;
		description: string;
	};
	modeToggleProps?: Partial<RecipeThemeModeToggle>;
	switcherProps?: Partial<RecipeThemeSwitcher>;
}
