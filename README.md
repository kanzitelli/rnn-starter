<p align="center">
  <img src="https://xxx-files.ggc.team/oss/rnn-starter/cover.png" width="80%" title="Logo">
</p>

![React Native](https://img.shields.io/badge/React%20Native-0.70.3-blue)
![React Native Navigation](https://img.shields.io/badge/React%20Native%20Navigation-7.29.0-blue)
![Expo](https://img.shields.io/badge/𝝠%20Expo-46.0.16-blue)

This starter is a collection of libraries and approaches needed for fast start and productive maintainance of React Native App.

> <i>RNN Starter</i> is a part of [starters.dev](https://github.com/starters-dev) collection.

## Getting Started

### Quick start with [cli-rn](https://github.com/kanzitelli/cli-rn)

```bash
npx cli-rn new App -t rnn
```

> As `cli-rn` uses `react-native-rename` script for renaming under the hood, please refer to [Rename section](#rename) to apply necessary changes to Android part.

If you have any troubles running the app with `yarn ios` or `yarn android`, open XCode or Android Studio and run the project from there.

<details>
<summary>Manual setup</summary>

1. Clone the repo

```bash
npx degit kanzitelli/rnn-starter app
```

2. Install packages and pods

```bash
cd app && yarn && yarn ios:pods
```

3. Run it

Open XCode or Android Studio to run the project (recommended) or do

```bash
yarn ios
yarn android
```

</details>

### Rename

If you need to rename the app, do the following (based on [react-native-rename](https://github.com/junedomingo/react-native-rename)):

```bash
yarn rename "NewApp" -b com.yourcompany.newapp
yarn ios:pods
```

⚠️ Troubleshooting on Android. You can see that after running `rename` script, it doesn't change package name and imports for files under `newarchitecture` folder.

<details>
<summary>You will need do these steps manually</summary>

1. Open all `.java` files under `android/app/src/main/java/your/bundle/newarchitecture/` folder.

2. Open `MainApplication.java`.

3. Find all packages and imports which contain `com.rnnstarter` and change them to yours.

</details>

## What's inside

- [React Native Navigation](https://github.com/wix/react-native-navigation) - truly native navigation experience for iOS and Android.
- [Expo Modules](https://github.com/expo/expo) - libraries and modules from [Expo](https://expo.dev) ecosystem.
- [RNN Screens](https://github.com/kanzitelli/rnn-screens) - simplifed and predictable Navigation for React Native. Built on top of [React Native Navigation](https://github.com/wix/react-native-navigation).
- [RN UI lib](https://github.com/wix/react-native-ui-lib) - amazing Design System, UI toolset & components library for React Native. Dark Mode is implemented using this library.
- [Reanimated 2](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented.
- [MMKV](https://github.com/mrousavy/react-native-mmkv) - efficient, small mobile key-value storage framework developed by WeChat. [~30x faster](https://github.com/mrousavy/react-native-mmkv#benchmark) than _AsyncStorage_!
- [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management, with [mobx-persist-store](https://github.com/quarrant/mobx-persist-store) for persisting your stores.
- [Flash List](https://github.com/Shopify/flash-list) - a better list for React Native (by Shopify).
- [Fast Image](https://github.com/DylanVann/react-native-fast-image) - performant React Native image component.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - customizable icons for React Native.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native.
- [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen) - a splash screen for React Native. Works with RNN!

#### Extra helpful libraries

- [React Native Navigation Hooks](https://github.com/underscopeio/react-native-navigation-hooks) - a set of hooks for React Native Navigation.
- [Patch Package](https://github.com/ds300/patch-package) - useful for fixing node modules instantly.
- [Release It](https://github.com/release-it/release-it) - automate versioning and publishing of your app.

#### Useful services/methods

- `nav` - a service where some of navigation configuration takes place in (such as default options).
- `translate` - a service that brings an easy integration of localization for an app by using [i18n-js](https://github.com/fnando/i18n-js) and [expo-localization](https://github.com/expo/expo/tree/master/packages/expo-localization).
- `api` - a service where API-related methods are located.
- `onStart` - a service where you can write your own logic when app is launched. For example, you can increment number of `appLaunches` there.

#### Splash Screen 🎉

Starting from `v16.0.0`, we have added a Splash Screen that works great on pair with [React Native Navigation](https://github.com/wix/react-native-navigation) and can be hidden at any moment in your app! Thanks to [@FawadMahmood](https://github.com/FawadMahmood)!

> Current approach relies on `LaunchImage` on iOS that is marked as deprecated by Apple. However, people still use it and that's the only way to make it work with React Native Navigation.

At some point of the app development, you'll probably want to replace existing splash screen (with [starters.dev](https://github.com/starters-dev) icon). Below, you can find some tutorials/advices on how to replace the splash screen images.

<details>
<summary>Splash Screen replacement</summary>

If you already have some images ready for Splash Screen, you can just drag and drop them instead of existing `Images/LaunchImage` in XCode.

If you'd like to generate new images, then follow the steps below.

We are going to use [rn-toolbox](https://github.com/bamlab/generator-rn-toolbox) to achieve that. You can use any other tool or website.

1. Follow the [requirements and installation](https://github.com/bamlab/generator-rn-toolbox/blob/master/generators/assets/README.md#requirements) steps for rn-toolbox.

2. Prepare `splashscreen.psd` with the design of your splash screen.

3. Run `yarn splash:gen`.

Now, splash screens for iOS and Android must be generated and you should manually add them to the following folders.

> Note for Android: discard any changes of `styles.xml` if it was accidentally overwritten by the script.

> Note for iOS: key `UILaunchStoryboardName` must be removed from `Info.plist` file and `LaunchImage` value must be set for "Asset Catalog Launch Image" in Build Settings.

</details>

> Splash Screen hides loading state of the app bundle when launching the app in debug mode.

#### Design System

This starter is using [RN UI lib](https://github.com/wix/react-native-ui-lib) as a design system, UI toolset and a source of ready-to-go components.

`DesignSystem` - a class where all settings for an app's design system is taking place. You can customize colors, schemes, typegraphy, spacings, etc. Located at `src/utils/designSystem.tsx`.

https://user-images.githubusercontent.com/4402166/197052859-d7eef80a-a923-4a9b-86df-b9dbc32a075b.mov

## Advantages

#### Describe app screens in one place

All setup for your screens takes place in one file `src/screens/index.ts`:

```tsx
import {generateRNNScreens} from 'rnn-screens';

import {Main} from './main';
import {Settings} from './settings';

export const screens = generateRNNScreens(
  {
    Main: {
      component: Main,
      options: {
        topBar: {
          ...withTitle('Main'),
          ...withRightButtons('inc', 'dec'),
        },
      },
    },
    Settings: {
      component: Settings,
      options: {
        topBar: {
          ...withTitle('Settings'),
        },
      },
    },
    // ...
  },
  [withGestureHandler, withSS, withAppearance],
);
```

#### Navigate with predictability

```tsx
import {screens} from '.';

const SomeScreen = ({componentId}) => {
  return (
    <View>
      <Button
        label="Open screen"
        onPress={() => {
          // IDE will autocomplete with registered screens
          screens.push(componentId, 'AnotherScreen');
        }}
      />
    </View>
  );
};
```

#### Build root component with ease

```tsx
// single screen app
const App = () => Root(Screen(screens.get('Main')));

// tab based app
const TabsApp = () =>
  Root(
    BottomTabs([
      Screen(screens.get('Main')),
      Screen(screens.get('Playground')),
      Screen(screens.get('Settings')),
    ]),
  );
```

#### Dark mode support

You can define modes in `utils/designSystem.tsx`.

#### Samples for new screens, services, stores and components.

So you have one structure within the project. You can find them in corresponding folders. Just copy&paste it and make the necessary changes.

## Enhancements

There are still some things I would like to add to the starter:

- [ ] Auth flow
- [ ] Notifications — [wix/react-native-notifications](https://github.com/wix/react-native-notifications) or/and [invertase/notifee](https://github.com/invertase/notifee)
- [ ] E2E tests - [wix/Detox](https://github.com/wix/Detox)
- [ ] Permissions — [zoontek/react-native-permissions](https://github.com/zoontek/react-native-permissions)
- [ ] FB SDK — [thebergamo/react-native-fbsdk-next](https://github.com/thebergamo/react-native-fbsdk-next)
- [ ] Appodeal — [appodeal/react-native-appodeal](https://github.com/appodeal/react-native-appodeal)
- [ ] In-app purchases — [dooboolab/react-native-iap](https://github.com/dooboolab/react-native-iap)?

Feel free to open an issue for suggestions.

## Known issues

- **[iOS]** _Hermes framework not found/loaded_. There are some cases when `hermes.framework` is not found/loaded in XCode with React Native 0.70. Check [this](https://github.com/facebook/react-native/issues/34608#issuecomment-1243232921) and [this](https://github.com/facebook/react-native/issues/34608#issuecomment-1246730507) comments for potential solution.
- **[iOS]** _Large title is not shown on 2nd+ tab_. This [issue](https://github.com/software-mansion/react-native-screens/issues/649) exists. You can find the patch file for fixing that at `patches/react-native+0.70.0.patch`.
- **[Android]** _Issue after renaming on Android_. This happens when you [rename](#rename) the app using `yarn rename` script. Check [Rename](#rename) section for possible solution.

## Worth checking

### Other starters

- [rnn-with-expo](https://github.com/starters-dev/rnn-with-expo) - 🛹 Minimalistic React Native App Starter with React Native Navigation, Expo Modules and RNN Screens.
- [expo-starter](https://github.com/kanzitelli/expo-starter) - 🦥 Production-ready starter for Expo (React Native) App! Powered by cli-rn, React Navigation (v6), RN UI lib, Mobx, Reanimated 2, Dark Mode, Localization, and much more.
- [rn-starter](https://github.com/kanzitelli/rn-starter) - 🦄 Production-ready starter for React Native App! Powered by cli-rn, React Navigation (v6), RN UI lib, Mobx, Reanimated 2, Dark Mode, Localization, Notifications, Permissions, and much more.

> Originally bootstrapped from [starters-dev/rnn-with-expo](https://github.com/starters-dev/rnn-with-expo).

### Articles

- "Build React Native Apps with Simplified and Predictable Navigation" - [Medium](https://kanzitelli.medium.com/build-react-native-apps-with-simplified-and-predictable-navigation-2859f047f29e), [Dev.to](https://dev.to/kanzitelli/build-react-native-apps-with-simplified-and-predictable-navigation-5b3j)
- "Testing React Native apps with zero effort" - [Medium](https://kanzitelli.medium.com/cli-rn-making-rn-app-developing-experience-as-smooth-as-possible-1022aae3a0d3), [Dev.to](https://dev.to/kanzitelli/cli-rn-making-rn-app-developing-experience-as-smooth-as-possible-4e98)
- "Expo + React Native Navigation? Yes!" - [Medium](https://kanzitelli.medium.com/expo-react-native-navigation-yes-ebda0cbfa4b1), [Dev.to](https://dev.to/kanzitelli/expo-react-native-navigation-1pll)

## Why

...do we need yet another starter/boilerplate? Well, I work with React Native for more than 4 years and during the time I started having my own project structure which was a good fit for almost all of the delivered apps. Also, I have come up with some custom [useful services/methods](#useful-servicesmethods) which simplify usage of [React Native Navigation](https://github.com/wix/react-native-navigation) and other libraries. Check out [Advantages](#advantages) section.

## License

This project is [MIT licensed](/LICENSE.md)
