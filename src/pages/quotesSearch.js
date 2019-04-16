import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "../themes";
import CoinSearchListItem from "../components/list/coinSearchListItem";
import CoinNoData from "../components/empty/coinNoData";

export default class quotesSearch extends Component {
  onChangeText = () => {
    console.log("123");
  };

  render() {
    const { quotesSearchStyle, themeStyle } = styles.get([
      "quotesSearch",
      "theme"
    ]);
    const historySearchList = [
      "BBTC/USDTTC/USDT",
      "TC/USDTUSD",
      "BTC/USDT",
      "TC/USDTUSD",
      "BTC/USDT",
      "TC/USDTUSD",
      "BTC/USDT"
    ];
    return (
      <View style={[quotesSearchStyle.page]}>
        <View style={[quotesSearchStyle.header]}>
          <View style={[quotesSearchStyle.headerInput]}>
            <SearchBar
              lightTheme
              icon={{ type: "font-awesome", name: "search" }}
              containerStyle={[
                quotesSearchStyle.backgroundColor,
                { borderBottomWidth: 0, borderTopWidth: 0 }
              ]}
              inputStyle={[quotesSearchStyle.inputBackground]}
              onChangeText={this.onChangeText}
              placeholder="请输入货币"
              clearIcon={{ name: "close", color: themeStyle.mediumFontColor }}
            />
          </View>
          <View style={[quotesSearchStyle.headerClear]}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  lineHeight: 50,
                  color: themeStyle.labelFontColor,
                  fontSize: themeStyle.fontSizeM
                }}
              >
                取消
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[quotesSearchStyle.historyBox]}>
          <Text
            style={{
              color: themeStyle.pgFontColor,
              fontSize: themeStyle.fontSizeM
            }}
          >
            最近查看
          </Text>
          <View style={[quotesSearchStyle.historyListBox]}>
            <FlatList
              data={historySearchList}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert(`click ${item}`);
                  }}
                >
                  <Text style={[quotesSearchStyle.historyList]}>{item}</Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={[quotesSearchStyle.searchlistBox]}>
          <FlatList
            data={[
              { label: "IOTA/USDT0" },
              { label: "IOTA/USDT" },
              { label: "IOTA/USDT113" },
              { label: "IOTA/USDT112" },
              { label: "IOTA/USDT111" }
            ]}
            renderItem={({ item }) => (
              <CoinSearchListItem
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                listItem={item}
              />
            )}
            ListEmptyComponent={<CoinNoData fontValue="搜索暂无数据" />}
            // ListFooterComponent={()=><View style={{alignItems: 'center',height: 40,justifyContent: 'center',}}><Text style={{color:themeStyle.labelFontColor, fontSize: themeStyle.fontSizeM}}>我是有底线的~</Text></View>}
          />
        </View>
      </View>
    );
  }
}
