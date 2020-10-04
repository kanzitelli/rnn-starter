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
import { useStores } from '../store';
import Reanimated2 from '../components/Reanimated2';


const ExpoScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { ui } = useStores();

  useNavigationComponentDidAppear(() => {
    getNetworkType();
  }, componentId);

  const getNetworkType = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();

      ui.networkType = networkState.type;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
    margin: 8,
  }
});

ExpoScreen.options = props => ({
  topBar: {
    title: {
      text: 'Expo',
    },
  },
});

export default ExpoScreen;
