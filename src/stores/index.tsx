import React from 'react';

import './_hydration';
import {UIStore} from './ui';
import {CounterStore} from './counter';

class Stores {
  ui = new UIStore();
  counter = new CounterStore();
}
export const stores = new Stores();

const StoresContext = React.createContext<Stores>(stores);
export const StoresProvider = ({children}: any) => (
  <StoresContext.Provider value={stores}>{children}</StoresContext.Provider>
);
export const useStores = (): Stores => React.useContext(StoresContext);

export const hydrateStores = async (): PVoid => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = (stores as any)[key] as IStore;

      if (s.hydrate) {
        await s.hydrate();
      }
    }
  }
};
