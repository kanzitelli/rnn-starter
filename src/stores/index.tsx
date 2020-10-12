import React from 'react';

import CounterStore from './counterStore';
import UIStore from './uiStore';

export const stores = {
  counter: CounterStore,
  ui: UIStore,
};

const storeContext = React.createContext(stores);

export const withStoresProvider = (C: React.FC) => (props: any) => {
  return (
    <storeContext.Provider value={stores}>
      <C {...props} />
    </storeContext.Provider>
  );
};

export const useStores = () => React.useContext(storeContext);

export const hydrateStores = async () => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = stores[key];

      if (s.hydrate) {
        await s.hydrate();
      }
    }
  }
};
