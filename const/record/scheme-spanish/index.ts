import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { COLORS_SCALES_AMBER } from '$stylist/design-token/const/record/colors-scales/amber';
import { COLORS_SCALES_BLUE } from '$stylist/design-token/const/record/colors-scales/blue';
import type { ThemeSchemeDefinition } from '$stylist/theme/type/object/theme-scheme-definition';

/** Spanish noon: warm porcelain, vermilion, sunshine and deep ink. */
export const SCHEME_SPANISH: ThemeSchemeDefinition = {
 id: 'spanish', label: '????????? ???????', description: '?????? ?????, ????????? ??????? ? ????????? ??????',
 light: {
  ...THEME_MODE_LIGHT,
  colors: {
   ...THEME_MODE_LIGHT.colors,
   primary: {50:'#fff2ee',100:'#ffdfd5',200:'#ffc0ad',300:'#ff9478',400:'#f46c4b',500:'#da4425',600:'#b9321d',700:'#982918',800:'#782619',900:'#542016',950:'#32130d'},
   secondary: COLORS_SCALES_AMBER, tertiary: COLORS_SCALES_BLUE,
   background: {...THEME_MODE_LIGHT.colors.background,primary:'#fffaf3',secondary:'#fff0df',tertiary:'#ffe5cd',default:'#fffaf3',subtle:'#fff5e8',raised:'#ffffff',floating:'#ffffff',container:'#fff0df',containerLow:'#fff5e8',containerHigh:'#ffe5cd',inverse:'#262126'},
   text: {...THEME_MODE_LIGHT.colors.text,primary:'#262126',secondary:'#66534c',tertiary:'#745b50',default:'#262126',link:'#b9321d'},
   border: {...THEME_MODE_LIGHT.colors.border,primary:'#e5d5c7',secondary:'#d0b5a2',tertiary:'#f0e3d7',default:'#e5d5c7',accent:'#b9321d'},
   onPrimary:'#ffffff',onSecondary:'#262126',onBackground:'#262126',onSurface:'#262126',onSurfaceContainer:'#262126',
   primaryContainer:'#ffdfd5',onPrimaryContainer:'#782619',secondaryContainer:'#ffe3a0',onSecondaryContainer:'#542f12'
  }
 },
 dark: {...THEME_MODE_DARK,colors:{...THEME_MODE_DARK.colors,primary:{50:'#fff2ee',100:'#ffdfd5',200:'#ffc0ad',300:'#ff9478',400:'#f46c4b',500:'#da4425',600:'#b9321d',700:'#982918',800:'#782619',900:'#542016',950:'#32130d'},secondary:COLORS_SCALES_AMBER,onPrimary:'#ffffff',primaryContainer:'#782619',onPrimaryContainer:'#ffdfd5'}}
};
