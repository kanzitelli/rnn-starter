import React from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Bounceable } from './bounceable';

type ActionProps = {
  title: string;
  icon?: string;
  info?: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const Action: React.FC<ActionProps> = ({
  title,
  icon,
  info,
  disabled,
  onPress,
}: ActionProps) => {
  const b = { disabled, onPress };

  return (
    <View padding-m>
      <Bounceable {...b}>
        <View row centerV style={{ justifyContent: 'space-between' }}>
          <View row centerV>
            {!!icon && (
              <View marginR-m>
                <Ionicons name={icon} size={20} color={Colors.primary} />
              </View>
            )}

            {!!title && (
              <Text textColor text60R>
                {title}
              </Text>
            )}
          </View>

          {!!info && (
            <Text textColor text80BL>
              {info}
            </Text>
          )}
        </View>
      </Bounceable>
    </View>
  );
};
