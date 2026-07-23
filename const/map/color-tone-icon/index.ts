import { TOKEN_ICON_REGISTRY } from '$stylist/svg/const/record/icon-registry';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export const TOKEN_COLOR_TONE_ICON = {
	default: 'color-tone-default',
	neutral: 'color-tone-neutral',
	primary: 'color-tone-primary',
	secondary: 'color-tone-secondary',
	tertiary: 'color-tone-tertiary',
	success: 'color-tone-success',
	info: 'color-tone-info',
	warning: 'color-tone-warning',
	danger: 'color-tone-danger',
	error: 'color-tone-error'
} satisfies Record<TokenColorTone, keyof typeof TOKEN_ICON_REGISTRY>;
