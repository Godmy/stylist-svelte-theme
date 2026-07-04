/** Токены границы (рамки) элемента */
export interface SlotThemeBorder {
	/** Толщина границы (px или токен CSS) */
	borderWidth?: 'none' | 'thin' | 'medium' | 'thick' | string;
	/** Стиль линии границы */
	borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none';
	/** Цвет границы (CSS-переменная, токен или hex) */
	borderColor?: string;
	/** Скругление углов (токен: none / sm / md / lg / xl / full) */
	borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string;
}
