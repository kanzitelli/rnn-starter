import 'react-native-gesture-handler';
require('react-native-ui-lib/config').setConfig({appScheme: 'default'});
import {registerRootComponent} from 'rnn-screens';

import {App, beforeStart} from './App';

registerRootComponent(App, {beforeStart});
