import { TOKEN_ANIMATION } from '$stylist/theme/const/object/animation';

export type TokenAnimation = (typeof TOKEN_ANIMATION)[keyof typeof TOKEN_ANIMATION];
