import RNRestart from 'react-native-restart';

export const randomNum = (max = 100): number => Math.floor(Math.random() * max);

export const restartApp = RNRestart.Restart;
