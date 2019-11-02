import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, FlatList, Platform, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';

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

class Land extends React.PureComponent {
    static options(passProps) {
        return {
            topBar: {
                visible: true,
                title: {
                    text: `r/${passProps.title}`,
                },
            },
        }
    }

    componentDidMount() {
        const { selectedSubreddit, fetchPosts } = this.props;

        fetchPosts(selectedSubreddit);
    }

    _itemPressed = (url) => {
        Linking.canOpenURL(url)
            .then(supported => {
                if (supported) {
                    Linking.openURL(url);
                }
            })
    }

    render() {
        const { posts } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <FlatList 
                    data={posts}
                    keyExtractor={ item => item.url }
                    renderItem={({ item }) => 
                        <Item 
                            title={item.title}
                            url={item.url}
                            onPressed={this._itemPressed}
                        />
                    }
                />
            </View>
        );
    }
}

export default Land;