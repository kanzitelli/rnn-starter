import { Navigation } from 'react-native-navigation';

import HomeContainer from './containers/Home';
import LandContainer from './containers/Land';

import { withReduxProvider } from './store';
import { HOME, LAND } from './screens/names';

const Screens = new Map();

Screens.set(HOME, HomeContainer);
Screens.set(LAND, LandContainer);

// Register screens
Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

// Here some global listeners could be placed
// ...

export const startApp = () => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'ROOT_STACK',
                children: [
                    {
                        component: { 
                            name: HOME 
                        },
                    },
                ]
            }
        }
    });
};