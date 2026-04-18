import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractThemeContext } from '$stylist/theme/interface/contract/theme-context';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface ThemeContextRecipe extends StructIntersectAll<[
	SlotTheme,
	Omit<HTMLAttributes<HTMLDivElement>, 'children'>
]> {
	class?: string;
	children: Snippet<[ContractThemeContext | null]>;
}

