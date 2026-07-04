import type { TOKEN_OPACITY } from '$stylist/theme/const/object/opacity';
import type { RECORD_BORDER_RADIUS } from '$stylist/theme/const/record/border-radius';
import type { RECORD_ELEVATION } from '$stylist/theme/const/record/elevation';
import type { RECORD_SPACING } from '$stylist/theme/const/record/spacing';
import type { TOKEN_Z_INDEX } from '$stylist/theme/const/object/z-index';

export type ThemeLayout = {
	opacity: typeof TOKEN_OPACITY;
	spacing: typeof RECORD_SPACING;
	borderRadius: Record<keyof typeof RECORD_BORDER_RADIUS, string>;
	zIndex: typeof TOKEN_Z_INDEX;
	boxShadow: Record<keyof typeof RECORD_ELEVATION, string>;
};
