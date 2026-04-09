import type { HTMLAttributes } from 'svelte/elements';
import type { ProtoTheme } from '$stylist/theme/interface/proto/thema';

export type ThemeAttributes<T extends EventTarget = HTMLElement> = HTMLAttributes<T> & ProtoTheme;
