import React from 'react';

import './_hydration';
import {UIStore} from './ui';
import {CounterStore} from './counter';

export const stores = {
  ui: new UIStore(),
  counter: new CounterStore(),
};
type ContextStores = typeof stores;

const StoresContext = React.createContext<ContextStores>(stores);
export const StoresProvider = ({children}: any) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);
export const useStores = (): ContextStores => React.useContext(StoresContext);

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
