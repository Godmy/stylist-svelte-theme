<script lang="ts">
  import type { ThemeSwitcherRecipe } from '$stylist/theme/interface/recipe/theme-switcher';
  import BaseIcon from '$stylist/media/svelte/atom/icon/index.svelte';
  import { StyleManagerThemeSwitcher } from '$stylist/theme/class/style-manager/theme-switcher';
  import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';
  import { createThemeSwitcherState } from '$stylist/theme/function/state/theme-switcher';

  let {
    currentScheme = 'minimal',
    themeMode = 'default',
    class: hostClass = '',
    compact = false,
    showHeader = true,
    showLabels = false,
    themes = [],
    onSchemeChange,
    ...restProps
  }: ThemeSwitcherRecipe = $props();
  const themeContext = ManagerThemeContext.getOptional();
  const state = createThemeSwitcherState(
    {
      currentScheme,
      themeMode,
      class: hostClass,
      compact,
      showHeader,
      showLabels,
      themes,
      onSchemeChange,
      ...restProps
    },
    () => themeContext?.themeMode ?? themeMode,
    themeContext?.setScheme
  );
</script>

<svelte:head>
  <style>{StyleManagerThemeSwitcher.getStyleSheet()}</style>
</svelte:head>

<div class={StyleManagerThemeSwitcher.root(hostClass)} {...restProps}>
  {#if showHeader}
    <div class={StyleManagerThemeSwitcher.header()}>
      <BaseIcon name={StyleManagerThemeSwitcher.headerIconName} size={16} />
      <span>UI Theme</span>
    </div>
  {/if}
  <div class={StyleManagerThemeSwitcher.list(compact)}>
    {#each state.resolvedThemes as item}
      <button
        type="button"
        class={StyleManagerThemeSwitcher.item(item.id, state.scheme)}
        onclick={() => state.setScheme(item.id)}
        aria-pressed={state.scheme === item.id}
      >
        <span
          class={StyleManagerThemeSwitcher.chip()}
          style={`background:${(themeMode === 'dark' ? item.dark : item.light).colors.primary[500]};`}
        ></span>
        <span class={StyleManagerThemeSwitcher.name()}>{item.label}</span>
        {#if showLabels && !compact}
          <span class={StyleManagerThemeSwitcher.description()}>{item.description}</span>
        {/if}
      </button>
    {/each}
  </div>
</div>
