import {createStackNavigator} from 'react-native-navigation';
import Home from '../containers/Home';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
});

export default AppNavigator;
