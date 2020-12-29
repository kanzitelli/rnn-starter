import React from 'react';
import { StyleSheet, View } from 'react-native';

import useStyles from 'src/hooks/useStyles';

// This component is used to pass it to registerRootComponent(...) for Expo SDK
// Otherwise, it was causing a crash on iOS (14?) in release build

const ExpoApp: React.FC = () => {
  const { styles } = useStyles(_styles);

  return <View style={styles.container} />;
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  }
});

export default ExpoApp;