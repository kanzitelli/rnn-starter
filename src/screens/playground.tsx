import React from 'react';
import {ScrollView} from 'react-native';
import {View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';

import {screens} from '.';
import {Props as SampleProps} from './_screen-sample';
import {useServices} from '../services';
// import {useStores} from '../stores';
import {Section} from '../components/Section';
import {BButton} from '../components/Button';

export const Playground: ScreenComponent = ({componentId}) => {
  const {t} = useServices();
  // const {ui} = useStores();

  // State

  // Methods
  const push = () =>
    screens.push<SampleProps>(componentId, 'Sample', {type: 'push'});
  const show = () => screens.show<SampleProps>('Sample', {type: 'show'});

  // UI Methods

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <Section title={t.do('section.navigation.title')}>
          <BButton
            marginV-s1
            label={t.do('section.navigation.button.push')}
            onPress={push}
          />
          <BButton
            marginV-s1
            label={t.do('section.navigation.button.show')}
            onPress={show}
          />
        </Section>
      </ScrollView>
    </View>
  );
};
