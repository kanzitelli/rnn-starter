import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { HOME, LAND, EMPTY } from './screens';
import HomeScreen from './screens/Home';
import LandScreen from './screens/Land';
import EmptyScreen from './screens/Empty';

import { withStoreProvider, hydrateStores } from './store';

const Screens = new Map<string, React.FC<any>>();

Screens.set(HOME, HomeScreen);
Screens.set(LAND, LandScreen);
Screens.set(EMPTY, EmptyScreen);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(
        key,
        () => gestureHandlerRootHOC(withStoreProvider(C)),
        () => C,
    );
});

// Here some global listeners could be placed
// ...

export const startApp = () => {
    // 1st - we hydrate all stores
    // 2nd - we get icons
    // 3rd - we launch the app
    Promise.all(hydrateStores).then(() => {
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
                                        text: 'MobX App',
                                        icon: reactIcon,
                                    },
                                },
                            },
                        }],
                    },
                },
            });
        });
    });
};
