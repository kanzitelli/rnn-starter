import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useObserver } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';

// EXPO modules
import { Constants } from 'react-native-unimodules';
import * as Network from 'expo-network';

import { useStore } from '../store';

interface Props { }

const Empty: NavigationFunctionComponent<Props> = ({
    componentId,
}) => {
    const [networkType, setNetworkType] = useState<string | undefined>();
    const { redditStore } = useStore();

    useEffect(() => {
        start();
    }, [componentId]);

    const start = async () => {
        try {
            const networkState = await Network.getNetworkStateAsync();

            setNetworkType(networkState.type);
        } catch (e) {
            console.log(e);
        }
    };

    return useObserver(() => (
        <SafeAreaView style={styles.container}>
            <Icon name={'react'} size={80} />
            <Text style={styles.text}>Selected subreddit: {redditStore.selectedSubreddit}</Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>{'\n\n'}FROM EXPO MODULES</Text>
            <Text style={styles.text}>Device ID: {Constants.deviceId}</Text>
            <Text style={styles.text}>Network type: {networkType}</Text>
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
        fontSize: 22,
        margin: 16,
        textAlign: 'center',
    },
});

export default Empty;
