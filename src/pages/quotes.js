import React, { Component } from "react";
import { View, Alert, Image, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import { inject, observer } from "mobx-react/native";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
import staticIcon from "../res";
import I18n from "../i18n";
import styles from "../themes";
import QuotesViewPage from "./quotesViewPage";

@inject("settingsStore", "userStore", "settingsAction", "userAction")
@observer
export default class Quotes extends Component {
  // static navigationOptions = {
  //   header: null,
  //   gesturesEnabled: false,
  // };

  componentDidMount() {
    // console.log('static', staticIcon);
  }

  onShowSearch = () => {
    Alert.alert(1);
  };

  renderSearchIcon = () => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate("quotesSearch")}
    >
      <Image source={staticIcon.iconSearch} />
    </TouchableOpacity>
    // <Image  source={require('../res/icon/icon_search_1.png')} />
  );

  render() {
    const { headerStyle, themeStyle } = styles.get(["header", "theme"]);
    const obj = [
      { titleName: "自选", id: -1, list: [] },
      {
        titleName: "SLC",
        id: 1,
        list: [
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "SLC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          }
        ]
      },
      {
        titleName: "BTC",
        id: 2,
        list: [
          {
            name: "BTC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "BTC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "BTC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "BTC",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          }
        ]
      },
      {
        titleName: "ETH",
        id: 3,
        list: [
          {
            name: "ETH",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "ETH",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "ETH",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "ETH",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          }
        ]
      },
      {
        titleName: "VSGD",
        id: 4,
        list: []
      },
      {
        titleName: "USTD",
        id: 5,
        list: [
          {
            name: "USTD",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "USTD",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          },
          {
            name: "USTD",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 2,
            gainIncrease: 21.19
          },
          {
            name: "USTD",
            name1: "SLC",
            title: "24H VOL 1241352",
            BT_Price: "0.00042123",
            US_Price: "$1.26",
            gain: 1,
            gainIncrease: 21.19
          }
        ]
      }
    ];
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 0,
          backgroundColor: themeStyle.minorBgColor
        }}
      >
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          backgroundColor={headerStyle.bgColor}
          containerStyle={headerStyle.wrapper}
          outerContainerStyles={{ borderBottomWidth: 0 }}
          centerComponent={{
            text: I18n.t("menu_nav_bottom_quotes"),
            style: headerStyle.center
          }}
          rightComponent={this.renderSearchIcon()}
          innerContainerStyles={{ justifyContent: "space-between" }}
        />
        <View
          style={{
            backgroundColor: themeStyle.primaryListBgColor,
            flex: 1,
            borderWidth: 0
          }}
        >
          <ScrollableTabView
            renderTabBar={() => (
              <ScrollableTabBar style={{ borderBottomWidth: 0 }} />
            )}
            style={{ width: "100%", flex: 1 }}
            tabBarBackgroundColor={themeStyle.minorListBgColor}
            tabBarInactiveTextColor={themeStyle.labelFontColor}
            tabBarActiveTextColor={themeStyle.mediumFontColor}
            initialPage={1}
            tabBarTextStyle={{
              borderColor: themeStyle.minorListBgColor,
              padding: 0,
              margin: 0
            }}
            tabBarUnderlineStyle={{
              backgroundColor: themeStyle.minorListBgColor,
              borderWidth: 0
            }}
          >
            {obj &&
              obj.length &&
              obj.map(item => (
                <QuotesViewPage tabLabel={item.titleName} objItem={item} />
              ))}
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
