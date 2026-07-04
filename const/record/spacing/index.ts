import { TOKEN_SIZE_REM } from '$stylist/theme/const/array/size-rem';
import type { TokenSizeRem } from '$stylist/theme/type/alias/index';

export const RECORD_SPACING: Record<TokenSizeRem, TokenSizeRem> = Object.fromEntries(
	TOKEN_SIZE_REM.map((size) => [size, size] as const)
) as Record<TokenSizeRem, TokenSizeRem>;
