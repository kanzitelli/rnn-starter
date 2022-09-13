import {MMKV} from 'react-native-mmkv';
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
