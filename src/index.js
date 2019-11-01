import { Navigation } from 'react-native-navigation';

import { Screens, startApp } from './App';

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => C);
});

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});