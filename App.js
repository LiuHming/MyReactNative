import * as React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/ScreenHome';

import { enableScreens } from 'react-native-screens';
import MineScreen from './src/screens/MineScreen';
import FoundScreen from './src/screens/FoundScreen';
import CloudScreen from './src/screens/CloudScreen';
import VideoScreen from './src/screens/VideoScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
enableScreens();

const Stack = createStackNavigator();

class App extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
      const Tab = createMaterialTopTabNavigator()
      return (
          <NavigationContainer>
              <Tab.Navigator initialRouteName="Mine" backBehavior="initialRoute" style={styles.tabBarContainer} tabBarOptions={defaultTabBarOptions()}
                            >
                  <Tab.Screen name="Mine" component={MineScreen} />
                  <Tab.Screen name="Found" component={FoundScreen} />
                  <Tab.Screen name="Cloud" component={CloudScreen} />
                  <Tab.Screen name="Video" component={VideoScreen} />
              </Tab.Navigator>
          </NavigationContainer>
      );
  }

}

function defaultTabBarOptions (){
    return {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#B0BEC5',
        indicatorStyle: {
            backgroundColor: '#FFFFFF'
        },
        style: {
            backgroundColor: '#262b37'
        }
    }
}
const styles = StyleSheet.create({
    tabBarContainer: {
        flex: 1,
        height: 25,
    },
    headerStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#262b37',
    },
    headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        color: '#fff',
    }

})

export default App;
