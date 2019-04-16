import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../../themes";

export default class coinListItem extends Component {
  render() {
    const { listItem } = this.props;
    const { coinListItemStyle, themeStyle } = styles.get([
      "coinListItem",
      "theme"
    ]);

    return (
      <View style={coinListItemStyle.ListBox}>
        <View style={coinListItemStyle.ListBoxLeft}>
          <Text style={{ textAlign: "left", paddingLeft: 20 }}>
            <Text
              style={{
                color: themeStyle.mediumFontColor,
                fontSize: themeStyle.fontSizeXXL
              }}
            >
              {listItem.name}
            </Text>
            <Text
              style={{
                color: themeStyle.minorFontColor,
                fontSize: themeStyle.fontSizeS
              }}
            >
              /{listItem.name1}
              {"\n"}
            </Text>
            <Text style={{ fontSize: 10, color: themeStyle.labelFontColor }}>
              {listItem.title}
            </Text>
          </Text>
        </View>
        <View style={coinListItemStyle.ListBoxRight}>
          <View style={coinListItemStyle.RightBox}>
            <View style={coinListItemStyle.RightBoxInfo}>
              <Text style={{ textAlign: "left" }}>
                <Text
                  style={{
                    fontSize: themeStyle.fontSizeM,
                    color: themeStyle.minorFontColor
                  }}
                >
                  {listItem.BT_Price}
                  {"\n"}
                </Text>
                <Text
                  style={{
                    fontSize: themeStyle.fontSizeXS,
                    color: themeStyle.labelFontColor
                  }}
                >
                  {listItem.US_Price}
                </Text>
              </Text>
            </View>
            <View style={coinListItemStyle.RightBoxButton}>
              <Text
                style={
                  listItem.gain === 1
                    ? coinListItemStyle.RightBoxButtonUp
                    : coinListItemStyle.RightBoxButtonDown
                }
              >
                {listItem.gain && listItem.gain === 1 ? "+" : "-"}
                {listItem.gainIncrease}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
