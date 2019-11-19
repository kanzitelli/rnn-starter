import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform 
} from 'react-native';

const Touchable = Platform.OS === 'ios' ?
    (props: any, children: React.ReactNode) => 
        <TouchableOpacity {...props}>{children}</TouchableOpacity> :
    (props: any, children: React.ReactNode) => 
        <TouchableNativeFeedback {...props}>{children}</TouchableNativeFeedback>;

interface Props {
    title: string,
    data: string,
    textSize: number,
    onPressed(sr: string): void,
    onLongPressed(data: string): void,
}

const ListItem: React.FC<Props> = ({ 
    title,
    data,
    textSize,
    onPressed,
    onLongPressed,
}): JSX.Element => (
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