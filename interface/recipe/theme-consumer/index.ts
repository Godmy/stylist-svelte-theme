import type { Snippet } from 'svelte';
import type { ThemeContext } from '$stylist/theme/interface/contract/theme-context';

export interface ThemeConsumerRecipe {
	children: Snippet<[ThemeContext | null]>;
}
