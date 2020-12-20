import { hydrateStores } from './stores';
import { initServices, services } from './services';
import { setOptionsForUseStyles } from './hooks/useStyles';

export const startApp = async () => {
  // rehydrate stores
  await hydrateStores();

  // init services
  await initServices();

  // (optional) set options for useStyles
  setOptionsForUseStyles({
    normalize: true,
    darkmode: true,
  });

  services.nav.startApp();
};
