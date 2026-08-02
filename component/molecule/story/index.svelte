<script lang="ts">
	import type { RecipeStory } from '$stylist/theme/interface/recipe/story';
	import { createStoryState } from '$stylist/theme/function/state/story/index.svelte';

	let props: RecipeStory = $props();
	const state = createStoryState(props);
</script>

<div
	class="c-story"
	data-story-id={props.id}
	data-story-title={props.title}
	data-story-category={props.category}
	data-story-description={props.description}
	data-story-tags={props.tags?.join(',')}
>
	{#if props.title || props.description || props.category || (props.tags && props.tags.length > 0)}
		<header class="story-header">
			<div class="story-header__meta">
				{#if props.category}
					<p class="story-header__eyebrow">{props.category}</p>
				{/if}
				{#if props.title}
					<h2 class="story-header__title">{props.title}</h2>
				{/if}
				{#if props.description}
					<p class="story-header__description">{props.description}</p>
				{/if}
			</div>
			{#if props.tags && props.tags.length > 0}
				<div class="story-header__tags">
					{#each props.tags as tag}
						<span class="story-tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</header>
	{/if}

	<div class="component-preview">
		{#if props.children}
			{@render props.children(state.controlValues)}
		{:else if props.component}
			{@const PreviewComponent = props.component}
			<PreviewComponent {...state.controlValues} />
		{/if}
	</div>

	{#if props.variants}
		<div class="variants-preview">
			{@render props.variants()}
		</div>
	{/if}

	<div class="controls-panel">
		{#each props.controls ?? [] as control}
			<div class="control-item">
				<div class="control-item__header">
					<label class="control-item__label" for="control-{control.name}">
						{control.label ?? control.name}
					</label>
					{#if control.type === 'range' || control.type === 'number' || control.type === 'color'}
						<span class="control-item__value">{String(state.controlValues[control.name] ?? '')}</span>
					{/if}
				</div>
				{#if control.description}
					<p class="control-item__description">{control.description}</p>
				{/if}
				{#if control.type === 'text'}
					<input
						class="control-input"
						id="control-{control.name}"
						type="text"
						value={state.controlValues[control.name]}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							state.handleChange(control, target ? target.value : '');
						}}
					/>
				{:else if control.type === 'number'}
					<input
						class="control-input"
						id="control-{control.name}"
						type="number"
						min={control.min}
						max={control.max}
						step={control.step}
						value={state.controlValues[control.name]}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							state.handleChange(control, target ? target.value : '');
						}}
					/>
				{:else if control.type === 'boolean'}
					<label class="control-toggle" for="control-{control.name}">
						<input
							id="control-{control.name}"
							type="checkbox"
							checked={state.controlValues[control.name] as boolean}
							onchange={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.handleChange(control, target ? target.checked : false);
							}}
						/>
						<span class="control-toggle__track">
							<span class="control-toggle__thumb"></span>
						</span>
						<span class="control-toggle__text"
							>{state.controlValues[control.name] ? 'Enabled' : 'Disabled'}</span
						>
					</label>
				{:else if control.type === 'select'}
					<select
						class="control-input"
						id="control-{control.name}"
						value={state.controlValues[control.name]}
						onchange={(e: Event) => {
							const target = e.target as HTMLSelectElement;
							state.handleChange(control, target ? target.value : '');
						}}
					>
						{#each control.options ?? [] as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				{:else if control.type === 'color'}
					<div class="control-color">
						<input
							class="control-color__picker"
							id="control-{control.name}"
							type="color"
							value={state.controlValues[control.name]}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.handleChange(control, target ? target.value : '#000000');
							}}
						/>
						<input
							class="control-input control-color__value"
							type="text"
							value={String(state.controlValues[control.name] ?? '')}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.handleChange(control, target ? target.value : '#000000');
							}}
						/>
					</div>
				{:else if control.type === 'range'}
					<div class="control-range">
						<input
							class="control-range__slider"
							id="control-{control.name}"
							type="range"
							min={control.min}
							max={control.max}
							step={control.step}
							value={state.controlValues[control.name]}
							oninput={(e: Event) => {
								const target = e.target as HTMLInputElement;
								state.handleChange(control, target ? target.value : '');
							}}
						/>
						<div class="control-range__legend">
							<span>{control.min ?? 0}</span>
							<span>{control.max ?? 100}</span>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.c-story {
		display: grid;
		gap: 1.5rem;
		min-width: 0;
	}

	.story-header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 82%, transparent);
		border-radius: 1.75rem;
		background:
			radial-gradient(
				circle at top right,
				color-mix(in srgb, var(--color-primary-500) 14%, transparent),
				transparent 40%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
				var(--color-background-primary)
			);
		box-shadow: var(--shadow-sm, 0 12px 30px rgb(15 23 42 / 0.06));
	}

	.story-header__meta {
		display: grid;
		gap: 0.45rem;
		max-width: 48rem;
	}

	.story-header__eyebrow {
		margin: 0;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}

	.story-header__title {
		margin: 0;
		font-size: clamp(1.4rem, 2vw, 2rem);
		line-height: 1.05;
		color: var(--color-text-primary);
	}

	.story-header__description {
		margin: 0;
		max-width: 42rem;
		font-size: 0.98rem;
		line-height: 1.6;
		color: var(--color-text-secondary);
	}

	.story-header__tags {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 0.5rem;
	}

	.story-tag {
		display: inline-flex;
		align-items: center;
		padding: 0.45rem 0.8rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 85%, transparent);
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-background-secondary) 75%, transparent);
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}

	.component-preview,
	.variants-preview,
	.controls-panel {
		box-sizing: border-box;
		min-width: 0;
		padding: 1.5rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 84%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		box-shadow: var(--shadow-sm, 0 10px 25px rgb(15 23 42 / 0.05));
	}

	.controls-panel {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
		gap: 0.75rem;
		background: linear-gradient(
			180deg,
			color-mix(in srgb, var(--color-background-primary) 94%, white 6%),
			var(--color-background-primary)
		);
	}

	.control-item {
		box-sizing: border-box;
		display: grid;
		gap: 0.65rem;
		min-width: 0;
		padding: 1rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 78%, transparent);
		border-radius: 0.5rem;
		background: color-mix(in srgb, var(--color-background-secondary) 55%, transparent);
	}

	.control-item__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		min-width: 0;
	}

	.control-item__label {
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--color-text-primary);
	}

	.control-item__value {
		padding: 0.25rem 0.55rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
		font-size: 0.78rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}

	.control-item__description {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.45;
		color: var(--color-text-secondary);
	}

	.control-input {
		box-sizing: border-box;
		min-width: 0;
		width: 100%;
		padding: 0.8rem 0.95rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 86%, transparent);
		border-radius: 0.5rem;
		background: var(--color-background-primary);
		font: inherit;
		color: var(--color-text-primary);
		outline: none;
		transition:
			border-color 140ms ease,
			box-shadow 140ms ease,
			background-color 140ms ease;
	}

	.control-input:focus {
		border-color: color-mix(in srgb, var(--color-primary-500) 75%, var(--color-border-primary));
		box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary-500) 18%, transparent);
	}

	.control-toggle {
		display: inline-flex;
		align-items: center;
		min-width: 0;
		gap: 0.8rem;
		cursor: pointer;
		user-select: none;
	}

	.control-toggle input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.control-toggle__track {
		position: relative;
		display: inline-flex;
		align-items: center;
		width: 3.1rem;
		height: 1.8rem;
		padding: 0.2rem;
		border-radius: 999px;
		background: color-mix(in srgb, var(--color-neutral-400) 55%, transparent);
		transition: background-color 140ms ease;
	}

	.control-toggle__thumb {
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		background: white;
		box-shadow: 0 4px 12px rgb(15 23 42 / 0.18);
		transition: transform 140ms ease;
	}

	.control-toggle input:checked + .control-toggle__track {
		background: linear-gradient(
			135deg,
			var(--color-primary-500),
			var(--color-info-500, var(--color-primary-600))
		);
	}

	.control-toggle input:checked + .control-toggle__track .control-toggle__thumb {
		transform: translateX(1.3rem);
	}

	.control-toggle__text {
		min-width: 0;
		overflow-wrap: anywhere;
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}

	.control-color {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 0.75rem;
		align-items: center;
		min-width: 0;
	}

	.control-color__picker {
		width: 3rem;
		height: 3rem;
		padding: 0.2rem;
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 86%, transparent);
		border-radius: 0.95rem;
		background: var(--color-background-primary);
		cursor: pointer;
	}

	.control-color__value {
		font-family: var(--font-family-mono, ui-monospace, monospace);
	}

	.control-range {
		display: grid;
		gap: 0.5rem;
	}

	.control-range__slider {
		width: 100%;
		accent-color: var(--color-primary-500);
	}

	.control-range__legend {
		display: flex;
		justify-content: space-between;
		font-size: 0.78rem;
		color: var(--color-text-tertiary);
	}

	@media (max-width: 720px) {
		.story-header,
		.component-preview,
		.variants-preview,
		.controls-panel {
			padding: 1.1rem;
			border-radius: 1.25rem;
		}

		.controls-panel {
			grid-template-columns: 1fr;
		}
	}
</style>
