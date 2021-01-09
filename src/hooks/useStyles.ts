import React, { useEffect, useState } from 'react';
import { Appearance, Dimensions, Platform, PixelRatio } from 'react-native';
import { isTablet } from 'react-native-device-info';

import useConstants from './useConstants';

const { colors, sizes } = useConstants();
let options: UseStylesOptionsType = {
  normalize: true,
  darkmode: true,
};

const themes: ThemesType = {
  light: {
    colors: {
      ...colors,
      bg: colors.white,
      text: colors.black,
      sectionBg: colors.light,
    },
    sizes,
  },
  dark: {
    colors: {
      ...colors,
      bg: colors.black,
      text: colors.lightGrey,
      sectionBg: colors.darkGrey,
    },
    sizes,
  }
}

export const generateTheme = (themeName: ThemeNameType = generateThemeName()): ThemeType => themes[themeName];
export const generateThemeName = (): ThemeNameType => {
  return options.darkmode
    ? Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'
    : 'light';
}
export const setOptionsForUseStyles = (_options: UseStylesOptionsType) => {
  options = {
    ...options,
    ..._options,
  };
}

function useStyles<T>(themedStylesFunc: ThemedStylesFuncType<T>) {
  const [themeName, setThemeName] = useState<ThemeNameType>(generateThemeName()); // here we should ger the mode
  const theme = generateTheme(themeName);
  let themedStyles = themedStylesFunc(theme);

  useEffect(() => {
    const onModeChange = (_cs: any) => {
      // const cs = _cs.colorScheme as ThemeNameType; // somehow _cs.colorScheme gives wrong value when app goes to background mode
      const cs = Appearance.getColorScheme() as ThemeNameType;

      setThemeName(cs);
    };

    if (options.darkmode) {
      Appearance.addChangeListener(onModeChange);
    }
    return () => {
      if (options.darkmode) {
        Appearance.removeChangeListener(onModeChange);
      }
    }
  });

  // Normalization
  if (options.normalize) {
    const excludeProperties = ['flex'];
    for (const key in themedStyles) {
      if (Object.prototype.hasOwnProperty.call(themedStyles, key)) {
        for (const key2 in themedStyles[key]) {
          if (Object.prototype.hasOwnProperty.call(themedStyles[key], key2)) {
            const value = themedStyles[key][key2];
            if (typeof value === 'number' && !excludeProperties.includes(key2)) {
              themedStyles = {
                ...themedStyles,
                [key]: {
                  ...themedStyles[key],
                  [key2]: normalize(value),
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    styles: themedStyles,
    theme,
  };
}

const normalize = (
  size: number,
  based: 'width' | 'height' = 'width',
): number => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
      'window',
  );

  let w_value = 375; // x1.25 -- 468.75; x1.5 -- 562.5; x2 -- 750
  let h_value = 667; // x1.25 -- 833.75; x1.5 -- 1000.5; x2 -- 1334

  if (isTablet()) {
      w_value *= 2.5;
      h_value *= 2.5;
  }

  // based on iPhone 8's scale
  const wscale: number = SCREEN_WIDTH / w_value;
  const hscale: number = SCREEN_HEIGHT / h_value;

  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default useStyles;