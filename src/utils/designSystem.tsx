import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { Colors, Spacings, Typography } from 'react-native-ui-lib';
import omit from 'lodash/omit';

import { useServices } from '../services';
import { stores } from '../stores';

const { ui } = stores;

const colors: ThemeColors = {
  primary: '#5383b8', // blue
  secondary: '#469c57', // green
  accent: '#fed330', // yellow
  blackish: Colors.rgba(20, 20, 20, 1),
  blackish2: Colors.rgba(50, 50, 50, 1),
  whitish: Colors.rgba(250, 250, 250, 1),
  whitish2: Colors.rgba(230, 230, 230, 1),
};
const defaultTheme: Theme = {
  statusBar: 'dark',
  textColor: colors.blackish,
  bgColor: colors.whitish,
  bg2Color: colors.whitish2,
};

const themeModes: Record<ThemeMode, Theme> = {
  light: defaultTheme,
  dark: {
    statusBar: 'light',
    textColor: colors.whitish,
    bgColor: colors.blackish,
    bg2Color: colors.blackish2,
  },
  other: {
    statusBar: 'light',
    textColor: 'pink',
    bgColor: 'green',
    bg2Color: colors.secondary,
  },
};

// for more information - https://wix.github.io/react-native-ui-lib/foundation/style
export const configureDesignSystem = (): void => {
  Colors.loadColors({ ...colors, ...getThemeColors() });

  Typography.loadTypographies({
    section: { fontSize: 26, fontWeight: '600' },
  });

  Spacings.loadSpacings({
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  });
};

export const getThemeColors = (): ThemeColors => omit(themeModes[ui.themeMode], 'statusBar');
export const getTheme = (): Theme => themeModes[ui.themeMode];

export const withThemeModes = (C: NavigationFunctionComponent): NavigationFunctionComponent => {
  return observer((props: NavigationComponentProps): React.ReactElement => {
    const { nav } = useServices();

    Colors.loadColors({ ...colors, ...getThemeColors() });

    useEffect(() => {
      nav.updateDefaultOptions(props.componentId);
    }, [ui.themeMode]);

    return <C {...props} key={ui.themeMode} />;
  });
};
