import React from 'react';
import { 
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { LAND } from './names';
import Item from '../components/listItem';
import SubredditInput from '../components/subredditInput';

const Home = (props) => {
    const [keyboardVerticalOffset, setKeyboardVerticalOffset] = React.useState(0);

    // equivalent to componentDidMount, see - https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
    React.useEffect(() => {
        Navigation.events().registerNavigationButtonPressedListener(event => {
            if (event.componentId === props.componentId &&
                event.buttonId    === 'hi_button_id') {
                    console.log('asd');
                alert('This just simple button');
            }
        });
    
        Dimensions.addEventListener('change', () => {
            getStatusBarHeight();
        });

        getStatusBarHeight();
    }, []);

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
            <KeyboardAvoidingView 
                style={{flex:1}} 
                behavior="padding" 
                enabled 
                keyboardVerticalOffset={keyboardVerticalOffset}
            >
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
            
                <SubredditInput
                    onAddSubreddit={sr => props.onAddSubreddit(sr)}
                />
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