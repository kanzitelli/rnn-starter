import React from 'react';
import Animated, { withSpring, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StyleSheet, View, Text } from 'react-native';
import { ButtonTitle } from './Button';
import Bounceable from './Bounceable';

const Reanimated2: React.FC = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 250 - 100 }]
    }
  });

  const _moveObject = () => {
    offset.value = withSpring(Math.random());
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Bounceable onPress={_moveObject}>
          <View style={styles.squareContainer}>
            <Text style={styles.text}>Bounce</Text>
          </View>
        </Bounceable>
      </Animated.View>

      <ButtonTitle
        centered
        title={'Move'}
        onPress={_moveObject}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  squareContainer: {
    padding: 30,
    borderRadius: 20,
    margin: 8,
    backgroundColor: '#001a72',
  },
})

export default Reanimated2;