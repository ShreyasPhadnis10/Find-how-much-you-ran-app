import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TrackCreateScreen from "./src/TrackCreateScreen";
import TrackDetailScreen from "./src/TrackDetailScreen";
import AccountScreen from "./src/AccountScreen";
import SignUpScreen from "./src/SignUpScreen";
import SignInScreen from "./src/SignInScreen";

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  }),

  mainFlow: createBottomTabNavigator({
    TrackCreate: TrackCreateScreen,
    TrackDetail: TrackDetailScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(navigator);
