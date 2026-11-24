/**
 * A new plain `Set` of `items`. For lookups and copy-on-write state
 * (`selected = toggleInSet(selected, id)`), not for sets mutated in place:
 * those belong in a `SvelteSet`.
 */
export function toSet<T>(items: Iterable<T> = []): Set<T> {
	return new Set(items);
}
