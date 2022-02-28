import {AnimationOptions, Options, SharedElementTransition, StackAnimationOptions} from 'react-native-navigation';
import {SharedTransitionElement, SharedTransitionId, SharedTransitionNativeId} from './types';

export const genNativeId = (id?: SharedTransitionId): SharedTransitionNativeId => id || 'id';

export const genSharedElementTransition = (e: SharedTransitionElement): SharedElementTransition => ({
  ...e.rest,
  fromId: genNativeId(e.id),
  toId: genNativeId(e.id),
});

export const genStackAnimation = (elements: SharedTransitionElement[]): StackAnimationOptions => ({
  sharedElementTransitions: elements.map(genSharedElementTransition),
});

export const genAnimations = (elements: SharedTransitionElement[]): AnimationOptions => {
  const elementsWithPop = elements.slice().filter(e => e.pop);
  const withPop = elementsWithPop.length > 0; // so it doesn't break back animation when .pop()

  return {
    push: genStackAnimation(elements),
    pop: withPop ? genStackAnimation(elementsWithPop) : undefined,
  };
};

export const withSharedTransitions = (forElements: SharedTransitionElement[]): Options => {
  return {
    animations: genAnimations(forElements),
  };
};
