import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';

import useStyles from '../utils/useStyles';

type NViewProps = {
  safe?: boolean;
  style?: ViewStyle,
}

const NView: React.FC<NViewProps> = ({
  children,
  safe = true,
  style,
}) => {
  const { styles } = useStyles(_styles);

  if (safe) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        { children }
      </SafeAreaView>
    )
  }

  return (
    <View style={[styles.container, style]}>
      { children }
    </View>
  )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
})

export default NView;