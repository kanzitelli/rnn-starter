import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

import { generateTheme } from '../utils/useStyles';

class UIStore implements IStore {
  STORAGE_ID = 'UIStore';

  @observable networkType: string | undefined = '';
  @observable theme = generateTheme(); // current theme, set in services.darkmode
  @observable componentId = ''; // current component id

  @action toggleThemeTo = (theme: ThemeType) => {
    this.theme = theme;
  }
}

export default new UIStore();