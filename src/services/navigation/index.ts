import merge from 'lodash/merge';
import {
  navDefaultOptions,
  screenDefaultOptions,
  tabsDefaultOptions,
} from './options';
import {screens} from '../../screens';
import {services} from '..';

export class NavService implements IService {
  private inited = false;
  private mountedScreens: Record<string, string> = {}; // Record<ComponentName, ComponentId>

  init = async (): PVoid => {
    if (!this.inited) {
      this.registerListeners();
      this.configureDefaultOptions();

      this.inited = true;
    }
  };

  handleUIOptionsChange = () => {
    // -- setting common default options
    this.configureDefaultOptions();

    // -- updating options among mounted screens
    for (const cName in this.mountedScreens) {
      screens.N.mergeOptions(
        this.mountedScreens[cName],
        merge(
          screenDefaultOptions(),
          tabsDefaultOptions(),
          screens.get(cName as any).options,
        ),
      );
    }
  };

  private configureDefaultOptions = () => {
    const {t} = services;

    // -- setting common default options
    screens.N.setDefaultOptions(navDefaultOptions());

    // -- setting screen-based specific options
    // for ex., if you want to use translate service
    screens.mergeOptions('Main', {
      topBar: {
        title: {text: t.do('home.title')},
      },
      bottomTab: {
        text: t.do('home.title'),
      },
    });
  };

  private registerListeners = () =>
    screens.N.events().registerComponentDidAppearListener(
      e => (this.mountedScreens[e.componentName] = e.componentId),
    );
}
