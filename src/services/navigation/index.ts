import {navDefaultOptions, withTitle} from './options';
import {screens} from '../../screens';
import {services} from '..';

export class NavService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.setOptions();

      this.inited = true;
    }
  };

  private setOptions = (): void => {
    // -- setting common default options
    screens.N.setDefaultOptions(navDefaultOptions());

    // -- setting screen-based specific options
    // for ex., if you want to use translate service
    screens.mergeOptions('Main', {
      topBar: {
        ...withTitle(services.t.do('home.title')),
      },
    });
  };
}
