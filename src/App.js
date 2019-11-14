import { Navigation } from 'react-native-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
    Promise.all([
        FontAwesome5.getImageSource('reddit', 25),
        FontAwesome5.getImageSource('react', 25),
    ]).then(([redditIcon, reactIcon]) => {
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
                                    icon: redditIcon,
                                }
                            }
                        },
                    }, {
                        component: {
                            name: EMPTY,
                            options: {
                                bottomTab: {
                                  text: 'Tab 2',
                                  icon: reactIcon,
                                }
                            }
                        }
                    }],
                }            
            }
        });
    })
};