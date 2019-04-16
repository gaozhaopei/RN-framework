import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import icon from "../../res";
import themesStyles from "../../themes";

const styles = StyleSheet.create({
  noDataBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20%"
  },
  noDataContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30
  }
});

export default class coinNoData extends Component {
  render() {
    const { iconUrl, fontSize, fontColor, fontValue } = this.props;
    const { themeStyle } = themesStyles.get(["theme"]);
    return (
      <View>
        <View style={styles.noDataBox}>
          <View style={styles.noDataContent}>
            <Image source={iconUrl || icon.iconNoData} />
            <Text
              style={{
                fontSize: fontSize || themeStyle.fontSizeM,
                color: fontColor || themeStyle.mediumFontColor
              }}
            >
              {fontValue || "暂无数据"}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
