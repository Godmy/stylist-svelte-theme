import type { HTMLAttributes } from 'svelte/elements';
import type { TokenThemeTone } from '$stylist/theme/type/enum/theme-tone';
import type { TokenThemeVariant } from '$stylist/theme/type/enum/theme-variant';

export type ThemeAttributes<T extends EventTarget = HTMLElement> = HTMLAttributes<T> & {
	'data-theme'?: string;
	'data-variant'?: TokenThemeVariant;
	'data-tone'?: TokenThemeTone;
	'data-state'?: string;
	'data-gradient'?: string;
};
