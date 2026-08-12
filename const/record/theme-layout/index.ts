import { TOKEN_BORDER_RADIUS } from '$stylist/theme/const/object/border-radius';
import { RECORD_ELEVATION } from '$stylist/theme/const/record/elevation';
import { TOKEN_OPACITY } from '$stylist/theme/const/object/opacity';
import { RECORD_SPACING } from '$stylist/theme/const/record/spacing';
import { TOKEN_Z_INDEX } from '$stylist/theme/const/object/z-index';
export const THEME_LAYOUT: {
	zIndex: typeof TOKEN_Z_INDEX;	
	opacity: typeof TOKEN_OPACITY;
	spacing: typeof RECORD_SPACING;
	boxShadow: Record<keyof typeof RECORD_ELEVATION, string>;	
	borderRadius: Record<keyof typeof TOKEN_BORDER_RADIUS, string>;
} = {
	opacity: TOKEN_OPACITY,
	spacing: RECORD_SPACING,
	borderRadius: TOKEN_BORDER_RADIUS,
	zIndex: TOKEN_Z_INDEX,
	boxShadow: RECORD_ELEVATION
};
