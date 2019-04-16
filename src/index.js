import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Pages from "./pages";
import Tabbar from "./tabbar";

const Launch = createStackNavigator(
  {
    launch: {
      screen: Pages.launch
    }
  },
  {
    initialRouteName: "launch",
    headerMode: "none",
    navigationOptions: {},
    mode: "card"
  }
);

const Main = createStackNavigator(
  {
    home: {
      screen: Tabbar
    },
    quotesSearch: {
      screen: Pages.quotesSearch
    },
    buy: {
      screen: Pages.buy
    },
    sell: {
      screen: Pages.sell
    }
  },
  {
    initialRouteName: "home",
    headerMode: "none",
    navigationOptions: {},
    mode: "card"
  }
);

const Login = createStackNavigator({
  login: {
    screen: Pages.login
  }
});

export default createSwitchNavigator({
  //Launch,
  Main
  //Auth: Login,
});
