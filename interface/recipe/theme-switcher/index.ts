import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/contract/theme-scheme-definition';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeSwitcherRecipe extends RecordArchitectureMerge<[
	Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>
]> {
	currentScheme?: TokenThemeScheme;
	themeMode?: TokenThemeMode;
	class?: string;
	compact?: boolean;
	showHeader?: boolean;
	showLabels?: boolean;
	themes?: ThemeSchemeDefinition[];
	onSchemeChange?: (theme: TokenThemeScheme) => void;
}
