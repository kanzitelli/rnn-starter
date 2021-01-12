<img src="https://i.postimg.cc/Qx2m8TkP/ezgif-com-optimize.gif" width="100%" title="Logo">

## Table of contents
- [🦥 Motivation](#motivation)
- [🏃‍♂️ Getting Started](#getting-started)
- [📖 What's inside](#whats-inside)
- [🧙‍♂️ Enhancements](#enhancements)
- [⚠️ Known issues (warnings)](#known-issues-warnings)
- [⭕️ Limitations](#limitations)
- [🤓 Worth checking](#worth-checking)

##  Motivation
- 💚 I love [React Native](https://reactnative.dev/)
- 💙 I love [Expo](https://expo.io/)
- ❤️ I love [React Native Navigation](https://wix.github.io/react-native-navigation)

So why not put them all together? 😏

Big love and gratitude to all people who are working on React Native, Expo and React Native Navigation!

This starter is a collection of libraries and approaches from my personal experience. No hard judgements ✌️

## Getting Started

### Quick start with [cli-rn](https://github.com/kanzitelli/cli-rn)

```bash
> npm i -g cli-rn
> cli-rn new AppName
```

### Manual setup
1. Clone the repo
```bash
git clone https://github.com/kanzitelli/expo-rnn-starter.git <appName> && cd <appName>
```

2. Remove `.git` file (if are not planning to contribute)
```bash
rm -rf .git
```

3. Install packages and rename the app (based on [react-native-rename-next
```bash
yarn
yarn rename <AppName>
yarn ios:pods
```

4. Run it!
```bash
yarn ios
yarn android
```

👁‍🗨 If you are planning to use Expo modules, such as preconfigured `expo-updates` and others, or add new ones, what I strongly recommend, then proceed to [Expo Configuration](/EXPO_CONFIGURATION.md) and follow the steps.

## What's inside
- [React Native Navigation](https://github.com/wix/react-native-navigation) - truly native navigation experience for iOS and Android
- [Expo SDK](https://github.com/expo/expo) - universal set of amazing libraries (such as `expo-updates`) which are needed for building sustainable apps
- [Reanimated 2](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented
- [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management, with [mobx-persist](https://github.com/pinqy520/mobx-persist) for persisting your stores
### Extra helpful libraries
- [React Native Notifications](https://github.com/wix/react-native-notifications) - a library that takes care of handling notifications
- [React Native Navigation Hooks](https://github.com/underscopeio/react-native-navigation-hooks) - a set of hooks for React Native Navigation
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - customizable icons for React Native. Even though Expo SDK includes `expo-icons` which you can still use, but the reason of adding `react-native-vector-icons` is to get icons as sources before launching tab based app
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native
- [React Native Defice Info](https://github.com/react-native-community/react-native-device-info) - device information for React Native iOS and Android
- [Hermes Engine](https://reactnative.dev/docs/hermes) - a JavaScript engine optimized for running React Native apps on Android
- [Patch Package](https://github.com/ds300/patch-package) - useful for fixing node modules instantly
- [Typescript](https://www.typescriptlang.org/) - strict syntactical superset of JavaScript
### Small useful services/hooks from me
- `useStyles()` - a hook that takes care of dark mode in your app. Supports toggling modes while you are in app. No dependencies (needs only `react-native`, so could be reusable).
- `useConstants()` - a simple hook that gives access to constants.
- `navigation` - a service where all navigation configuration takes place. It might be a bit confusing but it should simplify and abstract the process of registering screens, etc.
- `translate` - a service that shows and simplifies integration with `expo-localization` and `i18n-js`. You can see an example of `en`, `ru` and `de` localizations in `ExpoScreen`.
- `notifications` - a service that takes care of setting up notifications which utilizes [React Native Notifications](https://github.com/wix/react-native-notifications). For more information, please, take a look at this [guide](/NOTIFICATIONS.md).
- `appUpdates` - a service that shows and simplifies integration with `expo-updates`. In order to use it, you will need to change `Expo.plist` and `AndroidManifest.xml` with your actual information. More information about [expo-updates](https://docs.expo.io/versions/latest/sdk/updates/).

## Enhancements
There are still some things I would like to add to the starter:
- 🔳 Dark Mode support (still looking for a more robust solution).
- 🔳 Localization via [expo-localization](https://docs.expo.io/versions/latest/sdk/localization) and [i18n-js](https://github.com/fnando/i18n-js).
- 🔳 Notifications (remote) using [React Native Notifications](https://github.com/wix/react-native-notifications).

Feel free to open an issue for suggestions.

## Known issues (warnings)
- Expo splash screen. There is some weird behavior using `expo-splash-screen` with `react-native-navigation`. That is why this module has been excluded: [ios](https://github.com/kanzitelli/expo-rnn-starter/blob/master/ios/Podfile#L8) & [android](https://github.com/kanzitelli/expo-rnn-starter/blob/master/android/app/build.gradle#L196).
- Dark Mode in Android. React Native Navigation doesn't toggle navigation and tab bars' background color to dark when dark mode is toggled on. However it does so on iOS. As a workaround, we can subscribe to toggle events and then using `Navigation.mergeOptions` & `Navigation.setDefaultOptions` to change stylings for navigations and tab bars. Anyways, it needs some time to dive into it and come up with better solution. Current progress could be found [here](https://github.com/kanzitelli/expo-rnn-starter/tree/android-dark-mode).
- Notifications received in background for iOS and Android. There is an issue with getting a callback triggered for notifications received while the app in background. For more information, please, check this [issue](https://github.com/wix/react-native-notifications/issues/670). 

Feel free to open an issue for any other warning or problems.

## Limitations
- [SOLVED] Check [cli-rn](https://github.com/kanzitelli/cli-rn) and [cli-rn-app](https://github.com/kanzitelli/cli-rn-app). ~~Apps bootstrapped from this starter won't be available through Expo app for iOS and Android as of differences in navigation approach. Theoretically, it is possible to create an app like Expo that will include `react-native-navigation` and somehow download needed bundles. Needs more research.~~
- Apps bootstrapped from this starter won't be able to be run on web as Expo apps do. Theoretically, it is possible to create some sort of an adapter between `react-navigation` and `react-native-navigation`. Maybe there will be other issues, but would be cool to have this feature.

## Worth checking
### Articles
- Expo + React Native Navigation? Yes! - [Medium](https://kanzitelli.medium.com/expo-react-native-navigation-yes-ebda0cbfa4b1), [Dev.to](https://dev.to/kanzitelli/expo-react-native-navigation-1pll)
- cli-rn — making RN app developing experience as smooth as possible - [Medium](https://kanzitelli.medium.com/cli-rn-making-rn-app-developing-experience-as-smooth-as-possible-1022aae3a0d3), [Dev.to](https://dev.to/kanzitelli/cli-rn-making-rn-app-developing-experience-as-smooth-as-possible-4e98)

### Apps in production
- cli-rn app - [Github](https://github.com/kanzitelli/cli-rn-app)
- Rabbit App. Lite Reddit client - [Github](https://github.com/kanzitelli/rabbit-app), [App Store](https://apps.apple.com/ru/app/rabbit-app-lite-reddit-client/id1535084154), [Google Play](https://play.google.com/store/apps/details?id=io.batyr.rabbitapp)
- Christmas Market - [App Store](https://apps.apple.com/ru/app/id1446775875)
- Trip Music Radio - [App Store](https://apps.apple.com/ru/app/id1525645826), [Google Play](https://play.google.com/store/apps/details?id=team.ggc.tripmusic)
- Messenger for VK - [App Store](https://apps.apple.com/ru/app/id891605076)
- App for VK - [App Store](https://apps.apple.com/ru/app/id819406913)

## License
This project is [MIT licensed](/LICENSE.md)
