export function getMeStyle(theme) {
  return {
    headerBox: {
      height: 87,
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.meListBorderColor
    },
    headerInfo: {
      flex: 8,
      flexDirection: "row",
      alignItems: "center",
      height: 87,
      paddingLeft: 10
    },
    headerInfoBox: {
      flex: 1,
      flexDirection: "row"
    },
    headerIcon: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 87
    },
    headerImgStyle: {
      width: 32,
      height: 32
    },
    headerImgRightStyle: {
      width: 10,
      height: 19
    },
    headerText: {
      fontSize: theme.fontSizeXL,
      color: theme.mediumFontColor,
      paddingLeft: 10
    },
    listBox: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: theme.primaryBgColor
    },
    listBoxInfo: {
      flex: 9,
      flexDirection: "row",
      alignItems: "center",
      height: 60
    },
    listBoxIcon: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 60
    },
    listBorderStyle: {
      borderBottomColor: theme.meListBorderColor,
      borderBottomWidth: 1
    },
    listBoxText: {
      fontSize: theme.fontSizeM,
      color: theme.mediumFontColor,
      paddingLeft: 10
    },
    listIcon: {
      marginRight: 5
    },
    listBg: {
      backgroundColor: theme.primaryBgColor
    },
    waringText: {
      fontSize: theme.fontSizeS,
      color: theme.labelFontColor
    }
  };
}
