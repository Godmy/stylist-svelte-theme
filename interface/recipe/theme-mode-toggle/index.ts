import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ToggleBaseProps } from '$stylist/control/interface/component/toggles';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeModeToggleRecipe extends RecordArchitectureMerge<[
	ToggleBaseProps,
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
