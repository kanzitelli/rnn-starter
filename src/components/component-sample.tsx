import React from 'react';
import {View, Text} from 'react-native-ui-lib';

type ExampleComponentProps = {
  title?: string;
};

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
}: ExampleComponentProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
