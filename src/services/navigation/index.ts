import { ScreenNames } from './screens';
import NavigationSystem from './system';

class NavigationService extends NavigationSystem implements IService {
  init = async () => {
    await this.initSystem();
  }

  pushExpo = async (cId: string) => {
    this.push(cId, ScreenNames.ExpoScreen)
  }

  showExpo = async () => {
    this.show(ScreenNames.ExpoScreen)
  }
}

export default new NavigationService();
