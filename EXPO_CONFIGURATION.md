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

If you would like to enable or disable `expo-updates`, open `ios/Supporting/Expo.plist` and change `EXUpdatesEnabled `; and for Android open `android/app/src/main/AndroidManifest.xml` and change `ENABLED` meta-data property.

Before using `expo-updates` in production, make sure you have read the documentation about this module, release channels etc.