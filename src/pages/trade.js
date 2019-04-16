import React, { Component } from "react";
import { Text, View } from "react-native";
// import { Header } from 'react-native-elements';
import { inject, observer } from "mobx-react/native";
// import I18n from '../i18n';
import styles from "../themes";

@inject("settingsStore", "userStore", "settingsAction", "userAction")
@observer
export default class Trade extends Component {
  render() {
    const { contentStyle } = styles.get(["content", "header"]);
    return (
      <View>
        <View style={[contentStyle.conter]}>
          <View style={[]}>
            <Text> 交易 </Text>
          </View>
        </View>
      </View>
    );
  }
}
