import { GRADIENT_CUSTOM } from '$stylist/theme/const/object/gradient-custom';
import { GRADIENT_LINEAR } from '$stylist/theme/const/object/gradient-linear';
import { GRADIENT_RADIAL } from '$stylist/theme/const/object/gradient-radial';

export const LAYOUT_GRADIENTS = {
	types: GRADIENT_CUSTOM,
	directional: GRADIENT_LINEAR,
	radial: GRADIENT_RADIAL
} as const;
