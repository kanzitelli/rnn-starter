import StarterScreen from 'src/screens/StarterScreen';
import SettingsScreen from 'src/screens/SettingsScreen';
import { Buttons } from './buttons';
import { Options } from 'react-native-navigation';

// Here we define all information regarding screens

const prefix = 'rnn_starter';

const ScreenNames = {
  StarterScreen: `${prefix}.StarterScreen`,
  SettingsScreen: `${prefix}.SettingsScreen`,

  ExampleScreen: `${prefix}.ExampleScreen`,
}

const ScreenTitles = {
  StarterScreen: 'Starter',
  SettingsScreen: 'Settings',

  ExampleScreen: 'Example',
}

const ScreenButtons = {
  StarterScreen: {
    right: [Buttons.Inc, Buttons.Dec]
  }
};

const ScreenOptions: Record<string, Options> = {
  StarterScreen: {
    topBar: {
      title: { text: ScreenTitles.StarterScreen, },
      rightButtons: ScreenButtons.StarterScreen.right,
    },
  },
  SettingsScreen: {
    topBar: { title: { text: ScreenTitles.SettingsScreen, } }
  },

  ExampleScreen: {
    topBar: { title: { text: ScreenTitles.ExampleScreen, } }
  },
}

const Screens = new Map<string, React.FC<any>>();
Screens.set(ScreenNames.StarterScreen, StarterScreen);
Screens.set(ScreenNames.SettingsScreen, SettingsScreen);

export default Screens;
export {
  ScreenNames,
  ScreenTitles,
  ScreenOptions,
  ScreenButtons,
};