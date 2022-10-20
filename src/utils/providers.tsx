import React, {PropsWithChildren} from 'react';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';

import {ServicesProvider} from '../services';
import {StoresProvider} from '../stores';

export const SSProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <StoresProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </StoresProvider>
  );
};

// RNN component wrapper (provider)
export const withSS =
  (C: NavigationFunctionComponent) => (props: NavigationComponentProps) =>
    (
      <SSProvider>
        <C {...props} />
      </SSProvider>
    );
