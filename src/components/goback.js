import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../themes";

export default class Component extends React.Component {
  goBack = () => {
    if (this.props.callback) {
      this.props.callback();
    }
    this.props.navigation.goBack();
  };

  render() {
    const { headerStyle } = styles.get(["header"]);
    return (
      <TouchableOpacity onPress={this.goBack}>
        <Icon
          name="arrow-left"
          size={15}
          type="simple-line-icon"
          color={this.props.iconColor ? this.props.iconColor : "#fff"}
          iconStyle={headerStyle.icon}
        />
      </TouchableOpacity>
    );
  }
}
