import {
  AnimationOptions,
  SharedElementTransition,
  StackAnimationOptions,
} from 'react-native-navigation';
import {
  SharedTransitionDirection,
  SharedTransitionElement,
  SharedTransitionId,
  SharedTransitionNativeId,
  SharedTransitionViewType,
} from './types';

const DOT = '.';

const genDir = (d?: SharedTransitionDirection, r?: boolean) =>
  r ? (d === 'from' ? 'to' : 'from') : d;

export const genNativeId = (
  direction?: SharedTransitionDirection,
  viewType?: SharedTransitionViewType,
  id?: SharedTransitionId,
): SharedTransitionNativeId => [genDir(direction), viewType, id].join(DOT);

export const genSharedElementTransition = (
  e: SharedTransitionElement,
  reverse = false,
): SharedElementTransition => ({
  ...e.rest,
  fromId: genNativeId(genDir('from', reverse), e.type, e.id),
  toId: genNativeId(genDir('to', reverse), e.type, e.id),
});

export const genStackAnimation = (
  elements: SharedTransitionElement[],
  reverse = false,
): StackAnimationOptions => ({
  sharedElementTransitions: elements.map((e) => genSharedElementTransition(e, reverse)),
});

export const genAnimations = (elements: SharedTransitionElement[]): AnimationOptions => {
  const elementsWithPop = elements.slice().filter((e) => e.pop);
  const withPop = elementsWithPop.length > 0; // so it doesn't break back animation when .pop()

  return {
    push: genStackAnimation(elements),
    pop: withPop ? genStackAnimation(elementsWithPop, true) : undefined,
  };
};
