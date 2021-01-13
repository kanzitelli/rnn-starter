import {
  Navigation,
  Options,
} from 'react-native-navigation';
import { gestureHandlerRootHOC as withGestureHandler } from 'react-native-gesture-handler';

import Screens from './screens';
import { withStoresProvider } from 'src/stores';
import { withServicesProvider } from 'src/services';
import useConstants from 'src/hooks/useConstants';
import { stores } from 'src/stores';
import { Component, StackWith } from './layout';

// Here we define "system" methods for Navigation,
// as registerScreens(), setDefaultOptions() and others.
// Feel free to change them up your needs.
// However, you will work more with ./index.ts if you'd like to add some other methods.

class NavigationSystem {
  protected initSystem = async () => {
    await this.registerScreens();
    await this.setComponentIdListener();
    await this.setDefaultOptions();
  }

  // APPEARANCE CONFIG

  private registerScreens = async () => {
    Screens.forEach((C, key) => {
      Navigation.registerComponent(
        key,
        () =>
          withGestureHandler(
            withStoresProvider(
              withServicesProvider(C))),
        () => C,
      );
    });
  }

  private setDefaultOptions = async () => {
    const { colors } = useConstants();

    Navigation.setDefaultOptions({
      layout: {
        orientation: ['portrait'],
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow',
      },
      bottomTab: {
        iconColor: colors.main,
        textColor: colors.main,
        selectedIconColor: colors.main,
        selectedTextColor: colors.main,
      },
      topBar: {
        largeTitle: {
          visible: true,
        }
      }
    });
  }

  private setComponentIdListener = async () => {
    Navigation.events().registerComponentDidAppearListener(async e => {
      stores.ui.setComponentId(e.componentId);
    });
  }

  // ACTIONS

  dismissModal = (cId: string, options?: Options) => {
    Navigation.dismissModal(cId, options);
  }

  dismissOverlay = (cId: string) => {
    Navigation.dismissOverlay(cId);
  }

  dismissAllOverlays = () => {
    Navigation.dismissAllOverlays();
  }

  dismissAllModals = () => {
    Navigation.dismissAllModals();
  }

  pop = (cId: string) => {
    Navigation.pop(cId);
  }

  protected push = <T>(cId: string, name: string, passProps?: T, options?: Options) => {
    Navigation.push(cId, Component(name, passProps, options))
  }

  protected show = <T>(name: string, passProps?: T, options?: Options) => {
    Navigation.showModal(StackWith(Component(name, passProps, options)));
  }

  protected showOverlay = <T>(name: string, passProps?: T, options?: Options) => {
    Navigation.showOverlay(StackWith(Component(name, passProps, options)));
  }
}

export default NavigationSystem;