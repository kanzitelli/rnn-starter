import { Options, OptionsTopBar } from 'react-native-navigation';
import { Colors } from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, buttons } from './buttons';

const ICON_SIZE = 25;

export const navDefaultOptions = (): Options => {
  return {
    layout: {
      orientation: ['portrait'],
      componentBackgroundColor: Colors.bgColor,
      backgroundColor: Colors.bgColor,
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      backgroundColor: Colors.bgColor,
      hideShadow: true,
      elevation: 0,
    },
    bottomTab: {
      iconColor: Colors.primary,
      textColor: Colors.primary,
      selectedIconColor: Colors.primary,
      selectedTextColor: Colors.primary,
    },
    topBar: {
      background: {
        color: Colors.bgColor,
      },
      backButton: {
        color: Colors.textColor,
      },
      noBorder: true,
      elevation: 0,
      rightButtonColor: Colors.textColor,
      leftButtonColor: Colors.textColor,
      title: {
        color: Colors.textColor,
      },
      largeTitle: {
        visible: true,
        color: Colors.textColor,
      },
    },
  };
};

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
