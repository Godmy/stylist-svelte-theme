import type { RecipeThemeSwitcher } from '$stylist/theme/interface/recipe/theme-switcher';
import { ManagerThemeSwitcher } from '$stylist/theme/class/manager/theme-switcher';
import { applyThemeModeAndScheme } from '$stylist/theme/function/script/dom/apply-theme-mode-and-scheme';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';

function createThemeSwitcherState(
	props: RecipeThemeSwitcher,
	getThemeMode: () => TokenThemeMode,
	setThemeScheme?: (scheme: TokenThemeScheme) => void
) {
	const resolvedThemes = $derived(ManagerThemeSwitcher.resolveThemes(props.themes));

	let scheme = $state(
		ManagerThemeSwitcher.resolveCurrentScheme(props.themeScheme ?? 'minimal', props.themes)
	);
	let appliedScheme = $state<typeof scheme | null>(null);

	$effect(() => {
		scheme = ManagerThemeSwitcher.resolveCurrentScheme(
			props.themeScheme ?? 'minimal',
			resolvedThemes
		);
	});

	const effectiveThemeMode = $derived(resolveThemeMode(getThemeMode()));

	const restProps = $derived.by(() => {
		const {
			themeScheme: _themeScheme,
			themeMode: _themeMode,
			class: _class,
			compact: _compact,
			showHeader: _showHeader,
			showLabels: _showLabels,
			themes: _themes,
			onThemeSchemeChange: _onThemeSchemeChange,
			...rest
		} = props;
		return rest;
	});

	function applyScheme(newScheme: typeof scheme) {
		if (!ManagerThemeSwitcher.findTheme(resolvedThemes, newScheme)) return;
		if (setThemeScheme) {
			setThemeScheme(newScheme);
			return;
		}

		const themeMode = getThemeMode();
		applyThemeModeAndScheme(themeMode, newScheme);
		ManagerThemeStorage.persistSettings({
			themeMode,
			themeScheme: newScheme
		});
	}

	function setScheme(newScheme: typeof scheme) {
		if (!ManagerThemeSwitcher.findTheme(resolvedThemes, newScheme)) return;
		scheme = newScheme;
		props.onThemeSchemeChange?.(newScheme);
	}

	$effect(() => {
		if (appliedScheme === scheme) {
			return;
		}

		applyScheme(scheme);
		appliedScheme = scheme;
	});

	return {
		get resolvedThemes() {
			return resolvedThemes;
		},
		get scheme() {
			return scheme;
		},
		get hostClass() {
			return props.class ?? '';
		},
		get showHeader() {
			return props.showHeader ?? true;
		},
		get compact() {
			return props.compact ?? false;
		},
		get showLabels() {
			return props.showLabels ?? false;
		},
		get effectiveThemeMode() {
			return effectiveThemeMode;
		},
		get restProps() {
			return restProps;
		},
		setScheme
	};
}

export default createThemeSwitcherState;
