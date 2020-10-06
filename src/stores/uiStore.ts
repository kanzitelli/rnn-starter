import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';

import { generateTheme } from '../utils/useStyles';

class UIStore implements IStore {
  STORAGE_ID = 'UIStore';
  constructor() { makeObservable(this) }

  @observable networkType: string | undefined = '';
  @observable theme = generateTheme(); // current theme, set in services.darkmode
  @observable componentId: string = ''; // current component id

  @action setNetworkType = (value: string | undefined) => this.networkType = value;
  @action setComponentId = (value: string) => this.componentId = value;

  @action toggleThemeTo = (theme: ThemeType) => {
    this.theme = theme;
  }
}

export default new UIStore();