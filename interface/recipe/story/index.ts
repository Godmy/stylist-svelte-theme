import type { Snippet } from 'svelte';
import type { SlotStory } from '$stylist/theme/interface/slot/story';
export interface RecipeStory {
	controls?: SlotStory[];
	component?: unknown;
	id?: string;
	title?: string;
	category?: string;
	description?: string;
	tags?: string[];
	preview?: 'card' | 'fullscreen';
	children?: Snippet<[Record<string, unknown>]>;
	variants?: Snippet<[]>;
}
