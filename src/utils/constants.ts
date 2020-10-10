const prefix = 'rnn_starter';

class Contants {
  ScreenNames = {
    CounterScreen: `${prefix}.CounterScreen`,
    ExpoScreen: `${prefix}.ExpoScreen`,

    ExampleScreen: `${prefix}.ExampleScreen`,
  }

  BottomTabsTitles = {
    tab1: 'Counter',
    tab2: 'Expo',
  }

  ScreenTitles = {
    CounterScreen: 'Counter',
    ExpoScreen: 'Expo',

    ExampleScreen: 'Example',
  }

  CounterScreen = {
    decButtonId: 'decButtonId',
    decButtonTitle: 'Dec',
    incButtonId: 'incButtonId',
    incButtonTitle: 'Inc',
  }

  // Styles
  colors = {
    black: '#000',
    white: '#fff',
    lightGrey: '#dcdde1',
    blue: '#4d7198',
    yellow: '#fbc531',
  }
  sizes = {
    s: 8,
    m: 16,
    l: 32,
    xl: 40,
  }
}

export default new Contants();