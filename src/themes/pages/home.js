export function getHomeStyle(theme) {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.mediumBgColor
    },
    homeHeaderBox: {
      height: 130,
      backgroundColor: "orange",
      zIndex: 10
    },
    payBox: {
      height: 168,
      marginHorizontal: 15,
      backgroundColor: theme.minorBgColor
    },
    payBoxTop: {
      height: 31,
      marginTop: 2,
      paddingHorizontal: 12,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    balanceText: {
      fontSize: theme.fontSizeS,
      color: theme.pgFontColor,
      alignSelf: "center"
    },
    moneyView: {
      height: 28,
      justifyContent: "center",
      alignItems: "center"
    },
    moneyText: {
      fontSize: theme.fontSizeXXL,
      color: "#484848",
      alignSelf: "center"
    },
    payBoxCenter: {
      height: 44,
      marginBottom: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    income: {
      fontSize: theme.fontSizeM,
      color: theme.pgFontColor
    },
    checkText: {
      fontSize: theme.fontSizeS,
      color: "#ED9C16"
    },
    payBoxBottom: {
      height: 52,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: "#eeeeee"
    },
    payBottomView: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    payText: {
      fontSize: theme.fontSizeM,
      color: "#484848",
      marginLeft: 15
    },
    pendingView: {
      height: 49,
      paddingHorizontal: 15,
      paddingTop: 20
    },
    pendingOrderBox: {
      marginHorizontal: 15,
      paddingHorizontal: 10,
      backgroundColor: theme.minorBgColor
    },
    orderNumberView: {
      height: 32,
      marginTop: 4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    orderNumberLeft: {
      height: 32,
      flexDirection: "row",
      alignItems: "center"
    },
    orderNumber: {
      fontSize: theme.fontSizeS,
      color: theme.pgFontColor
    },
    expectView: {
      flexDirection: "row",
      marginTop: 6,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    listItemView: {
      height: 35,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    listItemText: {
      fontSize: theme.fontSizeM,
      color: "#B5B5B5"
    },
    confirmView: {
      height: 32,
      flexDirection: "row",
      alignItems: "center"
    }
  };
}
