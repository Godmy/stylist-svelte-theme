import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import darkModeSvg from '$stylist/theme/data/svg/dark-mode.svg?raw';
import lightModeSvg from '$stylist/theme/data/svg/light-mode.svg?raw';
import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
import { ManagerThemeModeToggle } from '$stylist/theme/class/manager/theme-mode-toggle';
import { applyThemeMode } from '$stylist/theme/function/script/dom/apply-theme-mode';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';

function createThemeModeToggleState(props: RecipeThemeModeToggle) {
	const themeContext = ManagerThemeContext.getOptional();
	let theme = $state(ManagerThemeModeToggle.resolveTheme(props.themeMode, props.darkMode));
	let appliedTheme = $state<typeof theme | null>(null);
	let defaultScheme = $state(ManagerThemeModeToggle.resolveDefaultScheme(props, themeContext));

	$effect(() => {
		theme = ManagerThemeModeToggle.resolveTheme(props.themeMode, props.darkMode);
	});

	$effect(() => {
		defaultScheme = ManagerThemeModeToggle.resolveDefaultScheme(props, themeContext);
	});

	const label = $derived(ManagerThemeModeToggle.getLabel(theme));
	const ariaLabel = $derived(ManagerThemeModeToggle.getAriaLabel(label));
	const resolvedMode = $derived(resolveThemeMode(theme));
	const iconSvg = $derived(resolvedMode === 'dark' ? darkModeSvg : lightModeSvg);
	const className = $derived(
		props.class ? `c-theme-mode-toggle ${props.class}` : 'c-theme-mode-toggle'
	);
	const restProps = $derived(ManagerThemeModeToggle.getButtonRestProps(props));
	const disabled = $derived(props.disabled);

	function applyTheme(newTheme: typeof theme) {
		if (typeof document !== 'undefined') {
			return applyThemeMode(newTheme, document.documentElement, defaultScheme);
		}

		return newTheme;
	}

	function setTheme(newTheme: typeof theme) {
		theme = newTheme;
		props.onThemeModeChange?.(newTheme);
	}

	function cycleTheme() {
		if (props.disabled) return;
		setTheme(ManagerThemeModeToggle.getNextTheme(theme, resolveThemeMode(theme)));
	}

	$effect(() => {
		if (appliedTheme === theme) {
			return;
		}

		const setThemeMode = themeContext?.setMode;
		const effectiveTheme = setThemeMode ? resolveThemeMode(theme) : applyTheme(theme);
		setThemeMode?.(theme);
		appliedTheme = theme;
		props.onToggle?.({ darkMode: effectiveTheme === 'dark' });
		if (!setThemeMode) {
			ManagerThemeStorage.persistMode(theme, ManagerThemeModeToggle.storageKey);
		}
	});

	return {
		get theme() {
			return theme;
		},
		get label() {
			return label;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		get resolvedMode() {
			return resolvedMode;
		},
		get iconSvg() {
			return iconSvg;
		},
		get className() {
			return className;
		},
		get disabled() {
			return disabled;
		},
		get restProps() {
			return restProps;
		},
		cycleTheme,
		setTheme
	};
}

export default createThemeModeToggleState;
