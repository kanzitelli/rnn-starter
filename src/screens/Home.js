import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { LAND } from '../constants/ScreensNames';

class Home extends React.PureComponent {
    static options() {
        return {
            topBar: {
                title: {
                    text: "Home",
                },
                // largeTitle: {
                //     visible: true,
                // },
            }
        }
    }

    _landComponent = {
        component: {
            name: LAND,
        },
    };

    render() {
        return (
            <View style={{ flex: 1, alignContent: "center", justifyContent: "center", backgroundColor: "white" }}>
                <Text style={{ fontSize: 26, textAlign: "center" }}>Home Screen</Text>
                <Button
                    title={"push"}
                    onPress={() => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: LAND,
                            },
                        });
                    }}
                />
            </View>
        );
    }
}

export default Home;