import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ThemeSettingsViewModel } from '$stylist/theme/interface/contract/theme-settings-view-model';
import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import type { ThemeSwitcherRecipe } from '$stylist/theme/interface/recipe/theme-switcher';

export interface ThemeSettingsRecipe extends RecordArchitectureMerge<[
	InteractionHTMLAttributes<HTMLFormElement>
]> {
	contract: ThemeSettingsViewModel;
	modeToggleProps?: Partial<ThemeModeToggleRecipe>;
	switcherProps?: Partial<ThemeSwitcherRecipe>;
	class?: string;
}
