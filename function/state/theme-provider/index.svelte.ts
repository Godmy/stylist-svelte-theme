import type { ThemeProviderRecipe } from '$stylist/theme/interface/recipe/theme-provider';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
import { ManagerThemeResolver } from '$stylist/theme/class/manager/theme-resolver';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
import { StyleManagerThemeProvider } from '$stylist/theme/class/style-manager/theme-provider';
import { ManagerTheme } from '$stylist/theme/class/manager/theme';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';

function createThemeProviderState(props: ThemeProviderRecipe) {
	let currentMode = $state<TokenThemeMode>(
		props.initialMode ?? ManagerThemeStorage.getStoredMode()
	);
	let currentScheme = $state<TokenThemeScheme>(
		props.initialScheme ?? ManagerThemeStorage.getStoredScheme()
	);

	// Инициализируем слушатель системной темы при монтировании
	$effect(() => {
		const cleanup = ManagerTheme.initSystemThemeListener((isDark) => {
			// Авто-обновляем тему, если текущий режим 'default'
			if (currentMode === 'default') {
				applyThemeModeAndScheme(currentMode, currentScheme);
			}
		});

		return cleanup;
	});

	ManagerThemeContext.set(
		() => ManagerThemeResolver.resolve(currentScheme, resolveThemeMode(currentMode)),
		() => currentMode,
		() => currentScheme,
		setMode,
		setScheme
	);

	function setMode(mode: TokenThemeMode): void {
		if (currentMode === mode) return;
		currentMode = mode;
		ManagerThemeStorage.persistSettings({
			themeMode: mode,
			themeScheme: currentScheme
		});
	}

	function setScheme(scheme: TokenThemeScheme): void {
		if (currentScheme === scheme) return;
		currentScheme = scheme;
		ManagerThemeStorage.persistSettings({
			themeMode: currentMode,
			themeScheme: scheme
		});
	}

	$effect(() => {
		applyThemeModeAndScheme(currentMode, currentScheme);
	});

	const containerClass = $derived(StyleManagerThemeProvider.getContainerClasses(props.class));

	return {
		get currentMode() {
			return currentMode;
		},
		get currentScheme() {
			return currentScheme;
		},
		get containerClass() {
			return containerClass;
		},
		setMode,
		setScheme
	};
}

export default createThemeProviderState;
