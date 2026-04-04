import type { Snippet } from 'svelte';
import type { ThemeContextValue } from '$stylist/theme/interface/contract/theme-context';

export interface ThemeConsumerRecipe {
	children: Snippet<[ThemeContextValue | null]>;
}
