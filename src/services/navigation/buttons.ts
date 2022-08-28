import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonsOptions} from './types';

const ICON_SIZE = 30;

export type Button = 'inc' | 'dec' | 'settings';

export const buttons: ButtonsOptions = {
  inc: {
    id: 'inc',
    text: 'Inc',
  },
  dec: {
    id: 'dec',
    text: 'Dec',
  },
  settings: {
    id: 'settings',
    icon: Ionicons.getImageSourceSync('settings-outline', ICON_SIZE),
  },
};
