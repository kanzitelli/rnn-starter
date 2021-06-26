import { hydrateStores } from './stores';
import { initServices, services } from './services';
import { configureDesignSystem } from './utils/designSystem';

const { nav } = services;

export const start = async (): PVoid => {
  // 1. configure design system
  configureDesignSystem();

  // 2. hydrate stores
  await hydrateStores();

  // 3. init services
  await initServices();

  // 4. start app
  nav.start('three_tabs');
};
