import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';

import {withBottomTab, withRightButtons, withTitle} from '../services/navigation/options';
import {withStores} from '../stores';
import {withServices} from '../services';

import {Main} from './main';
import {Settings} from './settings';
import {Example} from './screen-sample';
import {services} from '../services';

// Describe your screens here
export const screens = generateRNNScreens(
  {
    Main: {
      component: Main,
      options: {
        topBar: {
          ...withTitle(services.t.do('home.title')),
          ...withRightButtons('inc', 'dec'),
        },
        ...withBottomTab('Main', 'newspaper'),
      },
    },
    Settings: {
      component: Settings,
      options: {
        topBar: {
          ...withTitle('Settings'),
        },
        ...withBottomTab('Settings', 'settings'),
      },
    },

    Example: {
      component: Example,
      options: {
        topBar: {
          ...withTitle('Example'),
        },
        ...withBottomTab('Example', 'construct'),
      },
    },
  },
  [withGestureHandler, withStores, withServices],
);
