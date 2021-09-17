import {getLocales} from 'react-native-localize';
import i18n from 'i18n-js';

import {ru, en} from './translations';
import {stores} from '../../stores';

export class Translate implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.setup();

      this.inited = true;
    }
  };

  do = i18n.t;

  setup = (): void => {
    const locales = getLocales();

    if (locales.length > 0) {
      const {ui} = stores;
      const lng = locales[0].languageCode;

      i18n.translations = {en, ru};
      i18n.fallbacks = true;
      if (ui.isSystemLanguage) {
        i18n.locale = lng;
      } else {
        i18n.locale = ui.language;
      }
    }
  };
}
