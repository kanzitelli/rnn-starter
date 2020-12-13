import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const en = require('./translations/en.json');
const ru = require('./translations/ru.json');
const de = require('./translations/de.json');

class TranslateService implements IService {
  init = async () => {
    this.setup();
  }

  do = (s: string) => i18n.t(s);

  private setup = () => {
    i18n.translations = { en, ru, de };
    i18n.locale = Localization.locale;
    i18n.fallbacks = true;
  }
}

export default new TranslateService();