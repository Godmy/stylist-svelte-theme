import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { RecipeTheme } from '$stylist/theme/interface/recipe/theme';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeThemeSurface
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLElement>]> {
	class?: string;
	headerClass?: string;
	contentClass?: string;
	footerClass?: string;
	header?: Snippet<[RecipeTheme | null]>;
	content: Snippet<[RecipeTheme | null]>;
	footer?: Snippet<[RecipeTheme | null]>;
}
