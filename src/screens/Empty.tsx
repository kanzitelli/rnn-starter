import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Empty: EmptyComponentType = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Just an Empty Screen 🤷‍♂️</Text>
            <Icon name={'react'} size={100} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        margin: 16,
    },
});

export default Empty;
