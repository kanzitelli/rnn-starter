import {LogBox} from 'react-native';
import {BottomTabs, Screen, Root} from 'rnn-screens';

import {screens} from './src/screens';
import {initServices} from './src/services';
import {hydrateStores} from './src/stores';
import {configureDesignSystem} from './src/utils/designSystem';

LogBox.ignoreLogs(['EventEmitter.removeListener', '`new NativeEventEmitter()`']);

export const beforeStart = async (): PVoid => {
  // 1. hydrate stores
  await hydrateStores();

  // 2. configure design system
  await configureDesignSystem();

  // 3. init services
  await initServices();
};

export const App = () => Root(Screen(screens.get('Main'))); // or Root(Stack(Component(screens.get('Main'))))
export const TabsApp = () =>
  Root(BottomTabs([Screen(screens.get('Main')), Screen(screens.get('Example')), Screen(screens.get('Settings'))]));
