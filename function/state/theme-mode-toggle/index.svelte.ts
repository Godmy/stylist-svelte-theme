import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';
import { ObjectManagerThemeModeToggle } from '$stylist/theme/class/object-manager/theme-mode-toggle';
import { applyThemeMode } from '$stylist/theme/function/script/dom/apply-theme-mode';
import { ManagerThemeStorage } from '$stylist/theme/class/manager/theme-storage';
import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';

function createThemeModeToggleState(
	props: ThemeModeToggleRecipe,
	getDefaultScheme: () => TokenThemeScheme | undefined,
	setThemeMode?: (theme: TokenThemeMode) => void
) {
	let theme = $state(
		ObjectManagerThemeModeToggle.resolveTheme(props.currentTheme, props.darkMode)
	);
	let appliedTheme = $state<typeof theme | null>(null);
	let defaultScheme = $state<TokenThemeScheme | undefined>(getDefaultScheme());

	$effect(() => {
		theme = ObjectManagerThemeModeToggle.resolveTheme(props.currentTheme, props.darkMode);
	});

	// Отдельный эффект для обновления defaultScheme
	$effect(() => {
		defaultScheme = getDefaultScheme();
	});

	const iconName = $derived(ObjectManagerThemeModeToggle.getIconName(theme));
	const label = $derived(ObjectManagerThemeModeToggle.getLabel(theme));
	const ariaLabel = $derived(ObjectManagerThemeModeToggle.getAriaLabel(label));

	function applyTheme(newTheme: typeof theme) {
		if (typeof document !== 'undefined') {
			return applyThemeMode(newTheme, document.documentElement, defaultScheme);
		}

		return newTheme;
	}

	function setTheme(newTheme: typeof theme) {
		theme = newTheme;
		props.onThemeChange?.(newTheme);
	}

	function cycleTheme() {
		if (props.disabled) return;
		setTheme(ObjectManagerThemeModeToggle.getNextTheme(theme));
	}

	$effect(() => {
		if (appliedTheme === theme) {
			return;
		}

		const effectiveTheme = setThemeMode ? resolveThemeMode(theme) : applyTheme(theme);
		setThemeMode?.(theme);
		appliedTheme = theme;
		props.onToggle?.({ darkMode: effectiveTheme === 'dark' });
		if (!setThemeMode) {
			ManagerThemeStorage.persistMode(theme, ObjectManagerThemeModeToggle.storageKey);
		}
	});

	return {
		get theme() {
			return theme;
		},
		get iconName() {
			return iconName;
		},
		get label() {
			return label;
		},
		get ariaLabel() {
			return ariaLabel;
		},
		cycleTheme,
		setTheme
	};
}

export default createThemeModeToggleState;
