import React from 'react';
import {
    Text,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { BlurView } from 'expo-blur';

import { useStores } from 'src/stores';
import { useServices } from 'src/services';
import useStyles, { generateThemeName } from 'src/hooks/useStyles';
import { screens } from 'src/services/navigation/screens';

const AppUpdateScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { } = useStores();
  const { } = useServices();
  const { styles } = useStyles(_styles);

  return (
    <>
      <BlurView intensity={80} tint={generateThemeName()} style={styles.container}>
        <ActivityIndicator size={'large'} />
        <Text style={styles.text}>Loading app's update...</Text>
      </BlurView>
    </>
  );
});

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    margin: theme.sizes.s,
    textAlign: 'center',
    color: theme.colors.text,
  },
});

AppUpdateScreen.options = props => screens.appUpdates.options();

export default AppUpdateScreen;
