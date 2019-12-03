import React from 'react';

import { createRedditStore } from './store';

const store = {
    redditStore: createRedditStore(),
};

const storeContext = React.createContext(store);

export const withStoreProvider = (C: React.FC) => (props: any) => {
    return (
        <storeContext.Provider value={store}>
            <C {...props} />
        </storeContext.Provider>
    );
};

export const useStore = () => React.useContext(storeContext);
