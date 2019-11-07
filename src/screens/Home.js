import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, FlatList, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { LAND } from '../constants/ScreensNames';

const SUBREDDITS = [
    {
        id: '100',
        title: 'reactjs',
    },
    {
        id: '103',
        title: 'reactnative',
    },
    {
        id: '101',
        title: 'rust',
    },
    {
        id: '102',
        title: 'golang',
    }
]

const Touchable = Platform.OS === 'ios' ?
  TouchableOpacity : 
  TouchableNativeFeedback

const Item = ({ title, onPressed }) => (
    <Touchable onPress={() => onPressed(title)}>
        <View style={{ padding: 12 }}>
            <Text style={{ fontSize: 22 }}>{title}</Text>
        </View>
    </Touchable>
)

const Home = (props) => {
    const _itemPressed = (title) => {
        props.onSelectSubreddit(title);

        Navigation.push(props.componentId, {
            component: {
                name: LAND,
                passProps: {
                    title
                }
            },
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={SUBREDDITS}
                keyExtractor={ item => item.id }
                renderItem={({ item }) => 
                    <Item 
                        title={item.title}
                        onPressed={_itemPressed}
                    />
                }
            />
        </View>
    )
}

Home.options = () => ({
    topBar: {
        title: {
            text: "Subreddits",
        },
    }
});

export default Home;