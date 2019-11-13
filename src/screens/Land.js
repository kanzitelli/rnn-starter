import React from 'react';
import { 
    View,
    FlatList,
    Linking,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import Item from '../components/listItem';

const Land = (props) => {
    const { componentId, selectedSubreddit, posts, fetchPosts } = props;

    // equivalent to componentDidMount
    React.useEffect(() => {
        fetchPosts(selectedSubreddit);

        const listener = Navigation.events().registerComponentDidAppearListener(e => {
            if (componentId === e.componentId) {
                console.log(`didAppear -- ${e.componentId} -- ${e.componentName} -- ${e.passProps}`);
            }
        });

        // equivalent to componentWillUnmount
        return () => listener.remove();
    }, [componentId]);

    const _onItemPressed = (url) => {
        Linking.canOpenURL(url)
            .then(supported => {
                if (supported) {
                    Linking.openURL(url);
                }
            })
    }

    const _onRefresh = () => {
        fetchPosts(selectedSubreddit);
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                data={posts}
                keyExtractor={ item => item.id }
                refreshing={props.isFetching}
                onRefresh={_onRefresh}
                renderItem={({ item }) => 
                    <Item 
                        data={item.url}
                        title={item.title}
                        textSize={16}
                        onPressed={_onItemPressed}
                    />
                }
            />
        </View>
    );
}

Land.options = (passProps) => ({
    topBar: {
        visible: true,
        title: {
            text: `r/${passProps.title}`,
        },
    },
})

export default Land;