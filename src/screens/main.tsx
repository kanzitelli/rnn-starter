import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator} from 'react-native';
import {View, Button, Text} from 'react-native-ui-lib';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useNavigationButtonPress} from 'react-native-navigation-hooks/dist';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {screens} from '.';
import {useServices} from '../services';
import {useStores} from '../stores';

import {Section} from '../components/section';
import {Reanimated2} from '../components/reanimated2';
import {randomNum} from '../utils/help';
import {withSharedTransitions} from '../services/navigation/sharedTransition';

export const Main: NavigationFunctionComponent = observer(({componentId}) => {
  const {t, api} = useServices();
  const {counter, ui} = useStores();

  useNavigationButtonPress(counter.inc, componentId, 'inc');
  useNavigationButtonPress(counter.dec, componentId, 'dec');
  useNavigationButtonPress(() => screens.push(componentId, 'Settings'), componentId, 'settings');

  const start = useCallback(async () => {
    try {
      await api.counter.get();
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);

  useEffect(() => {
    start();
  }, [componentId, start]);

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View padding-s4>
          <Section title={t.do('section.navigation.title')}>
            <Button
              marginV-s1
              label={t.do('section.navigation.button.push')}
              onPress={() => screens.push(componentId, 'Example')}
            />
            <Button
              marginV-s1
              label={t.do('section.navigation.button.show')}
              onPress={() => screens.show('Example')}
            />
            <Button
              marginV-s1
              label={t.do('section.navigation.button.passProps')}
              onPress={() =>
                screens.push<ExampleScreenProps>(componentId, 'Example', {value: randomNum()})
              }
            />
            <Button
              marginV-s1
              label={t.do('section.navigation.button.sharedTransition')}
              onPress={() =>
                screens.push<ExampleScreenProps>(
                  componentId,
                  'Example',
                  {value: randomNum()},
                  withSharedTransitions([{id: 'reanimated2', pop: true}]),
                )
              }
            />
          </Section>

          <Section title="Reanimated 2">
            <Reanimated2 stID="reanimated2" />
          </Section>

          <Section title="MobX">
            <View centerV>
              <Text marginB-s2 text60R textColor>
                App launches: {ui.appLaunches}
              </Text>
              <Text marginB-s2 text60R textColor>
                Counter:{' '}
                <If
                  _={counter.loading}
                  _then={() => <ActivityIndicator />}
                  _else={<Text>{counter.value}</Text>}
                />
              </Text>
              <Button margin-s1 label="-" onPress={counter.dec} />
              <Button margin-s1 label="+" onPress={counter.inc} />
              <Button margin-s1 label="reset" onPress={counter.reset} link />
            </View>
          </Section>

          <Section title="API">
            <Button margin-s1 label="Update counter value from API" onPress={api.counter.get} />
          </Section>
        </View>
      </ScrollView>
    </View>
  );
});
