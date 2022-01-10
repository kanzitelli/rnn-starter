import 'react-native-gesture-handler';
import {registerRootComponent} from 'rnn-screens';

import {TabsApp, beforeStart} from './App';

registerRootComponent(TabsApp, {beforeStart});
