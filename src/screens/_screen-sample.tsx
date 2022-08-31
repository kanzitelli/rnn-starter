import React from 'react';
import {ScrollView} from 'react-native';
import {View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';

import {screens} from '.';
import {useServices} from '../services';
// import {useStores} from '../stores';
import {Section} from '../components/section';
import {BButton} from '../components/button';

export type Props = {
  type?: 'push' | 'show';
};
export const Sample: ScreenComponent<Props> = ({
  componentId,
  type = 'push',
}) => {
  const {t} = useServices();
  // const {ui} = useStores();

  // State

  // Methods
  const push = () => screens.push<Props>(componentId, 'Sample', {type: 'push'});
  const show = () => screens.show<Props>('Sample', {type: 'show'});
  const goBack = async () => {
    if (type === 'push') {
      screens.pop(componentId);
    }
    if (type === 'show') {
      screens.N.dismissAllModals();
    }
  };

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
          <BButton
            marginV-s1
            label={t.do('section.navigation.button.back')}
            onPress={goBack}
          />
        </Section>
      </ScrollView>
    </View>
  );
};
