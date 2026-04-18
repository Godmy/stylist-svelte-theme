import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { RecipeToggleBaseProps as RecipeToggleBaseProps } from '$stylist/control/interface/recipe/toggle-base-props';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeModeToggleRecipe extends StructIntersectAll<[
	RecipeToggleBaseProps,
	Omit<InteractionHTMLAttributes<HTMLButtonElement>, 'class' | 'size' | 'disabled' | 'checked'>
]> {
	checked?: boolean;
	darkMode?: boolean;
	currentTheme?: TokenThemeMode;
	defaultScheme?: TokenThemeScheme;
	showLabels?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
	onThemeChange?: (theme: TokenThemeMode) => void;
}
