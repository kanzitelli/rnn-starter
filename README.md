<p align="center">
  <img src="https://xxx-files.ggc.team/oss/rnn-starter/cover.png" width="80%" title="Logo">
</p>

This starter is a collection of libraries and approaches from my personal experience. No hard judgements ✌️

For more information, check out [Why](#why) section.

## Getting Started

#### Quick start with [cli-rn](https://github.com/kanzitelli/cli-rn)

```bash
> npx cli-rn new App -t rnn
```

If you have any troubles running the app with `yarn ios` or `yarn android`, open XCode or Android Studio and run the project from there.

<details>
<summary>Manual setup</summary>

1. Clone the repo

```bash
> git clone https://github.com/kanzitelli/rnn-starter.git App && cd App
```

2. Remove `.git` file (if not planning to contribute)

```bash
> rm -rf .git
```

3. Install packages and pods

```bash
> yarn && yarn ios:pods
```

4. Run it!

Open XCode or Android Studio to run the project (recommended) or do

```bash
> yarn ios
> yarn android
```

If you need to rename the app, do the following (based on [react-native-rename](https://github.com/junedomingo/react-native-rename)):

```bash
> yarn rename NewAppName
> yarn ios:pods
```

</details>

## What's inside

- [React Native Navigation](https://github.com/wix/react-native-navigation) - truly native navigation experience for iOS and Android.
- [RN UI lib](https://github.com/wix/react-native-ui-lib) - amazing Design System, UI toolset & components library for React Native. Dark Mode is implemented using this library.
- [Reanimated 2](https://github.com/software-mansion/react-native-reanimated) - React Native's Animated library reimplemented.
- [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management, with [mobx-persist-store](https://github.com/quarrant/mobx-persist-store) for persisting your stores.
- ~~AsyncStorage~~ [MMKV](https://github.com/mrousavy/react-native-mmkv) - efficient, small mobile key-value storage framework developed by WeChat. [~30x faster](https://github.com/mrousavy/react-native-mmkv#benchmark) than _AsyncStorage_!
- [Expo SDK 43](https://github.com/expo/expo). Integration with Expo Modules could be found under [rnn-starter@expo-modules](https://github.com/kanzitelli/rnn-starter/tree/expo-modules) branch. 

#### Extra helpful libraries

- [RNN Screens](https://github.com/kanzitelli/rnn-screens) - a set of methods to help build initial screens for RNN ([React Native Navigation](https://github.com/wix/react-native-navigation)) without hassle. Includes screens registration and predictable navigation between them.
- [React Native Navigation Hooks](https://github.com/underscopeio/react-native-navigation-hooks) - a set of hooks for React Native Navigation.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - customizable icons for React Native.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native.
- [React Native Device Info](https://github.com/react-native-community/react-native-device-info) - device information for React Native iOS and Android.
- [Hermes Engine](https://reactnative.dev/docs/hermes) - a JavaScript engine optimized for running React Native apps.
- [ESLint](https://github.com/eslint/eslint) + [Prettier](https://github.com/prettier/prettier) - keep your code neat and structured.
- [Patch Package](https://github.com/ds300/patch-package) - useful for fixing node modules instantly.
- [Release It](https://github.com/release-it/release-it) - automate versioning and publishing of your app.
- [Typescript](https://www.typescriptlang.org/) - strict syntactical superset of JavaScript.

#### Useful services/methods

- `navigation` - a service where all navigation configuration takes place in (such as default options, listeners, etc.).
- `translate` - a service that brings easy integration of localization for an app by using [i18n-js](https://github.com/fnando/i18n-js) and [react-native-localize](https://github.com/zoontek/react-native-localize). You can see an example of `en` and `ru` localizations in `Example` screen.
- `onStart` - a service where you can write your own logic when app is launched. For example, you can increment number of `appLaunches` there.
- `configureDesignSystem()` - a method where all settings for an app's design system is taking place. You can customize there colors, schemes, typegraphy, spacings, etc. Now you can add as much theme modes as you want.

https://user-images.githubusercontent.com/4402166/122827138-47911900-d2e4-11eb-8bc4-17cad2e4cc67.mp4

## Advantages

#### Describe app screens in one place

All setup for your screens takes place in one file `src/screens/index.ts`:

```
import {generateRNNScreens} from 'rnn-screens';

export const screens = generateRNNScreens(
  {
    Main: {
      component: Main,
      options: {
        topBar: {
          ...withTitle(services.t.do('home.title')),
          ...withRightButtons('inc', 'dec'),
        },
        ...withBottomTab('Main', 'newspaper'),
      },
    },
    // ...
  },
  [withGestureHandler, withStores, withServices, withAnotherProvider],
);
```

#### Navigate to other screens with predictability

```
import {screens} from '.';

const Screen = ({componentId}) => {
  const {nav} = useServices();

  return (
    <View>
      <Button
        label="Open Settings"
        onPress={() => screens.push(componentId, 'Settings')}
      />
    </View>
  )
}
```

#### Build layouts with ease

One screen app:

```
screens.N.setRoot(Root(Stack(Component(screens.get('Main')))));
```

Three tabs app:

```
screens.N.setRoot(
  Root(
    BottomTabs([
      Stack(Component(screens.get('Main'))),
      Stack(Component(screens.get('Example'))),
      Stack(Component(screens.get('Settings'))),
    ]),
  ),
);
```

#### Simplified API for Shared Transitions

```
screens.push<ExampleScreenProps>(
  componentId,
  'Example',
  { value: randomNum() },
  withSharedTransitions([{ id: 'reanimated2', pop: true }]),
)
```

#### Correct Dark mode implementation

You can define modes in `utils/designSystem.tsx`.

#### Samples for new screens, services, stores and components.

So you have one structure within the project. You can find them in corresponding folders. Just copy&paste it and make the necessary changes.

## Enhancements

There are still some things I would like to add to the starter:

#### General

- [x] Shared transitions example
- [x] Passing props to a screen example
- [x] Constants: add Dimensions, Navigation (nav service)
- [x] AsyncStorage stores persisting example
- [x] API example + useEffect and start logic on a screen
- [x] Example with theme modes change
- [x] Move some services/scripts to separate libraries, e.g., `rnn-screens`. Done - [kanzitelli/rnn-screens](https://github.com/kanzitelli/rnn-screens)
- [ ] Better documentation/exlanation for project structure, stores, services, etc.

#### Production

- [ ] Auth flow
- [ ] Fast Image - [DylanVann/react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
- [ ] Notifications — [wix/react-native-notifications](https://github.com/wix/react-native-notifications) or/and [invertase/notifee](https://github.com/invertase/notifee)
- [ ] E2E tests - [wix/Detox](https://github.com/wix/Detox)
- [ ] Permissions — [zoontek/react-native-permissions](https://github.com/zoontek/react-native-permissions)
- [ ] FB SDK — [thebergamo/react-native-fbsdk-next](https://github.com/thebergamo/react-native-fbsdk-next)
- [ ] Appodeal — [appodeal/react-native-appodeal](https://github.com/appodeal/react-native-appodeal)
- [ ] In-app purchases — [dooboolab/react-native-iap](https://github.com/dooboolab/react-native-iap)?

Feel free to open an issue for suggestions.

## Known issues (warnings)

- _Large title is not shown on 2nd+ tab_. This [issue](https://github.com/software-mansion/react-native-screens/issues/649) exists. So you can find the patch file for fixing that in `patches/react-native+0.65.1.patch`. It will be autorun when you do `yarn add/remove/etc`.
- _Over-The-Air Updates_. They have been removed from the current version as I had some problems publishing one of the apps to AppStore. Check out [my tweet](https://twitter.com/kanzitelli/status/1398229619862642692) and be aware of the issue if you'd like to use them anyways.

## Worth checking

### Other starters

- [expo-starter](https://github.com/kanzitelli/expo-starter) - 🦥 Production-ready starter for Expo (React Native) App! Powered by cli-rn, React Navigation (v6), RN UI lib, Mobx, Reanimated 2, Dark Mode, Localization, and much more.
- [rn-starter](https://github.com/kanzitelli/rn-starter) - 🦄 Production-ready starter for React Native App! Powered by cli-rn, React Navigation (v6), RN UI lib, Mobx, Reanimated 2, Dark Mode, Localization, Notifications, Permissions, and much more.

### Articles

- Expo + React Native Navigation? Yes! - [Medium](https://kanzitelli.medium.com/expo-react-native-navigation-yes-ebda0cbfa4b1), [Dev.to](https://dev.to/kanzitelli/expo-react-native-navigation-1pll)
- cli-rn — making RN app developing experience as smooth as possible - [Medium](https://kanzitelli.medium.com/cli-rn-making-rn-app-developing-experience-as-smooth-as-possible-1022aae3a0d3), [Dev.to](https://dev.to/kanzitelli/cli-rn-making-rn-app-developing-experience-as-smooth-as-possible-4e98)

### Apps in production

- Wallpapers App - [App Store](https://apps.apple.com/app/id878234888), [Twitter](https://twitter.com/kanzitelli/status/1408192827155177472?s=20)
- Rabbit App. Lite Reddit client - [Github](https://github.com/kanzitelli/rabbit-app), [App Store](https://apps.apple.com/ru/app/rabbit-app-lite-reddit-client/id1535084154), [Google Play](https://play.google.com/store/apps/details?id=io.batyr.rabbitapp)
- Trip Music Radio - [App Store](https://apps.apple.com/ru/app/id1525645826), [Google Play](https://play.google.com/store/apps/details?id=team.ggc.tripmusic)
- App for VK - [App Store](https://apps.apple.com/ru/app/id1067670987)
- Messenger for VK - [App Store](https://apps.apple.com/ru/app/id891605076)
- Christmas Market - [App Store](https://apps.apple.com/ru/app/id1446775875)

## Why

...do we need yet another starter/boilerplate? Well, I work with React Native for more than 3 years and during the time I started having my own project structure which was a good fit for almost all of the delivered apps. Also, I have come up with some custom [useful services/methods](#useful-servicesmethods) which simplify usage of [React Native Navigation](https://github.com/wix/react-native-navigation) and other libraries. Check out [Advantages](#advantages) section.

## License

This project is [MIT licensed](/LICENSE.md)
