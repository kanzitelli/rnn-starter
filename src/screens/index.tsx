import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';

import {Main} from './main';
import {Settings} from './settings';

import {withBottomTab, withRightButtons} from '../services/navigation/options';
import {Sample} from './_screen-sample';
import {Playground} from './playground';
import {withAppearance} from '../utils/hooks';
import {withSS} from '../utils/providers';

export const screens = generateRNNScreens(
  {
    Main: {
      component: Main,
      options: {
        topBar: {
          // title is set in services/navigation/index.ts
          background: {
            color: 'red',
          },
          ...withRightButtons('inc', 'dec'),
        },
        ...withBottomTab('Main', 'home'),
      },
    },
    Playground: {
      component: Playground,
      options: {
        topBar: {title: {text: 'Playground'}},
        ...withBottomTab('Playground', 'construct'),
      },
    },
    Settings: {
      component: Settings,
      options: {
        topBar: {title: {text: 'Settings'}},
        ...withBottomTab('Settings', 'settings'),
      },
    },

    Sample: {
      component: Sample,
      options: {
        topBar: {
          title: {text: 'Sample'},
          background: {
            color: 'yellow',
          },
        },
      },
    },
  },
  [withGestureHandler, withSS, withAppearance],
);
