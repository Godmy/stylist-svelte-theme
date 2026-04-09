import type { ThemeGraphColors } from '$stylist/canvas/type/struct/theme-graph-colors';
import type { ThemeSceneColors } from '$stylist/science/type/struct/theme-scene-colors';

export type ThemeDomainColors = {
	scene?: ThemeSceneColors;
	graph?: ThemeGraphColors;
};
