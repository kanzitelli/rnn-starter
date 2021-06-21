import { getLocales } from 'react-native-localize';
import i18n from 'i18n-js';

import { ru, en } from './translations';

export class Translate implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      await this.setup();

      this.inited = true;
    }
  };

  do = i18n.t;

  private setup = async () => {
    const locales = getLocales();

    if (locales.length > 0) {
      const lng = locales[0].languageCode;

      i18n.translations = { en, ru };
      i18n.locale = lng;
      // i18n.locale = 'ru';
      i18n.fallbacks = true;
    }
  };
}
