import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import Constants from 'expo-constants';
import * as Application from 'expo-application';
import {If} from '@kanzitelli/if-component';
import {useNavigationButtonPress} from 'react-native-navigation-hooks/dist';

import {screens} from '.';
import {useServices} from '../services';
import {useStores} from '../stores';
import {navButtons} from '../services/navigation/buttons';
import {Props as SampleProps} from './_screen-sample';
import {Section} from '../components/section';
import {BButton} from '../components/button';
import {Reanimated2} from '../components/reanimated2';
import {Row} from '../components/row';

export const Main: ScreenComponent = ({componentId}) => {
  const {counter, ui} = useStores();
  const {t, api} = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);

  // API Methods
  const getCounterValue = useCallback(async () => {
    setLoading(true);
    try {
      const {value} = await api.counter.get();

      counter.set('value', value);
    } catch (e) {
      console.log('[ERROR]', e);
    } finally {
      setLoading(false);
    }
  }, [api.counter, counter]);

  // Methods
  const push = () =>
    screens.push<SampleProps>(componentId, 'Sample', {type: 'push'});
  const show = () => screens.show<SampleProps>('Sample', {type: 'show'});

  const handleCounterDec = () => counter.set('value', counter.value - 1);
  const handleCounterInc = () => counter.set('value', counter.value + 1);
  const handleCounterReset = () => counter.set('value', 0);

  // Start
  useEffect(() => {
    getCounterValue();
  }, [componentId, getCounterValue]);
  useNavigationButtonPress(handleCounterInc, componentId, navButtons.inc.id);
  useNavigationButtonPress(handleCounterDec, componentId, navButtons.dec.id);

  // UI Methods

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <Section title="Expo">
          <Text text60R textColor>
            Session ID: {Constants.sessionId}
          </Text>
          <Text text60R textColor>
            App name: {Application.applicationName}
          </Text>
        </Section>

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

        <Section title="Reanimated 2">
          <Reanimated2 />
        </Section>

        <Section title="MobX">
          <View centerV>
            <Text marginB-s2 text60R textColor>
              App launches: {ui.appLaunches}
            </Text>

            <Text marginB-s2 text60R textColor>
              Counter:{' '}
              <If
                _={loading}
                _then={<Text textColor>Loading...</Text>}
                _else={<Text textColor>{counter.value}</Text>}
              />
            </Text>

            <Row>
              <BButton margin-s1 label=" - " onPress={handleCounterDec} />
              <BButton margin-s1 label=" + " onPress={handleCounterInc} />
              <BButton margin-s1 label="reset" onPress={handleCounterReset} />
            </Row>
          </View>
        </Section>

        <Section title="API">
          <BButton
            margin-s1
            label="Update counter value from API"
            onPress={getCounterValue}
          />
        </Section>
      </ScrollView>
    </View>
  );
};
