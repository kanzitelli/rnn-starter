import {Platform} from 'react-native';
import merge from 'lodash/merge';
import {
  navDefaultOptions,
  screenDefaultOptions,
  tabsDefaultOptions,
} from './options';
import {screens} from '../../screens';
import {services} from '..';
import {App} from '../../../App';

export class NavigationService implements IService {
  private inited = false;
  private mountedComponents: Record<string, string> = {}; // Record<ComponentId, ComponentName>

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

    // updating options among mounted components
    // hack for dark mode without app reload or setRoot
    for (const cId in this.mountedComponents) {
      const cName = this.mountedComponents[cId];
      const screenOptions = screens.get(cName as any).options;
      screens.N.mergeOptions(
        cId,
        merge(
          screenDefaultOptions(), // applying default screen options
          tabsDefaultOptions(), // applying default tab options
          screenOptions, // taking currently applied options
        ),
      );
    }

    if (Platform.OS === 'android') {
      // [Android] we need to reload (setRoot) the app
      //           the reason we need to set root again on Android is that when we merge options for mounted screens and re-setting default options,
      //           RNN doesn't merge "bottomTabs.backgroundColor", it follows current system theme and ignores new values
      // [iOS] You might want to use this method also for iOS because of some issues with status bar style when the appearance is not system,
      //       and status bar style follows system theme.
      this.reload();
    }
  };

  private reload = () => {
    screens.N.setRoot(App());
  };

  private registerComponentDidAppearListener = () =>
    screens.N.events().registerComponentDidAppearListener(
      e => (this.mountedComponents[e.componentId] = e.componentName),
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
