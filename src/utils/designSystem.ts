import { Colors, Spacings, Typography } from 'react-native-ui-lib';

export const configureDesignSystem = (): void => {
  // for more information - https://wix.github.io/react-native-ui-lib/foundation/style

  Colors.loadColors({
    primary: '#5383b8', // blue
    secondary: '#469c57', // green
    accent: '#fed330', // yellow
    blackish: Colors.rgba(20, 20, 20, 1),
    blackish2: Colors.rgba(50, 50, 50, 1),
    whitish: Colors.rgba(250, 250, 250, 1),
    whitish2: Colors.rgba(230, 230, 230, 1),
  });

  Colors.loadSchemes({
    light: {
      textColor: Colors.blackish,
      bgColor: Colors.whitish,
      bg2Color: Colors.whitish2,
    },
    dark: {
      textColor: Colors.whitish,
      bgColor: Colors.blackish,
      bg2Color: Colors.blackish2,
    },
  });

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
