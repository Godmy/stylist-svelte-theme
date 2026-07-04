import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export interface BehaviorColorToken {
	variant?: string;
	tone?: TokenColorTone;
	gradient?: string;
	theme?: string;
}
