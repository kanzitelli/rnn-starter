import { Navigation, NavigationConstants } from 'react-native-navigation';
import { Colors } from 'react-native-ui-lib';
import { gestureHandlerRootHOC as withGestureHandler } from 'react-native-gesture-handler';

import { Screen, screens, screensLayouts } from '../../screens';
import { withStores } from '../../stores';
import { withServices } from '../../services';

import { BottomTabs, Component, Root, Stack } from './layout';

export class Nav implements IService {
  private inited = false;
  N = Navigation;
  // nav constants always updated on willAppear event
  C: NavigationConstants = {
    statusBarHeight: 0,
    backButtonId: '',
    topBarHeight: 0,
    bottomTabsHeight: 0,
  };

  init = async (): PVoid => {
    if (!this.inited) {
      await this.registerScreens();
      await this.setDefaultOptions();
      this.registerListeners();

      this.inited = true;
    }
  };

  // Start different apps' logic
  start = async (appType: AppType): PVoid => {
    if (appType === 'one_screen') await this.startOneScreenApp();
    if (appType === 'three_tabs') await this.startThreeTabsApp();

    await this.getConstants(); // needs to be called after setRoot()
  };

  private startOneScreenApp = async (): PVoid => {
    await Navigation.setRoot(Root(Stack(Component(screensLayouts.Main))));
  };

  private startThreeTabsApp = async (): PVoid => {
    await Navigation.setRoot(
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

  private registerListeners = () => {
    Navigation.events().registerComponentWillAppearListener(async () => {
      await this.getConstants();
    });
  };

  private getConstants = async () => {
    const C = await this.N.constants();
    this.C = C;
    return C;
  };
}
