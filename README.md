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
cd new-project && yarn && yarn ios:pods
```

3. Run it!
```bash
yarn ios
yarn android
```

👁‍🗨 If you are planning to use Expo modules, such as preconfigured `expo-updates` and others, or add new ones, what I strongly recommend, then proceed to Expo Configuration section and follow those steps carefully.

If you would like to rename the app, you can use [react-native-rename](https://github.com/junedomingo/react-native-rename). Don't forget to run `yarn ios:pods` after the process is finished. Also keep in mind that bundle identifier must be valid for both platforms or change it manually.

## 🎛 Expo Configuration
#### Prerequisites
1. Get familiar with [Expo](https://expo.io) and [their documentation](https://docs.expo.io/) if you haven't yet.
2. Create new account at [Expo.io](https://expo.io/signup)
3. Install [expo-cli](https://docs.expo.io/workflow/expo-cli/).
4. Login using expo-cli in the terminal.

### expo-updates
If you decided to use this module, then you will need to follow steps below carefully:
1. Decide how your app's `slug` will look like. For example, for the starter I am using `expo-rnn-starter`.
2. Open `app.json` from the root of the project and change `"expo" --> "slug"` property to your own.
3. We need to define `EXPO UPDATE URL` for the project which we will put in to iOS and Android config files. It has following pattern -- `https://exp.host/@my-expo-username/my-app-slug`. For example, for the starter it would be `https://exp.host/@kanzitelli/expo-rnn-starter`.
4. Open `ios/Supporting/Expo.plist` and change `EXUpdatesURL` property to your own.
5. Open `android/app/src/main/AndroidManifest.xml` and change `EXPO_UPDATE_URL` meta-data property to your own.
6. Run `expo publish` from the root of the project. It will take some time.
7. Now you should be able to see the app in [Expo dashboard](https://expo.io/dashboard).
8. In order to test it, you will need to build the app in Release mode for both platforms. Once you do some changes in your code, don't forget to run `expo publish`.

If you would like to disable `expo-updates`, open `ios/Supporting/Expo.plist` and change `EXUpdatesEnabled ` to `NO`; and for Android open `android/app/src/main/AndroidManifest.xml` and change `ENABLED` meta-data property to `false`.

## 📖 What's inside
- [Expo Unimodules](https://github.com/expo/expo) - universal set of amazing libraries which are needed for every app.
- [Expo Updates]() - continuous delivery tool maintained by Expo team and is part of Expo Ecosystem. Best alternative to CodePush.
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
- Dark Mode support.
- Localization via [i18next](https://github.com/i18next/i18next/).

Feel free to open an issue for suggestions.

## ⚠️ Known issues (warnings)
* Expo splash screen. There is some weird behavior using `expo-splash-screen` with `react-native-navigation`. That is why I have excluded this module from `react-native-unimodules`.

Feel free to open an issue for any other warning or problems.

## 📃 License

This project is [MIT licensed](/LICENSE.md)