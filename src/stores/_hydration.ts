import {MMKV} from 'react-native-mmkv';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {configurePersistable} from 'mobx-persist-store';

// for safe AsyncStorage --> MMKV migration, checkout this https://github.com/mrousavy/react-native-mmkv/issues/52

// MMKV configuration
const storage = new MMKV();

configurePersistable({
  debugMode: __DEV__,
  storage: {
    setItem: (key, data) => storage.set(key, data),
    getItem: key => storage.getString(key) as string | null,
    removeItem: key => storage.delete(key),
  },
});

// AsyncStorage configuration
// configurePersistable({
//   debugMode: __DEV__,
//   storage: {
//     setItem: async (key, value) => {
//       await AsyncStorage.setItem(key, value);
//       return Promise.resolve();
//     },
//     getItem: async (key) => {
//       const value = await AsyncStorage.getItem(key);
//       return Promise.resolve(value);
//     },
//     removeItem: async (key) => {
//       await AsyncStorage.removeItem(key);
//       return Promise.resolve();
//     },
//   },
// });
