import React, {useMemo} from 'react';
import {Alert, Linking, ScrollView} from 'react-native';
import {View, ActionSheet, Text} from 'react-native-ui-lib';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {observer, useLocalObservable} from 'mobx-react';
import {getApplicationName, getVersion} from 'react-native-device-info';

import {useConstants} from '../utils/constants';
import {useStores} from '../stores';

import {Section} from '../components/section';
import {Action} from '../components/action';

type PickersStateKey = keyof Omit<PickersState, 'show' | 'hide'>;
type PickersState = {
  appearance: boolean;
  language: boolean;

  show: <T extends PickersStateKey>(what: T) => void;
  hide: <T extends PickersStateKey>(what: T) => void;
};

export const Settings: NavigationFunctionComponent = observer(() => {
  const {ui} = useStores();
  const {links} = useConstants();

  const pickers: PickersState = useLocalObservable(() => ({
    appearance: false,
    language: false,

    show<T extends PickersStateKey>(what: T) {
      pickers[what] = true;
    },
    hide<T extends PickersStateKey>(what: T) {
      pickers[what] = false;
    },
  }));

  const doSomething = (action: string) => () => {
    Alert.alert(action);
  };

  const openLink = (link: string) => () => {
    Linking.openURL(link);
  };

  const appearancePickOption = (option: UIAppearance) => () => {
    ui.setAppearanceMode(option);
    console.log(option);
  };

  const languagePickOption = (option: UILanguage) => () => {
    ui.setLanguage(option);
    console.log(option);
  };

  const appearanceActions: AppearanceAction[] = useMemo(
    () => [{name: 'System'}, {name: 'Light'}, {name: 'Dark'}],
    [],
  );
  const AppearanceActionSheet = useMemo(
    () => (
      <ActionSheet
        title={'Appearance'}
        cancelButtonIndex={appearanceActions.length}
        useNativeIOS
        options={[
          ...appearanceActions.map(action => ({
            label: action.name,
            onPress: appearancePickOption(action.name),
          })),
          {
            label: 'Cancel',
          },
        ]}
        visible={pickers.appearance}
        onDismiss={() => pickers.hide('appearance')}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pickers.appearance],
  );

  const languageActions: LanguageAction[] = useMemo(
    () => [{name: 'System'}, {name: 'English'}, {name: 'Russian'}],
    [],
  );
  const LanguageActionSheet = useMemo(
    () => (
      <ActionSheet
        title={'Language'}
        cancelButtonIndex={languageActions.length}
        useNativeIOS
        options={[
          ...languageActions.map(action => ({
            label: action.name,
            onPress: languagePickOption(action.name),
          })),
          {
            label: 'Cancel',
          },
        ]}
        visible={pickers.language}
        onDismiss={() => pickers.hide('language')}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pickers.language],
  );

  const UINote = useMemo(
    () => (
      <View paddingH-s3 marginB-s4>
        <Text grey40>Changing UI options will reload the app</Text>
      </View>
    ),
    [],
  );

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View padding-s4>
          <Section bg title="UI">
            <Action
              title="Appearance"
              info={ui.appearanceName}
              onPress={() => pickers.show('appearance')}
              rightIcon="chevron-forward"
            />
            {AppearanceActionSheet}

            <Action
              title="Language"
              info={ui.languageName}
              onPress={() => pickers.show('language')}
              rightIcon="chevron-forward"
            />
            {LanguageActionSheet}
          </Section>
          {UINote}

          <Section bg title="General">
            <View>
              <Action title="Share" icon="share-outline" onPress={doSomething('Share')} />
              <Action title="Rate" icon="star-outline" onPress={doSomething('Rate')} />
              <Action title="Support" icon="mail-unread-outline" onPress={doSomething('Support')} />
            </View>
          </Section>

          <Section bg title="Links">
            <View>
              <Action title="Github" icon="logo-github" onPress={openLink(links.github)} />
              <Action title="Website" icon="earth-outline" onPress={openLink(links.website)} />
            </View>
          </Section>

          <Section bg title="About">
            <View>
              <Action disabled title="App name" info={getApplicationName()} />
              <Action disabled title="Version" info={getVersion()} />
            </View>
          </Section>
        </View>
      </ScrollView>
    </View>
  );
});
