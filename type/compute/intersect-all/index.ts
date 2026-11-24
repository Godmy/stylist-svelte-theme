export type ComputeIntersectAll<TTypes extends readonly unknown[]> = TTypes extends readonly [
	infer THead,
	...infer TTail
]
	? THead & ComputeIntersectAll<TTail>
	: // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- identity of `&` that interfaces can still extend
		{};
