/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootApp from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => RootApp);
