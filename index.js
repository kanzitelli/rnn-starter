import { Navigation } from 'react-native-navigation';

import { withReduxProvider } from './src/store';
import { Screens, startApp } from './src/App';

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});