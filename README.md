![logo](https://i.ibb.co/dmgMMdR/RNN-Starter.png)

-----
Simple yet practical starter with [React Native Navigation v3](https://github.com/wix/react-native-navigation), [Redux](https://github.com/reduxjs/redux) and more goodies inside.

It is a basic Reddit App implementation (list of subreddits and news only) where the main goal to achieve was usage of functional components with React Native Navigation. So no more ~~`class MyComponent extends React.Component { ... }`~~, only functions with [React Hooks](https://reactjs.org/docs/hooks-intro.html) and native navigation.

- [React Native Navigation v3](https://github.com/wix/react-native-navigation) - truly native navigation experience for iOS and Android
- [React Native Navigation Hooks](https://github.com/underscopeio/react-native-navigation-hooks) - a set of React hooks for React Native Navigation
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - customizable icons for React Native
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native
- [Redux](https://github.com/reduxjs/redux) - a predictable state container
- [Redux Saga](https://github.com/redux-saga/redux-saga) - side effect model for Redux apps
- [Redux Persist](https://github.com/rt2zz/redux-persist) - persist and rehydrate a Redux store
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/kanzitelli/react-native-navigation-starter.git new-project
```

2. Install packages
```bash
cd new-project
npm i
cd ios/ && pod install && cd ../
```

3. Rename the app using [react-native-rename](https://github.com/junedomingo/react-native-rename) if needed.

4. Run it!
```bash
npm start
react-native run-ios # or react-native run-android
```

## Todos
There are still some more things I would like to add to the starter:
- Continous delivery via [Codepush](https://github.com/Microsoft/code-push).
- Styles using [Styled Components](https://github.com/styled-components/styled-components).
- Maybe something else. Feel free to open an issue for suggestions.

## License

This project is [MIT licensed](/LICENSE.md)