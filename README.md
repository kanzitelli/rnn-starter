<img src="https://i.postimg.cc/G2DNR52v/RNN-Starter.png" width="100%" title="Logo">

-----
Simple yet practical starter with [React Native Navigation v6](https://github.com/wix/react-native-navigation), [MobX-State-Tree](https://github.com/mobxjs/mobx-state-tree) and [Redux](https://github.com/reduxjs/redux) (pick one) and more goodies inside.

It is a basic Reddit App implementation (list of subreddits and news only) where the main goal to achieve was usage of functional components with React Native Navigation. So no more ~~`class MyComponent extends React.Component { ... }`~~, only functions with [React Hooks](https://reactjs.org/docs/hooks-intro.html) and native navigation.
The app logic is written in two ways: using [MobX-State-Tree](https://github.com/mobxjs/mobx-state-tree) in `/srcMobX` folder and using [Redux](https://github.com/reduxjs/redux) with hooks in `/srcRedux` folder. You can find instructions for launching the app using one or another way in `index.js` file.
So now you are free to choose any option you love and stick with it!

-----
- [React Native Navigation v6](https://github.com/wix/react-native-navigation) - truly native navigation experience for iOS and Android
- [React Native Navigation Hooks](https://github.com/underscopeio/react-native-navigation-hooks) - a set of React hooks for React Native Navigation
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - customizable icons for React Native
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) - native touches and gesture system for React Native
- [Lodash](https://github.com/lodash/lodash) - just in case, we will need it one time anyways
- [Typescript](https://www.typescriptlang.org/) - strict syntactical superset of JavaScript

##### and pick your favourite state management tool (examples inside)

| MOBX | REDUX |
| :---: | :---: |
| [MobX](https://github.com/mobxjs/mobx) - simple, scalable state management | [Redux](https://github.com/reduxjs/redux) - a predictable state container  |
| [MobX React](https://github.com/mobxjs/mobx-react) - official React bindings for MobX | [React Redux](https://github.com/reduxjs/react-redux) - official React bindings for Redux  |
| [MobX State Tree (MST)](https://github.com/mobxjs/mobx-state-tree) - opinionated, transactional, MobX powered state container | [Redux Saga](https://github.com/redux-saga/redux-saga) - side effect model for Redux apps |
| [Persistence](https://github.com/kanzitelli/react-native-navigation-starter/blob/master/srcMobX/store/redditStore.ts#L130) and [Hydration](https://github.com/kanzitelli/react-native-navigation-starter/blob/master/srcMobX/store/redditStore.ts#L97) are done by our hands | [Redux Persist](https://github.com/rt2zz/redux-persist) - persist and rehydrate a Redux store |

-----

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

3. Rename the app using [react-native-rename](https://github.com/junedomingo/react-native-rename) if needed. If you do so, don't forget to run `cd ios/ && pod install && cd ../` when the process is finished. Also keep in mind that bundle identifier must be valid for both platforms or change it manually.

4. Run it!
```bash
react-native run-ios
react-native run-android
```

## Todos
There are still some things I would like to add to the starter:
- [Notifications by Wix](https://github.com/wix/react-native-notifications).
- Continous delivery via [Codepush](https://github.com/Microsoft/code-push).
- Dark Mode via [react-native-dark-mode](https://github.com/codemotionapps/react-native-dark-mode).
- Localization via [i18next](https://github.com/i18next/i18next/).
- Maybe something else. Feel free to open an issue for suggestions.

## License

This project is [MIT licensed](/LICENSE.md)