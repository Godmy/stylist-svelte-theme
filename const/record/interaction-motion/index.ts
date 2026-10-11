import { TOKEN_EASING } from '$stylist/design-token/const/object/easing';
import { TOKEN_ANIMATION } from '$stylist/design-token/const/object/animation';
import { TOKEN_DURATION } from '$stylist/design-token/const/object/duration';
import { TOKEN_TRANSITION } from '$stylist/design-token/const/record/transition';

export const INTERACTION_MOTION = {
	duration: TOKEN_DURATION,
	easing: TOKEN_EASING,
	transitions: TOKEN_TRANSITION,
	animations: TOKEN_ANIMATION
} as const;
