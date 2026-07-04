<script lang="ts">
	import type { RecipeThemeColorPicker as IColorPickerProps } from '$stylist/theme/interface/recipe/color-picker';
	import createColorPickerState from '$stylist/theme/function/state/color-picker/index.svelte';

	let props: IColorPickerProps = $props();
	const state = createColorPickerState(props);
</script>

<div class={state.containerClass}>
	<div class="color-picker__row">
		<label for="color-picker-input" class="color-picker__label">
			{state.label}
		</label>
		<div class="color-picker__controls">
			<div
				class={`color-picker__swatch ${state.pickerClass}`}
				style={`background-color: ${state.selectedColor};`}
				role="presentation"
			>
				<input
					id="color-picker-input"
					type="color"
					class={`color-picker__native ${state.inputClass}`}
					bind:value={state.selectedColor}
					oninput={state.handleInput}
					onchange={state.handleChange}
					{...props}
				/>
			</div>
			<input
				type="text"
				class={`color-picker__text ${state.inputClass}`}
				bind:value={state.selectedColor}
				oninput={state.handleInput}
				onchange={state.handleChange}
				{...props}
			/>
		</div>
	</div>

	{#if state.helperText}
		<p class="color-picker__helper">{state.helperText}</p>
	{/if}

	{#if state.error}
		<p class="color-picker__error">{state.error}</p>
	{/if}
</div>

<style>
	.color-picker__row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.color-picker__label {
		display: block;
		font-size: var(--text-size-sm, 0.875rem);
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.color-picker__controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.color-picker__swatch {
		width: 2rem;
		height: 2rem;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		overflow: hidden;
		position: relative;
	}

	.color-picker__native {
		width: 2rem;
		height: 2rem;
		cursor: pointer;
		opacity: 0;
		position: absolute;
		inset: 0;
	}

	.color-picker__text {
		width: 6rem;
		border-radius: var(--border-radius-base, 0.375rem);
		border: 1px solid var(--color-border-primary);
		padding: 0.25rem 0.75rem;
		font-size: var(--text-size-sm, 0.875rem);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.color-picker__text:focus {
		border-color: var(--color-primary-500);
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-100);
	}

	.color-picker__helper {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.color-picker__error {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-danger-600);
	}
</style>
