import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotThemeSettings } from '$stylist/theme/interface/slot/theme-settings';
import type { Theme } from '$stylist/theme/type/object/theme';
import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';
export interface RecipeTheme extends ComputeIntersectAll<[SlotThemeSettings]> {
	setMode?: (mode: TokenThemeMode) => void;
	setScheme?: (scheme: TokenThemeScheme) => void;
	getEffectiveTheme?: () => 'light' | 'dark';

	theme: Theme;
}
