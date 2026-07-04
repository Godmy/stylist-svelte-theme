import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContentList } from '$stylist/theme/interface/slot/content-list';

export interface RecipeThemeColorSwatch
	extends ComputeIntersectAll<[ContentList, HTMLAttributes<HTMLDivElement>]> {
	color?: string;
	size?: number;
}
