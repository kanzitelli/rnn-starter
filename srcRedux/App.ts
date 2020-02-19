import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { HOME, LAND, EMPTY } from './screens';

import HomeScreen from './screens/Home';
import LandScreen from './screens/Land';
import EmptyScreen from './screens/Empty';

import { withReduxProvider } from './store';

const Screens = new Map<string, React.FC<any>>();

Screens.set(HOME, HomeScreen);
Screens.set(LAND, LandScreen);
Screens.set(EMPTY, EmptyScreen);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(
        key,
        () => gestureHandlerRootHOC(withReduxProvider(C)),
        () => C,
    );
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
                    options: {
                        bottomTabs: {
                            titleDisplayMode: 'alwaysShow',
                        },
                    },
                    children: [{
                        stack: {
                            children: [{
                                component: {
                                    name: HOME ,
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Subreddits',
                                    icon: redditIcon,
                                },
                            },
                        },
                    }, {
                        stack: {
                            children: [{
                                component: {
                                    name: EMPTY,
                                    options: {
                                        topBar: {
                                            visible: true,
                                            title: {
                                                text: 'Emptiness',
                                            },
                                        },
                                    },
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: 'Redux App',
                                    icon: reactIcon,
                                },
                            },
                        },
                    }],
                },
            },
        });
    });
};
