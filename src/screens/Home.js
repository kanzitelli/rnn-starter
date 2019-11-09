import React from 'react';
import { 
    SafeAreaView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { LAND } from './names';
import Item from '../components/listItem';

const Home = (props) => {
    Navigation.events().registerNavigationButtonPressedListener(event => {
        if (event.componentId === props.componentId) {
            alert('This just simple button');
        }
    });

    Dimensions.addEventListener('change', () => {
        getStatusBarHeight();
    });

    const [value, onChangeText] = React.useState('');
    const [keyboardVerticalOffset, setKeyboardVerticalOffset] = React.useState(0);

    React.useEffect(() => {
        getStatusBarHeight();
    })

    const getStatusBarHeight = async () => {
        const navConstants = await Navigation.constants();

        setKeyboardVerticalOffset(navConstants.statusBarHeight + navConstants.topBarHeight);
    }

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
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled keyboardVerticalOffset={keyboardVerticalOffset}>
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
            
                <View style={{ flexDirection: 'row', padding: 16, justifyContent: 'center', alignContent:'center', alignItems:'center' }}>
                    <TextInput
                        style={{ flex: 1, borderColor: 'lightgray', borderRadius: 10, padding: 8, borderWidth: 1, fontSize: 22, }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder={'new subreddit goes here...'}
                        autoCapitalize={'none'}
                    />
                    <TouchableOpacity 
                        style={{marginLeft: 16, marginRight: 0,}}
                        onPress={() => {
                            if (value.trim() != '') {
                                props.onAddSubreddit(value.trim());
                                onChangeText('');
                            }
                        }}
                    >
                        <Text style={{ fontSize: 32, }}>+</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
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