import {AppRegistry} from 'react-native';
import Kernel from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Kernel);
