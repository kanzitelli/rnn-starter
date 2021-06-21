import {
  LayoutComponent,
  NavigationFunctionComponent,
  OptionsTopBarButton,
} from 'react-native-navigation';

import {Screen} from '../../screens';
import {Button} from './buttons';

export type ScreenInfo = {
  name: Screen;
  component: NavigationFunctionComponent;
};

export type Screens = Array<ScreenInfo>;

export type ScreensLayouts = {
  [key in Screen]: LayoutComponent;
};

export type ButtonsOptions = {
  [key in Button]: OptionsTopBarButton;
};
