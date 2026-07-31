<script lang="ts">
	import Story from './index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{ name: 'titleText', type: 'text', defaultValue: 'Live preview title' },
		{ name: 'showAccent', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={Story}
	title="Story"
	description="Playground wrapper with live controls and an optional variants slot."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<span class:hidden={!values.showAccent} class="_c3"></span>
				<strong class="_c4">{values.titleText as string}</strong>
			</div>
			<p class="_c5">This inner preview reacts to the Story control panel on the right.</p>
		</div>
	{/snippet}

	{#snippet variants()}
		<div class="_c6">
			<p class="_c7 tracking-[0.18em]">Variants slot</p>
			<div class="_c8">
				<span class="_c9">Default</span>
				<span class="_c10">Success</span>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 0.75rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 1.25rem;
	}
	._c10 {
		border-radius: 9999px;
		background-color: var(--color-emerald-100);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: var(--color-emerald-800, #emerald-800);
	}
	._c2 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	._c3 {
		height: 0.75rem;
		width: 0.75rem;
		border-radius: 9999px;
		background-color: var(--color-emerald-500);
	}
	._c4 {
		color: #0f172a;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
	._c6 {
		display: grid;
		gap: 0.5rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: #cbd5e1;
		background-color: #f8fafc;
		padding: 1rem;
	}
	._c7 {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 600;
		color: #64748b;
		text-transform: uppercase;
	}
	._c8 {
		display: flex;
		gap: 0.5rem;
	}
	._c9 {
		border-radius: 9999px;
		background-color: #0f172a;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		color: #ffffff;
	}
</style>
