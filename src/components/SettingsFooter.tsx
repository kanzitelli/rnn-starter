import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import useContants from 'src/hooks/useConstants';

import useStyles from 'src/hooks/useStyles';
import Bounceable from './Bounceable';

type SettingsFooterProps = {
}

const SettingsFooter: React.FC<SettingsFooterProps> = ({
}) => {
  const { styles } = useStyles(_styles);
  const C = useContants();

  const openPersonalGithub = () => {
    Linking.openURL(C.settings.links.personalGithub);
  }

  return (
    <View style={styles.container}>
      <Bounceable onPress={openPersonalGithub}>
        <Text style={styles.text}>{`Mady by developer👨‍💻\nfor developers🧑‍💻👩‍💻👨‍💻`}</Text>
      </Bounceable>
    </View>
  )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    marginVertical: theme.sizes.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: theme.colors.text,
  }
})

export default SettingsFooter;