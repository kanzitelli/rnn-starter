import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {
    TouchableOpacity,
    TextInput,
} from 'react-native-gesture-handler';

interface Props {
    onAddSubreddit: (sr: string) => void;
}

const SubredditInput: React.FC<Props> = ({
    onAddSubreddit,
}): JSX.Element => {
    const [value, onChangeText] = React.useState('');

    const onAddButtonPressed = () => {
        const subreddit = value.trim();

        if (subreddit !== '') {
            onAddSubreddit(subreddit.toLowerCase().replace(/ /g, ''));
            onChangeText('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={value}
                placeholder={'new subreddit goes here...'}
                autoCapitalize={'none'}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onAddButtonPressed}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 8,
        borderWidth: 1,
        fontSize: 22,
    },
    buttonContainer: {
        marginLeft: 16,
    },
    buttonText: {
        fontSize: 32,
    },
});

export default SubredditInput;
