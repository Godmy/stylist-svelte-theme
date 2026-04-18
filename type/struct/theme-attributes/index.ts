import type { HTMLAttributes } from 'svelte/elements';
import type { ThemeData } from '$stylist/theme/type/struct/theme-data';

export type ThemeAttributes<T extends EventTarget = HTMLElement> = HTMLAttributes<T> & ThemeData;
