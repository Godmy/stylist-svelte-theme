import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
﻿import type { Snippet } from 'svelte';
import type { ContractThemeContext } from '$stylist/theme/interface/contract/theme-context';

export interface ThemeConsumerRecipe extends StructIntersectAll<[]> {
	children: Snippet<[ContractThemeContext | null]>;
}
