import React from 'react';
import { 
    View,
    Text,
    FlatList,
    Linking,
} from 'react-native';
import { LayoutComponent } from 'react-native-navigation';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';

import { Props } from '../containers/Land';
import Item from '../components/listItem';

const Land: React.FC<Props> & LayoutComponent = ({
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

    useNavigationComponentDidAppear(e => {
        console.log(`${e.componentName} appeared`)
    }, componentId);

    const _onItemPressed = (url: string) => {
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
            { error && <Text>Error {error.toString()}</Text> }
            <FlatList 
                data={posts}
                keyExtractor={ item => item.id }
                refreshing={isFetching}
                onRefresh={_onRefresh}
                renderItem={({ item }) => 
                    <Item 
                        data={item.url}
                        title={item.title}
                        textSize={16}
                        onPressed={_onItemPressed}
                        onLongPressed={null}
                    />
                }
            />
        </View>
    );
}

Land.options = (passProps: any) => ({
    topBar: {
        visible: true,
        title: {
            text: `r/${passProps.title}`,
        },
    },
})

export default Land;