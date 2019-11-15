import React from 'react';
import { 
    View,
    FlatList,
    Linking,
} from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import Item from '../components/listItem';

const Land = (props) => {
    const {
        componentId,
        posts,
        error,
        selectedSubreddit,
        fetchPosts
    } = props;

    // equivalent to componentDidMount
    React.useEffect(() => {
        fetchPosts(selectedSubreddit);
    }, [componentId]);

    useNavigationComponentDidAppear(e => {
        console.log(`${e.componentName} appeared`)
    }, componentId);

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

    if (error) {
        alert(error);
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