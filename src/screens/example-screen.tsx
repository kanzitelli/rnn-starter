import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';

import { useStores } from 'src/stores';
import { useServices } from 'src/services';
import useStyles from 'src/hooks/useStyles';
import { ScreenOptions } from 'src/services/navigation/screens';

// This is an example that can be used to bootstrap your new screen
// In order to register this screen, open services/navigation/screens
// and add a new screen's information

const ExampleScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { } = useStores();
  const { } = useServices();
  const { styles } = useStyles(_styles);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.text}>
          { 'Example' }
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 64,
    margin: theme.sizes.s,
    textAlign: 'center',
    color: theme.colors.text,
  },
});

ExampleScreen.options = props => ScreenOptions.ExampleScreen;

export default ExampleScreen;
