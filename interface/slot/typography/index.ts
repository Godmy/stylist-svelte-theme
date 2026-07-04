import type { TokenLineHeight } from '$stylist/theme/type/alias/line-height';
import type { TokenLetterSpacing } from '$stylist/theme/type/alias/letter-spacing';
import type { TokenFontFamily } from '$stylist/theme/type/alias/font-family';
import type { TokenFontSize } from '$stylist/theme/type/alias/font-size';
import type { TokenFontWeight } from '$stylist/theme/type/alias/font-weight';

/** Typography token settings: font, size, weight, spacing, and alignment. */
export interface SlotTypography {
	/** Font size token. */
	fontSize?: TokenFontSize;
	/** Font weight token. */
	fontWeight?: TokenFontWeight;
	/** Font family token. */
	fontFamily?: TokenFontFamily | string;
	/** Line height token. */
	lineHeight?: TokenLineHeight;
	/** Letter spacing token. */
	letterSpacing?: TokenLetterSpacing;
	/** Text transform token. */
	textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
	/** Text alignment token. */
	textAlign?: 'left' | 'center' | 'right' | 'justify';
	/** Limit text to a number of lines. */
	lineClamp?: number;
}
