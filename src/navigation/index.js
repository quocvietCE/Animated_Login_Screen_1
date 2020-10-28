import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import SwiperScreen from '../screen/SwiperScreen';

const StackNavigator = createStackNavigator(
  {
    SwiperScreen: {
      screen: SwiperScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'LoginScreen',
  },
);

export default createAppContainer(StackNavigator);
