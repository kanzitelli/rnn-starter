import * as React from 'react';
import {
    View,
    Text,
    Platform,
    GestureResponderEvent,
} from 'react-native';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native-gesture-handler';

interface TouchableProps {
    onPress: (event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
}

const Touchable = Platform.OS === 'ios' ?
    (props: React.PropsWithChildren<TouchableProps>) =>
        <TouchableOpacity {...props}>{props.children}</TouchableOpacity> :
    (props: React.PropsWithChildren<TouchableProps>) =>
        <TouchableNativeFeedback {...props}>{props.children}</TouchableNativeFeedback>;

interface Props {
    title: string;
    data: string;
    textSize: number;
    onPressed: (sr: string) => void;
    onLongPressed?: (data: string) => void;
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
