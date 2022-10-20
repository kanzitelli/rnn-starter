import {LogBox} from 'react-native';
import {Root, Screen, BottomTabs} from 'rnn-screens';

import {screens} from './src/screens';
import {Services} from './src/services';
import {Stores} from './src/stores';
import {DesignSystem} from './src/utils/designSystem';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs(['Require', 'RCTBridge']);

export const beforeStart = async (): PVoid => {
  // 1. hydrate stores
  await Stores.hydrate();

  // 2. configure design system
  await DesignSystem.configure();

  // 3. init services
  await Services.init();

  // 4. hide splash screen
  SplashScreen.hide();
};

export const App = () =>
  Root(
    BottomTabs([
      Screen(screens.get('Main')),
      Screen(screens.get('Playground')),
      Screen(screens.get('Settings')),
    ]),
  );
