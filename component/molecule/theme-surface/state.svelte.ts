import type { RecipeThemeSurface } from '$stylist/theme/interface/recipe/theme-surface';

export function createThemeSurfaceState(props: RecipeThemeSurface) {
	const restProps = $derived.by(() => {
		const {
			content: _content,
			header: _header,
			footer: _footer,
			class: _class,
			headerClass: _headerClass,
			contentClass: _contentClass,
			footerClass: _footerClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get restProps() {
			return restProps;
		}
	};
}

export default createThemeSurfaceState;
