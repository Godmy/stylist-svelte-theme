import { TOKEN_DURATION } from '$stylist/theme/const/object/duration';

export type TokenDuration = (typeof TOKEN_DURATION)[keyof typeof TOKEN_DURATION];
