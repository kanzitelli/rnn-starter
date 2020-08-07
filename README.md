<img src="https://i.postimg.cc/Vvv1X3hy/image1.png" width="100%" title="Logo">

##  🦥 Motivation
1. I love [React Native](https://reactnative.dev/) 💚
2. I love [Expo](https://expo.io/) 💙
3. I love [React Native Navigation](https://wix.github.io/react-native-navigation) ❤️

So why not put them all together? 😏

Big love and gratitude to all people who are working on React Native, Expo and React Native Navigation!

## 🏃‍♂️ Getting Started

1. Clone the repo
```bash
git clone https://github.com/kanzitelli/expo-rnn-starter.git new-project
```

2. Install packages
```bash
cd new-project
yarn
npx pod-install
```

3. Run it!
```bash
yarn ios
yarn android
```

If you would like to rename the app, you can use [react-native-rename](https://github.com/junedomingo/react-native-rename). Don't forget to run `npx pod-install` after the process is finished. Also keep in mind that bundle identifier must be valid for both platforms or change it manually.

NOTE: If you are planning to add Expo modules, please use [expo-cli](https://docs.expo.io/workflow/expo-cli/), so they are compatible with each other.

## 📖 What's inside
- [Expo Unimodules](https://github.com/expo/expo) - universal set of amazing libraries which are needed for every app.
- [React Native Navigation](https://github.com/wix/react-native-navigation) - truly native navigation experience for iOS and Android
- [React Native Navigation Hooks](https://github.com/underscopeio/react-native-navigation-hooks) - a set of React hooks for React Native Navigation
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - customizable icons for React Native
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native
- [Typescript](https://www.typescriptlang.org/) - strict syntactical superset of JavaScript

and pick your favourite state management tool (examples inside)

| MOBX | REDUX |
| :---: | :---: |
| [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management | [Redux](https://github.com/reduxjs/redux) - a predictable state container  |
| [MobX React](https://github.com/mobxjs/mobx-react) - official React bindings for MobX | [React Redux](https://github.com/reduxjs/react-redux) - official React bindings for Redux  |
| [MobX State Tree (MST)](https://github.com/mobxjs/mobx-state-tree) - opinionated, transactional, MobX powered state container | [Redux Saga](https://github.com/redux-saga/redux-saga) - side effect model for Redux apps |
| [Persistence](https://github.com/kanzitelli/react-native-navigation-starter/blob/master/srcMobX/store/redditStore.ts#L130) and [Hydration](https://github.com/kanzitelli/react-native-navigation-starter/blob/master/srcMobX/store/redditStore.ts#L97) are done by our hands | [Redux Persist](https://github.com/rt2zz/redux-persist) - persist and rehydrate a Redux store |

## 🧙‍♂️ Enhancements
There are still some things I would like to add to the starter:
- [Expo Notifications](https://docs.expo.io/versions/v38.0.0/sdk/notifications/).
- Continous delivery via [Expo Updates](https://docs.expo.io/bare/installing-updates/).
- Dark Mode support.
- Localization via [i18next](https://github.com/i18next/i18next/).

Feel free to open an issue for suggestions.

## ⚠️ Known issues (warnings)
* Splash screen warning from Expo. It happens due to absent of Splash screen but it will be added soon. If you would like to turn it off, you can use `console.disableYellowBox = true`. If you would like to help integrating it, you can follow this [link]( https://github.com/expo/expo/tree/master/packages/expo-splash-screen).

Feel free to open an issue for any other warning or problems.

## 📃 License

This project is [MIT licensed](/LICENSE.md)
