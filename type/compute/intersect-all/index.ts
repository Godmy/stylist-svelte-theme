export type ComputeIntersectAll<TTypes extends readonly unknown[]> = TTypes extends readonly [
	infer THead,
	...infer TTail
]
	? THead & ComputeIntersectAll<TTail>
	: {};
