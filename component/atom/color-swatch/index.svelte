<script lang="ts">
	import type { RecipeColorSwatch } from '$stylist/theme/interface/recipe/color-swatch';
	import createColorSwatchState from '$stylist/theme/component/atom/color-swatch/state.svelte';

	let props: RecipeColorSwatch = $props();
	const state = createColorSwatchState(() => props);
</script>

<div
	class={state.classes}
	style={`background-color: ${state.color}; width: ${state.size}; height: ${state.size};`}
	{...state.restProps}
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
		border-radius: var(--radius-1-5, 0.375rem);
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
