import React from 'react';

import './_hydration';
import {UIStore} from './ui';
import {CounterStore} from './counter';

export class Stores {
  static async hydrate(): PVoid {
    for (const key in stores) {
      if (Object.prototype.hasOwnProperty.call(stores, key)) {
        const s = (stores as any)[key] as IStore;

        if (s.hydrate) {
          await s.hydrate();
        }
      }
    }
  }

  // stores list
  ui = new UIStore();
  counter = new CounterStore();
}
export const stores = new Stores();

// Providers and hooks
const StoresContext = React.createContext<Stores>(stores);
export const StoresProvider = ({children}: any) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);
export const useStores = (): Stores => React.useContext(StoresContext);
