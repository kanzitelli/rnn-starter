import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import useStyles from 'src/hooks/useStyles';
import Bounceable from './Bounceable';

type SettingsActionProps = {
  title: string;
  icon?: string;
  info?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const SettingsAction: React.FC<SettingsActionProps> = ({
  title,
  icon,
  info,
  disabled = false,
  onPress = () => {},
}) => {
  const { styles } = useStyles(_styles);

  return (
    <View style={styles.container}>
      <Bounceable onPress={onPress} disabled={disabled}>
        <View style={styles.actionContainer}>
          <View style={styles.actionTitleContainer}>
            { icon ? <Icon style={styles.icon} name={icon} /> : null }
            <Text style={styles.title}>{ title }</Text>
          </View>

          { info ? <Text style={styles.info}>{ info }</Text> : null }
        </View>
      </Bounceable>
    </View>
  )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    margin: theme.sizes.s,
    marginHorizontal: theme.sizes.m,
    paddingVertical: theme.sizes.s,
  },
  title: {
    fontSize: 20,
    color: theme.colors.text,
  },
  icon: {
    fontSize: 20,
    color: theme.colors.text,
    marginRight: theme.sizes.m,
  },
  actionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontSize: 15,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
})

export default SettingsAction;