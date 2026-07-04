import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotThemePaletteColor } from '$stylist/theme/interface/slot/theme-palette-color';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeThemePalette extends ComputeIntersectAll<[HTMLAttributes<HTMLDivElement>]> {
	colors: SlotThemePaletteColor[];
	title?: string;
	showLabels?: boolean;
	showValues?: boolean;
	columns?: number;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	onValueInput?: (color: SlotThemePaletteColor) => void;
	onValueChange?: (color: SlotThemePaletteColor) => void;
}
