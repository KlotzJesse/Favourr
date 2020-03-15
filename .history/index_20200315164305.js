import {Navigation} from 'react-native-navigation';
import Home from './src/containers/Home';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
