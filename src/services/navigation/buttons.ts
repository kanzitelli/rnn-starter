import {OptionsTopBarButton} from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ICON_SIZE = 30;

const _navButtonIds = ['inc', 'dec', 'save', 'settings'] as const;
export type NavButton = typeof _navButtonIds[number];

export const navButtons: Record<NavButton, OptionsTopBarButton> = {
  inc: {
    id: 'inc',
    text: 'Inc',
  },
  dec: {
    id: 'dec',
    text: 'Dec',
  },
  save: {
    id: 'save',
    text: 'Save',
  },
  settings: {
    id: 'settings',
    icon: Ionicons.getImageSourceSync('settings-outline', ICON_SIZE),
  },
};
