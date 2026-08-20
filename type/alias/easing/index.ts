import { TOKEN_EASING } from '$stylist/theme/const/object/easing';

export type TokenEasing = (typeof TOKEN_EASING)[keyof typeof TOKEN_EASING];
