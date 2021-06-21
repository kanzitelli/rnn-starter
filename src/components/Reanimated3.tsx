import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {Bounceable} from './Bounceable2';

export const Reanimated2: React.FC = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 250 - 100}],
    };
  });

  const moveObject = () => {
    offset.value = withSpring(Math.random());
  };

  return (
    <View padding-xs>
      <View reanimated center padding-xs style={animatedStyles}>
        <Bounceable onPress={moveObject} activeScale={0.9}>
          <View center bg-primary padding-xl br40>
            <Text whitish>Bounceable</Text>
          </View>
        </Bounceable>
      </View>
    </View>
  );
};
