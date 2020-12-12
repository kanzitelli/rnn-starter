import * as Updates from 'expo-updates';
import { stores } from '../stores';

class AppUpdatesService implements IService {
  init = async () => {
    this.checkForAppUpdate();
  }

  checkForAppUpdate = async () => {
    if (__DEV__) return;

    try {
      stores.ui.setIsCheckingForAppUpdates(true);

      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }

      stores.ui.setIsCheckingForAppUpdates(false);
    }
    catch (e) {
      // handle error
      console.error(e)
    }
  }
}

export default new AppUpdatesService();