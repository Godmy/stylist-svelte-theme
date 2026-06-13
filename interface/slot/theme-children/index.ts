import type { Snippet } from 'svelte';

export interface SlotThemeChildren<TTheme = unknown> {
	children: Snippet<[TTheme | null]>;
}
