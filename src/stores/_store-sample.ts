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

  // Unified set methods
  set<T extends StoreKeysOf<SampleStore>>(what: T, value: SampleStore[T]) {
    (this as SampleStore)[what] = value;
  }
  setMany<T extends StoreKeysOf<SampleStore>>(obj: Record<T, SampleStore[T]>) {
    for (const [k, v] of Object.entries(obj)) {
      this.set(k as T, v as SampleStore[T]);
    }
  }

  // Hydration
  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
