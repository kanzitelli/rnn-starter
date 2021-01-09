import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import useStyles from 'src/hooks/useStyles';

type ButtonTitleProps = {
  title: string;
  centered?: boolean;
  onPress: () => void;
}

type ButtonIconProps = {
  icon: string;
  onPress: () => void;
}

export const ButtonTitle: React.FC<ButtonTitleProps> = ({
  title,
  centered = false,
  onPress,
}) => {
  const { styles } = useStyles(_styles);

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={[styles.text, centered ? { textAlign: 'center' } : {}]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onPress,
}) => {
  const { styles } = useStyles(_styles);

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Icon name={icon} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </>
  )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
  buttonContainer: {
    margin: theme.sizes.s,
  },
  buttonIcon: {
    fontSize: 28,
    color: theme.colors.text,
  },
  text: {
    fontSize: 18,
    margin: theme.sizes.s,
    color: theme.colors.text,
  },
});