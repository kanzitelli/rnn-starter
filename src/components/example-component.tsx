import React from 'react';
import { StyleSheet, View } from 'react-native';

import useStyles from 'src/hooks/useStyles';

type ExampleComponentProps = {
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
}) => {
  const { styles } = useStyles(_styles);

  return (
    <View style={styles.container}></View>
  )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
})

export default ExampleComponent;