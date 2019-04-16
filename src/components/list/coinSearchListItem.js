import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../themes";

export default class coinSearchListItem extends Component {
  render() {
    const { listItem } = this.props;
    const { quotesSearchStyle } = styles.get(["quotesSearch"]);

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress(listItem);
        }}
      >
        <View style={[quotesSearchStyle.searchlist]}>
          <Text style={[quotesSearchStyle.searchlistText]}>
            {listItem.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
