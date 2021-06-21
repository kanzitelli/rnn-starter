import { Options, OptionsTopBar } from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, buttons } from './buttons';

const ICON_SIZE = 25;

export const withBottomTab = (text = 'Screen', icon = 'earth'): Options => ({
  bottomTab: {
    text,
    icon: Ionicons.getImageSourceSync(`${icon}-outline`, ICON_SIZE),
    selectedIcon: Ionicons.getImageSourceSync(icon, ICON_SIZE),
  },
});

export const withTitle = (text = 'Screen'): OptionsTopBar => ({
  title: { text },
});

export const withRightButtons = (...btns: Button[]): OptionsTopBar => ({
  rightButtons: btns.map((id) => buttons[id]),
});
