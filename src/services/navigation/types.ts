import {
  LayoutComponent,
  NavigationFunctionComponent,
  OptionsTopBarButton,
  SharedElementTransition,
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

export type SharedTransitionId = string;
export type SharedTransitionNativeId = string;
export type SharedTransitionElement = {
  id: SharedTransitionId;
  pop?: boolean;
  rest?: Omit<SharedElementTransition, 'fromId' | 'toId'>;
};
