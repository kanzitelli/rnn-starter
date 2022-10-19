import {Options, OptionsTopBar} from 'react-native-navigation';
import {Colors} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getThemeColor, getThemeStatusBarStyle} from '../../utils/designSystem';
import {NavButton, navButtons} from './buttons';

const ICON_SIZE = 25;

export const navDefaultOptions = (): Options => {
  return {
    layout: {
      orientation: ['portrait'],
      componentBackgroundColor: getThemeColor('bgColor'),
      backgroundColor: getThemeColor('bgColor'),
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      backgroundColor: getThemeColor('bgColor'),
      hideShadow: true,
      elevation: 0,
    },
    bottomTab: {
      iconColor: Colors.primary,
      textColor: Colors.primary,
      selectedIconColor: Colors.primary,
      selectedTextColor: Colors.primary,
    },
    statusBar: {
      style: getThemeStatusBarStyle(),
      backgroundColor: getThemeColor('bgColor'),
    },
    topBar: {
      background: {
        color: getThemeColor('bgColor'),
      },
      backButton: {
        color: Colors.primary,
      },
      noBorder: true,
      elevation: 0,
      rightButtonColor: Colors.primary,
      leftButtonColor: Colors.primary,
      title: {
        color: getThemeColor('textColor'),
      },
      largeTitle: {
        visible: true,
        color: getThemeColor('textColor'),
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
  title: {text},
});

export const withRightButtons = (...btns: NavButton[]): OptionsTopBar => ({
  rightButtons: btns.map(id => navButtons[id]),
});
