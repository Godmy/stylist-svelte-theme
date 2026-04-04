import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { ThemeContextValue } from '$stylist/theme/interface/contract/theme-context';

export interface ThemeContextRecipe extends RecordArchitectureMerge<[
	Omit<ThemeAttributes<HTMLDivElement>, 'children'>
]> {
	class?: string;
	children: Snippet<[ThemeContextValue | null]>;
}
