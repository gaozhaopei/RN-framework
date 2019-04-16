import React, { Component } from "react";
import { Text, View } from "react-native";
import { inject, observer } from "mobx-react/native";
import { Header } from "react-native-elements";
import I18n from "../i18n";
import styles from "../themes";

@inject("exchangeUserStore", "exchangeUserAction")
@observer
export default class Sell extends Component {
  render() {
    const { contentStyle, headerStyle } = styles.get(["header", "content"]);
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 0,
          backgroundColor: "#fff"
        }}
      >
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          outerContainerStyles={headerStyle.wrapper}
          centerComponent={{
            text: I18n.t("menu_nav_bottom_funds"),
            style: headerStyle.center
          }}
          innerContainerStyles={{ justifyContent: "center" }}
        />
        <View style={[contentStyle.container, contentStyle.center]}>
          <Text>资金</Text>
        </View>
      </View>
    );
  }
}
