import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const persistConfig = {
    key: 'rootKeyPersist',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware)
);
const persistor = persistStore(store);

export const withReduxProvider = C => props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <C {...props}/>
        </PersistGate>
    </Provider>
);