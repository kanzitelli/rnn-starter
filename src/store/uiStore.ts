import { observable } from 'mobx';
import { persist } from 'mobx-persist';

class UIStore implements IStore {
  STORAGE_ID = 'UIStore';

  @observable networkType: string | undefined = '';
}

export default new UIStore();