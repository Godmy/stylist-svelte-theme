<script lang="ts">
	import Icon from '$stylist/media/svelte/atom/icon/index.svelte';
	import { StyleManagerThemeModeToggle } from '$stylist/theme/class/style-manager/theme-mode-toggle';
	import { createThemeModeToggleState } from '$stylist/theme/function/state/theme-mode-toggle';
	import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import type { ThemeModeToggleRecipe } from '$stylist/theme/interface/recipe/theme-mode-toggle';
	import darkModeSvg from '$stylist/theme/data/svg/dark-mode.svg?raw';
	import lightModeSvg from '$stylist/theme/data/svg/light-mode.svg?raw';

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

	const iconSvg = $derived(
		resolveThemeMode(state.theme) === 'dark' ? darkModeSvg : lightModeSvg
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
	<Icon svg={iconSvg} size={16} />
</button>
