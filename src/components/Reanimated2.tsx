import React from 'react';
import Animated, { withSpring, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';
import { ButtonTitle } from './Button';

const Reanimated2: React.FC = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }]
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <ButtonTitle
        title={'Move'}
        onPress={() => {
          offset.value = withSpring(Math.random());
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 8,
    backgroundColor: '#001a72',
  },
})

export default Reanimated2;