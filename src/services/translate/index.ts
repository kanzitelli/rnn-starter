import * as Localization from 'expo-localization';
import {I18n} from 'i18n-js';

import {ru, en} from './translations';
import {stores} from '../../stores';

export class TranslateService implements IService {
  private inited = false;
  private i18n = new I18n({en, ru});

  init = async (): PVoid => {
    if (!this.inited) {
      this.setup();

      this.inited = true;
    }
  };

  do = this.i18n.t;

  setup = (): void => {
    const {ui} = stores;
    const lng = Localization.locale;

    this.i18n.enableFallback = true;
    if (ui.isSystemLanguage) {
      this.i18n.locale = lng;
    } else {
      this.i18n.locale = ui.language;
    }
  };
}
