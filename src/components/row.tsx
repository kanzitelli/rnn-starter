import React from 'react';
import {View, ViewProps} from 'react-native-ui-lib';

export const Row: React.FC<ViewProps> = ({children, ...props}) => {
  return (
    <View row centerV {...props}>
      {children}
    </View>
  );
};
