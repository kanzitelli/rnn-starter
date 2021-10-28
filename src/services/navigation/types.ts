import {OptionsTopBarButton, SharedElementTransition} from 'react-native-navigation';

import {Button} from './buttons';

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
