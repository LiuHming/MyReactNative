import * as React from 'react'
import {View,Text,Image,StyleSheet,TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types'

export default class SongItem extends React.Component{

    // static propTypes = {
    //
    // }

    constructor(props) {
        super(props);
        this.state = {
            songId:'',
            songName:'',
            artists: '',
        }
    }

    componentDidMount() {
        const data = this.props.itemData;
        this.setState({songId:data.id,songName:data.name,artists:data.artists})
    }

    _getAllSinger(a){
        if(a === undefined || a.length <= 0) return '未知歌手';
        let names = '';
        a.forEach(function (i,index) {
            names += i.name;
        })
        return names;
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.state.songName}</Text>
                    <Text>{this._getAllSinger(this.state.artists)}</Text>
                </View>
                <Image/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:8,
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'#454545'
    },
    contentContainer:{

    },
    songName: {

    },
    content: {

    }
})
