import { observable, action, makeObservable } from 'mobx';

class UIStore {
  constructor() { makeObservable(this) }

  @observable networkType: string | undefined = '';
  @observable componentId: string = ''; // current component id

  @action setNetworkType = (value: string | undefined) => this.networkType = value;
  @action setComponentId = (value: string) => this.componentId = value;
}

export default new UIStore();