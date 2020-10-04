import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'mobx-persist';

import CounterStore from './counterStore';
import UIStore from './uiStore';

const stores = {
    counter: CounterStore,
    ui: UIStore,
};

const storeContext = React.createContext(stores);

export const withStoreProvider = (C: React.FC) => (props: any) => {
    return (
        <storeContext.Provider value={stores}>
            <C {...props} />
        </storeContext.Provider>
    );
};

export const useStores = () => React.useContext(storeContext);

// list of hydrate functions from stores needed to be performed before app start
const hydrate = create({
    storage: AsyncStorage,
    debounce: 500,
});
export const hydrateStores = async () => {
    await hydrate(stores.counter.STORAGE_ID, stores.counter);
    // await hydrate(stores.ui.STORAGE_ID, stores.ui);
};
