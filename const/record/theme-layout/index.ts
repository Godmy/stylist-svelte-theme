import { RECORD_BORDER_RADIUS } from '$stylist/theme/const/record/border-radius';
import { RECORD_ELEVATION } from '$stylist/theme/const/record/elevation';
import { TOKEN_OPACITY } from '$stylist/theme/const/object/opacity';
import { RECORD_SPACING } from '$stylist/theme/const/record/spacing';
import { TOKEN_Z_INDEX } from '$stylist/theme/const/object/z-index';
import type { ThemeLayout } from '$stylist/theme/type/object/theme-layout';

export const THEME_LAYOUT: ThemeLayout = {
	opacity: TOKEN_OPACITY,
	spacing: RECORD_SPACING,
	borderRadius: RECORD_BORDER_RADIUS,
	zIndex: TOKEN_Z_INDEX,
	boxShadow: RECORD_ELEVATION
};
