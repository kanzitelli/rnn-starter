import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform 
} from 'react-native';

const Touchable = Platform.OS === 'ios' ?
  TouchableOpacity : 
  TouchableNativeFeedback

const ListItem = ({ 
    title,
    data,
    textSize,
    onPressed,
    onLongPressed,
}) => (
    <Touchable 
        onPress={() => onPressed(data)}
        onLongPress={() => onLongPressed && onLongPressed(data)}
    >
        <View style={{ padding: 12 }}>
            <Text style={{ fontSize: textSize }}>{title}</Text>
        </View>
    </Touchable>
);

export default ListItem;