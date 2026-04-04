<script lang="ts">
	import type { ThemeProviderRecipe } from '$stylist/theme/interface/recipe/theme-provider';
	import { createThemeProviderState } from '$stylist/theme/function/state/theme-provider';

	let props: ThemeProviderRecipe = $props();
	const state = createThemeProviderState(props);

	const restProps = $derived((() => {
		const {
			initialMode: _initialMode,
			initialScheme: _initialScheme,
			class: _class,
			children: _children,
			...rest
		} = props;
		return rest;
	})());
</script>

<div class={state.containerClass} {...restProps}>
	{@render props.children()}
</div>
