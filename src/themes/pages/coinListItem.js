export function getCoinListItemStyle(theme) {
  return {
    ListBox: {
      flex: 1,
      height: 68,
      borderBottomWidth: 1,
      borderBottomColor: "#17224E",
      flexDirection: "row",
      borderStyle: "solid",
      justifyContent: "center",
      alignItems: "center"
    },
    ListBoxLeft: {
      flex: 5,
      justifyContent: "center"
    },
    ListBoxLeftText: {},
    ListBoxRight: {
      flex: 5,
      justifyContent: "center"
    },
    RightBox: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    RightBoxInfo: {
      flex: 5,
      justifyContent: "center"
    },
    RightBoxButton: {
      flex: 5,
      justifyContent: "center"
    },
    RightBoxButtonUp: {
      width: "80%",
      fontSize: theme.fontSizeM,
      color: theme.mediumFontColor,
      textAlign: "center",
      backgroundColor: theme.gainUpBgColor,
      borderRadius: 6,
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 1,
      paddingRight: 1
    },
    RightBoxButtonDown: {
      width: "80%",
      fontSize: theme.fontSizeM,
      color: theme.mediumFontColor,
      textAlign: "center",
      backgroundColor: theme.gainDownBgColor,
      borderRadius: 6,
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 1,
      paddingRight: 1
    }
  };
}
