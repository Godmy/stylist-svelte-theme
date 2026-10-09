import type { RecipeThemeModeToggle } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
import { ManagerThemeModeToggle } from '$stylist/theme/class/manager/theme-mode-toggle';
import { applyThemeMode } from '$stylist/theme/function/script/dom/apply-theme-mode';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import { untrack } from 'svelte';

function createThemeModeToggleState(getProps: () => RecipeThemeModeToggle) {
	const props = $derived(getProps());
	const themeContext = ManagerThemeContext.getOptional();
	const requestedTheme = $derived(
		ManagerThemeModeToggle.resolveTheme(
			props.themeMode,
			props.darkMode,
			// Do not subscribe to context when an explicit mode controls this toggle.
			props.themeMode || typeof props.darkMode === 'boolean'
				? undefined
				: (themeContext?.themeMode ?? ManagerThemeStorage.getStoredMode())
		)
	);
	// Local clicks override the value until the requested mode actually changes.
	let theme = $derived(requestedTheme);
	const defaultScheme = $derived(ManagerThemeModeToggle.resolveDefaultScheme(props, themeContext));
	let appliedTheme: typeof theme | null = null;
	let appliedScheme: typeof defaultScheme;

	const label = $derived(ManagerThemeModeToggle.getLabel(theme));
	const ariaLabel = $derived(ManagerThemeModeToggle.getAriaLabel(label));
	const resolvedMode = $derived(resolveThemeMode(theme));
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
		const nextTheme = theme;
		const nextScheme = defaultScheme;
		if (appliedTheme === nextTheme && appliedScheme === nextScheme) {
			return;
		}
		// Callbacks and context mutators must not become dependencies of this effect.
		untrack(() => {
			const modeChanged = appliedTheme !== nextTheme;
			const setThemeMode = themeContext?.setMode;
			const effectiveTheme = setThemeMode ? resolveThemeMode(nextTheme) : applyTheme(nextTheme);
			appliedTheme = nextTheme;
			appliedScheme = nextScheme;
			if (modeChanged) {
				setThemeMode?.(nextTheme);
				props.onToggle?.({ darkMode: effectiveTheme === 'dark' });
				if (!setThemeMode) {
					ManagerThemeStorage.persistMode(nextTheme, ManagerThemeModeToggle.storageKey);
				}
			}
		});
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
