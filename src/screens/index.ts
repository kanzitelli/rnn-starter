import {ScreenLayouts} from '../services/navigation/types';
import {withBottomTab, withRightButtons, withTitle} from '../services/navigation/options';

import {Main} from './main';
import {Settings} from './settings';
import {Example} from './screen-sample';
import {services} from '../services';

// Describe your screens here
export type Screen = 'Main' | 'Settings' | 'Example';
// const input_screenNames = ['Main', 'Settings', 'Example'];
// const screenNames = [...input_screenNames] as const;
// export type Screen = typeof screenNames[number];

const {t} = services;

export const screens: ScreenLayouts = {
  Main: {
    name: 'Main',
    component: Main,
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
    component: Settings,
    options: {
      topBar: {
        ...withTitle('Settings'),
      },
      ...withBottomTab('Settings', 'settings'),
    },
  },

  Example: {
    name: 'Example',
    component: Example,
    options: {
      topBar: {
        ...withTitle('Example'),
      },
      ...withBottomTab('Example', 'construct'),
    },
  },
};
