import {Options, OptionsTopBar} from 'react-native-navigation';
import {Colors} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DesignSystem, getThemeStatusBarStyle} from '../../utils/designSystem';
import {NavButton, navButtons} from './buttons';

const ICON_SIZE = 25;

export const screenDefaultOptions = (): Options => {
  return {
    topBar: {
      background: {
        color: DesignSystem.themeColor('bgColor'),
      },
      backButton: {
        color: Colors.primary,
      },
      noBorder: true,
      elevation: 0,
      rightButtonColor: Colors.primary,
      leftButtonColor: Colors.primary,
      title: {
        alignment: 'center',
        color: DesignSystem.themeColor('textColor'),
        fontSize: 25,
        // fontStyle: 'bold',
        fontWeight: 'bold',
      },
      largeTitle: {
        visible: true,
        color: DesignSystem.themeColor('textColor'),
      },
    },
    statusBar: {
      style: getThemeStatusBarStyle(),
      backgroundColor: DesignSystem.themeColor('bgColor'),
    },
  };
};

export const tabDefaultOptions = (): Options => {
  return {
    bottomTab: {
      iconColor: Colors.grey5,
      textColor: Colors.grey5,
      selectedIconColor: Colors.primary,
      selectedTextColor: Colors.primary,
    },
  };
};

export const tabsDefaultOptions = (): Options => {
  return {
    bottomTabs: {
      titleDisplayMode: 'alwaysHide',
      backgroundColor: DesignSystem.themeColor('bgColor'),
      hideShadow: true,
      elevation: 0,
    },
  };
};

export const navDefaultOptions = (): Options => {
  return {
    layout: {
      orientation: ['portrait'],
      componentBackgroundColor: DesignSystem.themeColor('bgColor'),
      backgroundColor: DesignSystem.themeColor('bgColor'),
    },

    ...screenDefaultOptions(),
    ...tabsDefaultOptions(),
    ...tabDefaultOptions(),
  };
};

export const withBottomTab = (text = 'Screen', icon = 'earth'): Options => ({
  bottomTab: {
    text,
    icon: Ionicons.getImageSourceSync(`${icon}-outline`, ICON_SIZE),
    selectedIcon: Ionicons.getImageSourceSync(icon, ICON_SIZE),
  },
});

export const withRightButtons = (...btns: NavButton[]): OptionsTopBar => ({
  rightButtons: btns.map(id => navButtons[id]),
});
