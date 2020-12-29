import CounterScreen from 'src/screens/CounterScreen';
import ExpoScreen from 'src/screens/ExpoScreen';
import { Buttons } from './buttons';

// Here we define all information regarding screens

const prefix = 'rnn_starter';

const ScreenNames = {
  CounterScreen: `${prefix}.CounterScreen`,
  ExpoScreen: `${prefix}.ExpoScreen`,

  ExampleScreen: `${prefix}.ExampleScreen`,
}

const ScreenTitles = {
  CounterScreen: 'Counter',
  ExpoScreen: 'Expo',

  ExampleScreen: 'Example',
}

const ScreenButtons = {
  CounterScreen: {
    right: [Buttons.Inc, Buttons.Dec]
  }
};

const ScreenOptions = {
  CounterScreen: {
    topBar: {
      title: { text: ScreenTitles.CounterScreen, },
      rightButtons: ScreenButtons.CounterScreen.right,
    }
  },
  ExpoScreen: {
    topBar: { title: { text: ScreenTitles.ExpoScreen, } }
  },

  ExampleScreen: {
    topBar: { title: { text: ScreenTitles.ExampleScreen, } }
  },
}

const Screens = new Map<string, React.FC<any>>();
Screens.set(ScreenNames.CounterScreen, CounterScreen);
Screens.set(ScreenNames.ExpoScreen, ExpoScreen);

export default Screens;
export {
  ScreenNames,
  ScreenTitles,
  ScreenOptions,
  ScreenButtons,
};