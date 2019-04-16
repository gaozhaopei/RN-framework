import { headerHeight } from "../../common";

export function getQuotesSearchStyle(theme) {
  return {
    page: {
      flex: 1,
      backgroundColor: theme.mediumListBgColor,
      flexDirection: "column",
      justifyContent: "flex-start"
    },
    header: {
      paddingTop: headerHeight - 44,
      paddingVertical: 0,
      flexDirection: "row"
    },
    backgroundColor: {
      backgroundColor: theme.mediumListBgColor
    },
    inputBackground: {
      backgroundColor: theme.primaryListBgColor,
      borderRadius: 4,
      fontSize: theme.fontSizeM
    },
    headerInput: {
      flex: 9
    },
    headerClear: {
      flex: 1
    },
    historyBox: {
      paddingLeft: 10,
      marginTop: 10
    },
    historyListBox: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginTop: 5
    },
    historyList: {
      height: 40,
      lineHeight: 40,
      textAlign: "center",
      color: theme.pfFontColor,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: theme.fontSizeS,
      borderRadius: 4,
      backgroundColor: theme.primaryListBgColor,
      marginRight: 5
    },
    searchlistBox: {
      marginTop: 20,
      flex: 1
    },
    searchlist: {
      backgroundColor: theme.primaryListBgColor,
      borderBottomWidth: 1,
      borderBottomColor: theme.mediumListBgColor,
      height: 44,
      lineHeight: 44,
      justifyContent: "center",
      paddingLeft: 10,
      paddingRight: 10
    },
    searchlistText: {
      color: theme.pdFontColor,
      fontSize: theme.fontSizeM
    }
  };
}
