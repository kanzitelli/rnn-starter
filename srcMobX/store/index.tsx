import React from 'react';

import RedditStore from './redditStore';

const store = {
    redditStore: RedditStore,
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

// list of hydrate functions from stores needed to be performed before app start
export const hydrateStores = [
    store.redditStore.hydrate(),
];
