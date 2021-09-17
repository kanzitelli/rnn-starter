import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class UI implements IStore {
  appLaunches = 0;
  incAppLaunces = (v = 1): void => {
    this.appLaunches += v;
  };

  isSystemTheme = true;
  theme: ThemeMode = 'light';
  setThemeMode = (v: ThemeMode): void => {
    this.isSystemTheme = false;
    this.theme = v;
  };
  setSystemThemeMode = (): void => {
    this.isSystemTheme = true;
  };
  get themeName(): UIAppearance {
    return this.isSystemTheme ? 'System' : this.theme === 'light' ? 'Light' : 'Dark';
  }

  isSystemLanguage = true;
  language: Language = 'en';
  setLanguage = (v: Language): void => {
    this.isSystemLanguage = false;
    this.language = v;
  };
  setSystemLanguage = (): void => {
    this.isSystemLanguage = true;
  };
  get languageName(): UILanguage {
    return this.isSystemLanguage ? 'System' : this.language === 'en' ? 'English' : 'Russian';
  }

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'UI',
      properties: ['appLaunches', 'isSystemTheme', 'theme', 'isSystemLanguage', 'language'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
