import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeContext } from '$stylist/theme/interface/contract/theme-context';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export interface ThemeContextRecipe extends RecordArchitectureMerge<[
	ProtoTheme,
	Omit<HTMLAttributes<HTMLDivElement>, 'children'>
]> {
	class?: string;
	children: Snippet<[ThemeContext | null]>;
}
