import { Navigation } from 'react-native-navigation';
import { Root, BottomTabs, StackWith, Component } from './layout';
import { ScreenNames } from './screens';
import NavigationSystem from './system';
import { getTabOptions } from './tabs';

class NavigationService extends NavigationSystem implements IService {
  init = async () => {
    await this.initSystem();
  }

  pushStarter = async (cId: string) => {
    this.push(cId, ScreenNames.StarterScreen)
  }

  showStarter = async () => {
    this.show(ScreenNames.StarterScreen)
  showAppUpdate = async () => {
    this.showOverlay(ScreenNames.AppUpdateScreen);
  }

  // APP

  startApp = async () => {
    const tabOptions = await getTabOptions();

    Navigation.setRoot(
      Root(
        BottomTabs([
          StackWith(
            Component(ScreenNames.StarterScreen),
            { ...tabOptions[0] },
          ),

          StackWith(
            Component(ScreenNames.SettingsScreen),
            tabOptions[1],
          ),
        ])
      )
    );
  }
}

export default new NavigationService();
