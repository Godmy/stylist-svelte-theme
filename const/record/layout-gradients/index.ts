import { GRADIENT_CUSTOM } from '$stylist/design-token/const/object/gradient-custom';
import { GRADIENT_LINEAR } from '$stylist/design-token/const/object/gradient-linear';
import { GRADIENT_RADIAL } from '$stylist/design-token/const/object/gradient-radial';

export const LAYOUT_GRADIENTS = {
	types: GRADIENT_CUSTOM,
	directional: GRADIENT_LINEAR,
	radial: GRADIENT_RADIAL
} as const;
