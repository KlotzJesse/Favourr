import {createStackNavigator} from 'react-native-navigation';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
});

export default AppNavigator;
