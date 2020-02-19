import React, { useCallback } from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    Linking,
} from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { useSelector, useDispatch } from 'react-redux';

import { requestPosts } from '../store/postsBySubreddit/actions';

import Item from '../components/listItem';

const Land: LandComponentType = ({
    componentId,
}): JSX.Element => {
    // Redux Hooks
    // ===========
    // selectors
    const selectedSubreddit = useSelector((s: GlobalState) => s.selectedSubreddit);
    const postsBySubreddit = useSelector((s: GlobalState) => s.postsBySubreddit[selectedSubreddit]);
    const {
        isFetching,
        items: posts,
        error,
    } = postsBySubreddit || {
        isFetching: true,
        items: [],
        error: null,
    }

    // actions
    const dispatch = useDispatch();
    const fetchPosts = useCallback(
        (sr: string) => dispatch(requestPosts(sr)),
        [dispatch],
    );
    // ===========

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
