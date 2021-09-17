import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';
import {services} from '../services';

export class UI implements IStore {
  appLaunches = 0;
  incAppLaunces = (v = 1): void => {
    this.appLaunches += v;
  };

  isSystemAppearance = true;
  appearance: AppearanceMode = 'light';
  setAppearanceMode = (v: UIAppearance): void => {
    const {nav} = services;

    this.isSystemAppearance = v === 'System';
    this.appearance = this.appearanceFromUIToInternal(v);
    nav.restart();
  };
  get appearanceName(): UIAppearance {
    return this.isSystemAppearance ? 'System' : this.appearanceFromInternalToUI(this.appearance);
  }
  private appearanceFromInternalToUI = (v: AppearanceMode): UIAppearance => {
    return v === 'light' ? 'Light' : 'Dark';
  };
  private appearanceFromUIToInternal = (v: UIAppearance): AppearanceMode => {
    return v === 'Light' ? 'light' : 'dark';
  };

  isSystemLanguage = true;
  language: Language = 'en';
  setLanguage = (v: UILanguage): void => {
    const {nav} = services;

    this.isSystemLanguage = v === 'System';
    this.language = this.languageFromUIToInternal(v);
    nav.restart();
  };
  get languageName(): UILanguage {
    return this.isSystemLanguage ? 'System' : this.languageFromInternalToUI(this.language);
  }
  private languageFromInternalToUI = (v: Language): UILanguage => {
    return v === 'en' ? 'English' : 'Russian';
  };
  private languageFromUIToInternal = (v: UILanguage): Language => {
    return v === 'English' ? 'en' : 'ru';
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'UI',
      properties: [
        'appLaunches',
        'isSystemAppearance',
        'appearance',
        'isSystemLanguage',
        'language',
      ],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
