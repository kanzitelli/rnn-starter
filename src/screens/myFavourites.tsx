import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import {observer} from 'mobx-react';

export const MyFavourites: ScreenComponent = observer(() => {


  return (
   <View>
      <Text>MyFavourites</Text>
    </View>
  );
});
