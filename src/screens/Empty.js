import React from 'react';
import { 
    SafeAreaView,
    Text,
    StyleSheet,
} from 'react-native';

const Empty = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Just an Empty Screen 🤷‍♂️</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
    }
});

export default Empty;