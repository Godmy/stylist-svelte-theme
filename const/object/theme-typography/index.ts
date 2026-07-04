import { TOKEN_FONT_FAMILY } from '$stylist/theme/const/object/font-family';
import { RECORD_FONT_SIZE } from '$stylist/theme/const/object/font-size';
import { RECORD_FONT_WEIGHT } from '$stylist/theme/const/object/font-weight';
import { TOKEN_LETTER_SPACING } from '$stylist/theme/const/object/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/theme/const/object/line-height';
import type { ObjectThemeTypography } from '$stylist/theme/type/object/typography';

export const THEME_TYPOGRAPHY: ObjectThemeTypography = {
	fontFamily: TOKEN_FONT_FAMILY.sans,
	fontSize: RECORD_FONT_SIZE as Record<string, string>,
	fontWeight: RECORD_FONT_WEIGHT as Record<string, string>,
	lineHeight: TOKEN_LINE_HEIGHT as Record<string, string>,
	letterSpacing: TOKEN_LETTER_SPACING as Record<string, string>
};
