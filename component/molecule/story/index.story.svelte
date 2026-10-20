<script lang="ts">
	import Story from './index.svelte';
	import type { RecipeStory } from '$stylist/theme/interface/recipe/story';

	// Render of index.story.ts: the wrapper shows its preview and variants only through snippet props.
	let args: RecipeStory = $props();
</script>

<Story {...args}>
	{#snippet children(values)}
		<div class="_preview" style:--accent="var(--color-{values.tone}-500)">
			<span class="_dot" class:_dot--hidden={!values.showAccent}></span>
			<strong style:font-size="{values.size}px">{values.titleText}</strong>
		</div>
	{/snippet}

	{#snippet variants()}
		<div class="_variants">
			<span class="_chip">Default</span>
			<span class="_chip _chip--success">Success</span>
		</div>
	{/snippet}
</Story>

<style>
	._preview {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1.25rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 1rem;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}
	._dot {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 9999px;
		background: var(--accent);
	}
	._dot--hidden {
		visibility: hidden;
	}
	._variants {
		display: flex;
		gap: 0.5rem;
	}
	._chip {
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		background: var(--color-background-secondary);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
	._chip--success {
		background: color-mix(in srgb, var(--color-success-500) 15%, transparent);
		color: var(--color-success-700, var(--color-text-primary));
	}
</style>
