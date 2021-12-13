import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class SampleStore implements IStore {
  someProperty = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: SampleStore.name,
      properties: ['someProperty'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
