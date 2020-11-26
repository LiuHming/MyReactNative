import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

export default class VideoScreen extends React.Component{
    render() {
        return (
            <View style={{height:400,backgroundColor: '#f55ee8'}}>
                <Swiper style={{height:200,backgroundColor:'#000'}} containerStyle={{height:200}} height={250} showsButtons loop={false}>
                    <View testID="Hello" style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View testID="Beautiful" style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View testID="Simple" style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        height: 200,
        backgroundColor: '#000000'
    },
    slide1: {
        height: 150,
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
}
