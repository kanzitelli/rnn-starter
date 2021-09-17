import {Constants, Navigation, NavigationConstants, Options} from 'react-native-navigation';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';
import pipe from 'lodash/flowRight';

import {Screen, screens, screensLayouts} from '../../screens';
import {withStores} from '../../stores';
import {services, withServices} from '../../services';
import {configureDesignSystem} from '../../utils/designSystem';

import {BottomTabs, Component, Root, Stack} from './layout';
import {navDefaultOptions} from './options';

export class Nav implements IService {
  private inited = false;
  private N = Navigation;
  // nav constants always updated on willAppear event
  C: NavigationConstants = Constants.getSync();

  init = async (): PVoid => {
    if (!this.inited) {
      await this.registerScreens();
      this.setDefaultOptions();
      this.registerListeners();

      this.inited = true;
    }
  };

  // Start different apps' logic
  start = async (appType: AppType = 'three_tabs'): PVoid => {
    if (appType === 'one_screen') {
      await this.startOneScreenApp();
    }
    if (appType === 'three_tabs') {
      await this.startThreeTabsApp();
    }

    await this.getConstants(); // needs to be called after setRoot()
  };

  restart = async (): PVoid => {
    this.setDefaultOptions(); // settings navigation options
    configureDesignSystem(); // configuring design system with updated appearance
    services.t.setup(); // setting up new language for translation service

    await this.start('three_tabs');
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
  push = async <T>(cId: string, name: Screen, passProps?: T, options?: Options): PVoid => {
    const sl = screensLayouts[name];

    await this.N.push(
      cId,
      Component({
        ...sl,
        passProps,
        options: {
          ...sl.options,
          ...options,
        },
      }),
    );
  };

  pop = async (cId: string): PVoid => {
    this.N.pop(cId);
  };

  show = async <T>(name: Screen, passProps?: T, options?: Options): PVoid => {
    const sl = screensLayouts[name];

    this.N.showModal(
      Stack(
        Component({
          ...sl,
          passProps,
          options: {
            ...sl.options,
            ...options,
          },
        }),
      ),
    );
  };

  private setDefaultOptions = (): void => {
    this.N.setDefaultOptions(navDefaultOptions());
  };

  // System methods
  private registerScreens = async () => {
    screens.forEach(s =>
      this.N.registerComponent(
        s.name,
        pipe(withGestureHandler, withStores, withServices, () => s.component),
        () => s.component,
      ),
    );
  };

  private registerListeners = () => {
    this.N.events().registerComponentWillAppearListener(() => {
      this.getConstants();
    });
  };

  private getConstants = async () => {
    this.C = Constants.getSync();
  };
}
