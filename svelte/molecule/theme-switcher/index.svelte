<script lang="ts">
	import type { ThemeSwitcherRecipe } from '$stylist/theme/interface/recipe/theme-switcher';
	import BaseIcon from '$stylist/media/svelte/atom/icon/index.svelte';
	import { StyleManagerThemeSwitcher } from '$stylist/theme/class/style-manager/theme-switcher';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import { createThemeSwitcherState } from '$stylist/theme/function/state/theme-switcher';
	import {
		getPreviewTheme,
		getSurfaceStyle,
		getSwatchStyle
	} from '$stylist/theme/function/script/theme-switcher';

	let props: ThemeSwitcherRecipe = $props();
	const themeContext = ManagerThemeContext.getOptional();
	const state = createThemeSwitcherState(
		props,
		() => themeContext?.themeMode ?? props.themeMode ?? 'default',
		themeContext?.setScheme
	);
</script>

<svelte:head>
	<style>{StyleManagerThemeSwitcher.getStyleSheet()}</style>
</svelte:head>

<div class={StyleManagerThemeSwitcher.root(state.hostClass)} {...state.restProps}>
	{#if state.showHeader}
		<div class={StyleManagerThemeSwitcher.header()}>
			<BaseIcon name={StyleManagerThemeSwitcher.headerIconName} size={16} />
			<span>UI Theme</span>
		</div>
	{/if}
	<div class={StyleManagerThemeSwitcher.list(state.compact)}>
		{#each state.resolvedThemes as item}
			<button
				type="button"
				class={StyleManagerThemeSwitcher.item(item.id, state.scheme)}
				onclick={() => state.setScheme(item.id)}
				aria-pressed={state.scheme === item.id}
			>
				<div class={StyleManagerThemeSwitcher.meta()}>
					<span class={StyleManagerThemeSwitcher.name()}>{item.label}</span>
					{#if state.showLabels}
						<span class={StyleManagerThemeSwitcher.description()}>{item.description}</span>
					{/if}
				</div>
				<span class={StyleManagerThemeSwitcher.badge(state.scheme === item.id)}>
					{state.scheme === item.id ? 'Active' : 'Preview'}
				</span>

				<div class={StyleManagerThemeSwitcher.preview()}>
					<div
						class={StyleManagerThemeSwitcher.previewSurface()}
						style={getSurfaceStyle(item, state.effectiveThemeMode)}
					></div>
					<div class={StyleManagerThemeSwitcher.swatchRow()}>
						<span
							class={StyleManagerThemeSwitcher.swatch()}
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.primary[500]
							)}
						></span>
						<span
							class={StyleManagerThemeSwitcher.swatch()}
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.secondary[500]
							)}
						></span>
						<span
							class={StyleManagerThemeSwitcher.swatch()}
							style={getSwatchStyle(
								getPreviewTheme(item, state.effectiveThemeMode).colors.background.secondary
							)}
						></span>
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>
