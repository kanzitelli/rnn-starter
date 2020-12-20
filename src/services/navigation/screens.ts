import CounterScreen from '../../screens/CounterScreen';
import ExpoScreen from '../../screens/ExpoScreen';
import Constants from '../../utils/constants';

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

const ScreenOptions = {
  CounterScreen: {
    topBar: {
      title: { text: ScreenTitles.CounterScreen, },
      rightButtons: [{
          id: Constants.CounterScreen.incButtonId,
          text: Constants.CounterScreen.incButtonTitle,
        }, {
          id: Constants.CounterScreen.decButtonId,
          text: Constants.CounterScreen.decButtonTitle,
        }],
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
};