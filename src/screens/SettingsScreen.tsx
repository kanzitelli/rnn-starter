import React from 'react';
import {
  Linking,
  Share,
    StyleSheet,
} from 'react-native';
import { getReadableVersion } from 'react-native-device-info';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import * as StoreReview from 'expo-store-review';
import * as MailComposer from 'expo-mail-composer';

import { useStores } from 'src/stores';
import { useServices } from 'src/services';
import useStyles from 'src/hooks/useStyles';
import { screens } from 'src/services/navigation/screens';
import Section from 'src/components/Section';
import SettingsAction from 'src/components/SettingsAction';
import useContants from 'src/hooks/useConstants';
import SettingsFooter from 'src/components/SettingsFooter';

const SettingsScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { } = useStores();
  const { } = useServices();
  const { styles } = useStyles(_styles);
  const C = useContants();

  const shareApp = () =>
    Share.share({ url: C.settings.links.app });

  const rateApp = async () =>
    (await StoreReview.isAvailableAsync())
      ? StoreReview.requestReview()
      : alert('not available');

  const openSupport = async () =>
    (await MailComposer.isAvailableAsync())
      ? MailComposer.composeAsync(C.settings.general.mailOptions)
      : alert('not available');

  const openGithub = () =>
    Linking.openURL(C.settings.links.github);

  const openWebsite = () =>
    Linking.openURL(C.settings.links.website);

  return (
    <>
      <ScrollView>
        <Section bg title={'General'}>
          <SettingsAction
            title={'Share'}
            icon={'ios-share-outline'}
            onPress={shareApp}
          />

          <SettingsAction
            title={'Rate'}
            icon={'ios-star-outline'}
            onPress={rateApp}
          />

          <SettingsAction
            title={'Support'}
            icon={'ios-mail-unread-outline'}
            onPress={openSupport}
          />
        </Section>

        <Section bg title={'Links'}>
          <SettingsAction
            title={'Github'}
            icon={'logo-github'}
            onPress={openGithub}
          />
          <SettingsAction
            title={'Website'}
            icon={'ios-earth-outline'}
            onPress={openWebsite}
          />
        </Section>

        <Section bg title={'About'}>
          <SettingsAction
            disabled
            title={'Version'}
            info={getReadableVersion()}
          />
        </Section>

        <SettingsFooter />
      </ScrollView>
    </>
  );
});

const _styles = (theme: ThemeType) => StyleSheet.create({
  
});

SettingsScreen.options = props => screens.settings.options();

export default SettingsScreen;
