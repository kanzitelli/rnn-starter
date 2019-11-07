import { Navigation } from 'react-native-navigation';

import { withReduxProvider } from './store';
import { Screens, startApp } from './App';

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});