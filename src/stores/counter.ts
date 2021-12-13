import {makeAutoObservable} from 'mobx';
import {hydrateStore, makePersistable} from 'mobx-persist-store';

export class CounterStore implements IStore {
  value = 0;
  inc = (): void => {
    this.value += 1;
  };
  dec = (): void => {
    this.value -= 1;
  };
  reset = (): void => {
    this.value = 0;
  };
  set = (v: number): void => {
    this.value = v;
  };

  loading = false;
  setLoading = (v: boolean): void => {
    this.loading = v;
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: CounterStore.name,
      properties: ['value'],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
