import React from 'react';
import { View, Text } from 'react-native-ui-lib';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  bg?: boolean;
};

export const Section: React.FC<SectionProps> = ({ children, title, bg }: SectionProps) => {
  const S = {
    'bg-bg2Color': bg,
    'paddingH-xs': bg,
    'paddingV-s': bg,
  };

  return (
    <View paddingV-xs>
      <View row>
        <Text textColor section>
          {title}
        </Text>
      </View>

      <View paddingH-s paddingV-s>
        <View br40 {...S}>
          {children}
        </View>
      </View>
    </View>
  );
};
