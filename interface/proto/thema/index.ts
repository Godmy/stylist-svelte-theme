import type { TokenThemeTone } from '$stylist/theme/type/enum/theme-tone';
import type { TokenThemeVariant } from '$stylist/theme/type/enum/theme-variant';

export interface ProtoTheme {
	'data-theme'?: string;
	'data-variant'?: TokenThemeVariant;
	'data-tone'?: TokenThemeTone;
	'data-state'?: string;
	'data-gradient'?: string;
}
