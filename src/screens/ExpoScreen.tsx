import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist/hooks';
import { ScrollView } from 'react-native-gesture-handler';

// EXPO modules
import { Constants as ExpoConstants } from 'react-native-unimodules';
import * as Network from 'expo-network';

import Constants from '../utils/constants';
import { useStores } from '../stores';
import { useServices } from '../services';
import Reanimated2 from '../components/Reanimated2';
import { ButtonTitle } from '../components/Button';
import useStyles from '../utils/useStyles';
import NView from '../components/NView';

type ExpoScreenProps = {
  hackForTabScreenLargeTitleIOS14: boolean; // large title collapsed if a screen is on one of the tab but first
}

const ExpoScreen: NavigationFunctionComponent<ExpoScreenProps> = observer(({
  componentId,
  hackForTabScreenLargeTitleIOS14 = false,
}) => {
  const { ui } = useStores();
  const { navigation, t } = useServices();
  const { styles } = useStyles(_styles);

  const [safeArea, setSafeArea] = useState(false); // hack for Large Title + ScrollView
  const [contentHidden, setContentHidden] = useState(hackForTabScreenLargeTitleIOS14); // hack for Large Title iOS14 on 2+ tab view

  useEffect(() => {
    setTimeout(() => setSafeArea(true), 250);
  }, [componentId]);

  useNavigationComponentDidAppear(() => {
    getNetworkType();

    setContentHidden(false);
  }, componentId);

  const getNetworkType = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();

      ui.setNetworkType(networkState.type);
    } catch (e) { }
  }

  return contentHidden ? <NView safe={true} /> : (
    <NView safe={safeArea}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.header}>
            { t.do('from_expo') }
          </Text>

          <Text style={styles.text}>Device ID: {ExpoConstants.deviceId}</Text>
          <Text style={styles.text}>Network type: {ui.networkType}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>
            { t.do('reanimated2') }
          </Text>

          <Reanimated2 />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>
            { t.do('navigation') }
          </Text>

          <ButtonTitle
            title={t.do('push_screen')}
            onPress={() => navigation.pushExpo(componentId)}
          />
          <ButtonTitle
            title={t.do('show_modal')}
            onPress={() => navigation.showExpo()}
          />
          <ButtonTitle
            title={t.do('close_modal')}
            onPress={() => navigation.dismissModal(componentId)}
          />
        </View>
      </ScrollView>
    </NView>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  section: {
    padding: theme.sizes.m,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  text: {
    fontSize: 16,
    margin: theme.sizes.s,
    color: theme.colors.text,
  }
});

ExpoScreen.options = props => ({
  topBar: {
    title: {
      text: Constants.ScreenTitles.ExpoScreen,
    },
    largeTitle: {
      visible: true,
    }
  },
});

export default ExpoScreen;
