import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { inject, observer } from "mobx-react/native";
import styles from "../themes";

@inject("settingsStore", "settingsAction")
@observer
export default class Launch extends Component {
  onSwitchTheme = name => {
    this.props.settingsAction.switchTheme(name);
  };

  render() {
    const contentStyle = styles.get("content");
    return (
      <View style={[contentStyle.container, contentStyle.center]}>
        <Text style={{ color: "#fff", marginBottom: 20, fontSize: 24 }}>
          启动页面
        </Text>
        <Text style={{ color: "#fff" }}>
          处理倒计时操作、引导轮播图、添加启动图等等
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Auth");
          }}
        >
          <Text style={{ marginTop: 20, color: "red", fontSize: 16 }}>
            点击跳过
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onSwitchTheme("daytime")}>
          <Text style={{ marginTop: 20, color: "red", fontSize: 16 }}>
            切换主题白天
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onSwitchTheme("night")}>
          <Text style={{ marginTop: 20, color: "red", fontSize: 16 }}>
            切换主题黑夜
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
