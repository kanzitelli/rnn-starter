import React from 'react';
import {
    SafeAreaView,
    FlatList,
    KeyboardAvoidingView,
    Dimensions,
    Platform,
    Alert,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks';

import { LAND } from '.';
import Item from '../components/listItem';
import SubredditInput from '../components/subredditInput';

const Home: HomeComponentType = ({
    componentId,

    subreddits,

    onSelectSubreddit,
    onDeleteSubreddit,
    onAddSubreddit,
}): JSX.Element => {
    const listRef = React.useRef<FlatList<SubredditInfo>>(null);
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
        // return () => {};
    }, [componentId]);

    useNavigationButtonPress((_) => {
        Alert.alert('This is just a simple button');
    }, componentId, 'hi_button_id');

    const getStatusBarHeight = async () => {
        const navConstants = await Navigation.constants();

        // for more info - https://stackoverflow.com/a/48759750
        if (Platform.OS === 'ios') {
            setKeyboardVerticalOffset(navConstants.statusBarHeight + navConstants.topBarHeight);
        }
    };

    const onItemPressed = (subreddit: string) => {
        onSelectSubreddit(subreddit);

        Navigation.push(componentId, {
            component: {
                name: LAND,
                passProps: {
                    title: subreddit,
                },
            },
        });
    };

    const onItemLongPressed = (subreddit: string) => {
        Alert.alert(
            'Action required',
            `Would you like to delete ${subreddit} subreddit?`,
            [{
                text: 'Yes',
                onPress: () => onDeleteSubreddit(subreddit),
            }, {
                text: 'Cancel',
                style: 'cancel',
            }],
        );
    };

    const onAddSubredditPressed = (subreddit: string) => {
        onAddSubreddit(subreddit);
    };

    const listScrollToBottom = () =>
        listRef.current && listRef.current.scrollToEnd({animated: true});

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
                keyboardVerticalOffset={keyboardVerticalOffset}
            >
                <FlatList
                    ref={listRef}
                    onContentSizeChange={listScrollToBottom}
                    onLayout={listScrollToBottom}
                    data={subreddits}
                    keyExtractor={(item) => item.title }
                    renderItem={({ item }) =>
                        <Item
                            data={item.title}
                            title={item.title}
                            textSize={22}
                            onPressed={onItemPressed}
                            onLongPressed={onItemLongPressed}
                        />
                    }
                />

                <SubredditInput
                    onAddSubreddit={onAddSubredditPressed}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

Home.options = () => ({
    topBar: {
        visible: true,
        title: {
            text: 'Subreddits',
        },
        rightButtons: [{
            id: 'hi_button_id',
            text: 'Hi',
        }],
    },
});

export default Home;
