import 'expo-asset';
import { Navigation } from 'react-native-navigation';

// Note:
// in order to test Redux and MobX separately,
// please comment unnecessary import, this is important
// because RNN registers screens for both of them if two imports are presented

// import { startApp } from './srcRedux/App';
import { startApp } from './src/App';

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});