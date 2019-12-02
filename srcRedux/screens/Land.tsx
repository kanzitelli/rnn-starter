import React from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Linking,
} from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import Item from '../components/listItem';

const Land: LandComponentType = ({
    componentId,

    selectedSubreddit,
    isFetching,
    posts,
    error,

    fetchPosts,
}): JSX.Element => {

    // equivalent to componentDidMount
    React.useEffect(() => {
        fetchPosts(selectedSubreddit);
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
        fetchPosts(selectedSubreddit);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            { error && <Text>Error {error.toString()}</Text> }
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id }
                refreshing={isFetching}
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
    );
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
