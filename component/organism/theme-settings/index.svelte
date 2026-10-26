<script lang="ts">
	import HtmlForm from '$stylist/html/component/organism/form/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import HtmlStrong from '$stylist/html/component/atom/strong/index.svelte';
	import { ManagerThemeSettings } from '$stylist/theme/class/manager/theme-settings';
	import type { RecipeThemeSettings } from '$stylist/theme/interface/recipe/theme-settings';
	import createThemeSettingsState from '$stylist/theme/component/organism/theme-settings/state.svelte';
	import { formatLabel } from '$stylist/theme/function/script/format-label';
	import { resolveThemeMode } from '$stylist/theme/function/script/css/resolve-theme-mode';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
	import ThemeSwitcher from '$stylist/theme/component/molecule/theme-switcher/index.svelte';
	import ThemeSurface from '$stylist/theme/component/molecule/theme-surface/index.svelte';
	import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
	import type { TokenThemeScheme } from '$stylist/theme/type/alias/theme-scheme';

	let {
		themeMode,
		themeScheme,
		themes,
		modeSection,
		schemeSection,
		onThemeModeChange,
		onThemeSchemeChange,
		modeToggleProps: modeToggleRecipeProps = {},
		switcherProps: switcherRecipeProps = {},
		class: className = '',
		...restProps
	}: RecipeThemeSettings = $props();

	const themeContext = ManagerThemeContext.getOptional();
	const resolvedSettings = $derived(
		ManagerThemeSettings.createContract({
			themeMode,
			themeScheme,
			themes,
			modeSection,
			schemeSection,
			onThemeModeChange,
			onThemeSchemeChange
		})
	);
	const state = createThemeSettingsState(() => resolvedSettings);

	function handleModeChange(nextTheme: 'light' | 'dark' | 'default') {
		state.handleThemeModeChange(nextTheme);
	}

	function handleSchemeChange(nextTheme: TokenThemeScheme) {
		state.handleThemeSchemeChange(nextTheme);
	}

	const classNameStr = $derived(className == null ? undefined : String(className));
	const formClass = $derived(['c-theme-settings', classNameStr].filter(Boolean).join(' '));
	const surfaceClass = 'c-theme-settings__surface';
	const surfaceHeadingClass = 'c-theme-settings__surface-heading';
	const surfaceEyebrowClass = 'c-theme-settings__surface-eyebrow';
	const surfaceTitleClass = 'c-theme-settings__surface-title';
	const surfaceHelpClass = 'c-theme-settings__surface-help';
	const surfaceSummaryClass = 'c-theme-settings__surface-summary';
	const surfaceBadgeClass = 'c-theme-settings__surface-badge';
	const itemClass = 'c-theme-settings__item';
	const itemColumnClass = 'c-theme-settings__item c-theme-settings__item--column';
	const metaClass = 'c-theme-settings__meta';
	const metaEyebrowClass = 'c-theme-settings__meta-eyebrow';
	const titleClass = 'c-theme-settings__title';
	const helpClass = 'c-theme-settings__help';
	const controlClass = 'c-theme-settings__control';
	const modeToggleProps = $derived({
		...modeToggleRecipeProps,
		themeScheme: state.localThemeScheme
	});
	const switcherProps = $derived({
		compact: false,
		showHeader: false,
		showLabels: true,
		...switcherRecipeProps
	});
	const switcherThemes = $derived([...resolvedSettings.themes]);
	const modeDescription = $derived(
		resolvedSettings.modeSection.description || state.localThemeMode
	);

	const currentModeLabel = $derived(formatLabel(themeContext?.themeMode ?? state.localThemeMode));
	const currentSchemeLabel = $derived(formatLabel(state.localThemeScheme));
	const effectiveThemeMode = $derived(
		resolveThemeMode(themeContext?.themeMode ?? state.localThemeMode)
	);
</script>

<HtmlForm class={formClass} {...restProps}>
	<ThemeSurface class={surfaceClass}>
		{#snippet header(themeContext)}
			<HtmlDiv class={surfaceHeadingClass}>
				<HtmlDiv class={surfaceEyebrowClass}>Appearance Settings</HtmlDiv>
				<HtmlDiv class={surfaceSummaryClass}>
					<HtmlDiv class={surfaceBadgeClass}>
						<HtmlSpan>Mode</HtmlSpan>
						<HtmlStrong>{currentModeLabel}</HtmlStrong>
					</HtmlDiv>
					<HtmlDiv class={surfaceBadgeClass}>
						<HtmlSpan>Scheme</HtmlSpan>
						<HtmlStrong>{currentSchemeLabel}</HtmlStrong>
					</HtmlDiv>
				</HtmlDiv>
			</HtmlDiv>
		{/snippet}

		{#snippet content(themeContext)}
			{#if resolvedSettings.modeSection.show}
				<HtmlDiv class={itemClass}>
					<HtmlDiv class={metaClass}>
						<HtmlDiv class={metaEyebrowClass}>Display Mode</HtmlDiv>
						<HtmlDiv class={titleClass}>{resolvedSettings.modeSection.title}</HtmlDiv>
						<HtmlDiv class={helpClass}>
							{resolvedSettings.modeSection.description ||
								themeContext?.themeMode ||
								modeDescription}
						</HtmlDiv>
					</HtmlDiv>
					<HtmlDiv class={controlClass}>
						<ThemeModeToggle
							{...modeToggleProps}
							themeMode={state.localThemeMode}
							onThemeModeChange={handleModeChange}
						/>
					</HtmlDiv>
				</HtmlDiv>
			{/if}

			{#if resolvedSettings.schemeSection.show}
				<HtmlDiv class={itemColumnClass}>
					<HtmlDiv class={metaClass}>
						<HtmlDiv class={metaEyebrowClass}>Palette</HtmlDiv>
						<HtmlDiv class={titleClass}>{resolvedSettings.schemeSection.title}</HtmlDiv>
						<HtmlDiv class={helpClass}>{resolvedSettings.schemeSection.description}</HtmlDiv>
					</HtmlDiv>
					<HtmlDiv class={controlClass}>
						<ThemeSwitcher
							class={switcherProps.class}
							compact={switcherProps.compact}
							showHeader={switcherProps.showHeader}
							showLabels={switcherProps.showLabels}
							themeScheme={state.localThemeScheme}
							themes={switcherThemes}
							themeMode={effectiveThemeMode}
							onThemeSchemeChange={handleSchemeChange}
						/>
					</HtmlDiv>
				</HtmlDiv>
			{/if}
		{/snippet}
	</ThemeSurface>
</HtmlForm>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer theme {
		:global {
			:where(.c-theme-settings) {
				display: grid;
				gap: calc(var(--space-4, 1rem) * var(--density-scale, 1));
			}
			/* One class of specificity: overrides the ThemeSurface it styles, whatever the stylesheet order. */
			:where(.c-theme-settings) .c-theme-settings__surface {
				display: grid;
				gap: calc(var(--space-5, 1.25rem) * var(--density-scale, 1));
				border-color: color-mix(in srgb, var(--line, var(--color-border-primary)) 78%, transparent);
				background: var(--surface, var(--color-background-primary));
				box-shadow: var(--elevation-card);
			}
			:where(.c-theme-settings__surface-heading) {
				display: grid;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				padding-bottom: calc(var(--space-1-5, 0.375rem) * var(--density-scale, 1));
			}
			:where(.c-theme-settings__surface-eyebrow, .c-theme-settings__meta-eyebrow) {
				font-size: var(--font-size-3, 0.75rem);
				font-weight: var(--font-weight-bold, 700);
				text-transform: uppercase;
				letter-spacing: var(--letter-spacing-expanded, 0.12em);
				color: color-mix(in srgb, var(--muted, var(--color-text-secondary)) 92%, transparent);
			}
			:where(.c-theme-settings__surface-title, .c-theme-settings__title) {
				font-size: var(--font-size-4-5, 1.125rem);
				font-weight: var(--font-weight-semibold, 600);
				color: var(--text, var(--color-text-primary));
				letter-spacing: var(--letter-spacing-narrow, -0.01em);
			}
			:where(.c-theme-settings__surface-title) {
				font-size: var(--font-size-5, 1.25rem);
				line-height: var(--line-height-tight, 1.25);
			}
			:where(.c-theme-settings__surface-help, .c-theme-settings__help) {
				font-size: var(--font-size-3-5, 0.875rem);
				color: var(--muted, var(--color-text-secondary));
			}
			:where(.c-theme-settings__surface-summary) {
				display: flex;
				flex-wrap: wrap;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
			}
			:where(.c-theme-settings__surface-badge) {
				display: inline-flex;
				align-items: center;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				padding: calc(var(--space-2, 0.5rem) * var(--density-scale, 1))
					calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				border-radius: var(--radius-full, 9999px);
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 76%, transparent);
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 88%,
					white 12%
				);
				font-size: var(--font-size-3, 0.75rem);
				line-height: var(--line-height-none, 1);
				color: var(--text, var(--color-text-primary));
				box-shadow: var(--elevation-level1);
			}
			:where(.c-theme-settings__surface-badge strong) {
				font-size: var(--font-size-3-5, 0.875rem);
			}
			:where(.c-theme-settings__item) {
				display: grid;
				gap: calc(var(--space-4, 1rem) * var(--density-scale, 1));
				grid-template-columns: minmax(180px, 0.8fr) minmax(220px, 1fr);
				align-items: center;
				padding: calc(var(--space-4, 1rem) * var(--density-scale, 1))
					calc(var(--space-5, 1.25rem) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid
					color-mix(in srgb, var(--line, var(--color-border-primary)) 74%, transparent);
				border-radius: var(--radius-4, 1rem);
				background: color-mix(
					in srgb,
					var(--surface, var(--color-background-primary)) 96%,
					var(--bg, var(--color-background-secondary)) 4%
				);
				box-shadow: var(--elevation-level1);
			}
			:where(.c-theme-settings__item--column) {
				grid-template-columns: 1fr;
				align-items: start;
			}
			:where(.c-theme-settings__meta) {
				display: grid;
				gap: calc(var(--space-2, 0.5rem) * var(--density-scale, 1));
				align-content: start;
			}
			:where(.c-theme-settings__control) {
				display: grid;
				gap: calc(var(--space-3, 0.75rem) * var(--density-scale, 1));
				align-items: stretch;
				justify-content: stretch;
				justify-self: stretch;
				min-width: 0;
			}
			:where(.c-theme-settings__item) .c-theme-mode-toggle {
				min-width: 3.6rem;
				min-height: 3.6rem;
				justify-content: center;
			}
			:where(.c-theme-settings__item--column) .c-theme-switcher {
				width: 100%;
			}
			:where(.c-theme-settings__item--column) .c-theme-switcher__list {
				grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
			}
			:where(.c-theme-settings__item--column) .c-theme-switcher__item {
				min-height: 11.75rem;
			}
			@media (max-width: 640px) {
				:where(.c-theme-settings__item) {
					grid-template-columns: 1fr;
					padding: calc(var(--space-4, 1rem) * var(--density-scale, 1));
				}
				:where(.c-theme-settings__control) {
					justify-content: flex-start;
				}
			}
		}
	}
</style>
