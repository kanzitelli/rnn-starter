import { Options } from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Here we define all information regarding tabs

const TabTitles: TabTitlesType = ['Starter', 'Settings'];

const loadTabIcons = async (): Promise<TabIcons> => {
  // getting icons for tabs as they have to be as image sources
  const [tab1, tab2] = await Promise.all([
    Ionicons.getImageSource('ios-rocket-outline', 25),
    Ionicons.getImageSource('ios-cog-outline', 25),
  ]);
  const [tab1Selected, tab2Selected] = await Promise.all([
    Ionicons.getImageSource('ios-rocket', 25),
    Ionicons.getImageSource('ios-cog', 25),
  ]);

  return [
    {
      icon: tab1,
      selectedIcon: tab1Selected,
    },
    {
      icon: tab2,
      selectedIcon: tab2Selected,
    }
  ];
}

const getTabOptions = async (): Promise<Options[]> => {
  const tabIcons = await loadTabIcons();

  return TabTitles.map((text, i) => ({
    bottomTab: { text, ...tabIcons[i], }
  }));
}

export {
  TabTitles,
  getTabOptions,
}