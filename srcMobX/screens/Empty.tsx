import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useObserver } from 'mobx-react';

import { useStore } from '../store';

const Empty: EmptyComponentProps_MobX = (): JSX.Element => {
    const { redditStore } = useStore();

    return useObserver(() => (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Just an Empty Screen 🤷‍♂️</Text>
            <Text style={styles.text}>Selected subreddit: {redditStore.selectedSubreddit}</Text>
            <Icon name={'react'} size={100} />
        </SafeAreaView>
    ));
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
        textAlign: 'center',
    },
});

export default Empty;
