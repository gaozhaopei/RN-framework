import React, { Component } from "react";
import { inject, observer } from "mobx-react/native";
import { View, StyleSheet, Modal, ActivityIndicator, Text } from "react-native";
import { deviceHeight, deviceWidth } from "../common";
import I18n from "../i18n";

const styles = StyleSheet.create({
  commentBackContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: 64,
    marginTop: deviceHeight / 2 - 32,
    marginLeft: deviceWidth / 2 - 32
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loadingContainerItem: {
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 80,
    height: 80,
    alignItems: "center"
  },
  activityIndicatorStyle: {
    width: 40,
    height: 40
  },
  loadingText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center"
  }
});

@inject("resumeStore")
@observer
export default class loadingModal extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        presentationStyle="overFullScreen"
        transparent
        visible={this.props.isOpen}
      >
        <View style={styles.commentBackContent}>
          <View style={styles.loadingContainer}>
            <View style={styles.loadingContainerItem}>
              <ActivityIndicator
                animating
                color="#fff"
                style={[
                  styles.activityIndicatorStyle,
                  {
                    marginTop: this.props.loadingTips ? 10 : 20
                  }
                ]}
                size="small"
              />
              {this.props.loadingTips ? (
                <Text style={styles.loadingText}>{I18n.t("loading_text")}</Text>
              ) : (
                <Text style={{ display: "none" }} />
              )}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
