import type { ThemeSwitcherRecipe } from '$stylist/theme/interface/recipe/theme-switcher';
import { ObjectManagerThemeSwitcher } from '$stylist/theme/class/object-manager/theme-switcher';
import { ThemeResolver } from '$stylist/theme/class/object-manager/theme-resolver';
import { ThemeStorageManager } from '$stylist/theme/class/object-manager/theme-storage-manager';

export function createThemeSwitcherState(props: ThemeSwitcherRecipe) {
	const resolvedThemes = $derived(ObjectManagerThemeSwitcher.resolveThemes(props.themes));

	let scheme = $state(
		ObjectManagerThemeSwitcher.resolveCurrentScheme(props.currentScheme ?? 'minimal', props.themes)
	);
	let appliedScheme = $state<typeof scheme | null>(null);

	$effect(() => {
		scheme = ObjectManagerThemeSwitcher.resolveCurrentScheme(
			props.currentScheme ?? 'minimal',
			resolvedThemes
		);
	});

	function applyScheme(newScheme: typeof scheme) {
		if (!ObjectManagerThemeSwitcher.findTheme(resolvedThemes, newScheme)) return;
		ThemeResolver.applyStoredScheme(newScheme);
		ThemeStorageManager.persistScheme(newScheme, ObjectManagerThemeSwitcher.storageKey);
	}

	function setScheme(newScheme: typeof scheme) {
		if (!ObjectManagerThemeSwitcher.findTheme(resolvedThemes, newScheme)) return;
		scheme = newScheme;
		props.onSchemeChange?.(newScheme);
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
		setScheme
	};
}

export default createThemeSwitcherState;

