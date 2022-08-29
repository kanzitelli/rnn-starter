import {stores} from '../stores';

export class OnStartService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.incAppLaunches();

      this.inited = true;
    }
  };

  private incAppLaunches() {
    const {ui} = stores;

    ui.set('appLaunches', ui.appLaunches + 1);
  }
}
