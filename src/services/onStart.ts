import {stores} from '../stores';

const {ui} = stores;

export class OnStart implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      ui.incAppLaunces();

      this.inited = true;
    }
  };
}
