import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Constants from './utils/constants';

import CounterScreen from './screens/CounterScreen';
import ExpoScreen from './screens/ExpoScreen';

import { withStoreProvider, hydrateStores } from './stores';
import { withServicesProvider, initServices } from './services';
import { setOptionsForUseStyles } from './utils/useStyles';

const Screens = new Map<string, React.FC<any>>();

Screens.set(Constants.ScreenNames.CounterScreen, CounterScreen);
Screens.set(Constants.ScreenNames.ExpoScreen, ExpoScreen);

// Register screens
Screens.forEach((C, key) => {
  Navigation.registerComponent(
    key,
    () =>
      gestureHandlerRootHOC(
        withStoreProvider(
          withServicesProvider(C))),
    () => C,
  );
});

// Here some global listeners could be placed
// ...

export const startApp = async () => {
  // rehydrate stores
  await hydrateStores();

  // init services
  await initServices();

  // getting icons for tabs as they have to be as image sources
  const [tab1, tab2] = await Promise.all([
    Ionicons.getImageSource('ios-duplicate-outline', 25),
    Ionicons.getImageSource('ios-rocket-outline', 25),
  ]);
  const [tab1Selected, tab2Selected] = await Promise.all([
    Ionicons.getImageSource('ios-duplicate', 25),
    Ionicons.getImageSource('ios-rocket', 25),
  ]);

  // (optional) set options for useStyles
  // setOptionsForUseStyles({
  //   normalize: false,
  //   darkmode: false,
  // });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: Constants.ScreenNames.CounterScreen,
              },
            }],
            options: {
              bottomTab: {
                text: Constants.BottomTabsTitles.tab1,
                icon: tab1,
                selectedIcon: tab1Selected,
                iconColor: Constants.colors.blue,
                textColor: Constants.colors.blue,
                selectedIconColor: Constants.colors.blue,
                selectedTextColor: Constants.colors.blue,
              },
            },
          },
        }, {
          stack: {
            children: [{
              component: {
                name: Constants.ScreenNames.ExpoScreen,
              },
            }],
            options: {
              bottomTab: {
                text: Constants.BottomTabsTitles.tab2,
                icon: tab2,
                selectedIcon: tab2Selected,
                iconColor: Constants.colors.blue,
                textColor: Constants.colors.blue,
                selectedIconColor: Constants.colors.blue,
                selectedTextColor: Constants.colors.blue,
              },
            },
          },
        }],
      },
    },
  });
};
