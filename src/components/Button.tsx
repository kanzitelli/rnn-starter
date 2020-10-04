import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ButtonTitleProps = {
  title: string;
  onPress: () => void;
}

type ButtonIconProps = {
  icon: string;
  onPress: () => void;
}

export const ButtonTitle: React.FC<ButtonTitleProps> = ({
  title,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          <AntIcon name={icon} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 8,
  },
  buttonIcon: {
    fontSize: 32,
  },
  text: {
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
});