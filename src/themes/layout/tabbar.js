/**
 * header部分的样式
 */

export function getTabbarStyle(theme) {
  return {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    tabBar: {
      backgroundColor: theme.primaryBgColor
    },
    icon: {
      width: 24,
      height: 24
    },
    text: {
      fontSize: 12
    },
    selectedTitle: {
      color: theme.mediumBgColor
    }
  };
}
