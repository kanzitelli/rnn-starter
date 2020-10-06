import React from 'react';
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
import useStyles, { ThemedStylesFuncType } from '../utils/useStyles';
import { ScrollView } from 'react-native-gesture-handler';


const ExpoScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { ui } = useStores();
  const { navigation } = useServices();
  const styles = useStyles(_styles);

  useNavigationComponentDidAppear(() => {
    getNetworkType();
  }, componentId);

  const getNetworkType = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();

      ui.networkType = networkState.type;
    } catch (e) { }
  }

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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
  },
});

export default ExpoScreen;
