import { TOKEN_THEME_STORAGE_MODE, TOKEN_THEME_STORAGE_SCHEME } from '$stylist/theme/const/struct/theme-storage';
import type { ThemeStorageContract } from '$stylist/theme/type/struct/theme-storage-contract';

export const THEME_STORAGE_CONTRACT: ThemeStorageContract = {
	modeStorageKey: TOKEN_THEME_STORAGE_MODE,
	schemeStorageKey: TOKEN_THEME_STORAGE_SCHEME,
	defaultThemeMode: 'default',
	defaultThemeScheme: 'minimal'
};
