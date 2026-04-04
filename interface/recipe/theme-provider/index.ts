import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeProviderRecipe extends RecordArchitectureMerge<[
	ThemeAttributes<HTMLDivElement>
]> {
	initialMode?: TokenThemeMode;
	initialScheme?: TokenThemeScheme;
	class?: string;
	children: Snippet;
}
