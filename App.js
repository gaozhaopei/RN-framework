import React, { Component } from 'react';
import { BackHandler, NetInfo, Alert, AppState, Text } from 'react-native';
import { Provider } from 'mobx-react/native';
// import { Sentry } from 'react-native-sentry';
import Reactotron from 'reactotron-react-native';
import NavigationService from './src/navigationService';
import App from './src';
import stores from './src/store';
import initApp from './src/initApp';

// 正式环境才需要启用 sentry 错误跟踪
// if (!__DEV__) {
//   Sentry.config(
//     'https://1fef076cc86f429c9e3def3cdbd6a4c6:750bb4192dac4dcc800fb2b66dccb5bc@sentry.io/1365509'
//   ).install();
// }

if (__DEV__) {
  // 调试
  Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
}

export default class BlockchainPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
    // 初始化
    initApp();
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  onBackButtonPressAndroid = () => true;
  _handleAppStateChange = nextAppState => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  };
  handleConnectivityChange = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (!isConnected) {
        Alert.alert('提示', '网络已断开，请连接网络重试');
      }
    });
  };
  render() {
    return (
      <Provider {...stores}>
        <App
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
