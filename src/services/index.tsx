import React from 'react';

import NavigationService from './navigation';
import DarkmodeService from './darkmode';

export const services = {
  navigation: NavigationService,
  // darkmode: DarkmodeService,
};

const servicesContext = React.createContext(services);

export const withServicesProvider = (C: React.FC) => (props: any) => {
  return (
    <servicesContext.Provider value={services}>
      <C {...props} />
    </servicesContext.Provider>
  );
};

export const useServices = () => React.useContext(servicesContext);

// one method to init all services, you should add it manually
// you can use services for having one for metrics or handling navigation actions
export const initServices = async () => {
  await services.navigation.init();
  // await services.darkmode.init();
};