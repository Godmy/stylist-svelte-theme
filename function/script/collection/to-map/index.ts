/**
 * A new plain `Map` of `entries`. For lookups and copy-on-write state,
 * not for maps mutated in place: those belong in a `SvelteMap`.
 */
export function toMap<K, V>(entries: Iterable<readonly [K, V]> = []): Map<K, V> {
	return new Map(entries);
}
