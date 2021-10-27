import {Screens, ScreensLayouts} from '../services/navigation/types';
import {withBottomTab, withRightButtons, withTitle} from '../services/navigation/options';

import {Main} from './main';
import {Settings} from './settings';
import {Example} from './screen-sample';
import {services} from '../services';

// Describe your screens here
export type Screen = 'Main' | 'Settings' | 'Example';

export const screens: Screens = [
  {name: 'Main', component: Main},
  {name: 'Settings', component: Settings},

  {name: 'Example', component: Example},
];

const {t} = services;

export const screensLayouts: ScreensLayouts = {
  Main: {
    name: 'Main',
    options: {
      topBar: {
        ...withTitle(t.do('home.title')),
        ...withRightButtons('inc', 'dec'),
      },
      ...withBottomTab('Main', 'newspaper'),
    },
  },
  Settings: {
    name: 'Settings',
    options: {
      topBar: {
        ...withTitle('Settings'),
      },
      ...withBottomTab('Settings', 'settings'),
    },
  },

  Example: {
    name: 'Example',
    options: {
      topBar: {
        ...withTitle('Example'),
      },
      ...withBottomTab('Example', 'construct'),
    },
  },
};
