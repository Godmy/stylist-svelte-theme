import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { ContentList } from '$stylist/theme/interface/slot/content-list';
import type { TokenSizeRem } from '$stylist/theme/type/alias/size-rem';
export interface RecipeColorSwatch extends ComputeIntersectAll<
	[ContentList, HTMLAttributes<HTMLDivElement>]
> {
	color?: string;
	size?: TokenSizeRem;
}
