import { Navigation } from 'react-native-navigation';
import Constants from '../utils/constants';
import { stores } from '../stores';

class NavigationService implements IService {
  init = async () => {
    await this.setComponentIdListener();
    await this.setDefaultOptions();
  }

  dismissModal = (cId: string) => {
    Navigation.dismissModal(cId);
  }

  dismissAllModals = () => {
    Navigation.dismissAllModals();
  }

  pushExpo = (cId: string) => {
    this.push(cId, Constants.ScreenNames.ExpoScreen);
  }

  showExpo = () => {
    this.show(Constants.ScreenNames.ExpoScreen);
  }

  private push<T>(cId: string, cName: string, passProps?: T) {
    Navigation.push(cId, {
      component:{name: cName, passProps},
    })
  }

  private show = (cName: string) => {
    Navigation.showModal({
      stack: {
        children: [{component:{name: cName}}]
      }
    });
  }

  // Listeners
  private setComponentIdListener = async () => {
    Navigation.events().registerComponentDidAppearListener(async e => {
      stores.ui.setComponentId(e.componentId);
    });
  }

  private setDefaultOptions = async () => {
    Navigation.setDefaultOptions({
      layout: {
        orientation: ['portrait'],
      },
      bottomTabs: {
        titleDisplayMode: 'alwaysShow',
      },
      bottomTab: {
        iconColor: Constants.colors.main,
        textColor: Constants.colors.main,
        selectedIconColor: Constants.colors.main,
        selectedTextColor: Constants.colors.main,
      },
    });
  }
}

export default new NavigationService();
