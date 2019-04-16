import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { inject, observer } from "mobx-react/native";
import { Button } from "react-native-elements";

import resIcon from "../res";
import styles from "../themes";

@inject("exchangeUserStore", "exchangeUserAction")
@observer
export default class Home extends Component {
  renderItem = (item, index) => {
    const { homeStyle } = styles.get(["home"]);
    return (
      <View style={[homeStyle.listItemView]} key={index}>
        <Text style={[homeStyle.listItemText]}>{item.title}</Text>
        <Text style={[homeStyle.listItemText, { color: "#484848" }]}>
          {item.message}
        </Text>
      </View>
    );
  };

  onConfirm = () => {};

  onEnterBuy = () => {
    this.props.navigation.navigate("buy");
  };

  onEnterSell = () => {
    this.props.navigation.navigate("sell");
  };

  render() {
    const { homeStyle, globalStyle } = styles.get(["home", "global"]);
    const listData = [
      {
        title: "付款方",
        message: "小小"
      },
      {
        title: "付款方式",
        message: "微信"
      },
      {
        title: "付款时间",
        message: "2019/01/02"
      }
    ];
    return (
      <View style={[homeStyle.container]}>
        <View style={[homeStyle.homeHeaderBox]} />
        <View style={[homeStyle.payBox]}>
          <View style={[homeStyle.payBoxTop]}>
            <Image resizeMode="cover" source={resIcon.yanjing} />
            <Text style={[homeStyle.balanceText]}>余额</Text>
            <Image resizeMode="cover" source={resIcon.money} />
          </View>
          <View style={[homeStyle.moneyView]}>
            <Text style={[homeStyle.moneyText]}>3,000 wst</Text>
          </View>
          <View style={[homeStyle.payBoxCenter]}>
            <Text style={[homeStyle.income]}>累计收益: </Text>
            <Text style={[homeStyle.incomeNumber, { color: "#484848" }]}>
              213.40 wst
            </Text>
            <Text style={[homeStyle.checkText]}> [查看]</Text>
          </View>
          <View style={[homeStyle.payBoxBottom]}>
            <TouchableOpacity
              onPress={this.onEnterBuy}
              style={[homeStyle.payBottomView]}
            >
              <View style={[homeStyle.payBottomView]}>
                <Image resizeMode="cover" source={resIcon.mairu} />
                <Text style={[homeStyle.payText]}>买入</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text>1</Text>
            </View>
            <TouchableOpacity
              onPress={this.onEnterSell}
              style={[homeStyle.payBottomView]}
            >
              <View style={[homeStyle.payBottomView]}>
                <Image resizeMode="cover" source={resIcon.maichu} />
                <Text style={[homeStyle.payText]}>卖出</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[homeStyle.pendingView]}>
          <Text style={[homeStyle.income]}>待处理订单 (6)</Text>
        </View>

        <View style={[homeStyle.pendingOrderBox]}>
          <View style={[homeStyle.orderNumberView]}>
            <View style={[homeStyle.orderNumberLeft]}>
              <Text style={[homeStyle.orderNumber]}>订单核对码: </Text>
              <Text style={[homeStyle.orderNumber, { color: "#ED9C16" }]}>
                3292
              </Text>
            </View>
            <Text style={[homeStyle.income, { color: "#ED9C16" }]}>待确认</Text>
          </View>
          <Text style={[homeStyle.balanceText]}>收款金额</Text>
          <Text style={[homeStyle.moneyText, { marginTop: 5 }]}>￥ 700.00</Text>
          <View style={[homeStyle.expectView]}>
            <Text style={[homeStyle.orderNumber]}>预计收益</Text>
            <Text style={[homeStyle.orderNumber, { color: "#484848" }]}>
              ￥1.40
            </Text>
          </View>
          {listData.map((item, index) => this.renderItem(item, index))}
          <View style={[homeStyle.confirmView]}>
            <Image resizeMode="cover" source={resIcon.group} />
            <Text
              style={[
                homeStyle.orderNumber,
                { color: "#484848", marginLeft: 8 }
              ]}
            >
              确认收款后会扣减700.00 wst
            </Text>
          </View>
          <View style={[globalStyle.btnContainer]}>
            <Button
              title="确认收款"
              onPress={this.onConfirm}
              buttonStyle={[globalStyle.btn, { backgroundColor: "#FFB200" }]}
              titleStyle={globalStyle.btnText}
            />
          </View>
        </View>
      </View>
    );
  }
}
