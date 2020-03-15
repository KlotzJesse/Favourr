import {Navigation} from 'react-native-navigation';
import Home from './src/containers/Home';
import App from './src/containers/App';
import Map from './src/containers/Map';

Navigation.registerComponent(`Home`, () => Home);

Navigation.registerComponent(`App`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomNav',
        children: [
          {
            component: {
              name: 'Home',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                },
              },
            },
          },
          {
            component: {
              name: 'App',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'App',
                },
              },
            },
          },
        ],
      },
    },
  });
});
