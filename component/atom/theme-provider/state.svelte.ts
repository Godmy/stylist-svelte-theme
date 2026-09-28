import type { RecipeThemeProvider } from '$stylist/theme/interface/recipe/theme-provider';
import type { TokenThemeMode } from '$stylist/theme/type/alias/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
import { ManagerThemeResolver } from '$stylist/theme/class/manager/theme-resolver';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
import { ManagerTheme } from '$stylist/theme/class/manager/theme';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';

export default function createThemeProviderState(getProps: () => RecipeThemeProvider) {
	const props = $derived(getProps());
	let currentMode = $state<TokenThemeMode>(props.themeMode ?? ManagerThemeStorage.getStoredMode());
	let currentScheme = $state<TokenThemeScheme>(
		props.themeScheme ?? ManagerThemeStorage.getStoredScheme()
	);

	$effect(() => {
		const cleanup = ManagerTheme.initSystemThemeListener((isDark) => {
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

	const containerClass = $derived(
		props.class ? `c-theme-provider ${props.class}` : 'c-theme-provider'
	);
	const restProps = $derived(
		(() => {
			const {
				themeMode: _themeMode,
				themeScheme: _themeScheme,
				class: _class,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

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
		get restProps() {
			return restProps;
		},
		setMode,
		setScheme
	};
}
