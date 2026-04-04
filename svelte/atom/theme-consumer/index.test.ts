import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ThemeConsumerHarness from 'stylist-test/theme/theme-consumer-harness.svelte';

describe('ThemeConsumer', () => {
	it('provides the current theme context to child snippets', () => {
		render(ThemeConsumerHarness);

		const consumer = screen.getByTestId('theme-consumer');
		expect(consumer.getAttribute('data-theme-mode')).toBe('dark');
		expect(consumer.getAttribute('data-theme-name')).toBe('dark');
		expect(consumer.textContent).toBe('dark');
	});
});
