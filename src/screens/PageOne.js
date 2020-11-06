import * as React from 'react';
import {View,Text,Button,TextInput,Image} from 'react-native';

export default class PageOne extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            content: 'no content'
        }
        this.setState((state,props) => ({
            content: 'preContent:' + state.content + 'now:' + this.route.content
        }))
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
