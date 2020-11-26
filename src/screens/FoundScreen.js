import * as React from 'react';
import {View,Text,Button,TextInput,Image} from 'react-native';

export default class FoundScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            content: 'no content'
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.content}</Text>
                <Button title={"boBack"} onPress={()=> this.props.navigation.popToTop()}/>
            </View>
        );
    }
}
