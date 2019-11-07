import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, FlatList, Platform, Linking } from 'react-native';

const Touchable = Platform.OS === 'ios' ?
  TouchableOpacity : 
  TouchableNativeFeedback

const Item = ({ title, url, onPressed }) => (
    <Touchable onPress={() => onPressed(url)}>
        <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 16 }}>{title}</Text>
        </View>
    </Touchable>
)

// if you need to use componentDidAppear or componentDidDisappear (https://wix.github.io/react-native-navigation/#/docs/events?id=componentdidappear)
// then consider using React.Component instead of a function.

const Land = (props) => {
    const { selectedSubreddit, posts, fetchPosts } = props;

    // equivalent to componentDidMount, see - https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
    useEffect(() => {
        fetchPosts(selectedSubreddit);
    }, []);

    const _itemPressed = (url) => {
        Linking.canOpenURL(url)
            .then(supported => {
                if (supported) {
                    Linking.openURL(url);
                }
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                data={posts}
                keyExtractor={ item => item.url }
                renderItem={({ item }) => 
                    <Item 
                        title={item.title}
                        url={item.url}
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