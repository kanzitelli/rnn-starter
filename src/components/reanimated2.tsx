import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { withSpring, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { Bounceable } from './bounceable';
import { genNativeId } from '../services/navigation/sharedTransition';
import { SharedTransitionDirection, SharedTransitionId } from '../services/navigation/types';

type Reanimated2Props = {
  stID?: SharedTransitionId;
  stDir?: SharedTransitionDirection;
};

export const Reanimated2: React.FC<Reanimated2Props> = ({ stID, stDir }: Reanimated2Props) => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value * 250 - 100 }],
  }));

  const moveObject = () => {
    offset.value = withSpring(Math.random());
  };

  return (
    <View padding-xs>
      <View reanimated center padding-xs style={animatedStyles}>
        <Bounceable onPress={moveObject} activeScale={0.9}>
          <View nativeID={genNativeId(stDir, 'view', stID)} center bg-primary padding-xl br40>
            <Text whitish>Bounceable</Text>
          </View>
        </Bounceable>
      </View>
    </View>
  );
};
