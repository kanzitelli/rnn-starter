import React from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Bounceable} from 'rn-bounceable';

import {Row} from './row';

type ActionProps = {
  title: string;
  icon?: string;
  rightIcon?: string;
  info?: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const Action: React.FC<ActionProps> = ({
  title,
  icon,
  rightIcon,
  info,
  disabled,
  onPress,
}: ActionProps) => {
  const b = {disabled, onPress};
  const iconSize = 22;

  return (
    <View padding-s4>
      <Bounceable {...b}>
        <Row style={{justifyContent: 'space-between'}}>
          <Row>
            {icon ? (
              <View marginR-s2>
                <Ionicons name={icon} size={iconSize} color={Colors.primary} />
              </View>
            ) : null}

            {title ? (
              <Text textColor text60R>
                {title}
              </Text>
            ) : null}
          </Row>

          <Row>
            {info ? (
              <Text textColor text80BL>
                {info}
              </Text>
            ) : null}

            {rightIcon ? (
              <View marginL-s2>
                <Ionicons name={rightIcon} size={iconSize} color={Colors.primary} />
              </View>
            ) : null}
          </Row>
        </Row>
      </Bounceable>
    </View>
  );
};
