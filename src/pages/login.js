import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { inject, observer } from "mobx-react/native";
import styles from "../themes";

@inject("settingsStore")
@observer
export default class Login extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  };

  render() {
    const { contentStyle } = styles.get(["content"]);
    return (
      <View style={[contentStyle.container, contentStyle.center]}>
        <Text style={{ color: "#fff", marginBottom: 20, fontSize: 24 }}>
          登录相关
        </Text>
        <Text style={{ color: "#fff" }}>处理登录注册等相关页面</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("home");
          }}
        >
          <Text style={{ marginTop: 20, color: "red", fontSize: 16 }}>
            登录
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
