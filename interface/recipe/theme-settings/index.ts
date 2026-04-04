import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ThemeSettingsContract } from '$stylist/theme/interface/contract/theme-settings';

export interface ThemeSettingsRecipe extends RecordArchitectureMerge<[
	InteractionHTMLAttributes<HTMLFormElement>
]> {
	contract: ThemeSettingsContract;
	class?: string;
}
