import React, { Component } from "react";
import { Image } from "react-native";
import { inject, observer } from "mobx-react/native";
import TabNavigator from "react-native-tab-navigator";
import I18n from "./i18n";
import res from "./res";
import styles from "./themes";
import Home from "./pages/home";
import Me from "./pages/me";

@inject("settingsStore")
@observer
export default class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Home"
    };
  }

  /**
   * 主题切换或者语言切换的时候，强制更新tabbar
   */
  changeSettings = () => {
    this.forceUpdate();
  };

  render() {
    const { tabbarStyle } = styles.get(["tabbar"]);
    const { selectedTab } = this.state;
    const { navigation } = this.props;
    return (
      <TabNavigator
        style={[tabbarStyle.container]}
        tabBarStyle={tabbarStyle.tabBar}
      >
        <TabNavigator.Item
          selected={selectedTab === "Home"}
          title={I18n.t("menu_nav_bottom_home")}
          selectedTitleStyle={tabbarStyle.selectedTitle}
          renderIcon={() => (
            <Image source={res.btWorkNormal} style={tabbarStyle.icon} />
          )}
          renderSelectedIcon={() => (
            <Image source={res.btWorkActive} style={tabbarStyle.icon} />
          )}
          onPress={() => this.setState({ selectedTab: "Home" })}
        >
          <Home navigation={navigation} changeSettings={this.changeSettings} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === "Me"}
          title={I18n.t("menu_nav_bottom_me")}
          selectedTitleStyle={tabbarStyle.selectedTitle}
          renderIcon={() => (
            <Image source={res.btChatNormal} style={tabbarStyle.icon} />
          )}
          renderSelectedIcon={() => (
            <Image source={res.btChatActive} style={tabbarStyle.icon} />
          )}
          onPress={() => this.setState({ selectedTab: "Me" })}
        >
          <Me navigation={navigation} changeSettings={this.changeSettings} />
        </TabNavigator.Item>
        {/* <TabNavigator.Item
          selected={selectedTab === 'Trade'}
          title={I18n.t('menu_nav_bottom_trade')}
          selectedTitleStyle={tabbarStyle.selectedTitle}
          renderIcon={() => <Image source={res.btForumNormal} style={tabbarStyle.icon} />}
          renderSelectedIcon={() => <Image source={res.btForumActive} style={tabbarStyle.icon} />}
          onPress={() => this.setState({ selectedTab: 'Trade' })}
        >
          <Trade navigation={navigation} changeSettings={this.changeSettings} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'Funds'}
          title={I18n.t('menu_nav_bottom_funds')}
          selectedTitleStyle={tabbarStyle.selectedTitle}
          renderIcon={() => <Image source={res.btResumeNormal} style={tabbarStyle.icon} />}
          renderSelectedIcon={() => <Image source={res.btResumeActive} style={tabbarStyle.icon} />}
          onPress={() => this.setState({ selectedTab: 'Funds' })}
        >
          <Funds navigation={navigation} changeSettings={this.changeSettings} />
        </TabNavigator.Item> */}
      </TabNavigator>
    );
  }
}
