import {BottomTabs, Component, Root, Stack} from 'rnn-screens';

import {navDefaultOptions} from './options';
import {screens} from '../../screens';

export class Nav implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.setDefaultOptions();

      this.inited = true;
    }
  };

  start = async (appType: AppType = 'three_tabs'): PVoid => {
    if (appType === 'one_screen') {
      await this.startOneScreenApp();
    }
    if (appType === 'three_tabs') {
      await this.startThreeTabsApp();
    }

    screens.getConstants(); // needs to be called after setRoot()
  };

  private startOneScreenApp = async (): PVoid => {
    await screens.N.setRoot(Root(Stack(Component(screens.get('Main')))));
  };

  private startThreeTabsApp = async (): PVoid => {
    await screens.N.setRoot(
      Root(
        BottomTabs([
          Stack(Component(screens.get('Main'))),
          Stack(Component(screens.get('Example'))),
          Stack(Component(screens.get('Settings'))),
        ]),
      ),
    );
  };

  private setDefaultOptions = (): void => {
    screens.N.setDefaultOptions(navDefaultOptions());
  };
}
