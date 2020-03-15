import {Navigation} from 'react-native-navigation';
import Home from './src/containers/Home';
import App from './src/containers/App';

Navigation.registerComponent(`abc.de`, () => Home);

Navigation.registerComponent(`app.de`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: [
              {
                name: 'abc.de',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Sign In',
                  },
                },
              },
              {
                name: 'app.de',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'App',
                  },
                },
              },
            ],
          },
        ],
      },
    },
  });
});
