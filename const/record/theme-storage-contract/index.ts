import { TOKEN_THEME_MODE_STORAGE } from '$stylist/theme/const/value/theme-mode-storage';
import { TOKEN_THEME_SCHEME_STORAGE } from '$stylist/theme/const/value/theme-scheme-storage';
import type { ThemeStorageContract } from '$stylist/theme/type/contract/theme-storage';

export const THEME_STORAGE_CONTRACT: ThemeStorageContract = {
	modeStorageKey: TOKEN_THEME_MODE_STORAGE,
	schemeStorageKey: TOKEN_THEME_SCHEME_STORAGE,
	defaultThemeMode: 'default',
	defaultThemeScheme: 'minimal'
};
