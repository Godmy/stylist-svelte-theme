import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeProviderRecipe extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	initialMode?: TokenThemeMode;
	initialScheme?: TokenThemeScheme;
	class?: string;
	children: Snippet;
}

