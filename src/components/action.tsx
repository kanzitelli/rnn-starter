import React from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';
import {Bounceable} from 'rn-bounceable';
import {Icon} from './icon';

import {Row} from './row';

type ActionProps = {
  title: string;
  icon?: string;
  rightIcon?: string;
  info?: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const Action: React.FC<ActionProps> = ({title, icon, rightIcon, info, disabled, onPress}: ActionProps) => {
  const b = {disabled, onPress};
  const iconSize = 22;

  return (
    <View padding-s4>
      <Bounceable {...b}>
        <Row spread>
          <Row>
            {icon ? (
              <View marginR-s2>
                <Icon name={icon} size={iconSize} color={Colors.primary} />
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
                <Icon name={rightIcon} size={iconSize} color={Colors.primary} />
              </View>
            ) : null}
          </Row>
        </Row>
      </Bounceable>
    </View>
  );
};
