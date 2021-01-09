import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'mobx-persist';
import { ViewStyle } from 'react-native';

export const hydrateMobX = create({ storage: AsyncStorage, debounce: 500, });

export const generateShadow = (p?: GenerateShadowProps): ViewStyle => ({
  shadowColor: p?.shadowColor || '#123',
  shadowRadius: p?.shadowRadius || 4,
  shadowOpacity: p?.shadowOpacity || 0.2,
  shadowOffset: {
    width: p?.shadowOffsetW || 0,
    height: p?.shadowOffsetH || 0,
  },
})