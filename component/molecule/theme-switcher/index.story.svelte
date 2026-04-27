<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ThemeSwitcher from './index.svelte';

	let selectedTheme = $state<'minimal' | 'ocean' | 'forest' | 'sunset'>('minimal');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'currentScheme', type: 'select', defaultValue: 'minimal', options: ['minimal', 'ocean', 'forest', 'sunset'] },
		{ name: 'showLabels', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={ThemeSwitcher} title="ThemeSwitcher" description="Switch between multiple UI color palettes." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3 rounded-xl border p-4" style="background:var(--app-bg,#f7f7f9);color:var(--app-text,#171923);border-color:var(--app-line,#d8deea);">
			<ThemeSwitcher
				currentScheme={values.currentScheme}
				showLabels={values.showLabels}
				onSchemeChange={(theme) => (selectedTheme = theme)}
			/>
			<p class="text-sm">Selected UI theme: {selectedTheme}</p>
		</div>
	{/snippet}
</Story>



