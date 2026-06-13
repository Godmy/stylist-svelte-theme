import type { RecipeThemeSettings } from '$stylist/theme/interface/recipe/theme-settings';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

function createThemeSettingsState(getSettings: () => RecipeThemeSettings) {
	let localThemeMode = $state<TokenThemeMode>(getSettings().themeMode);
	let localThemeScheme = $state<TokenThemeScheme>(getSettings().themeScheme);

	$effect(() => {
		const settings = getSettings();
		localThemeMode = settings.themeMode;
		localThemeScheme = settings.themeScheme;
	});

	function handleThemeModeChange(nextTheme: TokenThemeMode) {
		localThemeMode = nextTheme;
		const settings = getSettings();
		settings.onThemeModeChange?.(nextTheme);
	}

	function handleThemeSchemeChange(nextTheme: TokenThemeScheme) {
		localThemeScheme = nextTheme;
		const settings = getSettings();
		settings.onThemeSchemeChange?.(nextTheme);
	}

	return {
		get localThemeMode() {
			return localThemeMode;
		},
		get localThemeScheme() {
			return localThemeScheme;
		},
		handleThemeModeChange,
		handleThemeSchemeChange
	};
}

export default createThemeSettingsState;
