import { setContext, getContext, hasContext } from 'svelte';
import { TOKEN_STORY_VIEWPORT_CONTEXT } from '$stylist/theme/const/value/story-viewport-context';
import type { RecipeStoryViewport } from '$stylist/theme/interface/recipe/story-viewport';
import type { TokenStoryViewport } from '$stylist/theme/type/alias/story-viewport';

export class ManagerStoryViewportContext {
	/**
	 * Устанавливает контекст viewport-а превью истории в Svelte контекст.
	 * Позволяет родителю (например, domain-file-preview) сообщить Story,
	 * в каком viewport (mobile/tablet/desktop/fullscreen) сейчас показывается
	 * превью, не оборачивая всю историю целиком во внешнюю рамку устройства.
	 */
	static set(getViewport: () => TokenStoryViewport): RecipeStoryViewport {
		const context: RecipeStoryViewport = {
			get viewport() {
				return getViewport();
			}
		};

		setContext(TOKEN_STORY_VIEWPORT_CONTEXT, context);
		return context;
	}

	/**
	 * Получает контекст viewport-а истории (опциональный).
	 * Возвращает undefined, если контекст не установлен — Story тогда
	 * рендерит превью без ограничения ширины (как раньше).
	 */
	static getOptional(): RecipeStoryViewport | undefined {
		return hasContext(TOKEN_STORY_VIEWPORT_CONTEXT)
			? getContext<RecipeStoryViewport>(TOKEN_STORY_VIEWPORT_CONTEXT)
			: undefined;
	}
}
