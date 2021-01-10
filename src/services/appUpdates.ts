import * as Updates from 'expo-updates';
import { stores } from 'src/stores';
import { services } from '.';

class AppUpdatesService implements IService {
  init = async () => {
    // this.checkForAppUpdate();
  }

  checkForAppUpdate = async () => {
    if (__DEV__) return;

    try {
      stores.ui.setIsCheckingForAppUpdates(true);

      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        services.nav.showAppUpdate();

        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }

      stores.ui.setIsCheckingForAppUpdates(false);
      services.nav.dismissAllOverlays();
    }
    catch (e) {
      // handle error
      console.error(e)
      stores.ui.setIsCheckingForAppUpdates(false);
      services.nav.dismissAllOverlays();
    }
  }
}

export default new AppUpdatesService();