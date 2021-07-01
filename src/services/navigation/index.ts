import { Navigation, NavigationConstants, Options } from 'react-native-navigation';
import { gestureHandlerRootHOC as withGestureHandler } from 'react-native-gesture-handler';

import { Screen, screens, screensLayouts } from '../../screens';
import { withStores } from '../../stores';
import { withServices } from '../../services';

import { BottomTabs, Component, Root, Stack } from './layout';
import { getTheme, withThemeModes } from '../../utils/designSystem';
import { navDefaultOptions } from './options';

export class Nav implements IService {
  private inited = false;
  // component ids of all presented screens
  private cIds: string[] = [];
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
      this.updateDefaultOptions();
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

  updateDefaultOptions = (allScreens = false): void => {
    const options = this.getDefaultOptions();

    this.N.setDefaultOptions(options);
    if (allScreens) this.cIds.forEach((id) => this.N.mergeOptions(id, options));
  };

  // System methods
  private registerScreens = async () => {
    screens.forEach((s) =>
      this.N.registerComponent(
        s.name,
        () => withGestureHandler(withStores(withServices(withThemeModes(s.component)))),
        () => s.component,
      ),
    );
  };

  private registerListeners = () => {
    this.N.events().registerComponentWillAppearListener(async ({ componentId: cId }) => {
      if (this.cIds.indexOf(cId) === -1) {
        this.cIds.push(cId);

        // if it appears for the first time, we merge current default options
        this.N.mergeOptions(cId, this.getDefaultOptions());
      }

      await this.getConstants();
    });
  };

  private getDefaultOptions = (): Options => {
    const theme = getTheme();

    return {
      ...navDefaultOptions(),
      statusBar: { style: theme.statusBar, backgroundColor: theme.bgColor },
    };
  };

  private getConstants = async () => {
    const C = await this.N.constants();
    this.C = C;
    return C;
  };
}
