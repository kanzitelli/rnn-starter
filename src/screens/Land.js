import React, { useEffect } from 'react';
import { 
    View,
    FlatList,
    Linking,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import Item from '../components/listItem';

const Land = (props) => {
    const { selectedSubreddit, posts, fetchPosts } = props;

    // equivalent to componentDidMount, see - https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
    useEffect(() => {
        fetchPosts(selectedSubreddit);

        const didAppearListener = Navigation.events().registerComponentDidAppearListener(({ componentId, componentName, passProps }) => {
            if (componentId === props.componentId) {
                console.log(`didAppear -- ${componentId} -- ${componentName} -- ${passProps}`);
                // alert(`didAppear - ${componentName}`);
            }
        });

        // equivalent to componentWillUnmount
        return () => {
            didAppearListener.remove();
        }
    }, []);

    const _itemPressed = (url) => {
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
                keyExtractor={ item => item.url }
                refreshing={props.isFetching}
                onRefresh={_onRefresh}
                renderItem={({ item }) => 
                    <Item 
                        data={item.url}
                        title={item.title}
                        textSize={16}
                        onPressed={_itemPressed}
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