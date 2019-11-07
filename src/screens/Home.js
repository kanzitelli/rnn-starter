import React from 'react';
import { 
    View,
    FlatList,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { LAND } from './names';
import Item from '../components/listItem';

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
                        data={item.title}
                        title={item.title}
                        textSize={22}
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