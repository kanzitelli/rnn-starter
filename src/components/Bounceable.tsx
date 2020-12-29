import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

type BouncableProps = {
  children: any;
  disabled?: boolean;
  onPress?: () => void;
  activeScale?: number;
  springConfig?: object;
  contentContainerStyle?: ViewStyle;
}

const Bounceable: React.FC<BouncableProps> = ({
  children,
  disabled = false,
  onPress = () => {},
  activeScale = 0.95,
  springConfig = {
    damping: 10,
    mass: 1,
    stiffness: 300,
  },
  contentContainerStyle = {},
}) => {
  const scale = useSharedValue(1);
  const sz = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSpring(scale.value, springConfig),
        },
      ],
    };
  });

  return (
    <TapGestureHandler
      shouldCancelWhenOutside={true}
      onHandlerStateChange={({ nativeEvent }) => {
        if (disabled) return;

        switch (nativeEvent.state) {
          case State.BEGAN:
            scale.value = withSpring(activeScale, springConfig);
            break;
          case State.END:
            if (onPress) runOnJS(onPress)();
            scale.value = withSpring(1, springConfig);
            break;
          case State.UNDETERMINED:
          case State.FAILED:
          case State.CANCELLED:
            scale.value = withSpring(1, springConfig);
            break;
        }
      }}
    >
      <Animated.View style={[contentContainerStyle, sz]}>
        {children}
      </Animated.View>
    </TapGestureHandler>
  );
};

const s = StyleSheet.create({});

export default Bounceable;