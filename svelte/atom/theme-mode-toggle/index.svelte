<script lang="ts">
	import Icon from '$stylist/media/svelte/atom/icon/index.svelte';
	import { StyleManagerThemeModeToggle } from '$stylist/theme/class/style-manager/theme-mode-toggle';
	import { createThemeModeToggleState } from '$stylist/theme/function/state/theme-mode-toggle';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';

	let props: ThemeModeToggleRecipe = $props();
	const themeContext = ManagerThemeContext.getOptional();

	const state = createThemeModeToggleState(
		props,
		() => props.defaultScheme ?? themeContext?.themeScheme,
		themeContext?.setMode
	);

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
