import RNRestart from 'react-native-restart';
import SplashScreen from 'react-native-splash-screen'

export const randomNum = (max = 100): number => Math.floor(Math.random() * max);

export const restartApp = () => {
    //show splash screen before restarting
    SplashScreen.show();
    RNRestart.Restart();
};
