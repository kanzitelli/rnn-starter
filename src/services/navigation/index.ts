import {navDefaultOptions} from './options';
import {screens} from '../../screens';

export class NavService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.setDefaultOptions();

      this.inited = true;
    }
  };

  private setDefaultOptions = (): void => {
    screens.N.setDefaultOptions(navDefaultOptions());
  };
}
