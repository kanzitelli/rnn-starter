import {Root, Screen, BottomTabs} from 'rnn-screens';

import {screens} from './src/screens';
import {initServices} from './src/services';
import {hydrateStores} from './src/stores';
import {configureDesignSystem} from './src/utils/designSystem';

export const beforeStart = async (): PVoid => {
  // 1. hydrate stores
  await hydrateStores();

  // 2. configure design system
  await configureDesignSystem();

  // 3. init services
  await initServices();
};

export const App = () =>
  Root(
    BottomTabs([
      Screen(screens.get('Main')),
      Screen(screens.get('Playground')),
      Screen(screens.get('Settings')),
    ]),
  );
