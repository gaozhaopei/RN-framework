import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import resIcon from "../../res";
import styles from "../../themes";

export default class SideMenuMe extends Component {
  renderHeader = () => {
    const { meStyle } = styles.get(["me"]);
    return (
      <View style={[meStyle.headerBox]}>
        <View style={[meStyle.headerInfoBox]}>
          <View style={[meStyle.headerInfo]}>
            <Image
              resizeMode="cover"
              style={[meStyle.headerImgStyle]}
              source={resIcon.iconJuxing}
            />
            <Text style={[meStyle.headerText]}>欢迎您，请先登录</Text>
          </View>
          <View style={[meStyle.headerIcon]}>
            <Image
              style={[meStyle.headerImgRightStyle]}
              source={resIcon.iconQianight}
            />
          </View>
        </View>
      </View>
    );
  };

  renderList = ({ item }) => {
    const { meStyle } = styles.get(["me", "theme"]);
    return (
      <View style={[meStyle.listBox]}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(item.title);
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={[meStyle.listBoxInfo]}>
              <Image resizeMode="cover" source={item.icon} />
              <Text style={[meStyle.listBoxText]}>{item.title}</Text>
            </View>
            <View style={[meStyle.listBoxIcon]}>
              <Image
                style={[meStyle.headerImgRightStyle]}
                source={resIcon.iconQianight}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { contentStyle, meStyle } = styles.get(["theme", "content", "me"]);

    const list = [
      {
        title: "邀请码",
        icon: resIcon.iconLipin
      },
      {
        title: "身份验证",
        icon: resIcon.iconShenfen
      },
      {
        title: "安全中心",
        icon: resIcon.iconYanzheng
      },
      {
        title: "设置",
        icon: resIcon.iconShezhi
      },
      {
        title: "支持",
        icon: resIcon.iconZhichizhongxin
      }
    ];

    return (
      <View style={[contentStyle.container]}>
        {this.renderHeader()}

        <View style={[meStyle.listBox]}>
          <FlatList
            data={list}
            renderItem={this.renderList}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={() => (
              <View style={{ paddingRight: 20 }}>
                <View style={[meStyle.listBorderStyle]} />
              </View>
            )}
            ListFooterComponent={() => (
              <View style={{ paddingRight: 20 }}>
                <View style={[meStyle.listBorderStyle]} />
              </View>
            )}
          />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Image source={resIcon.iconJinggao} style={{ marginRight: 5 }} />
            <Text style={[meStyle.waringText]}>
              不要将短信和谷歌验证码告知包括客服在内的任何人。
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
