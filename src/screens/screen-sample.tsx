import React from 'react';
import {ScrollView} from 'react-native';
import {View, Button, Text} from 'react-native-ui-lib';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {observer} from 'mobx-react';

import {screens} from '.';

import {useServices} from '../services';
// import { useStores } from '../stores';
// import { useConstants } from '../utils/constants';

import {Section} from '../components/section';
import {randomNum} from '../utils/help';
import {Reanimated2} from '../components/reanimated2';

export const Example: NavigationFunctionComponent<ExampleScreenProps> = observer(
  ({componentId, value}) => {
    const {t} = useServices();
    // const {} = useStores();
    // const {} = useConstants();

    return (
      <View flex bg-bgColor>
        <ScrollView contentInsetAdjustmentBehavior="always">
          <View padding-s4>
            <Section title={t.do('section.navigation.title')}>
              <View>
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
              </View>

              <Text textColor center text50R>
                Pass prop: {value}
              </Text>
            </Section>

            <Reanimated2 stID="reanimated2" />
            <Button
              marginV-s1
              label={t.do('section.navigation.button.back')}
              onPress={() => screens.pop(componentId)}
            />

            <Text textColor center>
              localized with i18n-js
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  },
);
