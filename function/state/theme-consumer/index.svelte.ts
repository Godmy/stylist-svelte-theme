import { ThemeContextManager } from '$stylist/theme/class/object-manager/theme-context-manager';

export function createThemeConsumerState() {
	const themeContext = ThemeContextManager.getOptional();

	return {
		get themeContext() {
			return themeContext;
		}
	};
}

export default createThemeConsumerState;

