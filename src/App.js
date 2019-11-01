import { Navigation } from 'react-native-navigation';

import HomeContainer from './containers/Home';
import LandContainer from './containers/Land';

import { HOME, LAND } from './constants/ScreensNames';

export const Screens = new Map();

Screens.set(HOME, HomeContainer);
Screens.set(LAND, LandContainer);

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