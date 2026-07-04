export function resolveAriaLabel(
	ariaLabel: string | undefined,
	restProps: Record<string, unknown>,
	fallback = ''
): string {
	const ariaLabelFromProps =
		typeof restProps['aria-label'] === 'string' ? (restProps['aria-label'] as string) : '';

	return ariaLabel || ariaLabelFromProps || fallback;
}
