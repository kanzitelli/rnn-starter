import { Navigation } from 'react-native-navigation';
import { Root, BottomTabs, StackWith, Component } from './layout';
import { ScreenNames } from './screens';
import NavigationSystem from './system';
import { getTabOptions } from './tabs';

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

  // APP

  startApp = async () => {
    const tabOptions = await getTabOptions();

    Navigation.setRoot(
      Root(
        BottomTabs([
          StackWith(
            Component(ScreenNames.CounterScreen),
            { ...tabOptions[0] },
          ),

          StackWith(
            Component(ScreenNames.ExpoScreen),
            tabOptions[1],
          ),
        ])
      )
    );
  }
}

export default new NavigationService();
