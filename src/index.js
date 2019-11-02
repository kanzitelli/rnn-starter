import React from 'react';
import { Navigation } from 'react-native-navigation';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';

import reducer from './reducers';
import { Screens, startApp } from './App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const withReduxProvider = C => props => (
    <Provider store={store}>
        <C {...props}/>
    </Provider>
);

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});