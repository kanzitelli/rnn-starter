import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

export const withReduxProvider = C => props => (
    <Provider store={store}>
        <C {...props}/>
    </Provider>
);