import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export const TOKEN_COLOR_TONE_ICON = {
	default: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M8 12h8"/>
</svg>
`,
	neutral: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M9 12h6"/>
</svg>
`,
	primary: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M12 8v8"/>
  <path d="M8 12h8"/>
</svg>
`,
	secondary: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M8.5 10h7"/>
  <path d="M8.5 14h7"/>
</svg>
`,
	tertiary: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M10 8h4l-2 4h3l-5 5 1.5-4H9z"/>
</svg>
`,
	success: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M8.5 12.5l2.25 2.25L15.5 9.5"/>
</svg>
`,
	info: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M12 11v5"/>
  <path d="M12 8h.01"/>
</svg>
`,
	warning: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M12 7.5v5"/>
  <path d="M12 16h.01"/>
</svg>
`,
	danger: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M9 9l6 6"/>
  <path d="M15 9l-6 6"/>
</svg>
`,
	error: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <path d="M12 7.5v5"/>
  <path d="M12 16h.01"/>
</svg>
`
} satisfies Record<TokenColorTone, string>;
