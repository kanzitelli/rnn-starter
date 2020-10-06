import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';

class CounterStore implements IStore {
  STORAGE_ID = 'CounterStore';
  constructor() { makeObservable(this) }

  @persist @observable value = 0;

  @action increment = async () => {
    this.value += 1;
  }

  @action decrement = async () => {
    this.value -= 1;
  }
}

export default new CounterStore();