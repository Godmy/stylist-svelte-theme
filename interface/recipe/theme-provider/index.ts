import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

export interface ThemeProviderRecipe extends RecordArchitectureMerge<[ProtoTheme, HTMLAttributes<HTMLDivElement>]> {
	initialMode?: TokenThemeMode;
	initialScheme?: TokenThemeScheme;
	class?: string;
	children: Snippet;
}
