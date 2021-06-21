import 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {start} from './src/app';

Navigation.events().registerAppLaunchedListener(start);
