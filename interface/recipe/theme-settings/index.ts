import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ContractThemeSettingsViewModel } from '$stylist/theme/interface/contract/theme-settings-view-model';
import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { ThemeSwitcherRecipe } from '$stylist/theme/interface/recipe/theme-switcher';

export interface ThemeSettingsRecipe extends StructIntersectAll<[
	InteractionHTMLAttributes<HTMLFormElement>
]> {
	contract: ContractThemeSettingsViewModel;
	modeToggleProps?: Partial<ThemeModeToggleRecipe>;
	switcherProps?: Partial<ThemeSwitcherRecipe>;
	class?: string;
}

