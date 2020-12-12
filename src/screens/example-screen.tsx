import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';

import { useStores } from '../stores';
import { useServices } from '../services';
import Constants from '../utils/constants';
import useStyles from '../utils/useStyles';
import NView from '../components/NView';

// This is an example that can be used to bootstrap your new screen
// Once you add a new screen, don't forget to go through following steps:
//   1. Open src/utils/constants.ts and add a new screen's name to ScreenNames, and ScreenTitle (if going to use)
//   2. Open stc/App.tsx and register a new screen

const ExampleScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { } = useStores();
  const { } = useServices();
  const { styles } = useStyles(_styles);

  const [safeArea, setSafeArea] = useState(false); // hack for Large Title + ScrollView when push a new screen

  useEffect(() => {
    setTimeout(() => setSafeArea(true), 250);
  }, [componentId]);

  return (
    <NView safe={safeArea} style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.text}>
          { 'Example' }
        </Text>
      </View>
    </NView>
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

ExampleScreen.options = props => ({
  topBar: {
    title: {
      text: Constants.ScreenTitles.ExampleScreen,
    },
  },
});

export default ExampleScreen;
