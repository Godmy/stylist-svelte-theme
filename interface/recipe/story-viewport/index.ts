import type { TokenStoryViewport } from '$stylist/theme/type/alias/story-viewport';
export interface RecipeStoryViewport {
	readonly viewport: TokenStoryViewport;
	readonly fullscreen?: boolean;
	readonly isolated?: boolean;
}
