import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'mobx-persist';

export const hydrateMobX = create({ storage: AsyncStorage, debounce: 500, });