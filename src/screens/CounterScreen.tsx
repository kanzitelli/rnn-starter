import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist/hooks';

import { useStores } from 'src/stores';
import { useServices } from 'src/services';
import { ButtonIcon } from 'src/components/Button';
import useStyles from 'src/hooks/useStyles';
import { ScreenOptions } from 'src/services/navigation/screens';
import { Buttons } from 'src/services/navigation/buttons';

const CounterScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { counter } = useStores();
  const { } = useServices();
  const { styles } = useStyles(_styles);

  useNavigationButtonPress(counter.decrement, componentId, Buttons.Dec.id);
  useNavigationButtonPress(counter.increment, componentId, Buttons.Inc.id);

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

CounterScreen.options = props => ScreenOptions.CounterScreen;

export default CounterScreen;
