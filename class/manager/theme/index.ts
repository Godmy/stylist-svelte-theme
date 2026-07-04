export class ManagerTheme {
	private static mediaQueryList: MediaQueryList | null = null;
	private static systemThemeCache: 'light' | 'dark' | null = null;

	static getSystemThemeMode(): 'light' | 'dark' {
		if (typeof window === 'undefined') return 'light';
		if (this.systemThemeCache !== null) return this.systemThemeCache;
		if (!this.mediaQueryList) {
			this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
		}
		this.systemThemeCache = this.mediaQueryList.matches ? 'dark' : 'light';
		return this.systemThemeCache;
	}

	static initSystemThemeListener(callback: (isDark: boolean) => void): () => void {
		if (typeof window === 'undefined') return () => {};

		this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
		this.systemThemeCache = this.mediaQueryList.matches ? 'dark' : 'light';

		const handler = (event: MediaQueryListEvent) => {
			this.systemThemeCache = event.matches ? 'dark' : 'light';
			callback(event.matches);
		};

		this.mediaQueryList.addEventListener('change', handler);

		return () => {
			this.mediaQueryList?.removeEventListener('change', handler);
			this.mediaQueryList = null;
			this.systemThemeCache = null;
		};
	}

	static clearSystemThemeCache(): void {
		this.systemThemeCache = null;
	}
}
