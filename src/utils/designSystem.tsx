import {
  StatusBarStyle as ExpoStatusBarStyle,
  setStatusBarStyle,
} from 'expo-status-bar';
import {Color} from 'react-native-navigation';
import {Colors, Typography} from 'react-native-ui-lib';
import {stores} from '../stores';
import {Appearance} from './types/enums';

export class DesignSystem {
  static colors = {
    primary: '#5383b8', // blue
    secondary: '#469c57', // green
    accent: '#fed330', // yellow
    _black: Colors.rgba(20, 20, 20, 1),
    _black2: Colors.rgba(50, 50, 50, 1),
    _white: Colors.rgba(250, 250, 250, 1),
    _white2: Colors.rgba(230, 230, 230, 1),
  };

  static themes: Record<Appearance, ThemeColors> = {
    system: {} as any,
    light: {
      textColor: this.colors._black,
      bgColor: this.colors._white,
      bg2Color: this.colors._white2,
    },
    dark: {
      textColor: this.colors._white,
      bgColor: this.colors._black,
      bg2Color: this.colors._black2,
    },
  };

  // for more information - https://wix.github.io/react-native-ui-lib/foundation/style
  static async configure(): PVoid {
    const {ui} = stores;

    // setting scheme in advance (needed for dark mode)
    if (ui.appearance === 'system') {
      Colors.setScheme('default');
    } else {
      Colors.setScheme(ui.appearance);
    }

    // loading colors
    if (ui.isAppearanceSystem) {
      Colors.loadColors(this.colors);
      Colors.loadSchemes(this.themes);
    } else {
      Colors.loadColors({...this.colors, ...this.themes[ui.appearance]});
      Colors.loadSchemes({dark: {}, light: {}});
    }

    // setting status bar style
    setStatusBarStyle(getThemeExpoStatusBarStyle());

    Typography.loadTypographies({
      section: {fontSize: 26, fontWeight: '600'},
    });
  }

  static themeColor(c: keyof ThemeColors): Color {
    const {ui} = stores;

    if (ui.isAppearanceSystem) {
      return {
        dark: this.themes.dark[c],
        light: this.themes.light[c],
      };
    } else {
      return this.themes[ui.appearance][c];
    }
  }
}

export const getThemeStatusBarStyle = (): StatusBarStyle => {
  const {ui} = stores;

  if (ui.isAppearanceSystem) {
    return undefined;
  } else {
    switch (ui.appearance) {
      case 'dark':
        return 'light';
      case 'light':
        return 'dark';
    }
  }
};

export const getThemeExpoStatusBarStyle = (): ExpoStatusBarStyle => {
  const {ui} = stores;

  if (ui.isAppearanceSystem) {
    return 'auto';
  } else {
    switch (ui.appearance) {
      case 'dark':
        return 'light';
      case 'light':
        return 'dark';
      default:
        return 'auto';
    }
  }
};
