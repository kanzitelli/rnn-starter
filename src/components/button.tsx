import React from 'react';
import {View, Text, MarginModifiers} from 'react-native-ui-lib';
import {Bounceable} from 'rn-bounceable';

type ButtonProps = MarginModifiers & {
  label?: string;
  onPress?: PureFunc;
};

export const BButton: React.FC<ButtonProps> = ({label, onPress, ...modifiers}: ButtonProps) => {
  return (
    <View {...modifiers}>
      <Bounceable onPress={onPress}>
        <View center bg-primary padding-s4 br40>
          <Text text65M whitish>
            {label}
          </Text>
        </View>
      </Bounceable>
    </View>
  );
};
