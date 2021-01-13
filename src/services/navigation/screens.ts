import StarterScreen from 'src/screens/StarterScreen';
import SettingsScreen from 'src/screens/SettingsScreen';
import AppUpdateScreen from 'src/screens/AppUpdateScreen';

import { Buttons } from './buttons';
import { Options } from 'react-native-navigation';

// Here we define all information regarding screens

type Screen = {
  id: string;
  options: () => Options;
}
type ScreenName =
  'starter' |
  'settings' |
  'appUpdates';

const withPrefix = (s: string) => `rnn_starter.${s}`;

const screens: Record<ScreenName, Screen> = {
  starter: {
    id: withPrefix('StarterScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Starter', },
        rightButtons: [Buttons.Inc, Buttons.Dec],
      },
    })
  },
  settings: {
    id: withPrefix('SettingsScreen'),
    options: () => ({
      topBar: {
        title: { text: 'Settings', }
      }
    })
  },
  appUpdates: {
    id: withPrefix('AppUpdatesScreen'),
    options: () => ({
      overlay: { interceptTouchOutside: false },
      topBar: { visible: false },
      layout: { componentBackgroundColor: 'transparent' },
    })
  }
}

const Screens = new Map<string, React.FC<any>>();
Screens.set(screens.starter.id, StarterScreen);
Screens.set(screens.settings.id, SettingsScreen);
Screens.set(screens.appUpdates.id, AppUpdateScreen);

export default Screens;
export {
  screens,
};