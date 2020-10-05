import React, { useEffect, useState } from 'react';
import { StyleSheet, Appearance } from 'react-native';
import Constants from './constants';

export type ThemedStylesFuncType = (theme: ThemeType) => StyleSheet.NamedStyles<any>;

// TODOs
// [ ] add correct styles.[] behaviour in components
// [ ] normalization of each number.
// [ ] set or init function? so where we can set normalization and other options

const { colors, sizes } = Constants;

const themes: ThemesType = {
  light: {
    colors: {
      ...colors,
      bg: colors.white,
      text: colors.black,
    },
    sizes,
  },
  dark: {
    colors: {
      ...colors,
      bg: colors.black,
      text: colors.lightGrey,
    },
    sizes,
  }
}

export const generateTheme = (themeName: ThemeNameType = generateThemeName()): ThemeType => themes[themeName];
export const generateThemeName = (): ThemeNameType => {
  return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
}

const useStyles = (themedStylesFunc: ThemedStylesFuncType) => {
  const [themeName, setThemeName] = useState<ThemeNameType>(generateThemeName()); // here we should ger the mode
  const themedStyles = themedStylesFunc(generateTheme(themeName));

  useEffect(() => {
    const onModeChange = (_cs: any) => {
      const cs = _cs.colorScheme as ThemeNameType;

      setThemeName(cs);
    };

    Appearance.addChangeListener(onModeChange);
    return () => {
      Appearance.removeChangeListener(onModeChange);
    }
  });

  // NORMALIZATION FUNCTION
  // const excludeProperties = ['flex'];
  // for (const key in styles) {
  //   if (Object.prototype.hasOwnProperty.call(styles, key)) {
  //     for (const key2 in styles[key]) {
  //       if (Object.prototype.hasOwnProperty.call(styles[key], key2)) {
  //         const element = styles[key][key2];
  //         if (typeof element === 'number' && !excludeProperties.includes(key2)) {
  //           console.log(element);
  //         }
  //       }
  //     }
  //   }
  // }

  return themedStyles;
}

export default useStyles;