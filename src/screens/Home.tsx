import React from 'react';
import { 
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Dimensions,
    Platform,
    Alert,
} from 'react-native';
import { Navigation, LayoutComponent } from 'react-native-navigation';
import { useNavigationButtonPress }    from 'react-native-navigation-hooks';

import { LAND } from '../containers';
import { Props } from '../containers/Home';
import Item from '../components/listItem';
import SubredditInput from '../components/subredditInput';

const Home: React.FC<Props> & LayoutComponent = ({
    componentId,

    subreddits,
    
    onSelectSubreddit,
    onDeleteSubreddit,
    onAddSubreddit,
}): JSX.Element => {
    const [keyboardVerticalOffset, setKeyboardVerticalOffset] = React.useState(0);

    // equivalent to componentDidMount
    // see - https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component
    // and - https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
    React.useEffect(() => {
        Dimensions.addEventListener('change', () => {
            getStatusBarHeight();
        });

        getStatusBarHeight();

        // equivalent to componentWillUnmount
        return () => {};
    }, [componentId]);

    useNavigationButtonPress(e => {
        alert('This just simple button');
    }, componentId, 'hi_button_id');

    const getStatusBarHeight = async () => {
        const navConstants = await Navigation.constants();

        // for more info - https://stackoverflow.com/a/48759750
        if (Platform.OS === 'ios') {
            setKeyboardVerticalOffset(navConstants.statusBarHeight + navConstants.topBarHeight);
        }
    }

    const _onItemPressed = (subreddit: string) => {
        onSelectSubreddit(subreddit);

        Navigation.push(componentId, {
            component: {
                name: LAND,
                passProps: {
                    title: subreddit
                }
            },
        });
    }

    const _onItemLongPressed = (subreddit: string) => {
        Alert.alert(
            'Action required',
            `Would you like to delete ${subreddit} subreddit?`,
            [{
                text: 'Yes',
                onPress: () => onDeleteSubreddit(subreddit)
            }, {
                text: 'Cancel',
                style: 'cancel',
            }]
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView 
                style={{flex:1}} 
                behavior={Platform.OS === 'ios' ? "padding" : null}
                enabled 
                keyboardVerticalOffset={keyboardVerticalOffset}
            >
                <FlatList
                    data={subreddits}
                    keyExtractor={ item => item.title }
                    renderItem={({ item }) => 
                        <Item
                            data={item.title}
                            title={item.title}
                            textSize={22}
                            onPressed={_onItemPressed}
                            onLongPressed={_onItemLongPressed}
                        />
                    }
                />
            
                <SubredditInput
                    onAddSubreddit={(sr: string) => onAddSubreddit(sr)}
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