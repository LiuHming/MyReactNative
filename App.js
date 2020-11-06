import * as React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/ScreenHome';
import PageOne from './src/screens/PageOne';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

class App extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="Home" screenOptions={defaultOptions()}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="PageOne" component={PageOne} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

}

function defaultOptions (){
    return {
        headerStyle:styles.headerStyle,
        headerTintColor: '#000',
        headerTitleStyle: styles.headerTitleStyle,
    }
}
const styles = StyleSheet.create({
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
