<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlLabel from '$stylist/html/component/atom/label/index.svelte';
	import HtmlInputColor from '$stylist/html/component/atom/input-color/index.svelte';
	import HtmlInputText from '$stylist/html/component/atom/input-text/index.svelte';
	import HtmlP from '$stylist/html/component/atom/p/index.svelte';
	import type { RecipeColorPicker } from '$stylist/theme/interface/recipe/color-picker';
	import createColorPickerState from '$stylist/theme/component/molecule/color-picker/state.svelte';

	let props: RecipeColorPicker = $props();
	const state = createColorPickerState(() => props);
	// One id per instance, so several pickers on a page keep their labels apart.
	const uid = $props.id();
	const inputId = $derived(props.id ?? `color-picker-${uid}`);
</script>

<HtmlDiv class={state.containerClass}>
	<HtmlDiv class="color-picker__row">
		<HtmlLabel for={inputId} class="color-picker__label">
			{state.label}
		</HtmlLabel>
		<HtmlDiv class="color-picker__controls">
			<HtmlDiv
				class={`color-picker__swatch ${state.pickerClass}`}
				style={`background-color: ${state.selectedColor};`}
				role="presentation"
			>
				<HtmlInputColor
					{...state.restProps}
					id={inputId}
					class={`color-picker__native ${state.inputClass}`}
					bind:value={state.selectedColor}
					oninput={state.handleInput}
					onchange={state.handleChange}
				/>
			</HtmlDiv>
			<HtmlInputText
				class={`color-picker__text ${state.inputClass}`}
				aria-label={state.label}
				bind:value={state.selectedColor}
				oninput={state.handleInput}
				onchange={state.handleChange}
			/>
		</HtmlDiv>
	</HtmlDiv>

	{#if state.helperText}
		<HtmlP class="color-picker__helper">{state.helperText}</HtmlP>
	{/if}

	{#if state.error}
		<HtmlP class="color-picker__error">{state.error}</HtmlP>
	{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			:where(.color-picker__row) {
				display: flex;
				align-items: center;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
			}
			:where(.color-picker__label) {
				display: block;
				font-size: var(--font-size-3-5, 0.875rem);
				font-weight: var(--font-weight-medium, 500);
				color: var(--color-text-primary);
			}
			:where(.color-picker__controls) {
				display: flex;
				align-items: center;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
			}
			:where(.color-picker__swatch) {
				position: relative;
				width: var(--space-8, 2rem);
				height: var(--space-8, 2rem);
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-1-5, 0.375rem);
				overflow: hidden;
			}
			:where(.color-picker__native) {
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
				cursor: pointer;
			}
			:where(.color-picker__text) {
				width: 6rem;
				padding: calc(var(--space-1, 0.25rem) * var(--density-scale, 1))
					calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-1-5, 0.375rem);
				font-size: var(--font-size-3-5, 0.875rem);
				box-shadow: var(--elevation-level1);
			}
			:where(.color-picker__text:focus) {
				border-color: var(--color-primary-500);
				outline: none;
				box-shadow: 0 0 0 var(--border-width-medium, 2px) var(--color-primary-100);
			}
			:where(.color-picker__helper, .color-picker__error) {
				margin-block-start: var(--space-1, 0.25rem);
				font-size: var(--font-size-3, 0.75rem);
			}
			:where(.color-picker__helper) {
				color: var(--color-text-secondary);
			}
			:where(.color-picker__error) {
				color: var(--color-danger-600);
			}
		}
	}
</style>
