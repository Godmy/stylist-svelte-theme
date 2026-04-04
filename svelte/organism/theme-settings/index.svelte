<script lang="ts">
  import { StyleManagerThemeSettings } from '$stylist/theme/class/style-manager/theme-settings';
  import { ObjectManagerThemeSettings } from '$stylist/theme/class/object-manager/theme-settings';
  import type { ThemeSettingsRecipe } from '$stylist/theme/interface/recipe/theme-settings';
  import { createThemeSettingsState } from '$stylist/theme/function/state/theme-settings';
  import { ThemeModeToggle, ThemeSwitcher } from '$stylist/theme';
  import { ThemeSurface } from '$stylist/layout';
  import { ThemeContextManager } from '$stylist/theme/class/object-manager/theme-context-manager';

  let {
    contract,
    class: className = '',
    ...restProps
  }: ThemeSettingsRecipe = $props();

  const themeContext = ThemeContextManager.getOptional();
  const resolvedContract = $derived(ObjectManagerThemeSettings.createContract(contract));
  const state = createThemeSettingsState(() => resolvedContract);
  
  // Используем функции из контекста темы для сохранения настроек
  function handleModeChange(nextTheme: any) {
    state.handleThemeModeChange(nextTheme);
    themeContext?.setMode?.(nextTheme);
  }
  
  function handleSchemeChange(nextTheme: any) {
    state.handleThemeSchemeChange(nextTheme);
    themeContext?.setScheme?.(nextTheme);
  }
  
  const classNameStr = $derived(className == null ? undefined : String(className));
  const formClass = $derived(StyleManagerThemeSettings.preferences('', classNameStr));
  const surfaceClass = StyleManagerThemeSettings.surface();
  const surfaceHeadingClass = StyleManagerThemeSettings.surfaceHeading();
  const surfaceTitleClass = StyleManagerThemeSettings.surfaceTitle();
  const surfaceHelpClass = StyleManagerThemeSettings.surfaceHelp();
  const itemClass = StyleManagerThemeSettings.item();
  const itemColumnClass = StyleManagerThemeSettings.item(true);
  const metaClass = StyleManagerThemeSettings.meta();
  const titleClass = StyleManagerThemeSettings.title();
  const helpClass = StyleManagerThemeSettings.help();
  const controlClass = StyleManagerThemeSettings.control();
  const modeToggleProps = $derived({
    ...resolvedContract.modeSection.toggleProps,
    defaultScheme: state.localThemeScheme
  });
  const switcherProps = $derived(resolvedContract.schemeSection.switcherProps);
  const switcherThemes = $derived([...resolvedContract.themes]);
  const modeDescription = $derived(
    resolvedContract.modeSection.description || state.localThemeMode
  );

</script>

<svelte:head>
  <style>{StyleManagerThemeSettings.getStyleSheet()}</style>
</svelte:head>

<form class={formClass} {...restProps}>
  <ThemeSurface class={surfaceClass}>
    {#snippet header(themeContext)}
      <div class={surfaceHeadingClass}>
        <div class={surfaceTitleClass}>Appearance Settings</div>
        <div class={surfaceHelpClass}>
          Current mode: {themeContext?.themeMode ?? state.localThemeMode}
        </div>
      </div>
    {/snippet}

    {#snippet content(themeContext)}
      {#if resolvedContract.modeSection.show}
      <div class={itemClass}>
        <div class={metaClass}>
          <div class={titleClass}>{resolvedContract.modeSection.title}</div>
          <div class={helpClass}>
            {resolvedContract.modeSection.description || themeContext?.themeMode || modeDescription}
          </div>
        </div>
        <div class={controlClass}>
          <ThemeModeToggle
            {...modeToggleProps}
            currentTheme={state.localThemeMode}
            onThemeChange={handleModeChange}
          />
        </div>
      </div>
      {/if}

      {#if resolvedContract.schemeSection.show}
      <div class={itemColumnClass}>
        <div class={metaClass}>
          <div class={titleClass}>{resolvedContract.schemeSection.title}</div>
          <div class={helpClass}>{resolvedContract.schemeSection.description}</div>
        </div>
        <div class={controlClass}>
          <ThemeSwitcher
            class={switcherProps.class}
            compact={switcherProps.compact}
            showHeader={switcherProps.showHeader}
            showLabels={switcherProps.showLabels}
            currentScheme={state.localThemeScheme}
            themes={switcherThemes}
            themeMode={state.localThemeMode}
            onSchemeChange={handleSchemeChange}
          />
        </div>
      </div>
      {/if}
    {/snippet}
  </ThemeSurface>
</form>
