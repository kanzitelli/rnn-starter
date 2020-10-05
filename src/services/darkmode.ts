import { Appearance } from 'react-native';

import { stores } from '../stores';
import { generateTheme } from '../utils/useStyles';

class DarkModeService implements IService {
  init = async () => {
    await this.setListener();
  }

  private setListener = async () => {
    Appearance.addChangeListener(ap => {
      const cs = ap.colorScheme as ThemeNameType;

      stores.ui.toggleThemeTo(generateTheme(cs));
    })
  }
}

export default new DarkModeService();