import type { ThemeSettingsViewModel } from '$stylist/theme/interface/contract/theme-settings-view-model';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

function createThemeSettingsState(getContract: () => ThemeSettingsViewModel) {
	let localThemeMode = $state<TokenThemeMode>(getContract().themeMode);
	let localThemeScheme = $state<TokenThemeScheme>(getContract().themeScheme);

	$effect(() => {
		const contract = getContract();
		localThemeMode = contract.themeMode;
		localThemeScheme = contract.themeScheme;
	});

	function handleThemeModeChange(nextTheme: TokenThemeMode) {
		localThemeMode = nextTheme;
		const contract = getContract();
		contract.onThemeModeChange?.(nextTheme);
	}

	function handleThemeSchemeChange(nextTheme: TokenThemeScheme) {
		localThemeScheme = nextTheme;
		const contract = getContract();
		contract.onThemeSchemeChange?.(nextTheme);
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
