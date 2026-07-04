<script lang="ts">
	import type { RecipeThemeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';
	import createColorSwatchState from '$stylist/theme/function/state/color-swatch/index.svelte';

	let props: RecipeThemeColorSwatch = $props();
	const state = createColorSwatchState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, color: _color, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<div
	class={state.classes}
	style={`background-color: ${state.color}; width: ${state.size}px; height: ${state.size}px;`}
	{...restProps}
>
	{#if props.children}
		<div class="c-color-swatch__content">
			{@render props.children()}
		</div>
	{/if}
</div>

<style>
	.c-color-swatch {
		display: inline-block;
		border-radius: var(--radius-md, 0.375rem);
		border: 1px solid var(--color-border-secondary);
		overflow: hidden;
	}

	.c-color-swatch__content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
