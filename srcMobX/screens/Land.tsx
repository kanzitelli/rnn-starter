import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Linking,
} from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { useObserver } from 'mobx-react';

import { useStore } from '../store';
import Item from '../components/listItem';

const Land: LandComponentType_MobX = ({
    componentId,
}): JSX.Element => {
    const { redditStore } = useStore();

    // equivalent to componentDidMount
    React.useEffect(() => {
        redditStore.fetchSubredditPosts();
    }, [componentId]);

    useNavigationComponentDidAppear((e) => {
        console.log(`${e.componentName} appeared`);
    }, componentId);

    const onItemPressed = (url: string) => {
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                }
            });
    };

    const onRefresh = () => {
        redditStore.fetchSubredditPosts();
    };

    return useObserver(() => (
        <SafeAreaView style={{ flex: 1 }}>
            { redditStore.postsForSelectedSubreddit.error &&
                <Text>Error {redditStore.postsForSelectedSubreddit.error}</Text> }
            <FlatList
                data={redditStore.postsForSelectedSubreddit.items.slice()}
                keyExtractor={(item) => item.id }
                refreshing={redditStore.postsForSelectedSubreddit.isFetching}
                onRefresh={onRefresh}
                renderItem={({ item }) =>
                    <Item
                        data={item.url}
                        title={item.title}
                        textSize={16}
                        onPressed={onItemPressed}
                    />
                }
            />
        </SafeAreaView>
    ));
};

Land.options = (passProps: any) => ({
    topBar: {
        visible: true,
        title: {
            text: `r/${passProps.title}`,
        },
    },
});

export default Land;
