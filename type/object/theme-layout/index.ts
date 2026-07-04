import type { RecordBorderRadius } from '$stylist/theme/type/record/border-radius';
import type { RecordElevation } from '$stylist/theme/type/record/elevation';
import type { TOKEN_OPACITY } from '$stylist/theme/const/object/opacity';
import type { RecordSpacing } from '$stylist/theme/type/record/spacing';
import type { RecordZIndex } from '$stylist/theme/type/record/z-index';

export type ThemeLayout = {
	opacity: typeof TOKEN_OPACITY;
	spacing: RecordSpacing;
	borderRadius: RecordBorderRadius;
	zIndex: RecordZIndex;
	boxShadow: RecordElevation;
};
