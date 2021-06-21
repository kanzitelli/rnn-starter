import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class UI implements IStore {
  appLaunches = 0;
  incAppLaunces = (v = 1): void => {
    this.appLaunches += v;
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'UI',
      properties: ['appLaunches'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
