import React from 'react';
import {NavigationComponentProps, NavigationFunctionComponent} from 'react-native-navigation';

import {OnStartService} from './onStart';
import {NavService} from './navigation';
import {TranslateService} from './translate';
import {ApiService} from './api';

export const services = {
  t: new TranslateService(), // should be first
  nav: new NavService(),
  api: new ApiService(),
  onStart: new OnStartService(),
};
type ContextServices = typeof services;

const servicesContext = React.createContext<ContextServices>(services);

export const withServices = (C: NavigationFunctionComponent) => {
  return (props: NavigationComponentProps): React.ReactElement => {
    return (
      <servicesContext.Provider value={services}>
        <C {...props} />
      </servicesContext.Provider>
    );
  };
};

export const useServices = (): ContextServices => React.useContext(servicesContext);

export const initServices = async (): PVoid => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = (services as Services)[key];

      if (s.init) {
        await s.init();
      }
    }
  }
};
