import React, { Component } from "react";
import { Text, FlatList, View, TouchableOpacity, Alert } from "react-native";
import icon from "../res";
import CoinListItem from "../components/list/coinListItem";
import CoinNoData from "../components/empty/coinNoData";
import styles from "../themes";

export default class quotesViewPage extends Component {
  render() {
    const { themeStyle } = styles.get(["quotesSearch", "theme"]);
    const { objItem } = this.props;
    return (
      <View>
        <FlatList
          data={objItem.list}
          renderItem={({ item }) => (
            <View>
              <CoinListItem listItem={item} />
            </View>
          )}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={() => (
            <View>
              <CoinNoData
                iconUrl={icon.iconNoData}
                fontSize={themeStyle.fontSizeM}
                fontColor={themeStyle.mediumFontColor}
                fontValue={
                  objItem.id !== -1 ? "暂无数据" : "您还没有任何感兴趣的货币"
                }
              />
            </View>
          )}
        />
        {objItem.list.length === 0 && objItem.id === -1 && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Text
                style={{
                  width: 150,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: themeStyle.labelFontColor,
                  paddingTop: 15,
                  color: themeStyle.mediumFontColor,
                  paddingBottom: 15,
                  textAlign: "center",
                  marginTop: 50,
                  fontSize: themeStyle.fontSizeL
                }}
              >
                +添加自选
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
