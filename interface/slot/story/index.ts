export interface SlotStory {
	name: string;
	type: 'text' | 'number' | 'boolean' | 'select' | 'range' | 'color' | 'object' | 'array' | string;
	label?: string;
	description?: string;
	defaultValue?: unknown;
	options?: readonly unknown[];
	min?: number;
	max?: number;
	step?: number;
}
