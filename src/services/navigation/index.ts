import { Navigation } from 'react-native-navigation';
import { Colors } from 'react-native-ui-lib';
import { gestureHandlerRootHOC as withGestureHandler } from 'react-native-gesture-handler';

import { Screen, screens, screensLayouts } from '../../screens';
import { withStores } from '../../stores';
import { withServices } from '../../services';

import { BottomTabs, Component, Root, Stack } from './layout';

export class Nav implements IService {
  private inited = false;
  N = Navigation;

  init = async (): PVoid => {
    if (!this.inited) {
      await this.registerScreens();
      await this.setDefaultOptions();

      this.inited = true;
    }
  };

  // Start different apps' logic
  startOneScreenApp = (): void => {
    Navigation.setRoot(Root(Stack(Component(screensLayouts.Main))));
  };

  startThreeTabsApp = (): void => {
    Navigation.setRoot(
      Root(
        BottomTabs([
          Stack(Component(screensLayouts.Main)),
          Stack(Component(screensLayouts.Example)),
          Stack(Component(screensLayouts.Settings)),
        ]),
      ),
    );
  };

  // Navigation methods
  push = <T>(cId: string, name: Screen, passProps?: T): void => {
    this.N.push(cId, Component({ ...screensLayouts[name], passProps }));
  };

  pop = (cId: string): void => {
    this.N.pop(cId);
  };

  show = <T>(name: Screen, passProps?: T): void => {
    this.N.showModal(Stack(Component({ ...screensLayouts[name], passProps })));
  };

  // System methods
  private registerScreens = async () => {
    screens.forEach((s) =>
      Navigation.registerComponent(
        s.name,
        () => withGestureHandler(withStores(withServices(s.component))),
        () => s.component,
      ),
    );
  };

  private setDefaultOptions = async () => {
    Navigation.setDefaultOptions({
      layout: {
        orientation: ['portrait'],
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow',
      },
      bottomTab: {
        iconColor: Colors.primary,
        textColor: Colors.primary,
        selectedIconColor: Colors.primary,
        selectedTextColor: Colors.primary,
      },
      topBar: {
        largeTitle: {
          visible: true,
        },
      },
    });
  };
}
