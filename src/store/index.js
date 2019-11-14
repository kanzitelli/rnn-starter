import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './sagas';

const persistConfig = {
    key: 'rootKeyPersist',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(saga);

export const withReduxProvider = C => props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <C {...props}/>
        </PersistGate>
    </Provider>
);