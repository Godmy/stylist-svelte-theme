<script lang="ts">
	import { Icon } from '$stylist';
	import { StyleManagerThemeModeToggle } from '$stylist/theme/class/style-manager/theme-mode-toggle';
	import { createThemeModeToggleState } from '$stylist/theme/function/state/theme-mode-toggle';
	import { ThemeContextManager } from '$stylist/theme/class/object-manager/theme-context-manager';
	import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';

	let props: ThemeModeToggleRecipe = $props();
	const themeContext = ThemeContextManager.getOptional();

	const state = createThemeModeToggleState(props, () => props.defaultScheme ?? themeContext?.themeScheme);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				disabled: _disabled,
				size: _size,
				checked: _checked,
				darkMode: _darkMode,
				onToggle: _onToggle,
				currentTheme: _currentTheme,
				showLabels: _showLabels,
				onThemeChange: _onThemeChange,
				defaultScheme: _defaultScheme,
				...rest
			} = props;
			return rest;
		})()
	);

</script>

<svelte:head>
	<style>{StyleManagerThemeModeToggle.getStyleSheet()}</style>
</svelte:head>

<button
	type="button"
	class={StyleManagerThemeModeToggle.root(props.class)}
	onclick={state.cycleTheme}
	aria-label={state.ariaLabel}
	disabled={props.disabled}
	{...restProps}
>
	<Icon name={state.iconName} size={16} />
</button>
