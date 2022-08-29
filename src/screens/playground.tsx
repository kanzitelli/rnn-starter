import React, {useMemo} from 'react';
import {Text, View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';

const generateListItemDescription = (len: number) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const Playground: ScreenComponent = () => {
  // const {t} = useServices();
  // const {ui} = useStores();

  const DATA = Array.from({length: 1000}).map((v, ndx) => ({
    title: `Item ${ndx}`,
    image: `https://picsum.photos/200?image=${ndx + 1}`,
    description: generateListItemDescription(300),
  }));

  // State

  // Methods
  // UI Methods
  const ListHeaderBlock = useMemo(() => {
    return (
      <View padding-s2 bg-bgColor>
        <Text text50M textColor>
          FlashList by Shopify
        </Text>
      </View>
    );
  }, []);

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
      ListHeaderComponent={ListHeaderBlock}
      estimatedItemSize={300}
    />
  );
};
