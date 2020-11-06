/**
 * route.js
 */

// 引入依赖
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

//引入页面组件
import ScreenHome from '../screens/ScreenHome';

// 配置路由
const MainRoute = createStackNavigator({
  ScreenHome: {name: ScreenHome,
  component:ScreenHome},
  /*或者
  Home: {
    screen: HomeScreen
  }
  */
});
export default MainRoute;
