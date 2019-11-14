import { Navigation } from 'react-native-navigation';

import HomeContainer from './containers/Home';
import LandContainer from './containers/Land';
import EmptyContainer from './containers/Empty';

import { withReduxProvider } from './store';
import { HOME, LAND, EMPTY } from './screens/names';

const Screens = new Map();

Screens.set(HOME, HomeContainer);
Screens.set(LAND, LandContainer);
Screens.set(EMPTY, EmptyContainer);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

// Here some global listeners could be placed
// ...

export const startApp = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [{
                    stack: {
                        children: [{
                            component: { 
                                name: HOME ,
                            },
                        }],
                        options: {
                            bottomTab: {
                                text: 'Tab 1',
                                // icon: require('../images/one.png'),
                            }
                        }
                    },
                }, {
                    component: {
                        name: EMPTY,
                        options: {
                            bottomTab: {
                              text: 'Tab 2',
                              // icon: require('../images/two.png'),
                            }
                        }
                    }
                }],
            }            
        }
    });
};