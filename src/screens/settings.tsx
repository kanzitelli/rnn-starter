import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Text, View, SegmentedControl, Colors} from 'react-native-ui-lib';
import {ScreenComponent} from 'rnn-screens';
import {observer} from 'mobx-react';

import {Section} from '../components/section';
import {Row} from '../components/row';
import {
  appearances,
  appearancesUI,
  appearanceUIToInternal,
  languages,
  languagesUI,
  languageUIToInternal,
} from '../utils/types/enums';
import {useStores} from '../stores';
import {screens} from '.';
import {navButtons} from '../services/navigation/buttons';
import {useNavigationButtonPress} from 'react-native-navigation-hooks/dist';
import {useServices} from '../services';

export const Settings: ScreenComponent = observer(({componentId}) => {
  const {ui} = useStores();
  const {nav} = useServices();

  // State
  const [appearance, setAppearance] = useState(ui.appearance);
  const [language, setLanguage] = useState(ui.language);

  // Computed
  const unsavedChanges =
    ui.appearance !== appearance || ui.language !== language;

  const appearanceInitialIndex = appearances.findIndex(it => it === appearance);
  const appearanceSegments = appearancesUI.map(it => ({label: it}));

  const languageInitialIndex = languages.findIndex(it => it === language);
  const languageSegments = languagesUI.map(it => ({label: it}));

  // Start
  useEffect(() => {
    screens.N.mergeOptions(componentId, {
      topBar: {
        rightButtons: unsavedChanges ? [navButtons.save] : [],
      },
    });
  }, [componentId, unsavedChanges]);

  // Methods
  const handleAppearanceIndexChange = (index: number) =>
    setAppearance(appearanceUIToInternal[appearancesUI[index]]);
  const handleLanguageIndexChange = (index: number) =>
    setLanguage(languageUIToInternal[languagesUI[index]]);

  const handleSave = () => {
    ui.setMany({
      appearance,
      language,
    });

    nav.handleUIOptionsChange();
  };
  useNavigationButtonPress(handleSave, componentId, navButtons.save.id);

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <Section title={'UI'}>
          <View paddingV-s1>
            <Row>
              <View flex>
                <Text textColor text60R>
                  Appearance
                </Text>
              </View>

              <SegmentedControl
                initialIndex={appearanceInitialIndex}
                segments={appearanceSegments}
                backgroundColor={Colors.bgColor}
                activeColor={Colors.primary}
                inactiveColor={Colors.textColor}
                onChangeIndex={handleAppearanceIndexChange}
              />
            </Row>
          </View>

          <View paddingV-s1>
            <Row>
              <View flex>
                <Text textColor text60R>
                  Language
                </Text>
              </View>

              <SegmentedControl
                initialIndex={languageInitialIndex}
                segments={languageSegments}
                backgroundColor={Colors.bgColor}
                activeColor={Colors.primary}
                inactiveColor={Colors.textColor}
                onChangeIndex={handleLanguageIndexChange}
              />
            </Row>
          </View>
        </Section>
      </ScrollView>
    </View>
  );
});
