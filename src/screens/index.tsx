import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';
import {observer as withObserver} from 'mobx-react';

import {Main} from './main';
import {Settings} from './settings';

import {withServices} from '../services';
import {
  withBottomTab,
  withRightButtons,
  withTitle,
} from '../services/navigation/options';
import {withStores} from '../stores';
import {Sample} from './_screen-sample';
import {Playground} from './playground';

export const screens = generateRNNScreens(
  {
    Main: {
      component: Main,
      options: {
        topBar: {
          ...withTitle('Main'),
          ...withRightButtons('inc', 'dec'),
        },
        ...withBottomTab('Main', 'home'),
      },
    },
    Playground: {
      component: Playground,
      options: {
        topBar: {
          ...withTitle('Playground'),
        },
        ...withBottomTab('Playground', 'construct'),
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

    Sample: {
      component: Sample,
      options: {
        topBar: {
          ...withTitle('Sample'),
        },
      },
    },
  },
  [withGestureHandler, withStores, withServices, withObserver],
);
