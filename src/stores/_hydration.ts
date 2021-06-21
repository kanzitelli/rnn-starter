import {MMKV} from 'react-native-mmkv';
import {configurePersistable} from 'mobx-persist-store';

configurePersistable({
  debugMode: __DEV__,
  storage: {
    setItem: (key, data) => MMKV.set(key, JSON.stringify(data)),
    getItem: (key) => JSON.parse(MMKV.getString(key) || '{}'),
    removeItem: (key) => MMKV.delete(key),
  },
});
