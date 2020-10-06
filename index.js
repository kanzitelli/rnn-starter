import 'expo-asset';
import { Navigation } from 'react-native-navigation';

import { startApp } from './src/App';

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});