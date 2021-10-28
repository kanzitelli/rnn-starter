import {LogBox} from 'react-native';
import {hydrateStores} from './stores';
import {initServices, services} from './services';
import {configureDesignSystem} from './utils/designSystem';

LogBox.ignoreLogs(['EventEmitter.removeListener', '`new NativeEventEmitter()`']);

export const start = async (): PVoid => {
  const {nav} = services;

  // 1. hydrate stores
  await hydrateStores();

  // 2. configure design system
  await configureDesignSystem();

  // 3. init services
  await initServices();

  // 4. start app
  await nav.start();
};
