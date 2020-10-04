import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Platform,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist/hooks';

import { useStores } from '../store';
import Constants from '../utils/constants';
import { ButtonIcon } from '../components/Button';

const CounterScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { counter } = useStores();

  useNavigationButtonPress(counter.decrement, componentId, Constants.CounterScreen.decButtonId);
  useNavigationButtonPress(counter.increment, componentId, Constants.CounterScreen.incButtonId);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <ButtonIcon icon={'minuscircleo'} onPress={counter.decrement} />
        <Text style={styles.text}>
          { counter.value }
        </Text>
        <ButtonIcon icon={'pluscircleo'} onPress={counter.increment} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    padding: 8,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 80,
    margin: 8,
    textAlign: 'center',
  },
});

CounterScreen.options = props => ({
  topBar: {
    leftButtons: Platform.OS === 'ios' ? [{
        id: Constants.CounterScreen.decButtonId,
        text: Constants.CounterScreen.decButtonTitle,
      }] : [],
    rightButtons: Platform.OS === 'ios' ? [{
        id: Constants.CounterScreen.incButtonId,
        text: Constants.CounterScreen.incButtonTitle,
      }] : [{
        id: Constants.CounterScreen.incButtonId,
        text: Constants.CounterScreen.incButtonTitle,
      }, {
        id: Constants.CounterScreen.decButtonId,
        text: Constants.CounterScreen.decButtonTitle,
      }],
    title: {
      text: 'Counter',
    },
  },
});

export default CounterScreen;
