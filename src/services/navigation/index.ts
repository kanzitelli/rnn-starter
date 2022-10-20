import merge from 'lodash/merge';
import {
  navDefaultOptions,
  screenDefaultOptions,
  tabsDefaultOptions,
} from './options';
import {screens} from '../../screens';
import {services} from '..';

export class NavigationService implements IService {
  private inited = false;
  private mountedScreens: Record<string, string> = {}; // Record<ComponentName, ComponentId>

  init = async (): PVoid => {
    if (!this.inited) {
      this.registerComponentDidAppearListener();
      this.configureDefaultOptions();

      this.inited = true;
    }
  };

  handleUIOptionsChange = () => {
    // setting common default options
    this.configureDefaultOptions();

    // updating options among mounted screens
    // hack for dark mode without app reload or setRoot
    for (const cName in this.mountedScreens) {
      screens.N.mergeOptions(
        this.mountedScreens[cName],
        merge(
          screenDefaultOptions(), // applying default screen options
          tabsDefaultOptions(), // applying default tab options
          screens.get(cName as any).options, // taking currently applied options
        ),
      );
    }
  };

  private registerComponentDidAppearListener = () =>
    screens.N.events().registerComponentDidAppearListener(
      e => (this.mountedScreens[e.componentName] = e.componentId),
    );

  private configureDefaultOptions = () => {
    // setting common default options
    screens.N.setDefaultOptions(navDefaultOptions());

    this.configureTitleTranslations();
  };

  private configureTitleTranslations = () => {
    const {t} = services;

    // setting screen-based specific options
    // for ex., if you want to use translate service
    screens.mergeOptions('Main', {
      topBar: {
        title: {text: t.do('home.title')},
      },
      bottomTab: {
        text: t.do('home.title'),
      },
    });
    screens.mergeOptions('Settings', {
      topBar: {
        title: {text: t.do('settings.title')},
      },
      bottomTab: {
        text: t.do('settings.title'),
      },
    });
  };
}
