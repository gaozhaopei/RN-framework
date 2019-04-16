export function getContentStyle(theme) {
  return {
    container: {
      flex: 1,
      paddingVertical: 0,
      backgroundColor: theme.primaryBgColor
    },
    center: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  };
}
