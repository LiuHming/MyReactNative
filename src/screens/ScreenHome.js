/**
 * ScreenHome/ScreenHome.js
 */
import React, {Component} from 'react';
import {View, Text,FlatList,SectionList,StyleSheet} from 'react-native';
import MyBtn from '../components/MyBtn';
import SongItem from '../components/SongItem';
import ADSwiper from '../components/ADSwiper';

export default class ScreenHome extends Component {

  constructor(props) {
    super(props);
      this.state = {
          data:[],
          text: ''
      }
  }
  componentDidMount() {
      fetch('http://musicapi.leanapp.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
          .then(response => response.json())
          .then(json => {
              console.log(json.code)
              this.setState({data: json.result.songs})
              }
          )
          .catch((error) => {
              console.error(error);
          });

  }

  _myBtnPress = ()=>{
      this.props.navigation.navigate('PageOne',{ content: 'test'});
  }

  render() {
    return (
      <View style={styles.container}>
          {/*<FlatList*/}
          {/*    data={this.state.data}*/}
          {/*    renderItem={({item}) => <SongItem itemData={item} style={styles.item}/>}*/}
          {/*/>*/}
          <MyBtn style={{marginTop:8}} text={'测试用例'} onPress={this._myBtnPress} size={40}/>
      </View>
    );
  }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 15
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
