import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

class Land extends React.PureComponent {
    static options() {
        return {
            modalPresentationStyle: 'pageSheet',
            topBar: {
                visible: true,
                title: {
                    text: "Land",
                },
                // largeTitle: {
                //     visible: true,
                // },
            },
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "red"}}>
                <View style={{ width: 300, backgroundColor: "cyan", alignItems: "center" }}>
                    <Text style={{ fontSize: 26, textAlign: "center" }}>Land Screen</Text>
                    <Text>{this.props.selectedSubreddit}</Text>
                    <Button
                        title={"go back"}
                        onPress={() => {
                            Navigation.pop(this.props.componentId);
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default Land;