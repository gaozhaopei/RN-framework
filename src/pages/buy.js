import React, { Component } from "react";
import { Text, View } from "react-native";
import { inject, observer } from "mobx-react/native";
import { Header } from "react-native-elements";
import Goback from "../components/goback";
import styles from "../themes";

@inject("exchangeUserStore", "exchangeUserAction")
@observer
export default class Buy extends Component {
  render() {
    const { headerStyle, themeStyle } = styles.get(["header", "theme"]);
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 0,
          backgroundColor: themeStyle.mediumBgColor
        }}
      >
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          backgroundColor={headerStyle.bgColor}
          containerStyle={headerStyle.wrapper}
          centerComponent={{
            text: "买入",
            style: headerStyle.center
          }}
          outerContainerStyles={{ borderBottomWidth: 0 }}
          leftComponent={<Goback navigation={this.props.navigation} />}
        />
        <View>
          <Text>资金</Text>
        </View>
      </View>
    );
  }
}
