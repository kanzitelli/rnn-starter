import React from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Text } from 'react-native-ui-lib';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { observer } from 'mobx-react';

import { useServices } from '../services';
import { useStores } from '../stores';
import { useConstants } from '../utils/constants';

import { Section } from '../components/section';
import { randomNum } from '../utils/help';

export const Example: NavigationFunctionComponent<ExampleScreenProps> = observer(
  ({ componentId, value }) => {
    const { nav, t } = useServices();
    // const {} = useStores();
    // const {} = useConstants();

    return (
      <View flex bg-bgColor>
        <ScrollView contentInsetAdjustmentBehavior="always">
          <View padding-m>
            <Section title={t.do('section.navigation.title')}>
              <View>
                <Button
                  marginV-xs
                  label={t.do('section.navigation.button.push')}
                  onPress={() => nav.push(componentId, 'Example')}
                />
                <Button
                  marginV-xs
                  label={t.do('section.navigation.button.show')}
                  onPress={() => nav.show('Example')}
                />
                <Button
                  marginV-xs
                  label={t.do('section.navigation.button.passProps')}
                  onPress={() =>
                    nav.push<ExampleScreenProps>(componentId, 'Example', { value: randomNum() })
                  }
                />
              </View>
            </Section>

            <Text textColor center text50R>
              Pass prop: {value}
            </Text>

            <Text textColor center>
              localized with i18n-js
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  },
);
