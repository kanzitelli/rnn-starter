import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { HydratedStore } from 'src/utils/classes';

class CounterStore extends HydratedStore {
  constructor() {
    super('CounterStore'); // Storage ID

    makeObservable(this);
  }

  @persist @observable value = 0;

  @action increment = async () => {
    this.value += 1;
  }

  @action decrement = async () => {
    this.value -= 1;
  }
}

export default new CounterStore();