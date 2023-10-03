import {generateRNNScreens} from 'rnn-screens';
import {gestureHandlerRootHOC as withGestureHandler} from 'react-native-gesture-handler';

import {Main} from './main';
import {Settings} from './settings';

import {Cart} from './cart';
import {withBottomTab, withRightButtons} from '../services/navigation/options';
import {Sample} from './_screen-sample';
import {Playground} from './playground';
import {withAppearance} from '../utils/hooks';
import {withSS} from '../utils/providers';
import { Menu } from './menu';
import { Profile } from './profile';

export const screens = generateRNNScreens(
  {
    Main: {
      component: Main,
      options: {
        // topBar: {
        //   // title is set in services/navigation/index.ts::configureTitleTranslations
        //   // ...withRightButtons('inc', 'dec'),
        // },
        ...withBottomTab('Main', 'home'),
      },
    },
    MyFavourites: {
      component: Cart,
      options: {
        topBar: {title: {text: 'My Favourites'}},
        ...withBottomTab('Favourites', 'heart'),
      },
    },
    Bag: {
      component: Cart,
      options: {
        topBar: {title: {text: 'Shopping bag'}},
        ...withBottomTab('Bag', 'cart'),
      },
    },
    Menu: {
      component: Menu,
      options: {
        // topBar: {title: {text: 'menu'}},
        ...withBottomTab('Menu', 'menu'),
      },
    },
    Playground: {
      component: Playground,
      options: {
        // topBar: {title: {text: 'menu'}},
        ...withBottomTab('Menu', 'menu'),
      },
    },
    Profile: {
      component: Profile,
      options: {
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Person', 'person'),
      },
    },
    Settings: {
      component: Settings,
      options: {
        // title is set in services/navigation/index.ts::configureTitleTranslations
        ...withBottomTab('Settings', 'settings'),
      },
    },

    Sample: {
      component: Sample,
      options: {
        topBar: {
          title: {text: 'Sample'},
        },
      },
    },
  },
  [withGestureHandler, withSS, withAppearance],
);
