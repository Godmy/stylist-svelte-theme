import type { Snippet } from 'svelte';
import type { SlotStory } from '$stylist/theme/interface/slot/story';

export interface RecipeStory {
	controls?: SlotStory[];
	component?: any;
	id?: string;
	title?: string;
	category?: string;
	description?: string;
	tags?: string[];
	children?: Snippet<[Record<string, unknown>]>;
	variants?: Snippet<[]>;
}
