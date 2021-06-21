import {ButtonsOptions} from './types';

export type Button = 'inc' | 'dec';

export const buttons: ButtonsOptions = {
  inc: {
    id: 'inc',
    text: 'Inc',
  },
  dec: {
    id: 'dec',
    text: 'Dec',
  },
};
