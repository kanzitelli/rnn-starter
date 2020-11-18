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

// EXPO modules
import { Constants as ExpoConstants } from 'react-native-unimodules';
import * as Network from 'expo-network';

import Constants from '../utils/constants';
import { useStores } from '../stores';
import { useServices } from '../services';
import Reanimated2 from '../components/Reanimated2';
import { ButtonTitle } from '../components/Button';
import useStyles from '../utils/useStyles';
import { ScrollView } from 'react-native-gesture-handler';

type ExpoScreenProps = {
  hackForTabScreenLargeTitleIOS14: boolean; // large title collapsed if a screen is on one of the tab but first
}

const ExpoScreen: NavigationFunctionComponent<ExpoScreenProps> = observer(({
  componentId,
  hackForTabScreenLargeTitleIOS14 = false,
}) => {
  const { ui } = useStores();
  const { navigation } = useServices();
  const { styles } = useStyles(_styles);

  const [safeAreaHidden, setSafeAreaHidden] = useState(false); // hack for Large Title + ScrollView
  const [contentHidden, setContentHidden] = useState(hackForTabScreenLargeTitleIOS14); // hack for Large Title iOS14

  useEffect(() => {
    setTimeout(() => setSafeAreaHidden(true), 500);
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

  const Content = () => {
    const content = (
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.header}>
            { 'From Expo SDK' }
          </Text>

          <Text style={styles.text}>Device ID: {ExpoConstants.deviceId}</Text>
          <Text style={styles.text}>Network type: {ui.networkType}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>
            { 'Reanimated 2' }
          </Text>

          <Reanimated2 />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>
            { 'Navigation' }
          </Text>

          <ButtonTitle
            title={'Push this screen again'}
            onPress={() => navigation.pushExpo(componentId)}
          />
          <ButtonTitle
            title={'Show it as a modal'}
            onPress={() => navigation.showExpo()}
          />
          <ButtonTitle
            title={'Close modal'}
            onPress={() => navigation.dismissModal(componentId)}
          />
        </View>
      </ScrollView>
    );

    return (
      safeAreaHidden
        ? content
        : (
          <SafeAreaView>
            { content }
          </SafeAreaView>
        )
    );
  }

  return (
    contentHidden
      ? <SafeAreaView />
      : <Content />
  );
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
