import type { TokenStoryViewport } from '$stylist/theme/type/alias/story-viewport';
/** Viewport and isolation settings stored in the story preview context. */
export interface SlotStoryViewport {
	readonly viewport: TokenStoryViewport;
	readonly fullscreen?: boolean;
	readonly isolated?: boolean;
}
