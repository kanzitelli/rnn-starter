import { makeAutoObservable } from 'mobx';
import { hydrateStore, makePersistable } from 'mobx-persist-store';

export class UI implements IStore {
  appLaunches = 0;
  incAppLaunces = (v = 1): void => {
    this.appLaunches += v;
  };

  themeMode: ThemeMode = 'light';
  setThemeMode = (v: ThemeMode): void => {
    this.themeMode = v;
  };
  toggleThemeMode = (): void => {
    this.themeMode = (() => {
      if (this.themeMode === 'light') return 'dark';
      if (this.themeMode === 'dark') return 'other';
      return 'light';
    })();
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'UI',
      properties: ['appLaunches', 'themeMode'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
