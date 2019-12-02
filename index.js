import { Navigation } from 'react-native-navigation';

import { startApp as startReduxApp } from './srcRedux/App';

Navigation.events().registerAppLaunchedListener(() => {
    startReduxApp();
});