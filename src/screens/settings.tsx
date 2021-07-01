import React from 'react';
import { Alert, Linking, ScrollView } from 'react-native';
import { View } from 'react-native-ui-lib';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { observer } from 'mobx-react';
import { getApplicationName, getVersion } from 'react-native-device-info';

import { useConstants } from '../utils/constants';
import { useStores } from '../stores';

import { Section } from '../components/section';
import { Action } from '../components/action';

export const Settings: NavigationFunctionComponent = observer(() => {
  const { ui } = useStores();
  const { links } = useConstants();

  const doSomething = (action: string) => () => {
    Alert.alert(action);
  };

  const openLink = (link: string) => () => {
    Linking.openURL(link);
  };

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View padding-m>
          <Section bg title="General">
            <View>
              <Action title="Toggle theme" info={ui.themeMode} onPress={ui.toggleThemeMode} />
              <Action title="Share" icon="share-outline" onPress={doSomething('Share')} />
              <Action title="Rate" icon="star-outline" onPress={doSomething('Rate')} />
              <Action title="Support" icon="mail-unread-outline" onPress={doSomething('Support')} />
            </View>
          </Section>

          <Section bg title="Links">
            <View>
              <Action title="Github" icon="logo-github" onPress={openLink(links.github)} />
              <Action title="Website" icon="earth-outline" onPress={openLink(links.website)} />
            </View>
          </Section>

          <Section bg title="About">
            <View>
              <Action disabled title="App name" info={getApplicationName()} />
              <Action disabled title="Version" info={getVersion()} />
            </View>
          </Section>
        </View>
      </ScrollView>
    </View>
  );
});
