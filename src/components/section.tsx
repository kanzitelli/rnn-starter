import React from 'react';
import {View, Text} from 'react-native-ui-lib';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  bg?: boolean;
};

export const Section: React.FC<SectionProps> = ({children, title, bg}: SectionProps) => {
  const S = {
    'bg-bg2Color': bg,
    'paddingH-s1': bg,
    'paddingV-s2': bg,
  };

  return (
    <View paddingV-s1>
      <View row>
        <Text textColor section>
          {title}
        </Text>
      </View>

      <View paddingH-s2 paddingV-s2>
        <View br40 {...S}>
          {children}
        </View>
      </View>
    </View>
  );
};
