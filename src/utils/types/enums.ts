const _languages = {
  system: 'System',
  en: 'EN',
  ru: 'RU',
} as const;
export type Language = keyof typeof _languages;
export type LanguageUI = typeof _languages[Language];
export const languageToUI: Record<Language, LanguageUI> = {
  system: 'System',
  en: 'EN',
  ru: 'RU',
};
export const languageUIToInternal: Record<LanguageUI, Language> = {
  System: 'system',
  EN: 'en',
  RU: 'ru',
};
export const languages: Language[] = ['system', 'en', 'ru'];
export const languagesUI: LanguageUI[] = ['System', 'EN', 'RU'];

const _appearances = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
} as const;
export type Appearance = keyof typeof _appearances;
export type AppearanceUI = typeof _appearances[Appearance];
export const appearanceToUI: Record<Appearance, AppearanceUI> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};
export const appearanceUIToInternal: Record<AppearanceUI, Appearance> = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
};
export const appearances: Appearance[] = ['system', 'light', 'dark'];
export const appearancesUI: AppearanceUI[] = ['System', 'Light', 'Dark'];
