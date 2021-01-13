import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigationButtonPress, useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist/hooks';
import { ScrollView } from 'react-native-gesture-handler';

// EXPO modules
import { Constants as ExpoConstants } from 'react-native-unimodules';
import * as Network from 'expo-network';

import { useStores } from 'src/stores';
import { useServices } from 'src/services';
import Reanimated2 from 'src/components/Reanimated2';
import { ButtonIcon, ButtonTitle } from 'src/components/Button';
import useStyles from 'src/hooks/useStyles';
import { screens } from 'src/services/navigation/screens';
import Section from 'src/components/Section';
import { Buttons } from 'src/services/navigation/buttons';

type StarterScreenProps = { }

const StarterScreen: NavigationFunctionComponent<StarterScreenProps> = observer(({
  componentId,
}) => {
  const { ui, counter } = useStores();
  const { nav, t } = useServices();
  const { styles } = useStyles(_styles);

  useNavigationButtonPress(counter.decrement, componentId, Buttons.Dec.id);
  useNavigationButtonPress(counter.increment, componentId, Buttons.Inc.id);
  useNavigationComponentDidAppear(() => {
    getNetworkType();
  }, componentId);

  const getNetworkType = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();

      ui.setNetworkType(networkState.type);
    } catch (e) { }
  }

  return (
    <>
      <ScrollView>
        <Section title={t.do('counter_store')}>
          <View style={styles.counterContainer}>
            <ButtonIcon icon={'ios-remove-outline'} onPress={counter.decrement} />
            <Text style={styles.counterText}>
              { counter.value }
            </Text>
            <ButtonIcon icon={'ios-add-outline'} onPress={counter.increment} />
          </View>
        </Section>

        <Section title={t.do('from_expo')}>
          <Text style={styles.text}>Device ID: {ExpoConstants.deviceId}</Text>
          <Text style={styles.text}>Network type: {ui.networkType}</Text>
        </Section>

        <Section title={t.do('reanimated2')}>
          <Reanimated2 />
        </Section>

        <Section title={t.do('navigation')}>
          <ButtonTitle
            title={t.do('push_screen')}
            onPress={() => nav.pushSettings(componentId)}
          />
          <ButtonTitle
            title={t.do('show_modal')}
            onPress={() => nav.showSettings()}
          />
          <ButtonTitle
            title={t.do('close_modal')}
            onPress={() => nav.dismissModal(componentId)}
          />
        </Section>
      </ScrollView>
    </>
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
  },

  counterContainer: {
    padding: theme.sizes.s,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 50,
    marginHorizontal: theme.sizes.m,
    marginVertical: theme.sizes.s,
    textAlign: 'center',
    color: theme.colors.text,
  },
});

StarterScreen.options = props => screens.starter.options();

export default StarterScreen;
