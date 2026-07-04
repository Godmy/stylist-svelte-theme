import type { RecipeThemeContext } from '$stylist/theme/interface/recipe/theme-context';

function createThemeContextState(props: RecipeThemeContext) {
	const rootClass = $derived(props.class?.trim() || '');
	const restProps = $derived.by(() => {
		const { class: _class, children: _children, ...rest } = props;
		return rest;
	});

	return {
		get rootClass() {
			return rootClass;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createThemeContextState;
