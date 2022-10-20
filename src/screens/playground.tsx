import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';
import {randomStr} from '../utils/help';

export const Playground: ScreenComponent = observer(() => {
  // const {t} = useServices();
  // const {ui} = useStores();

  const DATA = Array.from({length: 1000}).map((v, ndx) => ({
    title: `Item ${ndx}`,
    image: `https://picsum.photos/200?image=${ndx + 1}`,
    description: randomStr(300),
  }));

  // State

  // Methods
  // UI Methods

  return (
    <FlashList
      data={DATA}
      renderItem={({item}) => (
        <View padding-s2 bg-bgColor>
          <FastImage
            style={{width: 120, height: 120, borderRadius: 20}}
            source={{uri: item.image}}
            resizeMode={FastImage.resizeMode.contain}
          />

          <Text textColor text50R>
            {item.title}
          </Text>

          <Text textColor text70R>
            {item.description}
          </Text>
        </View>
      )}
      ListHeaderComponent={
        <View padding-s2 bg-bgColor>
          <Text text50M textColor>
            FlashList by Shopify
          </Text>
        </View>
      }
      estimatedItemSize={300}
    />
  );
});
