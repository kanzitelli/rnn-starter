import { Navigation } from 'react-native-navigation';
import { Root, BottomTabs, StackWith, Component } from './layout';
import { screens } from './screens';
import NavigationSystem from './system';
import { getTabOptions } from './tabs';

class NavigationService extends NavigationSystem implements IService {
  init = async () => {
    await this.initSystem();
  }

  pushSettings = async (cId: string) => {
    this.push(cId, screens.settings.id);
  }

  showSettings = async () => {
    this.show(screens.settings.id);
  }

  showAppUpdate = async () => {
    this.showOverlay(screens.appUpdates.id);
  }

  // APP

  startApp = async () => {
    const tabOptions = await getTabOptions();

    Navigation.setRoot(
      Root(
        BottomTabs([
          StackWith(
            Component(screens.starter.id),
            { ...tabOptions[0] },
          ),

          StackWith(
            Component(screens.settings.id),
            tabOptions[1],
          ),
        ])
      )
    );
  }
}

export default new NavigationService();
