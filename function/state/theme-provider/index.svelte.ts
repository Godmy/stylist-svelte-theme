import type { ThemeProviderRecipe } from '$stylist/theme/interface/recipe/theme-provider';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/css/apply-theme-mode-and-scheme';
import { ThemeResolver } from '$stylist/theme/class/object-manager/theme-resolver';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import { ThemeContextManager } from '$stylist/theme/class/object-manager/theme-context-manager';
import { ThemeProviderStyleManager } from '$stylist/theme/class/style-manager/theme-provider';
import { initSystemThemeListener } from '$stylist/theme/function/script/css/get-system-theme-mode';
import { ThemeStorageManager } from '$stylist/theme/class/object-manager/theme-storage-manager';

export function createThemeProviderState(props: ThemeProviderRecipe) {
	let currentMode = $state<TokenThemeMode>(props.initialMode ?? 'default');
	let currentScheme = $state<TokenThemeScheme>(props.initialScheme ?? 'minimal');

	// Инициализируем слушатель системной темы при монтировании
	$effect(() => {
		const cleanup = initSystemThemeListener((isDark) => {
			// Авто-обновляем тему, если текущий режим 'default'
			if (currentMode === 'default') {
				applyThemeModeAndScheme(currentMode, currentScheme);
			}
		});

		return cleanup;
	});

	ThemeContextManager.set(
		() => ThemeResolver.resolve(currentScheme, resolveThemeMode(currentMode)),
		() => currentMode,
		() => currentScheme,
		setMode,
		setScheme
	);

	function setMode(mode: TokenThemeMode): void {
		currentMode = mode;
		ThemeStorageManager.persistSettings({
			themeMode: mode,
			themeScheme: currentScheme
		});
	}

	function setScheme(scheme: TokenThemeScheme): void {
		currentScheme = scheme;
		ThemeStorageManager.persistSettings({
			themeMode: currentMode,
			themeScheme: scheme
		});
	}

	$effect(() => {
		applyThemeModeAndScheme(currentMode, currentScheme);
	});

	const containerClass = $derived(ThemeProviderStyleManager.getContainerClasses(props.class));

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
