import {
  NavigationFunctionComponent,
  Options,
  OptionsTopBarButton,
  SharedElementTransition,
} from 'react-native-navigation';

import {Screen} from '../../screens';
import {Button} from './buttons';

export type ScreenInfo = {
  name: Screen;
  component: NavigationFunctionComponent;
  options: Options;
};

export type ScreenLayouts = {
  [key in Screen]: ScreenInfo;
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
