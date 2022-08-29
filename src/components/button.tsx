import React from 'react';
import {View, Text, MarginModifiers} from 'react-native-ui-lib';
import {Bounceable} from 'rn-bounceable';

type Props = MarginModifiers & {
  label?: string;
  onPress?: PureFunc;
};

export const BButton: React.FC<Props> = ({label, onPress, ...modifiers}) => {
  return (
    <View {...modifiers}>
      <Bounceable onPress={onPress}>
        <View center bg-primary padding-s4 br40>
          <Text text65M _white>
            {label}
          </Text>
        </View>
      </Bounceable>
    </View>
  );
};
