import React from 'react';
import { 
    View,
    FlatList,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { LAND } from './names';
import Item from '../components/listItem';

const Home = (props) => {
    Navigation.events().registerNavigationButtonPressedListener(event => {
        if (event.componentId === props.componentId) {
            alert('This just simple button');
            // props.onAddSubreddit('apple');
        }
    });

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
                data={props.subreddits}
                keyExtractor={ item => item.title }
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
        visible: true,
        title: {
            text: "Subreddits",
        },
        rightButtons: {
            id: 'hi_button_id',
            text: 'Hi',
        }
    }
});

export default Home;