import { StyleManagerThemeContext } from '$stylist/theme/class/style-manager/theme-context';
import type { ThemeContextRecipe } from '$stylist/theme/interface/recipe/theme-context';

function createThemeContextState(props: ThemeContextRecipe) {
	const rootClass = $derived(StyleManagerThemeContext.root(props.class));
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
