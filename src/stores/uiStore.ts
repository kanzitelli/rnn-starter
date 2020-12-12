import { observable, action, makeObservable } from 'mobx';

class UIStore {
  constructor() { makeObservable(this) }

  @observable networkType: string | undefined = '';
  @observable componentId: string = ''; // current component id
  @observable isCheckingForAppUpdates: boolean = false;

  @action setNetworkType = (value: string | undefined) => this.networkType = value;
  @action setComponentId = (value: string) => this.componentId = value;
  @action setIsCheckingForAppUpdates = (value: boolean) => this.isCheckingForAppUpdates = value;
}

export default new UIStore();