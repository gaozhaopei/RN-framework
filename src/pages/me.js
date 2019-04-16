import React, { Component } from "react";
import { Text, View } from "react-native";
import { inject, observer } from "mobx-react/native";

@inject("exchangeUserStore", "exchangeUserAction")
@observer
export default class Me extends Component {
  render() {
    return (
      <View>
        <Text>456</Text>
      </View>
    );
  }
}
