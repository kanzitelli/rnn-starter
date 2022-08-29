import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class CounterStore implements IStore {
  value = 0;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: CounterStore.name,
      properties: ['value'],
    });
  }

  // Unified set methods
  set<T extends StoreKeysOf<CounterStore>>(what: T, value: CounterStore[T]) {
    (this as CounterStore)[what] = value;
  }
  setMany<T extends StoreKeysOf<CounterStore>>(
    obj: Record<T, CounterStore[T]>,
  ) {
    for (const [k, v] of Object.entries(obj)) {
      this.set(k as T, v as CounterStore[T]);
    }
  }

  // Hydration
  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
