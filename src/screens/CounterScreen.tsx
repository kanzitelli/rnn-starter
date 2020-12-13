import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Platform,
    ActivityIndicator,
    Pressable,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist/hooks';

import { useStores } from '../stores';
import { useServices } from '../services';
import Constants from '../utils/constants';
import { ButtonIcon } from '../components/Button';
import useStyles from '../utils/useStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CounterScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { counter, ui } = useStores();
  const { appUpdates } = useServices();
  const { styles } = useStyles(_styles);

  useNavigationButtonPress(counter.decrement, componentId, Constants.CounterScreen.decButtonId);
  useNavigationButtonPress(counter.increment, componentId, Constants.CounterScreen.incButtonId);

  const AppUpdatesView = (props: any) => (
    <View style={styles.appUpdatesContainer}>
      {
        props.updating
          ? (
            <>
              <ActivityIndicator />
        
              <Text style={styles.appUpdatesText}>Checking for app updates</Text>
            </>
          )
          : (
            <TouchableOpacity onPress={appUpdates.checkForAppUpdate}>
              <Text style={styles.appUpdatesText}>Check for app updates and reload</Text>
            </TouchableOpacity>
          )
      }
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appUpdatesContainer}>
        {
          ui.isCheckingForAppUpdates
            ? (
              <>
                <ActivityIndicator />
          
                <Text style={styles.appUpdatesText}>Checking for app updates</Text>
              </>
            )
            : (
              <TouchableOpacity onPress={appUpdates.checkForAppUpdate}>
                <Text style={styles.appUpdatesText}>Check for app updates</Text>
              </TouchableOpacity>
            )
        }
      </View>

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

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.bg,
  },
  counterContainer: {
    padding: theme.sizes.s,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appUpdatesContainer: {
    padding: theme.sizes.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appUpdatesText: {
    marginLeft: theme.sizes.s
  },
  text: {
    fontSize: 64,
    margin: theme.sizes.s,
    textAlign: 'center',
    color: theme.colors.text,
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
      text: Constants.ScreenTitles.CounterScreen,
    },
    largeTitle: {
      visible: true,
    },
  },
});

export default CounterScreen;
