import React from 'react';
import {NavigationComponentProps, NavigationFunctionComponent} from 'react-native-navigation';

import './_hydration';
import {UI} from './ui';
import {Counter} from './counter';

export const stores = {
  ui: new UI(),
  counter: new Counter(),
};
type ContextStores = typeof stores;

const storeContext = React.createContext<ContextStores>(stores);

export const withStores = (C: NavigationFunctionComponent) => {
  return (props: NavigationComponentProps): React.ReactElement => {
    return (
      <storeContext.Provider value={stores}>
        <C {...props} />
      </storeContext.Provider>
    );
  };
};

export const useStores = (): ContextStores => React.useContext(storeContext);

export const hydrateStores = async (): PVoid => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = (stores as Stores)[key];

      if (s.hydrate) {
        await s.hydrate();
      }
    }
  }
};
