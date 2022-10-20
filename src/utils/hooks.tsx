import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {reaction} from 'mobx';

import {stores} from '../stores';
import {DesignSystem} from './designSystem';
import {services} from '../services';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';

// put this hook into any component which you'd like to keep in sync with appearance
// for example, Main screen or list item component
export const useAppearance = () => {
  useColorScheme();

  const {ui} = stores;
  const {t} = services;

  const [appearance, setAppearance] = useState(ui.appearance);
  const [lang, setLang] = useState(ui.language);

  reaction(
    () => ui.appearance,
    value => {
      DesignSystem.configure();
      setAppearance(value);
    },
  );
  reaction(
    () => ui.language,
    value => {
      t.setup();
      setLang(value);
    },
  );

  return {appearance, lang};
};

// RNN component wrapper (provider)
export const withAppearance =
  (C: NavigationFunctionComponent) => (props: NavigationComponentProps) => {
    const appearance = useAppearance();
    return <C {...props} {...appearance} />;
  };
