import { ManagerThemeContext } from '$stylist/theme/class/manager/theme-context';

function createThemeConsumerState() {
	const themeContext = ManagerThemeContext.getOptional();

	return {
		get themeContext() {
			return themeContext;
		}
	};
}

export default createThemeConsumerState;

