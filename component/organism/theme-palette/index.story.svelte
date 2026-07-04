<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { THEME_SCHEMES } from '$stylist/theme/const/record/theme-schemes';
	import ThemePalette from './index.svelte';

	const columnOptions = [2, 3, 4, 5, 6];
	const schemeOptions = THEME_SCHEMES.map((scheme) => scheme.id);
	const modeOptions = ['light', 'dark'];
	const colorSourceOptions = ['semantic', 'background', 'text', 'border', 'primary', 'secondary', 'neutral'];

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'scheme',
			type: 'select',
			defaultValue: schemeOptions[0],
			options: schemeOptions,
			description: 'Theme scheme'
		},
		{
			name: 'mode',
			type: 'select',
			defaultValue: 'light',
			options: modeOptions,
			description: 'Theme mode'
		},
		{
			name: 'colorSource',
			type: 'select',
			defaultValue: 'semantic',
			options: colorSourceOptions,
			description: 'Theme color source'
		},
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Theme Palette',
			description: 'Title for the color palette'
		},
		{
			name: 'showLabels',
			type: 'boolean',
			defaultValue: true,
			description: 'Whether to show color labels'
		},
		{
			name: 'showValues',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether to show color values'
		},
		{
			name: 'columns',
			type: 'select',
			defaultValue: 4,
			options: columnOptions,
			description: 'Number of columns to display'
		}
	];

	function getTheme(values: any) {
		const scheme = THEME_SCHEMES.find((item) => item.id === values.scheme) ?? THEME_SCHEMES[0];
		return values.mode === 'dark' ? scheme.dark : scheme.light;
	}

	function getScaleColors(scale: Record<number, string>, label: string) {
		return Object.entries(scale).map(([tone, value]) => ({ name: `${label} ${tone}`, value }));
	}

	function getRecordColors(record: Record<string, string>, label: string) {
		return Object.entries(record).map(([name, value]) => ({ name: `${label} ${name}`, value }));
	}

	function getSemanticColors(values: any) {
		const colors = getTheme(values).colors;
		return [
			{ name: 'primary', value: colors.primary[500] },
			{ name: 'secondary', value: colors.secondary[500] },
			{ name: 'tertiary', value: colors.tertiary?.[500] ?? colors.primary[600] },
			{ name: 'neutral', value: colors.neutral[500] },
			{ name: 'success', value: colors.success[500] },
			{ name: 'info', value: colors.info[500] },
			{ name: 'warning', value: colors.warning[500] },
			{ name: 'error', value: colors.error[500] },
			{ name: 'danger', value: colors.danger[500] },
			{ name: 'surface', value: colors.background.primary },
			{ name: 'text', value: colors.text.primary },
			{ name: 'border', value: colors.border.primary }
		];
	}

	function getThemePaletteColors(values: any) {
		const colors = getTheme(values).colors;

		if (values.colorSource === 'background') return getRecordColors(colors.background, 'background');
		if (values.colorSource === 'text') return getRecordColors(colors.text, 'text');
		if (values.colorSource === 'border') return getRecordColors(colors.border, 'border');
		if (values.colorSource === 'primary') return getScaleColors(colors.primary, 'primary');
		if (values.colorSource === 'secondary') return getScaleColors(colors.secondary, 'secondary');
		if (values.colorSource === 'neutral') return getScaleColors(colors.neutral, 'neutral');

		return getSemanticColors(values);
	}
</script>

<Story
	id="atoms-theme-palette"
	title="ThemePalette"
	component={ThemePalette}
	category="Atoms/Interaction/Controls/Selectors"
	description="ThemePalette component for selecting colors."
	tags={['color', 'palette', 'selector', 'picker']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ThemePalette
				title={values.title as string}
				showLabels={values.showLabels as boolean}
				showValues={values.showValues as boolean}
				columns={Number(values.columns) || 4}
				colors={getThemePaletteColors(values)}
				onValueChange={() => {}}
			/>
		</div>
	{/snippet}

	{#snippet variants()}
		<div class="_c2">
			{#each THEME_SCHEMES as scheme}
				<div>
					<h3 class="_c3">{scheme.label} light</h3>
					<ThemePalette
						colors={getSemanticColors({ scheme: scheme.id, mode: 'light' })}
						title={`${scheme.label} light`}
						showLabels={true}
						showValues={true}
						columns={4}
					/>
				</div>
				<div>
					<h3 class="_c3">{scheme.label} dark</h3>
					<ThemePalette
						colors={getSemanticColors({ scheme: scheme.id, mode: 'dark' })}
						title={`${scheme.label} dark`}
						showLabels={true}
						showValues={true}
						columns={4}
					/>
				</div>
			{/each}
			<div>
				<h3 class="_c3">Background Tokens</h3>
				<ThemePalette
					colors={getThemePaletteColors({
						scheme: schemeOptions[0],
						mode: 'light',
						colorSource: 'background'
					})}
					title="Background Tokens"
					showLabels={true}
					showValues={true}
					columns={4}
				/>
			</div>
			<div>
				<h3 class="_c3">Text Tokens</h3>
				<ThemePalette
					colors={getThemePaletteColors({ scheme: schemeOptions[0], mode: 'light', colorSource: 'text' })}
					title="Text Tokens"
					showLabels={true}
					showValues={true}
					columns={3}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 2rem;
		padding: 1rem;
	}
	._c3 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
</style>
