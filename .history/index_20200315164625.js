import {Navigation} from 'react-native-navigation';
import Home from './src/containers/Home';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => Home);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                },
              },
            },
          },
        ],
      },
    },
  });
});
