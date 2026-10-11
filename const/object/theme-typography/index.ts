import { TOKEN_FONT_FAMILY } from '$stylist/design-token/const/object/font-family';
import { TOKEN_FONT_SIZE } from '$stylist/design-token/const/object/font-size';
import { TOKEN_FONT_WEIGHT } from '$stylist/design-token/const/object/font-weight';
import { TOKEN_LETTER_SPACING } from '$stylist/design-token/const/object/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/design-token/const/object/line-height';

export const THEME_TYPOGRAPHY = {
	fontFamily: TOKEN_FONT_FAMILY.sans,
	fontSize: TOKEN_FONT_SIZE as Record<string, string>,
	fontWeight: TOKEN_FONT_WEIGHT as Record<string, string>,
	lineHeight: TOKEN_LINE_HEIGHT as Record<string, string>,
	letterSpacing: TOKEN_LETTER_SPACING as Record<string, string>
};
